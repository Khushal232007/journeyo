import React, { useState } from 'react';
import { Star, Clock, Compass, ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FEATURED_PACKAGES } from '../data';

interface PackagesProps {
  theme: 'day' | 'night';
  onBookPackage: (packageName: string) => void;
}

export default function Packages({ theme, onBookPackage }: PackagesProps) {
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);

  const selectedPackage = FEATURED_PACKAGES.find(p => p.id === selectedPackageId);

  // Dynamic values
  const textTitleColor = theme === 'day' ? 'text-[#4A2E1F]' : 'text-[#F5E9DB]';
  const textSubColor = theme === 'day' ? 'text-[#6E5847]' : 'text-[#D7C2A5]';
  const cardBgClasses = theme === 'day'
    ? 'bg-[#FFFFFF] border-[#C6B08E]/45 hover:shadow-lg'
    : 'bg-[#2A211B] border-[#4A3A2F]/50 hover:shadow-lg';

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
             1. FEATURED SIGNATURE PILGRIM PACKAGES GRID
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
              <span className={`text-xs font-bold tracking-widest uppercase mb-2 block font-mono ${
                theme === 'day' ? 'text-[#8B6B52]' : 'text-[#B98A5E]'
              }`}>
                Featured Expeditions
              </span>
              <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${textTitleColor}`}>
                Our Curated Sacred Pilgrim Guides
              </h2>
              <p className={`text-sm leading-relaxed ${textSubColor}`}>
                Experience unparalleled comfort and spiritual renewal. We arrange elite helicopter passages, premium local suites, fast-track temple entries, and personal expert naturalists across majestic mountain coordinates.
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
                  {/* Photo with hover zoom effect */}
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
                        <Clock className="w-3 h-3 text-amber-500" />
                        {pkg.duration}
                      </span>
                    </div>

                    <div className={`absolute top-4 right-4 backdrop-blur-md rounded-lg font-bold text-xs px-3 py-1 flex items-center gap-1 border ${
                      theme === 'day' 
                        ? 'bg-[#8B5E3C]/90 text-white border-[#C6B08E]/30' 
                        : 'bg-[#8B5E3C]/90 text-[#F5E9DB] border-[#4A3A2F]/35'
                    }`}>
                      <Star className="w-3.5 h-3.5 fill-white text-amber-400" />
                      {pkg.rating}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-[10px] font-bold text-amber-200 tracking-wider uppercase mb-0.5">
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
                      <p className={`text-xs leading-relaxed mb-6 ${theme === 'day' ? 'text-[#6E5847]' : 'text-[#D7C2A5]/90'}`}>
                        {pkg.overview}
                      </p>

                      {/* Flagship Parameters checklist - displays all key highlights elegantly */}
                      <div className="space-y-2.5 mb-8">
                        <span className={`text-[10px] font-bold uppercase tracking-wider block mb-2.5 ${
                          theme === 'day' ? 'text-[#8B6B52]' : 'text-[#B98A5E]'
                        }`}>
                          Pilgrimage Key Highlights
                        </span>
                        {pkg.highlights.map((hl, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs">
                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${theme === 'day' ? 'text-[#8B6B52]' : 'text-[#B98A5E]'}`} />
                            <span className={theme === 'day' ? 'text-[#6E5847]' : 'text-[#D7C2A5]'}>
                              {hl}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing and Action row */}
                    <div className={`pt-4 border-t flex items-center justify-between ${
                      theme === 'day' ? 'border-[#C6B08E]/25' : 'border-white/5'
                    }`}>
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-slate-500 block">
                          Bespoke Booking From
                        </span>
                        <span className={`text-xl sm:text-2xl font-black ${theme === 'day' ? 'text-[#4A2E1F]' : 'text-white'}`}>
                          {pkg.pricing} <span className="text-xs font-medium text-slate-500">/ explorer</span>
                        </span>
                      </div>

                      <div className="flex gap-2 sm:gap-3">
                        <button
                          onClick={() => setSelectedPackageId(pkg.id)}
                          className={`px-3.5 py-2.5 rounded-xl border text-xs font-bold uppercase tracking-widest cursor-pointer transition-all duration-300 ${
                            theme === 'day'
                              ? 'border-[#C6B08E]/40 text-[#4A2E1F] hover:bg-[#8B5E3C]/5 bg-white'
                              : 'border-[#4A3A2F]/50 text-[#F5E9DB] hover:bg-[#8B5E3C]/15'
                          }`}
                        >
                          Read More
                        </button>
                        
                        <button
                          onClick={() => onBookPackage(pkg.title)}
                          className="px-4 py-2.5 bg-[#8B5E3C] hover:bg-[#A47148] rounded-xl text-white font-bold text-xs uppercase tracking-widest shadow-md flex items-center gap-1 cursor-pointer transition-all duration-300"
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
                    ? 'border-[#C6B08E]/40 text-[#4A2E1F] bg-[#FFFFFF] hover:bg-[#E8DFCF]'
                    : 'border-[#4A3A2F]/50 text-[#F5E9DB] bg-[#2A211B] hover:bg-[#211A15]'
                }`}
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Featured Expeditions
              </button>
            </div>

            {/* Immersive Scenic Header */}
            <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-[#8B6B52]/25 mb-12">
              <img
                src={selectedPackage.image}
                alt={selectedPackage.title}
                className="w-full h-full object-cover"
              />
              {/* Thick soft scrim shadow layering */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent flex flex-col justify-end p-6 sm:p-10" />

              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 text-white text-left">
                <div className="flex gap-3 mb-2 flex-wrap">
                  <span className="px-2.5 py-1 bg-[#8B5E3C]/95 rounded-md text-white font-semibold text-[9px] uppercase tracking-wider">
                    {selectedPackage.duration} Custom Guide
                  </span>
                  <span className="px-2.5 py-1 bg-white/10 backdrop-blur-md rounded-md text-slate-100 font-semibold text-[9px] uppercase tracking-wider flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    {selectedPackage.rating} Rating
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-200 mb-1.5">
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
                <p className={`text-sm leading-relaxed opacity-85 ${theme === 'day' ? 'text-[#6E5847]' : 'text-[#D7C2A5]'}`}>
                  {selectedPackage.overview}
                </p>
                <div className={`p-5 rounded-2xl border ${theme === 'day' ? 'bg-[#E8DFCF]/40 border-[#C6B08E]/30' : 'bg-[#211A15]/60 border-[#4A3A2F]/40'}`}>
                  <p className={`text-xs italic font-medium opacity-85 leading-relaxed ${theme === 'day' ? 'text-[#8B5E3C]' : 'text-[#C6B08E]'}`}>
                    "This represents a premium high-priority pilgrimage service featuring VIP physical escorts, specialized fast-track entry, comfortable premium ground logistics, and standby helicopter routes. All transfers remain synced with active ground support team for top-grade safety."
                  </p>
                </div>
              </div>

              <div className={`lg:col-span-5 rounded-2xl border p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between ${cardBgClasses}`}>
                <div>
                  <h4 className={`text-xs font-bold uppercase tracking-widest mb-4 block font-mono ${
                    theme === 'day' ? 'text-[#8B6B52]' : 'text-[#B98A5E]'
                  }`}>
                    Expedition Highlights
                  </h4>
                  <div className="space-y-4">
                    {selectedPackage.highlights.map((hl, idx) => (
                      <div key={idx} className="flex gap-3 text-xs leading-normal">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${theme === 'day' ? 'text-[#8B6B52]' : 'text-[#B98A5E]'}`} />
                        <span className={theme === 'day' ? 'text-[#6E5847]' : 'text-[#D7C2A5]'}>
                          {hl}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`pt-6 border-t mt-8 flex justify-between items-center ${
                  theme === 'day' ? 'border-[#C6B08E]/25' : 'border-white/5'
                }`}>
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-slate-500 block">
                      Pricing From
                    </span>
                    <span className={`text-2xl font-black ${theme === 'day' ? 'text-[#4A2E1F]' : 'text-white'}`}>{selectedPackage.pricing}</span>
                  </div>
                  <button
                    onClick={() => onBookPackage(selectedPackage.title)}
                    className="px-5 py-3 rounded-xl bg-[#8B5E3C] hover:bg-[#A47148] text-white font-bold text-xs uppercase tracking-widest shadow-lg flex items-center gap-1.5 cursor-pointer transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Day By Day Detailed Journey Schedule */}
            <div className="mb-16">
              <span className={`text-xs font-bold tracking-widest uppercase mb-2 block font-mono ${
                theme === 'day' ? 'text-[#8B6B52]' : 'text-[#B98A5E]'
              }`}>
                The Storyline
              </span>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-8 ${textTitleColor}`}>
                Day-by-Day Escapade
              </h2>

              <div className={`space-y-12 sm:space-y-16 relative before:absolute before:inset-y-2 before:left-[19px] sm:before:left-[35px] before:w-[1.5px] ${
                theme === 'day' 
                  ? 'before:bg-gradient-to-b before:from-[#C6B08E] before:via-[#C6B08E]/30 before:to-transparent' 
                  : 'before:bg-gradient-to-b before:from-[#4A3A2F] before:via-[#4A3A2F]/30 before:to-transparent'
              }`}>
                {selectedPackage.itinerary.map((dayItem) => (
                  <div key={dayItem.day} className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start relative pl-2 sm:pl-0">
                    
                    {/* Day circle bullet */}
                    <div className={`absolute left-0 top-1 w-10 sm:w-18 h-10 sm:h-18 rounded-full border shadow-md flex items-center justify-center select-none z-10 shrink-0 ${
                      theme === 'day' 
                        ? 'bg-[#FFFFFF] border-[#C6B08E]/30 text-[#8B5E3C]' 
                        : 'bg-[#2A211B] border-[#4A3A2F]/40 text-[#C6B08E]'
                    }`}>
                      <div className="text-center">
                        <span className="text-[10px] uppercase tracking-wider font-bold block leading-none">Day</span>
                        <span className="text-sm sm:text-lg font-black leading-none">{dayItem.day < 10 ? `0${dayItem.day}` : dayItem.day}</span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="pl-12 sm:pl-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      {/* Left: day description */}
                      <div className="lg:col-span-7 text-left space-y-4">
                        <h4 className={`text-lg sm:text-xl font-bold tracking-tight ${theme === 'day' ? 'text-[#4A2E1F]' : 'text-[#F5E9DB]'}`}>
                          {dayItem.title}
                        </h4>
                        <p className={`text-xs sm:text-sm leading-relaxed opacity-80 ${theme === 'day' ? 'text-[#6E5847]' : 'text-[#D7C2A5]/85'}`}>
                          {dayItem.description}
                        </p>
                        
                        {/* Day highlights tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {dayItem.highlights.map((param, pIdx) => (
                            <span 
                              key={pIdx}
                              className={`px-3 py-1 rounded-lg text-[10px] font-bold tracking-brand transitions-all ${
                                theme === 'day'
                                  ? 'bg-[#E8DFCF] text-[#4A2E1F] border border-[#C6B08E]/25 font-mono'
                                  : 'bg-[#2A211B] text-[#D7C2A5] border border-[#4A3A2F]/30'
                              }`}
                            >
                              {param}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: day specific picture */}
                      <div className="lg:col-span-5">
                        <div className={`relative aspect-video rounded-xl overflow-hidden border shadow-lg ${
                          theme === 'day' ? 'border-[#8B6B52]/20' : 'border-[#8B6B52]/20'
                        }`}>
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
              <div className="absolute top-[-20%] left-[-20%] w-[350px] h-[350px] rounded-full bg-[#8B5E3C]/[3%] blur-[55px]" />
              <div className="absolute bottom-[-20%] right-[-20%] w-[350px] h-[350px] rounded-full bg-[#C6B08E]/[3%] blur-[55px]" />

              <h3 className={`text-2xl sm:text-3xl font-black mb-3 text-center relative ${textTitleColor}`}>
                Ready to Enter the Sanctuary?
              </h3>
              <p className={`max-w-md mx-auto text-xs sm:text-sm leading-relaxed mb-8 relative ${
                theme === 'day' ? 'text-[#6E5847]' : 'text-[#D7C2A5]'
              }`}>
                Secure your helicopter seat and VIP priority clearance on this premium {selectedPackage.duration} pilgrimage. Spaces are curated for excellence and fully managed end-to-end.
              </p>

              <div className="flex flex-wrap justify-center gap-4 relative">
                <button
                  onClick={() => setSelectedPackageId(null)}
                  className={`px-5 py-3 rounded-xl border text-xs font-bold uppercase tracking-widest cursor-pointer transition-all duration-300 ${
                    theme === 'day'
                      ? 'border-[#C6B08E]/30 text-[#4A2E1F] bg-[#FFFFFF] hover:bg-[#E8DFCF]'
                      : 'border-[#4A3A2F]/50 text-[#F5E9DB] hover:bg-white/5'
                  }`}
                >
                  Return to Packages
                </button>

                <button
                  onClick={() => onBookPackage(selectedPackage.title)}
                  className="px-6 py-3 bg-[#8B5E3C] hover:bg-[#A47148] rounded-xl text-white font-bold text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
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
