import React, { useState, useEffect } from 'react';
import { Star, User, PenTool, CheckCircle, Quote, Shield, Check, Trash2, EyeOff, Eye, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GENERAL_REVIEWS } from '../data';
import { Review } from '../types';
import { db, isFirebaseReady } from '../lib/firebase';
import { collection, doc, setDoc, getDocs, deleteDoc, updateDoc } from 'firebase/firestore';

interface ReviewsProps {
  theme: 'day' | 'night';
}

export default function Reviews({ theme }: ReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('route_story_reviews') : null;
    let customParsed: Review[] = [];
    if (saved) {
      try {
        customParsed = JSON.parse(saved) as Review[];
      } catch (e) {
        console.error('Error parsing saved reviews', e);
      }
    }
    return [...customParsed, ...GENERAL_REVIEWS];
  });

  const [hiddenReviewIds, setHiddenReviewIds] = useState<string[]>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('route_story_hidden_reviews') : null;
    if (saved) {
      try {
        return JSON.parse(saved) as string[];
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  const [isCuratorMode, setIsCuratorMode] = useState(false);
  const [curatorPassword, setCuratorPassword] = useState('');
  const [showCuratorLogin, setShowCuratorLogin] = useState(false);
  const [curatorLoginError, setCuratorLoginError] = useState('');

  const [formName, setFormName] = useState('');
  const [formText, setFormText] = useState('');
  const [formDestination, setFormDestination] = useState('');
  const [formImage, setFormImage] = useState('');
  const [formImagePreview, setFormImagePreview] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Fetch reviews from cloud database if configured
  useEffect(() => {
    const loadReviews = async () => {
      const saved = typeof window !== 'undefined' ? localStorage.getItem('route_story_reviews') : null;
      let localCustomList: Review[] = [];
      if (saved) {
        try {
          localCustomList = JSON.parse(saved) as Review[];
        } catch (e) {
          console.error(e);
        }
      }

      if (isFirebaseReady && db) {
        try {
          const revsCol = collection(db, 'reviews');
          const snap = await getDocs(revsCol);
          const firestoreRevs: Review[] = [];
          
          snap.forEach((doc) => {
            const data = doc.data();
            firestoreRevs.push({
              id: doc.id,
              name: data.name,
              rating: data.rating,
              text: data.text,
              destination: data.destination || '',
              date: data.date || '',
              image: data.image || '',
              hidden: data.hidden || false,
            } as Review);
          });

          // Unify unique records
          const firestoreIds = new Set(firestoreRevs.map(r => r.id));
          const unionCustom = [
            ...firestoreRevs,
            ...localCustomList.filter(l => !firestoreIds.has(l.id))
          ];

          setReviews([...unionCustom, ...GENERAL_REVIEWS]);

          // Sync hidden state lists if present in db
          const dbHidden = firestoreRevs.filter(r => r.hidden).map(r => r.id);
          if (dbHidden.length > 0) {
            setHiddenReviewIds(prev => Array.from(new Set([...prev, ...dbHidden])));
          }
        } catch (error) {
          console.error("Firestore loading error, using local fallback state", error);
          setReviews([...localCustomList, ...GENERAL_REVIEWS]);
        }
      } else {
        setReviews([...localCustomList, ...GENERAL_REVIEWS]);
      }
    };

    loadReviews();
  }, []);

  // Base64 file parser handler
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 1500000) {
        setSubmitError("Photo must be smaller than 1.5MB to save resource limits.");
        return;
      }
      setSubmitError('');
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFormImage(base64String);
        setFormImagePreview(base64String);
      };
      reader.onerror = () => {
        setSubmitError("Failed to convert image file.");
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit Feedback
  const handleAddReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formText) return;

    setIsSubmitting(true);
    setSubmitError('');
    setShowSuccess(false);

    try {
      const newReview: Review = {
        id: `custom-rev-${Date.now()}`,
        name: formName,
        rating: formRating,
        text: formText,
        destination: formDestination || 'Customised Trip',
        image: formImage || undefined,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      };

      // 1. Submit to Firestore if ready
      if (isFirebaseReady && db) {
        try {
          const revDoc = doc(db, 'reviews', newReview.id);
          await setDoc(revDoc, {
            name: newReview.name,
            rating: newReview.rating,
            text: newReview.text,
            destination: newReview.destination,
            image: newReview.image || '',
            date: newReview.date,
            hidden: false,
            createdAt: new Date().getTime(),
          });
        } catch (fsError) {
          console.error("Failed to write to Cloud Firestore:", fsError);
        }
      }

      // 2. Transmit email copy
      try {
        await fetch("https://formsubmit.co/ajax/journeyo2701@gmail.com", {
          method: "POST",
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: `New Route Story Traveler Review: ${formRating} Stars by ${formName}`,
            Form: "Traveler Review Submission",
            Author_Name: formName,
            Destination_Visited: formDestination || 'Not specified',
            Rating_Stars: `${formRating}.0 / 5.0`,
            Review_Narrative: formText
          })
        });
      } catch (emailErr) {
        console.warn("Direct mail forward completed with status code offline.");
      }

      // 3. Save to local storage cache
      setReviews(prev => [newReview, ...prev]);

      if (typeof window !== 'undefined') {
        try {
          const saved = localStorage.getItem('route_story_reviews');
          let customList: Review[] = [];
          if (saved) {
            customList = JSON.parse(saved);
          }
          customList = [newReview, ...customList];
          localStorage.setItem('route_story_reviews', JSON.stringify(customList));
        } catch (ex) {
          console.error('Failed to save to localStorage', ex);
        }
      }

      // Reset
      setFormName('');
      setFormText('');
      setFormRating(5);
      setFormDestination('');
      setFormImage('');
      setFormImagePreview('');
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5500);

    } catch (err) {
      console.error(err);
      setSubmitError("Failed to dispatch review.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Curator actions
  const handleCuratorLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (curatorPassword === 'route2026') {
      setIsCuratorMode(true);
      setShowCuratorLogin(false);
      setCuratorPassword('');
      setCuratorLoginError('');
    } else {
      setCuratorLoginError('Incorrect password identifier.');
    }
  };

  const handleToggleHideReview = async (revId: string) => {
    const isCurrentlyHidden = hiddenReviewIds.includes(revId);
    let updatedHiddenIds: string[];

    if (isCurrentlyHidden) {
      updatedHiddenIds = hiddenReviewIds.filter(id => id !== revId);
    } else {
      updatedHiddenIds = [...hiddenReviewIds, revId];
    }

    setHiddenReviewIds(updatedHiddenIds);
    localStorage.setItem('route_story_hidden_reviews', JSON.stringify(updatedHiddenIds));

    if (isFirebaseReady && db) {
      try {
        const revDoc = doc(db, 'reviews', revId);
        await updateDoc(revDoc, { hidden: !isCurrentlyHidden });
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleDeleteReview = async (revId: string) => {
    setReviews(prev => prev.filter(r => r.id !== revId));

    const saved = localStorage.getItem('route_story_reviews');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Review[];
        const filtered = parsed.filter(r => r.id !== revId);
        localStorage.setItem('route_story_reviews', JSON.stringify(filtered));
      } catch (ex) {
        console.error(ex);
      }
    }

    const updatedHiddenIds = hiddenReviewIds.filter(id => id !== revId);
    setHiddenReviewIds(updatedHiddenIds);
    localStorage.setItem('route_story_hidden_reviews', JSON.stringify(updatedHiddenIds));

    if (isFirebaseReady && db) {
      try {
        const revDoc = doc(db, 'reviews', revId);
        await deleteDoc(revDoc);
      } catch (e) {
        console.error(e);
      }
    }
  };

  // Theme settings
  const textTitleColor = theme === 'day' ? 'text-[#4A2E1F]' : 'text-[#F5E9DB]';
  const textSubColor = theme === 'day' ? 'text-[#6E5847]' : 'text-[#D7C2A5]';
  const cardBgClasses = theme === 'day'
    ? 'bg-[#FFFFFF] border-[#C6B08E]/45 hover:shadow-lg text-[#4A2E1F]'
    : 'bg-[#2A211B] border-[#4A3A2F]/50 hover:shadow-lg text-[#F5E9DB]';

  const inputStyle = theme === 'day'
    ? 'bg-[#E8DFCF]/30 border-[#C6B08E]/40 text-[#4A2E1F] focus:border-[#8B5E3C]'
    : 'bg-[#16110D]/60 border-[#4A3A2F]/50 text-[#F5E9DB] focus:border-[#C6B08E]';

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 relative w-full text-left">
      
      {/* Page Header */}
      <div className="max-w-2xl mb-12 sm:mb-16 flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <span className={`text-xs font-bold tracking-widest uppercase mb-2 block font-mono ${
            theme === 'day' ? 'text-[#8B5E3C]' : 'text-[#C6B08E]'
          }`}>
            Traveler stories
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${textTitleColor}`}>
            Traveler Journals
          </h2>
          <p className={`text-sm leading-relaxed ${textSubColor}`}>
            Direct, unchanged journals and notes recorded straight from the field. No automated filters—just genuine human reflections from the trails.
          </p>
        </div>

        {/* Quiet Curator Mode button to trigger moderation */}
        <div className="shrink-0 pt-2">
          {isCuratorMode ? (
            <button
              onClick={() => setIsCuratorMode(false)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[10px] font-bold uppercase tracking-wider bg-[#8B5E3C]/10 text-[#8B6B52] border-[#8B5E3C]/30 cursor-pointer"
            >
              <Shield className="w-3.5 h-3.5" />
              Exit Curator Mode
            </button>
          ) : (
            <button
              onClick={() => setShowCuratorLogin(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[10px] font-bold uppercase tracking-wider bg-transparent text-[#8B5E3C] dark:text-[#C6B08E] border-[#C6B08E]/30 hover:border-[#8B5E3C] cursor-pointer transition-colors"
            >
              <Shield className="w-3.5 h-3.5" />
              Curator Portal
            </button>
          )
          }
        </div>
      </div>

      {/* Curator Login overlay modal */}
      {showCuratorLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className={`p-6 rounded-2xl max-w-sm w-full border text-left ${
            theme === 'day' ? 'bg-white text-[#4A2E1F]' : 'bg-[#1F1713] text-[#F5E9DB]'
          }`}>
            <h3 className="font-serif text-lg font-bold mb-2">Curator Mode Login</h3>
            <p className="text-xs opacity-75 mb-4">Enter passcode credentials to unlock the review moderation desk.</p>
            
            <form onSubmit={handleCuratorLogin} className="space-y-4">
              <input
                type="password"
                required
                placeholder="Passcode (e.g. route2026)"
                value={curatorPassword}
                onChange={(e) => setCuratorPassword(e.target.value)}
                className={`w-full px-3 py-2 rounded-xl text-xs border outline-none ${inputStyle}`}
              />
              {curatorLoginError && <p className="text-[10px] text-rose-500 font-medium">{curatorLoginError}</p>}
              <div className="flex gap-2 justify-end pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowCuratorLogin(false);
                    setCuratorPassword('');
                    setCuratorLoginError('');
                  }}
                  className="px-4 py-2 border border-slate-300 rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#8B5E3C] hover:bg-[#A47148] text-white rounded-xl text-xs font-bold leading-none cursor-pointer"
                >
                  Enter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
        
        {/* LEFT COLUMN: Write a Review Form */}
        <div className="lg:col-span-5 order-2 lg:order-1 relative">
          <div className={`rounded-2xl border p-6 sm:p-8 backdrop-blur-sm shadow-xl relative ${cardBgClasses}`}>
            <h3 className={`text-lg sm:text-xl font-bold tracking-tight mb-6 flex items-center gap-2 ${textTitleColor}`}>
              <PenTool className={`w-4.5 h-4.5 ${theme === 'day' ? 'text-[#8B6B52]' : 'text-[#B98A5E]'}`} />
              Share Your Experience
            </h3>

            {/* Success notification */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 border text-xs rounded-xl mb-6 flex items-center gap-2 font-medium bg-emerald-500/10 border-emerald-500/35 text-emerald-500"
                >
                  <CheckCircle className="w-4 h-4 shrink-0 text-emerald-500" />
                  Your story has been permanently stored in Route Story Archives!
                </motion.div>
              )}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 border text-xs rounded-xl mb-6 flex items-center gap-2 font-medium bg-rose-500/10 border-rose-500/35 text-rose-500"
                >
                  <span className="shrink-0 text-rose-500 font-bold">⚠️</span>
                  {submitError}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleAddReview} className="space-y-4">
              {/* Creator Name */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider mb-1 opacity-75">
                  Your Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Malhotra"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs border outline-none transition-all ${inputStyle}`}
                  />
                </div>
              </div>

              {/* Visited Destination */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider mb-1 opacity-75">
                  Destination Visited
                </label>
                <input
                  type="text"
                  placeholder="e.g. Harsil Valley Retreat"
                  value={formDestination}
                  onChange={(e) => setFormDestination(e.target.value)}
                  className={`w-full px-4 py-2 rounded-xl text-xs border outline-none transition-all ${inputStyle}`}
                />
              </div>

              {/* Star controls */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider mb-2 opacity-75">
                  Rate your experience
                </label>
                <div className="flex gap-1.5 items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormRating(star)}
                      className="cursor-pointer transition-transform hover:scale-110 active:scale-95 text-xs text-left"
                    >
                      <Star
                        className={`w-6 h-6 transition-colors ${
                          star <= formRating
                            ? 'text-amber-400 fill-amber-400'
                            : theme === 'day'
                            ? 'text-[#C6B08E]/30'
                            : 'text-[#4A3A2F]/60'
                        }`}
                      />
                    </button>
                  ))}
                  <span className={`text-xs font-semibold ml-2 ${theme === 'day' ? 'text-[#4A2E1F]' : 'text-[#F5E9DB]/75'}`}>
                    {formRating}.0 / 5.0
                  </span>
                </div>
              </div>

              {/* Optional photo file upload upload with Base64 preview */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider mb-1.5 opacity-75 flex items-center gap-1">
                  <ImageIcon className="w-3.5 h-3.5 text-[#8B5E3C] dark:text-[#C6B08E]" />
                  Upload Photo (Optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className={`w-full text-xs p-2 rounded-xl border outline-none cursor-pointer text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded-xl file:border-0 file:text-[10px] file:font-semibold file:bg-[#8B5E3C]/10 file:text-[#8B5E3C] hover:file:bg-[#8B5E3C]/20 ${inputStyle}`}
                />
                
                {formImagePreview && (
                  <div className="relative mt-3 w-28 aspect-[4/3] rounded-xl overflow-hidden border border-[#C6B08E]/30 flex items-center justify-center bg-black/5">
                    <img src={formImagePreview} alt="Preview" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => {
                        setFormImage('');
                        setFormImagePreview('');
                      }}
                      className="absolute top-1 right-1 bg-black/60 hover:bg-black/80 text-white rounded-full p-1 text-[8px] leading-none cursor-pointer flex items-center justify-center w-5 h-5 font-bold"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>

              {/* Diary Text */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider mb-1 opacity-75">
                  Share your experience
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell a beautiful story..."
                  value={formText}
                  onChange={(e) => setFormText(e.target.value)}
                  className={`w-full p-4 rounded-xl text-xs border outline-none transition-all resize-none ${inputStyle}`}
                />
              </div>

              {/* Submit diary */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#8B5E3C] hover:bg-[#A47148] disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white font-bold text-xs uppercase tracking-widest shadow-lg cursor-pointer transition-all"
                >
                  {isSubmitting ? "Dispatching Story..." : "Submit your review"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Reviews List */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
          <AnimatePresence initial={false}>
            {reviews
              .filter(rev => {
                // If not in curator mode, filter out reviews whose id is inside hiddenReviewIds or marked as custom hidden
                if (isCuratorMode) return true;
                return !hiddenReviewIds.includes(rev.id) && !(rev as any).hidden;
              })
              .map((rev) => {
                const isReviewHidden = hiddenReviewIds.includes(rev.id) || (rev as any).hidden;
                return (
                  <motion.div
                    key={rev.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-sm relative shadow-md ${cardBgClasses} ${
                      isReviewHidden ? 'opacity-65 border-dashed border-rose-500/40' : ''
                    }`}
                  >
                    {/* Decorative absolute Quote mark */}
                    <Quote className={`absolute right-6 top-6 w-12 h-12 pointer-events-none ${
                      theme === 'day' ? 'text-[#8B6B52]/5' : 'text-[#F5E6D3]/5'
                    }`} />

                    {/* Curator Controls overlay if activated */}
                    {isCuratorMode && (
                      <div className="flex items-center gap-2 mb-4 p-2 rounded-lg bg-orange-500/10 border border-orange-500/25 text-orange-600 dark:text-orange-400 text-xs font-semibold justify-between">
                        <span className="flex items-center gap-1">
                          <Shield className="w-3.5 h-3.5 shrink-0" />
                          Curator Panel: {isReviewHidden ? 'Hidden' : 'Visible'}
                        </span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleToggleHideReview(rev.id)}
                            className="p-1 hover:bg-orange-500/15 rounded text-[10px] font-bold uppercase tracking-wider cursor-pointer flex items-center gap-1 border border-orange-500/30"
                          >
                            {isReviewHidden ? <Eye className="w-3.5 h-3.5 text-emerald-500" /> : <EyeOff className="w-3.5 h-3.5 text-rose-500" />}
                            {isReviewHidden ? 'Visible' : 'Hide'}
                          </button>
                          
                          {/* Allow delete too */}
                          <button
                            onClick={() => {
                              if (window.confirm("Permanently wipe this journal from local and cloud databases?")) {
                                handleDeleteReview(rev.id);
                              }
                            }}
                            className="p-1 hover:bg-rose-500/15 rounded text-[10px] text-rose-500 font-bold uppercase cursor-pointer flex items-center gap-1 border border-rose-500/30"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            Delete
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Single unified content compartment */}
                    <div className="flex flex-col justify-between text-left h-full">
                      <div>
                        {/* Custom visual uploaded photograph */}
                        {rev.image && (
                          <div className="w-full aspect-[16/9] mb-4 rounded-xl overflow-hidden border border-[#C6B08E]/20 bg-neutral-900/5">
                            <img 
                              src={rev.image} 
                              alt={`Travel story snap by ${rev.name}`}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                        )}

                        {/* Stars row */}
                        <div className="flex gap-1 mb-3">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <Star
                              key={idx}
                              className={`w-4 h-4 ${
                                idx < rev.rating
                                  ? 'text-amber-400 fill-amber-400'
                                  : theme === 'day'
                                  ? 'text-[#C6B08E]/30'
                                  : 'text-[#4A3A2F]/60'
                              }`}
                            />
                          ))}
                        </div>

                        {/* Text narrative */}
                        <p className={`text-xs sm:text-sm italic leading-relaxed opacity-100 mb-5 font-medium ${
                          theme === 'day' ? 'text-[#4A2E1F]' : 'text-[#F5E9DB]/90'
                        }`}>
                          "{rev.text}"
                        </p>
                      </div>

                      {/* Metadata creator row */}
                      <div className={`pt-3.5 border-t flex flex-wrap justify-between items-end gap-2 text-left ${
                        theme === 'day' ? 'border-[#C6B08E]/25' : 'border-[#4A3A2F]/30'
                      }`}>
                        <div>
                          <h4 className={`text-xs sm:text-sm font-bold tracking-tight ${theme === 'day' ? 'text-[#4A2E1F]' : 'text-[#F5E9DB]'}`}>
                            {rev.name}
                          </h4>
                          {rev.destination && (
                            <p className={`text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase mt-0.5 ${
                              theme === 'day' ? 'text-[#8B5E3C]' : 'text-[#C6B08E]'
                            }`}>
                              {rev.destination}
                            </p>
                          )}
                        </div>
                        <span className={`text-[9px] sm:text-[10px] ${theme === 'day' ? 'text-[#3B2E25]/60' : 'text-[#F5E6D3]/60'}`}>
                          {rev.date}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
