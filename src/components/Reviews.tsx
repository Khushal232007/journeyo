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
    const saved = typeof window !== 'undefined' ? localStorage.getItem('journeyo_reviews') : null;
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

  // Submit feedback
  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formText) return;

    const newReview: Review = {
      id: `custom-rev-${Date.now()}`,
      name: formName,
      rating: formRating,
      text: formText,
      destination: formDestination || 'Customised Trip',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    };

    // Update local state
    setReviews([newReview, ...reviews]);

    // Persist custom reviews to localStorage
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('journeyo_reviews');
        let customList: Review[] = [];
        if (saved) {
          customList = JSON.parse(saved);
        }
        customList = [newReview, ...customList];
        localStorage.setItem('journeyo_reviews', JSON.stringify(customList));
      } catch (e) {
        console.error('Failed to save review to localStorage', e);
      }
    }
    
    // reset form
    setFormName('');
    setFormText('');
    setFormRating(5);
    setFormDestination('');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4500);
  };

  // Theme support
  const textTitleColor = theme === 'day' ? 'text-[#3B2E25]' : 'text-[#F5E6D3]';
  const textSubColor = theme === 'day' ? 'text-[#3B2E25]/85' : 'text-[#F5E6D3]/80';
  const cardBgClasses = theme === 'day'
    ? 'bg-[#FFFDFC]/90 border-[#8B6B52]/20 hover:shadow-lg text-[#3B2E25]'
    : 'bg-[#2A2522]/80 border-[#8B6B52]/30 hover:shadow-lg text-[#F5E6D3]';

  const inputStyle = theme === 'day'
    ? 'bg-[#FAF7F2] border-[#8B6B52]/30 text-[#3B2E25] focus:border-[#8B6B52]'
    : 'bg-[#121212]/60 border-[#8B6B52]/30 text-[#F5E6D3] focus:border-[#D4B48C]';

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 relative w-full text-left">
      
      {/* Page Header */}
      <div className="max-w-2xl mb-12 sm:mb-16">
        <span className={`text-xs font-bold tracking-widest uppercase mb-2 block font-mono ${
          theme === 'day' ? 'text-[#8B6B52]' : 'text-[#D4B48C]'
        }`}>
          Client Diaries
        </span>
        <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${textTitleColor}`}>
          Echoes of Forgotten Horizons
        </h2>
        <p className={`text-sm leading-relaxed ${textSubColor}`}>
          Read the true narratives of high explorers who have commissioned spaces with JOURNEYO, and add your own voice to our ancient, leather-bound chronicler.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
        
        {/* LEFT COLUMN: Write a Review Form */}
        <div className="lg:col-span-5 order-2 lg:order-1 relative">
          <div className={`rounded-2xl border p-6 sm:p-8 backdrop-blur-sm shadow-xl relative ${cardBgClasses}`}>
            <h3 className={`text-lg sm:text-xl font-bold tracking-tight mb-6 flex items-center gap-2 ${textTitleColor}`}>
              <PenTool className={`w-4.5 h-4.5 ${theme === 'day' ? 'text-[#8B6B52]' : 'text-[#D4B48C]'}`} />
              Log Your Journey Diary
            </h3>

            {/* Success notification */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-4 border text-xs rounded-xl mb-6 flex items-center gap-2 font-medium ${
                    theme === 'day'
                      ? 'bg-[#FFFDFC] border-[#8B6B52]/20 text-[#8B6B52]'
                      : 'bg-[#6B4F3A]/10 border-[#8B6B52]/20 text-[#D4B48C]'
                  }`}
                >
                  <CheckCircle className={`w-4 h-4 shrink-0 ${theme === 'day' ? 'text-[#8B6B52]' : 'text-[#D4B48C]'}`} />
                  Your diary entry has been sealed, and added to the ledger below!
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleAddReview} className="space-y-4">
              {/* Creator Name */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider mb-1 opacity-75">
                  Your Full Name / Title
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
                  Expedition Name / Spot
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
                  Your Experience Rating
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
                            ? 'text-[#8B6B52]/20'
                            : 'text-[#8B6B52]/40'
                        }`}
                      />
                    </button>
                  ))}
                  <span className={`text-xs font-semibold ml-2 ${theme === 'day' ? 'text-[#3B2E25]' : 'text-[#F5E6D3]/70'}`}>
                    {formRating}.0 / 5.0
                  </span>
                </div>
              </div>

              {/* Diary Text */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider mb-1 opacity-75">
                  Your Diary Memoir
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
                  className="w-full py-3 bg-[#8B6B52] hover:bg-[#72553E] rounded-xl text-white font-bold text-xs uppercase tracking-widest shadow-lg cursor-pointer transition-all"
                >
                  Seal Entry into Ledger
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
                              ? 'text-[#8B6B52]/20'
                              : 'text-[#8B6B52]/40'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Text narrative */}
                    <p className={`text-xs sm:text-sm italic leading-relaxed opacity-100 mb-5 font-medium ${
                      theme === 'day' ? 'text-[#3B2E25]/90' : 'text-[#F5E6D3]/90'
                    }`}>
                      "{rev.text}"
                    </p>
                  </div>

                  {/* Metadata creator row */}
                  <div className={`pt-3.5 border-t flex flex-wrap justify-between items-end gap-2 text-left ${
                    theme === 'day' ? 'border-[#8B6B52]/15' : 'border-[#8B6B52]/20'
                  }`}>
                    <div>
                      <h4 className={`text-xs sm:text-sm font-bold tracking-tight ${theme === 'day' ? 'text-[#3B2E25]' : 'text-[#F5E6D3]'}`}>
                        {rev.name}
                      </h4>
                      {rev.destination && (
                        <p className={`text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase mt-0.5 ${
                          theme === 'day' ? 'text-[#8B6B52]' : 'text-[#D4B48C]'
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
