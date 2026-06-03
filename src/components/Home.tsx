import React from 'react';
import { ArrowRight, Star, ShieldCheck, MapPin, Sparkles, Award } from 'lucide-react';

interface HomeProps {
  setCurrentTab: (tab: string) => void;
  theme: 'day' | 'night';
  onOpenBooking: () => void;
}

function HeroIllustration({ theme }: { theme: 'day' | 'night' }) {
  return (
    <div className={`relative w-full h-[320px] sm:h-[440px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border transition-colors duration-300 ${
      theme === 'day' ? 'border-[#8B6B52]/20 bg-[#FFFDFC]' : 'border-[#8B6B52]/20 bg-[#1E1E1E]'
    } select-none`}>
      <img 
        src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2000&auto=format&fit=crop"
        alt="Immersive aerial slice of pristine coastal waters, white-sand cove, and lush greenery"
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function Home({ setCurrentTab, theme, onOpenBooking }: HomeProps) {
  // Use the requested dark theme color definitions consistently
  const textTitleColor = theme === 'day' ? 'text-[#3B2E25]' : 'text-[#F5E6D3]';
  const textSubColor = theme === 'day' ? 'text-[#3B2E25]/80' : 'text-[#F5E6D3]/80';
  const cardBgColor = theme === 'day' ? 'bg-[#FFFDFC]/90 border-[#8B6B52]/25 shadow-xl' : 'bg-[#2A2522]/90 border-[#8B6B52]/35 shadow-xl';

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 relative w-full">
      {/* 1. HERO SECTION (Centered layout from light theme, styled in beautiful dark colors) */}
      <div className="flex flex-col items-center mb-24 relative w-full text-center">
        {/* Sparkles badge with soft gold accents */}
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider mb-6 w-fit transition-colors duration-300 ${
          theme === 'day'
            ? 'border-[#8B6B52]/20 bg-[#F5E6D3]/50 text-[#8B6B52]'
            : 'border-[#8B6B52]/30 bg-[#2A2522] text-[#D4B48C]'
        }`}>
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curators of Rare Travel Expeditions</span>
        </div>

        {/* Centered Heading "Travel Beyond Ordinary" */}
        <h1 className={`text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] mb-8 transition-colors duration-300 ${textTitleColor}`}>
          Travel Beyond Ordinary
        </h1>

        {/* Scenic Beach Cove Image from light-theme, beautifully integrated */}
        <div className="w-full mb-12">
          <HeroIllustration theme={theme} />
        </div>

        {/* Description and elegant CTAs inside card */}
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full text-left p-8 sm:p-10 rounded-3xl border shadow-2xl transition-colors duration-300 ${
          theme === 'day' ? 'bg-[#FFFDFC]/90 border-[#8B6B52]/20 text-[#3B2E25]' : 'bg-[#2A2522]/90 border-[#8B6B52]/30 text-[#F5E6D3]'
        }`}>
          <div className="md:col-span-7 space-y-4">
            <p className={`text-lg sm:text-xl font-medium italic border-l-4 border-[#8B6B52] pl-4 py-1 ${textTitleColor}`}>
              “Travel softly, collect beautifully, remember forever.”
            </p>
            <p className={`text-base leading-relaxed font-light ${theme === 'day' ? 'text-[#3B2E25]/90' : 'text-[#F5E6D3]/90'}`} style={{ fontSize: '18px' }}>
              JOURNEYO drafts bespoke sanctuaries of high adventure. From insulated Himalayan glacier domes under pristine constellations to private yachting beaches on deep sacred waters, we mold space, time, and luxury to match your soul’s blueprint.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 justify-start md:justify-end items-stretch sm:items-center">
            <button
              onClick={() => setCurrentTab('packages')}
              className="px-6 py-4 rounded-xl bg-[#8B6B52] hover:bg-[#72553E] text-[#F5E6D3] font-bold text-sm uppercase tracking-widest shadow-lg flex items-center justify-center gap-2 group cursor-pointer transition-all duration-300 w-full sm:w-auto md:w-full lg:w-auto"
            >
              Explore Signature Packages
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => setCurrentTab('special-request')}
              className={`px-6 py-4 rounded-xl border font-bold text-sm uppercase tracking-widest cursor-pointer transition-all duration-300 w-full sm:w-auto md:w-full lg:w-auto text-center ${
                theme === 'day'
                  ? 'border-[#8B6B52]/40 text-[#8B6B52] hover:bg-[#8B6B52]/10'
                  : 'border-[#8B6B52]/40 text-[#F5E6D3] hover:bg-[#8B6B52]/15'
              }`}
            >
              Customise Trip
            </button>
          </div>
        </div>
      </div>

      {/* 2. STATS SECTION (No animations, gorgeous static dark styles) */}
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 rounded-2xl border p-8 sm:p-10 mb-24 transition-colors duration-300 ${cardBgColor}`}>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Award className={`w-5 h-5 ${theme === 'day' ? 'text-[#8B6B52]' : 'text-[#D4B48C]'}`} />
            <span className={`text-2xl sm:text-3xl font-black tracking-tight ${textTitleColor}`}>
              New
            </span>
          </div>
          <p className={`text-xs font-semibold uppercase tracking-widest ${theme === 'day' ? 'text-[#3B2E25]/70' : 'text-[#F5E6D3]/70'}`}>
            Age Startup
          </p>
          <p className={`text-[11px] mt-1 ${theme === 'day' ? 'text-[#3B2E25]/60' : 'text-[#F5E6D3]/60'}`}>
            Starting our elite journey in 2026.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Star className={`w-5 h-5 fill-current ${theme === 'day' ? 'text-[#8B6B52]' : 'text-[#D4B48C]'}`} />
            <span className={`text-2xl sm:text-3xl font-black tracking-tight ${textTitleColor}`}>
              100%
            </span>
          </div>
          <p className={`text-xs font-semibold uppercase tracking-widest ${theme === 'day' ? 'text-[#3B2E25]/70' : 'text-[#F5E6D3]/70'}`}>
            Custom Itineraries
          </p>
          <p className={`text-[11px] mt-1 ${theme === 'day' ? 'text-[#3B2E25]/60' : 'text-[#F5E6D3]/60'}`}>
            Bespoke plans drafted from scratch.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className={`w-5 h-5 ${theme === 'day' ? 'text-[#8B6B52]' : 'text-[#D4B48C]'}`} />
            <span className={`text-2xl sm:text-3xl font-black tracking-tight ${textTitleColor}`}>
              100%
            </span>
          </div>
          <p className={`text-xs font-semibold uppercase tracking-widest ${theme === 'day' ? 'text-[#3B2E25]/70' : 'text-[#F5E6D3]/70'}`}>
            Direct Support Index
          </p>
          <p className={`text-[11px] mt-1 ${theme === 'day' ? 'text-[#3B2E25]/60' : 'text-[#F5E6D3]/60'}`}>
            Founders are available 24/7 on WhatsApp.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <MapPin className={`w-5 h-5 ${theme === 'day' ? 'text-[#8B6B52]' : 'text-[#D4B48C]'}`} />
            <span className={`text-2xl sm:text-3xl font-black tracking-tight ${textTitleColor}`}>
              Bespoke
            </span>
          </div>
          <p className={`text-xs font-semibold uppercase tracking-widest ${theme === 'day' ? 'text-[#3B2E25]/70' : 'text-[#F5E6D3]/70'}`}>
            Local Discoveries
          </p>
          <p className={`text-[11px] mt-1 ${theme === 'day' ? 'text-[#3B2E25]/60' : 'text-[#F5E6D3]/60'}`}>
            Exploring unseen pathways in India.
          </p>
        </div>
      </div>

      {/* 3. EXPERIENCE BLOCK (Static, neat display) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center text-left mb-20">
        <div className="space-y-6">
          <span className={`text-xs font-bold tracking-widest uppercase font-mono ${theme === 'day' ? 'text-[#8B6B52]' : 'text-[#D4B48C]'}`}>
            Our Philosophia
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${textTitleColor}`}>
            For those who feel deep, collect beauty, and leave no traces.
          </h2>
          <p className={`text-sm leading-relaxed font-light ${theme === 'day' ? 'text-[#3B2E25]/80' : 'text-[#F5E6D3]/80'}`} style={{ fontSize: '16px' }}>
            Standard luxury package sites list sights. We curate silence. When you book a Signature Rishikesh flight, you do not simply visit the Ganges. You watch it clear itself of sand on a secret private shoreline while classical string quartets resonate with the mountain winds.
          </p>
          <p className={`text-sm leading-relaxed font-light ${theme === 'day' ? 'text-[#3B2E25]/80' : 'text-[#F5E6D3]/80'}`} style={{ fontSize: '16px' }}>
            We value environmental sovereignty. JOURNEYO offsets charter fuels, supports local Himalayan botanists, and operates with zero plastic across all high camps.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setCurrentTab('about-us')}
              className={`${theme === 'day' ? 'text-[#8B6B52]' : 'text-[#D4B48C]'} font-bold uppercase text-xs tracking-widest flex items-center gap-2 cursor-pointer font-serif italic hover:opacity-80 transition-opacity`}
              style={{ fontSize: '14px' }}
            >
              Learn about our charter commitments
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className={`relative rounded-2xl overflow-hidden border aspect-video shadow-2xl transition-colors duration-300 ${
          theme === 'day' ? 'border-[#8B6B52]/20 bg-[#FFFDFC]' : 'border-[#8B6B52]/30 bg-[#1E1E1E]'
        }`}>
          {/* Transparent, high quality valley beach photo */}
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
            alt="Secluded Island Lagoon Luxury"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>
    </div>
  );
}
