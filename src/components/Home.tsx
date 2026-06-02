import React from 'react';
import { ArrowRight, Star, ShieldCheck, MapPin, Sparkles, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeProps {
  setCurrentTab: (tab: string) => void;
  theme: 'day' | 'night';
  onOpenBooking: () => void;
}

export default function Home({ setCurrentTab, theme, onOpenBooking }: HomeProps) {
  // Theme dynamic styling
  const textTitleColor = theme === 'day' ? 'text-teal-950' : 'text-white';
  const textSubColor = theme === 'day' ? 'text-teal-900/80' : 'text-slate-300';
  const cardBgColor = theme === 'day' ? 'bg-white/40 border-teal-100/50' : 'bg-slate-950/40 border-indigo-950/50';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 180 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 relative w-full"
    >
      {/* 1. HERO SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24 min-h-[70vh]">
        
        {/* Left column text */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left relative z-10">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-6 w-fit"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Curators of Rare Travel Expeditions</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6 ${textTitleColor}`}
          >
            Savor the World’s <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400">
              Most Exquisite
            </span> Landscapes
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className={`text-lg sm:text-xl font-medium italic mb-8 max-w-xl border-l-4 border-teal-500/40 pl-4 py-1.5 ${textSubColor}`}
          >
            “Travel softly, collect beautifully, remember forever.”
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className={`text-base leading-relaxed mb-10 max-w-lg ${theme === 'day' ? 'text-teal-950/70' : 'text-slate-400'}`}
          >
            JOURNEYO drafts bespoke sanctuaries of high adventure. From insulated Himalayan glacier domes under pristine constellations to private yachting beaches on deep sacred waters, we mold space, time, and luxury to match your soul’s blueprint.
          </motion.p>

          {/* Elegant CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => setCurrentTab('packages')}
              className="px-6 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 hover:scale-[1.03] text-white font-bold text-sm uppercase tracking-widest shadow-xl flex items-center gap-2 group cursor-pointer transition-all duration-300"
            >
              Explore Signature Packages
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => setCurrentTab('special-request')}
              className={`px-6 py-4 rounded-xl border font-bold text-sm uppercase tracking-widest cursor-pointer transition-all duration-300 ${
                theme === 'day'
                  ? 'border-teal-900/20 text-teal-950 hover:bg-teal-50/40'
                  : 'border-white/10 text-white hover:bg-white/5'
              }`}
            >
              Customise Trip
            </button>
          </motion.div>
        </div>

        {/* Right column premium scenic card */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <motion.div
            variants={itemVariants}
            className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10 group"
          >
            {/* Visual background placeholder with a beautiful luxury resort picture */}
            <img 
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop"
              alt="Himalayan Tudor Castle Retreat"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-10000"
            />
            {/* Dark elegant scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6" />

            <div className="absolute bottom-0 inset-x-0 p-6 text-white text-left">
              <span className="text-[10px] font-bold tracking-widest text-teal-400 uppercase mb-1 block">
                Featured Escape
              </span>
              <h4 className="text-xl font-bold tracking-tight mb-2">
                The Cloud-Kissed Tudor Estate
              </h4>
              <p className="text-xs text-slate-300 font-light leading-relaxed mb-3">
                Experience high-altitude solitude and heavy oak cabin mists accompanied by observatory domes and vintage Defender safaris.
              </p>
              <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg px-3.5 py-2">
                <span className="text-xs uppercase tracking-wider font-semibold">6 Days Escape</span>
                <span className="text-teal-300 font-bold">₹2,80,000</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. STATS & MULTIPLIERS (TRUST BUILDERS) */}
      <motion.div 
        variants={itemVariants}
        className={`grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 rounded-2xl border backdrop-blur-sm p-8 sm:p-10 mb-24 shadow-md text-left ${cardBgColor}`}
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-teal-600 dark:text-teal-400 animate-pulse" />
            <span 
              className={`text-2xl sm:text-3xl font-black tracking-tight ${theme === 'day' ? '' : 'text-white'}`}
              style={theme === 'day' ? { color: '#6e739f' } : undefined}
            >
              New
            </span>
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Age Startup
          </p>
          <p 
            className={`text-[11px] mt-1 ${theme === 'day' ? '' : 'text-slate-600 dark:text-slate-400'}`}
            style={theme === 'day' ? { color: '#6e739f' } : undefined}
          >
            Starting our elite journey in 2026.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-teal-600 dark:text-teal-400 fill-teal-600 dark:fill-teal-400" />
            <span 
              className={`text-2xl sm:text-3xl font-black tracking-tight ${theme === 'day' ? '' : 'text-white'}`}
              style={theme === 'day' ? { color: '#6e739f' } : undefined}
            >
              100%
            </span>
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Custom Itineraries
          </p>
          <p 
            className={`text-[11px] mt-1 ${theme === 'day' ? '' : 'text-slate-600 dark:text-slate-400'}`}
            style={theme === 'day' ? { color: '#6e739f' } : undefined}
          >
            Bespoke plans drafted from scratch.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <span 
              className={`text-2xl sm:text-3xl font-black tracking-tight ${theme === 'day' ? '' : 'text-white'}`}
              style={theme === 'day' ? { color: '#6e739f' } : undefined}
            >
              100%
            </span>
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Direct Support Index
          </p>
          <p 
            className={`text-[11px] mt-1 ${theme === 'day' ? '' : 'text-slate-600 dark:text-slate-400'}`}
            style={theme === 'day' ? { color: '#6e739f' } : undefined}
          >
            Founders are available 24/7 on WhatsApp.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <span 
              className={`text-2xl sm:text-3xl font-black tracking-tight ${theme === 'day' ? '' : 'text-white'}`}
              style={theme === 'day' ? { color: '#6e739f' } : undefined}
            >
              Bespoke
            </span>
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Local Discoveries
          </p>
          <p 
            className={`text-[11px] mt-1 ${theme === 'day' ? '' : 'text-slate-600 dark:text-slate-400'}`}
            style={theme === 'day' ? { color: '#6e739f' } : undefined}
          >
            Exploring unseen pathways in India.
          </p>
        </div>
      </motion.div>

      {/* 3. CINEMATIC TEXT STORY & EXPERIENCE BLOCK */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center text-left mb-20">
        <motion.div variants={itemVariants} className="space-y-6">
          <span className="text-xs font-bold tracking-widest uppercase text-teal-600 dark:text-cyan-400">
            Our Philosophia
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${theme === 'day' ? 'text-teal-950' : 'text-white'}`}>
            For those who feel deep, collect beauty, and leave no traces.
          </h2>
          <p className={`text-sm leading-relaxed ${theme === 'day' ? 'text-teal-950/75' : 'text-slate-400'}`}>
            Standard luxury package sites list sights. We curate silence. When you book a Signature Rishikesh flight, you do not simply visit the Ganges. You watch it clear itself of sand on a secret private shoreline while classical string quartets resonate with the mountain winds.
          </p>
          <p className={`text-sm leading-relaxed ${theme === 'day' ? 'text-teal-950/75' : 'text-slate-400'}`}>
            We value environmental sovereignty. JOURNEYO offsets charter fuels, supports local Himalayan botanists, and operates with zero plastic across all high camps.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setCurrentTab('about-us')}
              className="text-teal-600 dark:text-teal-200 font-bold uppercase text-xs tracking-widest group flex items-center gap-2 cursor-pointer"
            >
              Learn about our charter commitments
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          className="relative rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 aspect-video shadow-xl"
        >
          {/* A gorgeous tranquil high-quality valley lake picture */}
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
            alt="Secluded Island Lagoon Luxury"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </div>
    </motion.div>
  );
}
