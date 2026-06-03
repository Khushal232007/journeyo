import React from 'react';
import { ShieldCheck, Trees, Compass, Users, Award, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutUsProps {
  theme: 'day' | 'night';
}

export default function AboutUs({ theme }: AboutUsProps) {
  // Theme color settings
  const textTitleColor = theme === 'day' ? 'text-[#3B2E25]' : 'text-[#F5E6D3]';
  const textSubColor = theme === 'day' ? 'text-[#3B2E25]/85' : 'text-[#F5E6D3]/80';
  const cardBgClasses = theme === 'day'
    ? 'bg-[#FFFDFC]/90 border-[#8B6B52]/20 hover:shadow-lg text-[#3B2E25]'
    : 'bg-[#2A2522]/80 border-[#8B6B52]/30 hover:shadow-lg text-[#F5E6D3]';

  const iconColorClass = theme === 'day' ? 'text-[#8B6B52]' : 'text-[#D4B48C]';

  const coreValues = [
    {
      icon: <ShieldCheck className={`w-6 h-6 ${iconColorClass}`} />,
      title: 'Immediate Direct Standby',
      description: 'Your physical sanctuary is directly backstopped by our founders. Get elite emergency assistance via continuous standby WhatsApp hotlines.'
    },
    {
      icon: <Trees className={`w-6 h-6 ${iconColorClass}`} />,
      title: 'Full Ecological Zero-Footprint',
      description: 'We avoid commercial mass tourism, design low-density trail footprints, and prioritize plastic-free hand-packed expeditions.'
    },
    {
      icon: <Compass className={`w-6 h-6 ${iconColorClass}`} />,
      title: 'Architectures of Silence',
      description: 'Our travel architects avoid commercial traps. We discover custom, off-the-radar coordinates on serene high peaks and mountain decks.'
    }
  ];

  const owners = [
    {
      name: 'Vanshika Jaju',
      role: 'Social Media Management',
      desc: 'Cultivating JOURNEYO\'s aesthetic online. She curates our visual narratives, highlights remote sanctuaries, and connects with our growing modern community of explorers.',
      icon: <Users className={`w-5 h-5 ${iconColorClass}`} />
    },
    {
      name: 'Khushal Chordia',
      role: 'Technical Support Manager',
      desc: 'Powering our backend infrastructure and real-time connectivity systems. He ensures secure booking flows, reliable online standby portals, and continuous customer support channels.',
      icon: <ShieldCheck className={`w-5 h-5 ${iconColorClass}`} />
    },
    {
      name: 'Rishabh Jain',
      role: 'Tour Operator',
      desc: 'Directing the core of ground operations and personalized itineraries. He coordinates secure travel links, maps remote campsites, and schedules certified regional naturalists.',
      icon: <Compass className={`w-5 h-5 ${iconColorClass}`} />
    }
  ];

  const milestones = [
    { year: '2025 Dec', title: 'The Conception Blueprint', desc: 'Our active founders merged expertise to challenge aged resort models with highly immersive travel.' },
    { year: '2026 Feb', title: 'Curating Indian Wilderness', desc: 'Conducted rigorous ground mapping in Rishikesh, Ramganga, and Mussoorie for low-density retreats.' },
    { year: '2026 Jun', title: 'The General Unveiling', desc: 'Successfully launched our custom digital bookings and elite support channels to open-minded explorers.' },
    { year: '2027', title: 'Next-Gen Solar Retreats', desc: 'Our upcoming phase aiming at introducing low-density solar dome safaris across untrodden peaks.' }
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 relative w-full text-left">
      
      {/* SECTION 1: Brand story intro */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center mb-24">
        <div className="lg:col-span-7 space-y-6">
          <span className={`text-xs font-bold tracking-widest uppercase mb-2 block animate-pulse font-mono ${
            theme === 'day' ? 'text-[#8B6B52]' : 'text-[#D4B48C]'
          }`}>
            The Chronicle
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${textTitleColor}`}>
            Redefining Silence <br />
            For the Next Era.
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed opacity-85 ${theme === 'day' ? 'text-[#3B2E25]' : 'text-[#F5E6D3]/85'}`}>
            JOURNEYO is a newly envisioned premier boutique travel startup launched in 2026. Conceived by a close-knit group of travel designers, we realized that traditional package companies are overly concerned with rigid schedules, completely missing the mental and emotional alchemy of pure solitude and direct personal touch.
          </p>
          <p className={`text-sm leading-relaxed opacity-75 ${theme === 'day' ? 'text-[#3B2E25]' : 'text-[#F5E6D3]/75'}`}>
            By leveraging our founders' specialized strengths, we coordinate a nimble, low-density network of certified private guides, authentic rustic boutique lodges, and secure remote partner carriers. Whether you seek a sacred forest, an alpine sunset, or high-altitude quietude, we have you covered.
          </p>
        </div>

        {/* Right side graphical showcase */}
        <div className="lg:col-span-5">
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=700&auto=format&fit=crop"
              alt="Himalayan Stone Temple"
              className="w-full h-full object-cover"
            />
            {/* Elegant Scrim banner */}
            <div className="absolute inset-0 bg-gradient-to-t from-teal-950/85 via-transparent to-transparent flex flex-col justify-end p-6" />
            <div className="absolute bottom-6 left-6 text-white text-left">
              <span className="text-[10px] font-bold tracking-widest text-[#D4B48C] uppercase mb-1.5 block">
                The Heritage Anchor
              </span>
              <p className="text-sm font-semibold italic">
                “True luxury is not about massive hotels. It is about fewer people, fresh trails, and absolute clarity.”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Core Values cards */}
      <div className="mb-24">
        <div className="max-w-xl mb-12">
          <span className={`text-[10px] font-bold uppercase tracking-widest block mb-1 font-mono ${
            theme === 'day' ? 'text-[#8B6B52]' : 'text-[#D4B48C]'
          }`}>
            Our Directives
          </span>
          <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${textTitleColor}`}>
            The Sovereignty Code
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {coreValues.map((val, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${cardBgClasses}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${
                theme === 'day' 
                  ? 'bg-[#8B6B52]/10 border-[#8B6B52]/20 text-[#8B6B52]' 
                  : 'bg-[#8B6B52]/25 border-[#8B6B52]/40 text-[#D4B48C]'
              }`}>
                {val.icon}
              </div>
              <h4 className={`text-base sm:text-lg font-bold tracking-tight mb-3 ${theme === 'day' ? 'text-[#3B2E25]' : 'text-[#F5E6D3]'}`}>
                {val.title}
              </h4>
              <p className={`text-xs leading-relaxed opacity-75 ${theme === 'day' ? 'text-[#3B2E25]/80' : 'text-[#F5E6D3]/80'}`}>
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: The Visionary Founders / Owners */}
      <div className="mb-24">
        <div className="max-w-xl mb-12">
          <span className={`text-[10px] font-bold uppercase tracking-widest block mb-1 font-mono ${
            theme === 'day' ? 'text-[#8B6B52]' : 'text-[#D4B48C]'
          }`}>
            Our Leadership
          </span>
          <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${textTitleColor}`}>
            The Visionary Founders
          </h3>
          <p className={`text-sm leading-relaxed mt-2 ${textSubColor}`}>
            Meet the direct partners guiding JOURNEYO’s next-generation expedition startup—bringing pristine brand aesthetics, complete core technical stability, and hands-on operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {owners.map((owner, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 relative overflow-hidden group ${cardBgClasses}`}
            >
              <div className="flex justify-between items-start mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                  theme === 'day' 
                    ? 'bg-[#8B6B52]/10 border-[#8B6B52]/20' 
                    : 'bg-[#8B6B52]/25 border-[#8B6B52]/40'
                }`}>
                  {owner.icon}
                </div>
                <span className={`text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                  theme === 'day'
                    ? 'bg-[#F5E6D3]/50 text-[#8B6B52] border-[#8B6B52]/25'
                    : 'bg-[#2A2522]/50 text-[#D4B48C] border-[#8B6B52]/30'
                }`}>
                  Partner
                </span>
              </div>
              <h4 className={`text-lg font-black tracking-tight ${theme === 'day' ? 'text-[#3B2E25]' : 'text-[#F5E6D3]'}`}>
                {owner.name}
              </h4>
              <p className={`text-xs font-bold tracking-wide mb-3 uppercase font-mono ${
                theme === 'day' ? 'text-[#8B6B52]' : 'text-[#D4B48C]'
              }`}>
                {owner.role}
              </p>
              <p className={`text-xs leading-relaxed opacity-75 ${theme === 'day' ? 'text-[#3B2E25]/80' : 'text-[#F5E6D3]/80'}`}>
                {owner.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: Timeline Journey of the Brand */}
      <div>
        <div className="max-w-xl mb-12 sm:mb-16">
          <span className={`text-[10px] font-bold uppercase tracking-widest block mb-1 font-mono ${
            theme === 'day' ? 'text-[#8B6B52]' : 'text-[#D4B48C]'
          }`}>
            Our Evolution
          </span>
          <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${textTitleColor}`}>
            Our Chronological Steps
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {milestones.map((ms, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border relative flex flex-col justify-between ${cardBgClasses}`}
            >
              <div>
                <span className={`text-2xl font-black mb-4 block select-none font-serif ${
                  theme === 'day' ? 'text-[#8B6B52]' : 'text-[#D4B48C]'
                }`}>
                  {ms.year}
                </span>
                <h4 className={`text-sm font-bold tracking-tight mb-2 ${theme === 'day' ? 'text-[#3B2E25]' : 'text-[#F5E6D3]'}`}>
                  {ms.title}
                </h4>
                <p className={`text-xs leading-relaxed opacity-70 ${theme === 'day' ? 'text-[#3B2E25]/80' : 'text-[#F5E6D3]/70'}`}>
                  {ms.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
