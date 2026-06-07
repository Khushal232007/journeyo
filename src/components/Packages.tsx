import React, { useState } from 'react';
import { Star, Clock, Compass, ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, MessageCircle, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FEATURED_PACKAGES } from '../data';

const DEFAULT_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=900&auto=format&fit=crop";

function handleImageError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
  e.currentTarget.src = DEFAULT_FALLBACK_IMAGE;
}

interface PackagesProps {
  theme: 'day' | 'night';
  onBookPackage: (packageName: string) => void;
}

// Helpers for sorting calculations
function parsePrice(pricingStr: string): number {
  if (!pricingStr || pricingStr.toLowerCase().includes('request')) return Infinity; // "On Request" goes to bottom
  const num = parseInt(pricingStr.replace(/[^\d]/g, ''), 10);
  return isNaN(num) ? Infinity : num;
}

function parseDuration(durationStr: string): number {
  if (!durationStr || durationStr.toLowerCase().includes('flexible')) return 1;
  const match = durationStr.match(/(\d+)\s*Day/i);
  return match ? parseInt(match[1], 10) : 1;
}

export default function Packages({ theme, onBookPackage }: PackagesProps) {
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');

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

  // 1. Category and Search filter chain
  const filteredPackages = FEATURED_PACKAGES.filter(pkg => {
    // Category Filter
    if (selectedCategory !== 'All') {
      if (selectedCategory === 'Pilgrimage' && pkg.category !== 'Pilgrimage') return false;
      if (selectedCategory === 'Trek' && pkg.category !== 'Trek') return false;
      if (selectedCategory === 'Travel Package' && pkg.category !== 'Travel Package') return false;
      if (selectedCategory === 'Destination' && pkg.category !== 'Destination') return false;
    }
    
    // Search Filter
    if (searchTerm) {
      const query = searchTerm.toLowerCase();
      const matchesTitle = pkg.title.toLowerCase().includes(query);
      const matchesSubtitle = pkg.subtitle.toLowerCase().includes(query);
      const matchesOverview = pkg.overview.toLowerCase().includes(query);
      const matchesBestSeason = (Array.isArray(pkg.bestSeason) ? pkg.bestSeason.join(' ') : (pkg.bestSeason || '')).toLowerCase().includes(query);
      const matchesDifficulty = (pkg.difficulty || '').toLowerCase().includes(query);
      return matchesTitle || matchesSubtitle || matchesOverview || matchesBestSeason || matchesDifficulty;
    }
    return true;
  });

  // 2. Sorting options
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    if (sortBy === 'price-asc') {
      return parsePrice(a.pricing) - parsePrice(b.pricing);
    }
    if (sortBy === 'price-desc') {
      const priceA = parsePrice(a.pricing);
      const priceB = parsePrice(b.pricing);
      if (priceA === Infinity) return 1;
      if (priceB === Infinity) return -1;
      return priceB - priceA;
    }
    if (sortBy === 'duration-asc') {
      return parseDuration(a.duration) - parseDuration(b.duration);
    }
    if (sortBy === 'duration-desc') {
      return parseDuration(b.duration) - parseDuration(a.duration);
    }
    if (sortBy === 'alphabetical') {
      return a.title.localeCompare(b.title);
    }
    return 0; // Default featured sequence
  });

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
                Signature Chronicles
              </span>
              <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${textTitleColor}`}>
                Hand-Drawn Journeys & Guided Reflections
              </h2>
              <p className={`text-sm leading-relaxed ${textSubColor}`}>
                Every ancient sanctuary or high peak has a story waiting to speak. We craft deep, unhurried pilgrimages and trekking adventures that bridge legend with approachable comfort—combining experienced local storytellers, peaceful mountain suites, and carefully synchronized logistics so you can live the story of each holy altitude in complete peace.
              </p>
            </div>

            {/* Search, Category Filters, and Sort controls */}
            <div className={`mb-16 p-6 rounded-2xl border ${
              theme === 'day' 
                ? 'bg-[#E8DFCF]/35 border-[#C6B08E]/40' 
                : 'bg-[#211A15]/60 border-[#4A3A2F]/40'
            }`}>
              <div className="flex flex-col lg:flex-row gap-5 items-stretch lg:items-center justify-between">
                {/* Search Bar */}
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search destinations, difficulty, season..."
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-xs outline-none transition-all duration-300 ${
                      theme === 'day'
                        ? 'bg-white border-[#C6B08E]/40 text-[#4A2E1F] focus:border-[#8B5E3C]'
                        : 'bg-[#16110D]/80 border-[#4A3A2F]/50 text-[#F5E9DB] focus:border-[#C6B08E]'
                    }`}
                  />
                </div>

                {/* Category Buttons */}
                <div className="flex flex-wrap gap-1.5 shrink-0">
                  {['All', 'Pilgrimage', 'Trek', 'Travel Package', 'Destination'].map((cat) => {
                    const labelMap: { [key: string]: string } = {
                      'All': 'All Curation',
                      'Pilgrimage': 'Pilgrimages',
                      'Trek': 'Treks',
                      'Travel Package': 'Tours',
                      'Destination': 'Destinations'
                    };
                    const isActive = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 rounded-lg cursor-pointer ${
                          isActive
                            ? 'bg-[#8B5E3C] text-white shadow-md'
                            : theme === 'day'
                              ? 'bg-[#FFFFFF] border border-[#C6B08E]/30 text-[#4A2E1F] hover:bg-[#E8DFCF]'
                              : 'bg-[#2A211B] border border-[#4A3A2F]/50 text-[#D7C2A5] hover:bg-white/5'
                        }`}
                      >
                        {labelMap[cat] || cat}
                      </button>
                    );
                  })}
                </div>

                {/* Sort Toggle */}
                <div className="flex items-center gap-2 shrink-0 min-w-[200px]">
                  <span className="text-[10px] uppercase font-bold tracking-wider opacity-60 font-mono whitespace-nowrap">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className={`w-full px-3 py-2.5 rounded-xl border text-xs outline-none cursor-pointer transition-all duration-300 appearance-none bg-no-repeat ${
                      theme === 'day'
                        ? 'bg-white border-[#C6B08E]/40 text-[#4A2E1F] focus:border-[#8B5E3C]'
                        : 'bg-[#16110D]/80 border-[#4A3A2F]/50 text-[#F5E9DB] focus:border-[#C6B08E]'
                    }`}
                  >
                    <option value="featured">Featured Trips</option>
                    <option value="rating">Highly Rated First</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="duration-asc">Duration: Short to Long</option>
                    <option value="duration-desc">Duration: Long to Short</option>
                    <option value="alphabetical">Trips A-Z</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Curated Experiences - Staggered Asymmetrical Spreads */}
            {sortedPackages.length === 0 ? (
              <div className={`text-center py-20 px-6 rounded-2xl border ${
                theme === 'day' ? 'bg-white border-[#C6B08E]/30' : 'bg-[#2A211B] border-[#4A3A2F]/40'
              }`}>
                <Compass className="w-12 h-12 mx-auto mb-4 opacity-40 animate-pulse text-[#8B5E3C] dark:text-[#C6B08E]" />
                <h3 className={`text-xl font-bold tracking-tight mb-2 ${textTitleColor}`}>
                  No Matches Found
                </h3>
                <p className={`text-xs max-w-sm mx-auto leading-relaxed mb-6 ${textSubColor}`}>
                  Our travel storytellers are currently mapping more beautiful routes. Try adjusting your search query or choosing another category block.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setSortBy('featured');
                  }}
                  className="px-5 py-2.5 bg-[#8B5E3C] hover:bg-[#A47148] text-white font-bold text-[10px] uppercase tracking-widest shadow-md transition-all duration-300 cursor-pointer"
                >
                  Reset Active Filters
                </button>
              </div>
            ) : (
              <div className="space-y-20 md:space-y-24">
                {sortedPackages.map((pkg, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <motion.div
                      key={pkg.id}
                      variants={itemVariants}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                    >
                      {/* Visual Section: Staggered side columns */}
                      <div className={`lg:col-span-7 relative ${
                        isEven ? 'order-1' : 'order-1 lg:order-2'
                      }`}>
                        {/* Image Frame */}
                        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/5 shadow-2xl bg-neutral-900 group">
                          <img
                            src={pkg.image}
                            alt={pkg.title}
                            referrerPolicy="no-referrer"
                            onError={handleImageError}
                            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-[1.5s]"
                          />
                          {/* Soft visual scrim */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                          
                          {/* Soft gold border frame overlay inside */}
                          <div className="absolute inset-4 border border-white/10 rounded-xl pointer-events-none" />

                          {/* Direct parameters overlay inside bottom */}
                          <div className="absolute bottom-6 left-6 text-white text-left">
                            <p className="text-[9px] tracking-[0.2em] font-mono text-amber-200 uppercase font-semibold leading-none mb-1">
                              {pkg.subtitle}
                            </p>
                            <h4 className="font-serif text-xl sm:text-2xl font-light tracking-wide leading-tight">
                              {pkg.title.split('—')[0]}
                            </h4>
                          </div>
                        </div>

                        {/* Overlapping small visual badge representing index */}
                        <div className={`absolute top-[-15px] ${
                          isEven ? 'left-[-15px]' : 'right-[-15px]'
                        } shadow-lg rounded-xl p-4 border font-serif flex flex-col justify-center text-center w-14 h-14 ${
                          theme === 'day' ? 'bg-white border-[#C6B08E]/40 text-[#8B5E3C]' : 'bg-[#211A15] border-[#4A3A2F]/50 text-[#C6B08E]'
                        }`}>
                          <span className="text-xs font-bold leading-none">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                          <span className="text-[8px] font-sans tracking-widest uppercase mt-1">ROUTE</span>
                        </div>
                      </div>

                      {/* Text / Specification Section */}
                      <div className={`lg:col-span-5 text-left space-y-4 ${
                        isEven ? 'order-2' : 'order-2 lg:order-1'
                      }`}>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold font-mono tracking-widest text-[#8B6B52] dark:text-[#B98A5E] uppercase bg-[#8B5E3C]/5 dark:bg-[#B98A5E]/10 px-2.5 py-1 rounded-md">
                            <Clock className="w-3.5 h-3.5" />
                            {pkg.duration}
                          </span>
                          
                          {pkg.difficulty && (
                            <span className={`inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold font-mono uppercase tracking-widest px-2.5 py-1 rounded-md ${
                              pkg.difficulty.toLowerCase().includes('easy')
                                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                                : pkg.difficulty.toLowerCase().includes('hard') || pkg.difficulty.toLowerCase().includes('difficult')
                                  ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                                  : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                            }`}>
                              <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                              {pkg.difficulty}
                            </span>
                          )}
                        </div>

                        <h3 className={`font-serif text-2xl lg:text-3xl font-light tracking-tight leading-tight ${textTitleColor}`}>
                          {pkg.title}
                        </h3>

                        <p className={`text-xs sm:text-sm leading-relaxed font-light ${theme === 'day' ? 'text-[#6E5847]' : 'text-[#D7C2A5]/90'}`}>
                          {pkg.overview}
                        </p>

                        {/* Pricing and Action deck */}
                        <div className="pt-6 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center justify-between gap-4">
                          <div>
                            <p className="text-[9px] uppercase font-mono tracking-wider opacity-55">
                              Curation Direct Rate
                            </p>
                            <p className={`text-xl font-bold font-sans tracking-tight ${theme === 'day' ? 'text-[#4A2E1F]' : 'text-white'}`}>
                              {pkg.pricing} <span className="text-[10px] font-normal text-slate-500">/ explorer</span>
                            </p>
                          </div>

                          <div className="flex gap-2 sm:gap-3">
                            <button
                              onClick={() => setSelectedPackageId(pkg.id)}
                              className={`px-4 py-2.5 rounded-none border text-[10px] font-bold uppercase tracking-widest cursor-pointer transition-all duration-300 ${
                                theme === 'day'
                                  ? 'border-[#C6B08E]/45 text-[#4A2E1F] hover:bg-[#8B5E3C]/5 bg-white'
                                  : 'border-[#4A3A2F]/50 text-[#F5E9DB] hover:bg-white/5'
                              }`}
                            >
                              Read More
                            </button>
                            
                            <button
                              onClick={() => onBookPackage(pkg.title)}
                              className="px-5 py-2.5 bg-[#8B5E3C] hover:bg-[#A47148] text-white font-bold text-[10px] uppercase tracking-widest shadow-md cursor-pointer transition-all duration-300"
                            >
                              Enquiry
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
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
                Back to All Expeditions
              </button>
            </div>

            {/* Immersive Scenic Header */}
            <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-[#8B6B52]/25 mb-12">
              <img
                src={selectedPackage.image}
                alt={selectedPackage.title}
                onError={handleImageError}
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
                    "Every Route Story itinerary represents a localized signature journey featuring physical specialists, curated luxury stays, priority access darsans, and expert navigation support for absolute comfort and spiritual resonance."
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
                    Enquiry
                  </button>
                </div>
              </div>
            </div>

            {/* Day By Day Detailed Journey Schedule */}
            {selectedPackage.itinerary && selectedPackage.itinerary.length > 0 && (
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
                              onError={handleImageError}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            )}

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
                Secure your route seat and priority clearance on this premium {selectedPackage.title} curated by Route Story. All plans are fully customizable end-to-end.
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
