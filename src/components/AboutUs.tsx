import React from 'react';
import { ShieldCheck, Trees, Compass, Users, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutUsProps {
  theme: 'day' | 'night';
}

export default function AboutUs({ theme }: AboutUsProps) {
  // Theme color settings
  const textTitleColor = theme === 'day' ? 'text-[#4A2E1F]' : 'text-[#F5E9DB]';
  const textSubColor = theme === 'day' ? 'text-[#6E5847]' : 'text-[#D7C2A5]';
  const cardBgClasses = theme === 'day'
    ? 'bg-[#FFFFFF] border-[#C6B08E]/40 hover:shadow-lg text-[#4A2E1F]'
    : 'bg-[#2A211B] border-[#4A3A2F]/50 hover:shadow-lg text-[#F5E9DB]';

  const iconColorClass = theme === 'day' ? 'text-[#8B6B52]' : 'text-[#B98A5E]';

  const coreValues = [
    {
      icon: <ShieldCheck className={`w-6 h-6 ${iconColorClass}`} />,
      title: '24/7 Travel Support',
      description: 'Our team stays available throughout your journey, providing assistance, guidance, and quick support whenever you need it.'
    },
    {
      icon: <Award className={`w-6 h-6 ${iconColorClass}`} />,
      title: 'Affordable Experiences',
      description: 'Carefully planned travel packages that balance comfort, quality, and value without stretching your budget.'
    },
    {
      icon: <Compass className={`w-6 h-6 ${iconColorClass}`} />,
      title: 'Personalized Itineraries',
      description: 'Every trip is tailored to your interests, travel style, and preferences, creating a journey that feels uniquely yours.'
    }
  ];

  const owners = [
    {
      name: 'Vanshika Maheshwari',
      role: 'Co-Founder | Client Relations & Brand Growth',
      desc: 'Vanshika manages customer interactions, itinerary planning, and community engagement. She helps travelers find experiences that match their interests while also leading Route Story’s social media presence and brand communication.',
      icon: <Users className={`w-5 h-5 ${iconColorClass}`} />
    },
    {
      name: 'Khushal Chordia',
      role: 'Co-Founder | Technology & Digital Experience',
      desc: 'Khushal manages Route Story’s website, technical infrastructure, and digital systems. He ensures a seamless online experience, secure booking processes, and reliable platform performance for every traveler.',
      icon: <ShieldCheck className={`w-5 h-5 ${iconColorClass}`} />
    },
    {
      name: 'Rishabh Jain',
      role: 'co-Founder & Operations Lead',
      desc: 'Rishabh oversees the overall management and operations of Route Story. From coordinating the team and developing travel packages to ensuring smooth customer experiences, he focuses on turning every travel plan into a well-organized and memorable journey.',
      icon: <Compass className={`w-5 h-5 ${iconColorClass}`} />
    }
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 relative w-full text-left">
      {/* SECTION 1: Brand story intro */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center mb-24">
        <div className="lg:col-span-7 space-y-6">
          <span className={`text-xs font-bold tracking-widest uppercase mb-2 block animate-pulse font-mono ${
            theme === 'day' ? 'text-[#8B6B52]' : 'text-[#B98A5E]'
          }`}>
            OUR STORY
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${textTitleColor}`}>
            Discover The Stories Behind Every Journey
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed opacity-85 ${theme === 'day' ? 'text-[#6E5847]' : 'text-[#D7C2A5]/85'}`}>
            Route Story was founded with a passion for helping travelers experience India beyond ordinary sightseeing. We believe that travel is not just about reaching a destination—it’s about discovering the stories, cultures, people, and memories that make every journey unique.
          </p>
          <p className={`text-sm leading-relaxed opacity-75 ${theme === 'day' ? 'text-[#6E5847]/80' : 'text-[#D7C2A5]/75'}`}>
            From personalized itineraries and carefully curated travel packages to dedicated customer support, our team works to make every trip smooth, affordable, and unforgettable.
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
              <p className="text-sm font-semibold italic">
                “Travel isn’t measured in miles. It’s measured in stories, experiences, and memories.”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Core Values cards */}
      <div className="mb-24">
        <div className="max-w-xl mb-12">
          <span className={`text-[10px] font-bold uppercase tracking-widest block mb-1 font-mono ${
            theme === 'day' ? 'text-[#8B6B52]' : 'text-[#B98A5E]'
          }`}>
            OUR PROMISE
          </span>
          <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${textTitleColor}`}>
            Why Travel With Route Story?
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
                  ? 'bg-[#8B6B52]/10 border-[#C6B08E]/20 text-[#8B6B52]' 
                  : 'bg-[#B98A5E]/20 border-[#4A3A2F]/40 text-[#B98A5E]'
              }`}>
                {val.icon}
              </div>
              <h4 className={`text-base sm:text-lg font-bold tracking-tight mb-3 ${theme === 'day' ? 'text-[#4A2E1F]' : 'text-[#F5E9DB]'}`}>
                {val.title}
              </h4>
              <p className={`text-xs leading-relaxed opacity-75 ${theme === 'day' ? 'text-[#6E5847]' : 'text-[#D7C2A5]'}`}>
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: The Visionary Founders / Owners */}
      <div className="mb-24">
        <div className="max-w-xl mb-12">
          <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${textTitleColor}`}>
            Meet the team behind ROUTE Story
          </h3>
          <p className={`text-sm leading-relaxed mt-2 ${textSubColor}`}>
            Route Story was created with a simple belief — every destination has a story, and every traveler deserves to experience it. Our team works together to design meaningful journeys, personalized itineraries, and memorable travel experiences across India.
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
                    ? 'bg-[#8B6B52]/10 border-[#C6B08E]/20' 
                    : 'bg-[#B98A5E]/20 border-[#4A3A2F]/40'
                }`}>
                  {owner.icon}
                </div>
                <span className={`text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                  theme === 'day'
                    ? 'bg-[#E8DFCF] text-[#8B6B52] border-[#C6B08E]/25'
                    : 'bg-[#211A15] text-[#B98A5E] border-[#4A3A2F]/30'
                }`}>
                  Partner
                </span>
              </div>
              <h4 className={`text-xl font-extrabold tracking-tight mb-1 ${theme === 'day' ? 'text-[#4A2E1F]' : 'text-[#F5E9DB]'}`}>
                {owner.name}
              </h4>
              <p className={`text-[10px] font-bold tracking-wider mb-4 uppercase font-mono ${
                theme === 'day' ? 'text-[#8B5E3C]' : 'text-[#C6B08E]'
              }`}>
                {owner.role}
              </p>
              <p className={`text-[12px] sm:text-xs leading-relaxed opacity-85 ${theme === 'day' ? 'text-[#6E5847]' : 'text-[#D7C2A5]'}`}>
                {owner.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
