import React, { useState } from 'react';
import { Star, User, PenTool, CheckCircle, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GENERAL_REVIEWS } from '../data';
import { Review } from '../types';

interface ReviewsProps {
  theme: 'day' | 'night';
}

export default function Reviews({ theme }: ReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('route_story_reviews') : null;
    if (saved) {
      try {
        const customParsed = JSON.parse(saved) as Review[];
        // Merge custom reviews onto the top of GENERAL_REVIEWS
        return [...customParsed, ...GENERAL_REVIEWS];
      } catch (e) {
        console.error('Error parsing saved reviews', e);
      }
    }
    return GENERAL_REVIEWS;
  });
  const [formName, setFormName] = useState('');
  const [formText, setFormText] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [formDestination, setFormDestination] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Submit feedback
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
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      };

      // Email dispatch
      const response = await fetch("https://formsubmit.co/ajax/journeyo2701@gmail.com", {
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

      if (response.ok) {
        // Update local state
        setReviews([newReview, ...reviews]);

        // Persist custom reviews to localStorage
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
            console.error('Failed to save review to localStorage', ex);
          }
        }
        
        // reset form
        setFormName('');
        setFormText('');
        setFormRating(5);
        setFormDestination('');
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5500);
      } else {
        setSubmitError("Failed to transmit review. Please try again or email us directly.");
      }
    } catch (err) {
      console.error(err);
      setSubmitError("Network connection error. Review was not submitted.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Theme support
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
      <div className="max-w-2xl mb-12 sm:mb-16">
        <span className={`text-xs font-bold tracking-widest uppercase mb-2 block font-mono ${
          theme === 'day' ? 'text-[#8B5E3C]' : 'text-[#C6B08E]'
        }`}>
          Traveler stories
        </span>
        <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${textTitleColor}`}>
          Stories from our Travelers
        </h2>
        <p className={`text-sm leading-relaxed ${textSubColor}`}>
          Discover real experiences shared by travelers who explored India with Route Story. From mountain escapes and desert adventures to coastal retreats, every journey leaves behind a story worth telling.
        </p>
      </div>

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
                  Your story has been added below and sent directly to journeyo2701@gmail.com!
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

              {/* Visited Country / Package */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider mb-1 opacity-75">
                  Destination Visited
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ananda Sacred Retreat"
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
                      className="cursor-pointer transition-transform hover:scale-110 active:scale-95"
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

              {/* Diary Text */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider mb-1 opacity-75">
                  Share your experience
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell a cinematic story..."
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
            {reviews.map((rev, index) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-sm relative shadow-md ${cardBgClasses}`}
              >
                {/* Decorative absolute Quote mark */}
                <Quote className={`absolute right-6 top-6 w-12 h-12 pointer-events-none ${
                  theme === 'day' ? 'text-[#8B6B52]/5' : 'text-[#F5E6D3]/5'
                }`} />

                {/* Single unified content compartment with no photos */}
                <div className="flex flex-col justify-between text-left h-full">
                  <div>
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
            ))}
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
