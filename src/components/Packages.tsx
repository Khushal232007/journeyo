import React, { useState } from 'react';
import { Star, Clock, Compass, ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FEATURED_PACKAGES } from '../data';
import { TravelPackage } from '../types';

interface PackagesProps {
  theme: 'day' | 'night';
  onBookPackage: (packageName: string) => void;
}

export default function Packages({ theme, onBookPackage }: PackagesProps) {
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);

  const selectedPackage = FEATURED_PACKAGES.find(p => p.id === selectedPackageId);

  // Dynamic values
  const textTitleColor = theme === 'day' ? 'text-teal-950' : 'text-white';
  const textSubColor = theme === 'day' ? 'text-teal-900/70' : 'text-slate-300';
  const cardBgClasses = theme === 'day'
    ? 'bg-white/40 border-teal-100/50 backdrop-blur-sm hover:shadow-[0_12px_45px_0_rgba(13,148,136,0.08)]'
    : 'bg-slate-950/45 border-indigo-950/40 backdrop-blur-sm hover:shadow-[0_12px_45px_0_rgba(99,102,241,0.06)]';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 200 } }
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 relative w-full text-left">
      <AnimatePresence mode="wait">
        {!selectedPackage ? (
          /* ====================================================
             1. FEATURED SIGNATURE PACKAGES LIST GRID
             ==================================================== */
          <motion.div
            key="packages-list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, x: 15 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header Section */}
            <div className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-bold tracking-widest uppercase text-teal-600 dark:text-cyan-400 mb-2 block">
                Flagship Journeys
              </span>
              <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${textTitleColor}`}>
                Our Curated Himalayan Collections
              </h2>
              <p className={`text-sm leading-relaxed ${textSubColor}`}>
                While JOURNEYO anchors charter flights across POSITANO, BORA BORA, and KYOTO, we take immense pride in launching our flagship limited series of four majestic Himalayan retreats in Uttarakhand. Fully serviced, bespoke, and extremely rare.
              </p>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {FEATURED_PACKAGES.map((pkg) => (
                <motion.div
                  key={pkg.id}
                  variants={itemVariants}
                  className={`rounded-2xl border overflow-hidden flex flex-col group transition-all duration-500 hover:-translate-y-1 ${cardBgClasses}`}
                >
                  {/* Photo with hover effect */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    {/* Visual Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Floating pill overlays */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-lg text-white font-semibold text-[10px] tracking-wider uppercase border border-white/10 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-teal-400" />
                        {pkg.duration}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 bg-teal-600/90 backdrop-blur-md rounded-lg text-white font-bold text-xs px-3 py-1 flex items-center gap-1 border border-teal-500/35">
                      <Star className="w-3.5 h-3.5 fill-white" />
                      {pkg.rating}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-[10px] font-bold text-teal-300 tracking-wider uppercase mb-0.5">
                        {pkg.subtitle}
                      </p>
                      <h3 className="text-xl font-bold tracking-tight">
                        {pkg.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Overview quote */}
                      <p 
                        className={`text-xs leading-relaxed opacity-75 mb-6 ${theme === 'day' ? '' : 'text-slate-800 dark:text-slate-300'}`}
                        style={theme === 'day' ? { color: '#6e739f' } : undefined}
                      >
                        {pkg.overview}
                      </p>

                      {/* Flagship Parameters checklist */}
                      <div className="space-y-2.5 mb-8">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-2.5">
                          Bespoke Masterpiece Inclusions
                        </span>
                        {pkg.highlights.slice(0, 3).map((hl, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs">
                            <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                            <span 
                              className={`opacity-80 ${theme === 'day' ? '' : 'text-slate-900 dark:text-slate-200'}`}
                              style={theme === 'day' ? { color: '#6e739f' } : undefined}
                            >
                              {hl}
                            </span>
                          </div>
                        ))}
                        {pkg.highlights.length > 3 && (
                          <p className="text-[10px] italic text-teal-600/80 dark:text-teal-400/80 pl-6">
                            + {pkg.highlights.length - 3} other premium masterclass entries...
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Pricing and Action row */}
                    <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 block">
                          Bespoke Booking From
                        </span>
                        <span className={`text-xl sm:text-2xl font-black ${theme === 'day' ? 'text-teal-950' : 'text-white'}`}>
                          {pkg.pricing} <span className="text-xs font-medium text-slate-500">/ traveler</span>
                        </span>
                      </div>

                      <div className="flex gap-2 sm:gap-3">
                        <button
                          onClick={() => setSelectedPackageId(pkg.id)}
                          className={`px-3.5 py-2.5 rounded-xl border text-xs font-bold uppercase tracking-widest cursor-pointer transition-all duration-300 ${
                            theme === 'day'
                              ? 'border-teal-900/10 text-teal-950 hover:bg-teal-50/40'
                              : 'border-white/10 text-white hover:bg-white/5'
                          }`}
                        >
                          Read Itinerary
                        </button>
                        
                        <button
                          onClick={() => onBookPackage(pkg.title)}
                          className="px-4 py-2.5 bg-gradient-to-r from-teal-600 to-teal-500 hover:brightness-105 rounded-xl text-white font-bold text-xs uppercase tracking-widest shadow-md flex items-center gap-1 cursor-pointer transition-all duration-300"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          /* ====================================================
             2. IMMERSIVE COMPREHENSIVE SEPARATE ITINERARY VIEW
             ==================================================== */
          <motion.div
            key="itinerary-detail"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {/* Header / Back button */}
            <div className="mb-8">
              <button
                onClick={() => setSelectedPackageId(null)}
                className={`group px-4 py-2.5 rounded-xl border backdrop-blur-sm font-bold text-xs uppercase tracking-widest flex items-center gap-2 cursor-pointer transition-all duration-300 ${
                  theme === 'day'
                    ? 'border-teal-900/10 text-teal-950 bg-white/40 hover:bg-white/60'
                    : 'border-white/10 text-white bg-black/20 hover:bg-black/35'
                }`}
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Himalayan Expeditions
              </button>
            </div>

            {/* Immersive Scenic Header */}
            <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10 mb-12">
              <img
                src={selectedPackage.image}
                alt={selectedPackage.title}
                className="w-full h-full object-cover"
              />
              {/* Thick soft scrim shadow layering */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent flex flex-col justify-end p-6 sm:p-10" />

              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 text-white text-left">
                <div className="flex gap-3 mb-2 flex-wrap">
                  <span className="px-2.5 py-1 bg-teal-500/80 rounded-md text-white font-semibold text-[9px] uppercase tracking-wider">
                    {selectedPackage.duration} Custom
                  </span>
                  <span className="px-2.5 py-1 bg-white/10 backdrop-blur-md rounded-md text-slate-100 font-semibold text-[9px] uppercase tracking-wider flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    {selectedPackage.rating} Rated
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-teal-300 mb-1.5">
                  {selectedPackage.subtitle}
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
                  {selectedPackage.title}
                </h1>
              </div>
            </div>

            {/* Overview Detail & Highlights Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
              <div className="lg:col-span-7 space-y-6">
                <h3 className={`text-xl font-extrabold tracking-tight ${textTitleColor}`}>
                  Expedition Overview
                </h3>
                <p className={`text-sm leading-relaxed opacity-85 ${theme === 'day' ? 'text-teal-950' : 'text-slate-300'}`}>
                  {selectedPackage.overview}
                </p>
                <div className={`p-5 rounded-2xl border ${theme === 'day' ? 'bg-teal-50/30 border-teal-100/40' : 'bg-slate-900/40 border-indigo-950/40'}`}>
                  <p className="text-xs italic font-medium opacity-80 leading-relaxed text-teal-900 dark:text-teal-200">
                    "This represents a restricted entry, hand-guided botanical and luxury camping pathway. No heavy infrastructure can be spotted. All resources, coordinates, and personal medical evacuation capabilities remain synchronized under active secure radar."
                  </p>
                </div>
              </div>

              <div className={`lg:col-span-5 rounded-2xl border p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between ${cardBgClasses}`}>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-cyan-400 mb-4 block">
                    Bespoke Inclusions
                  </h4>
                  <div className="space-y-4">
                    {selectedPackage.highlights.map((hl, idx) => (
                      <div key={idx} className="flex gap-3 text-xs leading-normal">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                        <span 
                          className={`opacity-90 ${theme === 'day' ? '' : 'text-slate-200'}`}
                          style={theme === 'day' ? { color: '#6e739f' } : undefined}
                        >
                          {hl}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-black/5 dark:border-white/5 mt-8 flex justify-between items-center">
                  <div>
                    <span 
                      className={`text-[10px] uppercase font-semibold block ${theme === 'day' ? '' : 'text-slate-500'}`}
                      style={theme === 'day' ? { color: '#6e739f' } : undefined}
                    >
                      Pricing From
                    </span>
                    <span className={`text-2xl font-black ${theme === 'day' ? 'text-teal-950' : 'text-white'}`}>{selectedPackage.pricing}</span>
                  </div>
                  <button
                    onClick={() => onBookPackage(selectedPackage.title)}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold text-xs uppercase tracking-widest shadow-lg flex items-center gap-1.5 cursor-pointer transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book Space
                  </button>
                </div>
              </div>
            </div>

            {/* Day By Day Detailed Journey Schedule */}
            <div className="mb-16">
              <span className="text-xs font-bold tracking-widest uppercase text-teal-600 dark:text-cyan-400 mb-2 block">
                The Storyline
              </span>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-8 ${textTitleColor}`}>
                Day-by-Day Escapade
              </h2>

              <div className="space-y-12 sm:space-y-16 relative before:absolute before:inset-y-2 before:left-[19px] sm:before:left-[35px] before:w-[1.5px] before:bg-gradient-to-b before:from-teal-500 before:via-indigo-500/30 before:to-transparent">
                {selectedPackage.itinerary.map((dayItem) => (
                  <div key={dayItem.day} className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start relative PL-2 sm:pl-0">
                    
                    {/* Day circle bullet */}
                    <div className="absolute left-0 top-1 w-10 sm:w-18 h-10 sm:h-18 rounded-full border bg-white dark:bg-[#091024] border-teal-500/30 shadow-md flex items-center justify-center text-teal-800 dark:text-teal-100 select-none z-10 shrink-0">
                      <div className="text-center">
                        <span className="text-[10px] uppercase tracking-wider font-bold block leading-none">Day</span>
                        <span className="text-sm sm:text-lg font-black leading-none">{dayItem.day < 10 ? `0${dayItem.day}` : dayItem.day}</span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="pl-12 sm:pl-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      {/* Left: day description */}
                      <div className="lg:col-span-7 text-left space-y-4">
                        <h4 className={`text-lg sm:text-xl font-bold tracking-tight ${theme === 'day' ? 'text-teal-900' : 'text-white'}`}>
                          {dayItem.title}
                        </h4>
                        <p className={`text-xs sm:text-sm leading-relaxed opacity-80 ${theme === 'day' ? 'text-teal-950' : 'text-slate-300'}`}>
                          {dayItem.description}
                        </p>
                        
                        {/* Day highlights tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {dayItem.highlights.map((param, pIdx) => (
                            <span 
                              key={pIdx}
                              className={`px-3 py-1 rounded-lg text-[10px] font-bold tracking-wide uppercase transition-colors ${
                                theme === 'day'
                                  ? 'bg-teal-50 text-teal-800 border border-teal-100/50'
                                  : 'bg-indigo-950/30 text-indigo-300 border border-indigo-900/35'
                              }`}
                            >
                              {param}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: day specific picture */}
                      <div className="lg:col-span-5">
                        <div className="relative aspect-video rounded-xl overflow-hidden border border-white/20 dark:border-white/10 shadow-lg">
                          <img
                            src={dayItem.image}
                            alt={dayItem.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Final CTA */}
            <div className={`rounded-2xl border p-8 sm:p-12 text-center relative overflow-hidden shadow-xl ${cardBgClasses}`}>
              <div className="absolute top-[-20%] left-[-20%] w-[350px] h-[350px] rounded-full bg-teal-300/[3%] blur-[55px]" />
              <div className="absolute bottom-[-20%] right-[-20%] w-[350px] h-[350px] rounded-full bg-indigo-500/[3%] blur-[55px]" />

              <h3 className={`text-2xl sm:text-3xl font-black mb-3 text-center relative ${textTitleColor}`}>
                Ready to Enter the Sanctuary?
              </h3>
              <p 
                className={`max-w-md mx-auto text-xs sm:text-sm leading-relaxed mb-8 relative ${theme === 'day' ? '' : textSubColor}`}
                style={theme === 'day' ? { color: '#6e739f' } : undefined}
              >
                Secure space on this private {selectedPackage.duration} expedition. Curated spaces are restricted to four groups per season to preserve full ecological solitude.
              </p>

              <div className="flex flex-wrap justify-center gap-4 relative">
                <button
                  onClick={() => setSelectedPackageId(null)}
                  className={`px-5 py-3 rounded-xl border text-xs font-bold uppercase tracking-widest cursor-pointer transition-all duration-300 ${
                    theme === 'day'
                      ? 'border-teal-900/10 text-teal-950 hover:bg-white/50'
                      : 'border-white/10 text-white hover:bg-white/5'
                  }`}
                >
                  Return to Packages
                </button>

                <button
                  onClick={() => onBookPackage(selectedPackage.title)}
                  className="px-6 py-3 bg-gradient-to-r from-teal-600 via-teal-500 to-indigo-600 hover:brightness-105 rounded-xl text-white font-bold text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <MessageCircle className="w-4.5 h-4.5" />
                  Request Booking via WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
