import React from 'react';
import { ArrowRight, Star, ShieldCheck, MapPin, Sparkles, Award } from 'lucide-react';
// @ts-ignore
import palaceSunset from '../assets/images/gadisar_lake_sunset_1780651087481.png';

interface HomeProps {
  setCurrentTab: (tab: string) => void;
  theme: 'day' | 'night';
  onOpenBooking: () => void;
}

export default function Home({ setCurrentTab, theme, onOpenBooking }: HomeProps) {
  // Use the requested dark theme color definitions consistently
  const textTitleColor = theme === 'day' ? 'text-[#4A2E1F]' : 'text-[#F5E9DB]';
  const textSubColor = theme === 'day' ? 'text-[#6E5847]' : 'text-[#D7C2A5]';
  const cardBgColor = theme === 'day' ? 'bg-[#FFFFFF] border-[#C6B08E]/40 shadow-sm' : 'bg-[#2A211B] border-[#4A3A2F]/50 shadow-sm';

  return (
    <div className="w-full relative">
      {/* 1. LUXURY EDITORIAL HERO SECTION (85-100vh, fullbleed background, centered left alignment) */}
      <div className="relative w-full h-[85vh] sm:h-[90vh] lg:h-[95vh] min-h-[640px] overflow-hidden flex items-center bg-[#121110]">
        {/* Fullbleed background image */}
        <img 
          src={palaceSunset}
          alt="Ancient desert lake temple of Gadisar Jaisalmer at sunset"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center select-none"
        />

        {/* Aman Resorts style left-to-right subtle dark-to-transparent gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/50 to-transparent z-[1]" />
        
        {/* Content alignment box */}
        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10 flex items-center h-full">
          {/* Aligned left, max-width 500px overlay with sufficient padding padding-y */}
          <div className="max-w-[500px] text-left space-y-7 sm:space-y-9 py-12">
            
            {/* Fine luxury brand badge */}
            <div className="inline-flex items-center gap-3 tracking-[0.25em] text-[10px] sm:text-xs font-semibold uppercase text-[#D7C2A5] dark:text-[#C6B08E]">
              <span className="w-8 h-[1px] bg-[#D7C2A5]/60 dark:bg-[#C6B08E]/60"></span>
              <span>ROUTE STORY</span>
            </div>

            {/* Playfair Display Serif Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6.5xl font-light tracking-wide text-[#FBF9F6] leading-[1.1] uppercase">
              Every Route <br />
              <span className="italic font-normal">Has A</span> <br className="sm:hidden" /> Story
            </h1>

            {/* Inter modern body text */}
            <p className="font-sans text-sm sm:text-base leading-relaxed text-[#F9F6F0]/85 font-light max-w-[460px]">
              We design personalized travel experiences that connect you with places, people, and stories.
            </p>

            {/* Timeless elegant CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                onClick={() => setCurrentTab('packages')}
                className="px-8 py-4.5 bg-[#8B5E3C] hover:bg-[#A47148] text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-none shadow-md hover:shadow-xl hover:-translate-y-0.5 text-center cursor-pointer"
              >
                Explore Signature Packages
              </button>
              
              {/* Secondary CTA */}
              <button
                onClick={() => setCurrentTab('special-request')}
                className="px-8 py-4.5 border border-[#D7C2A5]/40 hover:border-[#D7C2A5]/80 text-[#FFFDFC] text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-none bg-transparent hover:bg-[#8B5E3C]/20 hover:-translate-y-0.5 text-center cursor-pointer"
              >
                Customise Trip
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main body content wrapper */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative w-full">
        {/* 2. STATS SECTION (No animations, gorgeous static dark styles) */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 rounded-2xl border p-8 sm:p-10 mb-24 transition-colors duration-300 ${cardBgColor}`}>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Award className={`w-5 h-5 ${theme === 'day' ? 'text-[#8B6B52]' : 'text-[#B98A5E]'}`} />
              <span id="stat-heading-affordable" className={`text-lg sm:text-xl font-bold tracking-tight ${textTitleColor}`}>
                Affordable
              </span>
            </div>
            <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${textSubColor}`}>
              Premium experiences without premium prices.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Star className={`w-5 h-5 fill-current ${theme === 'day' ? 'text-[#8B6B52]' : 'text-[#B98A5E]'}`} />
              <span id="stat-heading-tailor-made" className={`text-lg sm:text-xl font-bold tracking-tight ${textTitleColor}`}>
                Tailor-Made
              </span>
            </div>
            <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${textSubColor}`}>
              Every journey crafted around you.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className={`w-5 h-5 ${theme === 'day' ? 'text-[#8B6B52]' : 'text-[#B98A5E]'}`} />
              <span id="stat-heading-support" className={`text-lg sm:text-xl font-bold tracking-tight ${textTitleColor}`}>
                24/7 Support
              </span>
            </div>
            <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${textSubColor}`}>
              Travel confidently, we’re always here.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className={`w-5 h-5 ${theme === 'day' ? 'text-[#8B6B52]' : 'text-[#B98A5E]'}`} />
              <span id="stat-heading-gems" className={`text-lg sm:text-xl font-bold tracking-tight ${textTitleColor}`}>
                Hidden Gems
              </span>
            </div>
            <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${textSubColor}`}>
              Discover India’s best-kept secrets.
            </p>
          </div>
        </div>

      {/* 3. EXPERIENCE BLOCK (Static, neat display) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center text-left mb-20">
        <div className="space-y-6">
          <span className={`text-xs font-bold tracking-widest uppercase font-mono ${theme === 'day' ? 'text-[#8B6B52]' : 'text-[#B98A5E]'}`}>
            Our Philosophy
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${textTitleColor}`}>
            Why Route Story?
          </h2>
          <p className={`text-sm leading-relaxed font-light ${textSubColor}`} style={{ fontSize: '16px' }}>
            At Route Story, we believe travel is about more than just visiting places. It’s about discovering hidden gems, experiencing local culture, and creating memories that stay with you long after the journey ends.
          </p>
          <p className={`text-sm leading-relaxed font-light ${textSubColor}`} style={{ fontSize: '16px' }}>
            From the snow-covered mountains of Kashmir to the golden deserts of Rajasthan, from the lush valleys of Meghalaya to the beaches of South India, every journey is crafted to be unique, meaningful, and unforgettable.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setCurrentTab('about-us')}
              className={`${theme === 'day' ? 'text-[#8B5E3C]' : 'text-[#C6B08E]'} font-bold uppercase text-xs tracking-widest flex items-center gap-2 cursor-pointer font-serif italic hover:opacity-80 transition-opacity`}
              style={{ fontSize: '14px' }}
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className={`relative rounded-2xl overflow-hidden border aspect-video shadow-2xl transition-colors duration-300 ${
          theme === 'day' ? 'border-[#C6B08E]/30 bg-[#FFFFFF]' : 'border-[#4A3A2F]/50 bg-[#2A211B]'
        }`}>
          <img 
            id="philosophy-palace-image"
            src={palaceSunset}
            alt="Majestic ancient Indian palace and fortress in golden sunset light"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>
    </div>
  </div>
);
}
