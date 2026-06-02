import React from 'react';
import { ShieldCheck, Trees, Compass, Users, Award, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutUsProps {
  theme: 'day' | 'night';
}

export default function AboutUs({ theme }: AboutUsProps) {
  // Theme color settings
  const textTitleColor = theme === 'day' ? 'text-teal-950' : 'text-white';
  const textSubColor = theme === 'day' ? 'text-teal-900/70' : 'text-slate-300';
  const cardBgClasses = theme === 'day'
    ? 'bg-white/40 border-teal-100/50 hover:shadow-lg'
    : 'bg-slate-950/45 border-indigo-950/40 hover:shadow-lg';

  const coreValues = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: 'Immediate Direct Standby',
      description: 'Your physical sanctuary is directly backstopped by our founders. Get elite emergency assistance via continuous standby WhatsApp hotlines.'
    },
    {
      icon: <Trees className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: 'Full Ecological Zero-Footprint',
      description: 'We avoid commercial mass tourism, design low-density trail footprints, and prioritize plastic-free hand-packed expeditions.'
    },
    {
      icon: <Compass className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: 'Architectures of Silence',
      description: 'Our travel architects avoid commercial traps. We discover custom, off-the-radar coordinates on serene high peaks and mountain decks.'
    }
  ];

  const owners = [
    {
      name: 'Vanshika Jaju',
      role: 'Social Media Management',
      desc: 'Cultivating JOURNEYO\'s aesthetic online. She curates our visual narratives, highlights remote sanctuaries, and connects with our growing modern community of explorers.',
      icon: <Users className="w-5 h-5 text-teal-600 dark:text-teal-400" />
    },
    {
      name: 'Khushal Chordia',
      role: 'Technical Support Manager',
      desc: 'Powering our backend infrastructure and real-time connectivity systems. He ensures secure booking flows, reliable online standby portals, and continuous customer support channels.',
      icon: <ShieldCheck className="w-5 h-5 text-teal-600 dark:text-teal-400" />
    },
    {
      name: 'Rishabh Jain',
      role: 'Tour Operator',
      desc: 'Directing the core of ground operations and personalized itineraries. He coordinates secure travel links, maps remote campsites, and schedules certified regional naturalists.',
      icon: <Compass className="w-5 h-5 text-teal-600 dark:text-teal-400" />
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
          <span className="text-xs font-bold tracking-widest uppercase text-teal-600 dark:text-cyan-400 mb-2 block animate-pulse">
            The Chronicle
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${textTitleColor}`}>
            Redefining Silence <br />
            For the Next Era.
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed opacity-85 ${theme === 'day' ? 'text-teal-950' : 'text-slate-300'}`}>
            JOURNEYO is a newly envisioned premier boutique travel startup launched in 2026. Conceived by a close-knit group of travel designers, we realized that traditional package companies are overly concerned with rigid schedules, completely missing the mental and emotional alchemy of pure solitude and direct personal touch.
          </p>
          <p className={`text-sm leading-relaxed opacity-75 ${theme === 'day' ? 'text-teal-900' : 'text-slate-400'}`}>
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
              <span className="text-[10px] font-bold tracking-widest text-teal-400 uppercase mb-1.5 block">
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
          <span className="text-[10px] font-bold uppercase tracking-widest text-teal-600 dark:text-cyan-400 block mb-1">
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
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-5 border border-teal-500/20">
                {val.icon}
              </div>
              <h4 className={`text-base sm:text-lg font-bold tracking-tight mb-3 ${theme === 'day' ? 'text-teal-950' : 'text-white'}`}>
                {val.title}
              </h4>
              <p 
                className={`text-xs leading-relaxed opacity-75 ${theme === 'day' ? '' : 'text-slate-800 dark:text-slate-300'}`}
                style={theme === 'day' ? { color: '#6e739f' } : undefined}
              >
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: The Visionary Founders / Owners */}
      <div className="mb-24">
        <div className="max-w-xl mb-12">
          <span className="text-[10px] font-bold uppercase tracking-widest text-teal-600 dark:text-cyan-400 block mb-1">
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
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                  {owner.icon}
                </div>
                <span className="text-[9px] font-extrabold uppercase tracking-widest bg-teal-500/10 text-teal-600 dark:text-teal-400 px-2.5 py-1 rounded-full border border-teal-500/10">
                  Partner
                </span>
              </div>
              <h4 className={`text-lg font-black tracking-tight ${theme === 'day' ? 'text-teal-950' : 'text-white'}`}>
                {owner.name}
              </h4>
              <p className="text-xs font-bold text-teal-600 dark:text-teal-400 tracking-wide mb-3 uppercase">
                {owner.role}
              </p>
              <p 
                className={`text-xs leading-relaxed opacity-75 ${theme === 'day' ? '' : 'text-slate-800 dark:text-slate-300'}`}
                style={theme === 'day' ? { color: '#6e739f' } : undefined}
              >
                {owner.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: Timeline Journey of the Brand */}
      <div>
        <div className="max-w-xl mb-12 sm:mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-teal-600 dark:text-cyan-400 block mb-1">
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
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-indigo-500 mb-4 block select-none">
                  {ms.year}
                </span>
                <h4 className={`text-sm font-bold tracking-tight mb-2 ${theme === 'day' ? 'text-teal-950' : 'text-white'}`}>
                  {ms.title}
                </h4>
                <p 
                  className={`text-xs leading-relaxed opacity-70 ${theme === 'day' ? '' : 'text-slate-800 dark:text-slate-300'}`}
                  style={theme === 'day' ? { color: '#6e739f' } : undefined}
                >
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
