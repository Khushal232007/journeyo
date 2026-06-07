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
    ? 'bg-[#FFFFFF] border-[#C6B08E]/30 text-[#4A2E1F]'
    : 'bg-[#211A15] border-[#4A3A2F]/45 text-[#F5E9DB]';

  const iconColorClass = theme === 'day' ? 'text-[#8B6B52]' : 'text-[#B98A5E]' ;
  const borderCol = theme === 'day' ? 'border-[#C6B08E]/25' : 'border-[#4A3A2F]/30';

  const coreValues = [
    {
      label: 'Direct Contact',
      description: "We don't use automated customer service or chatbot scripts. You will have our personal phone numbers to text or call us directly whenever you need help during your trip."
    },
    {
      label: 'Honest Pricing',
      description: 'We avoid tourist traps and hidden commissions. We book accommodations and hire guides directly with local families, so your money goes straight to supporting the communities you visit.'
    },
    {
      label: 'Slow and Relaxed Speed',
      description: 'We believe travel is better when you slow down. We design quiet, balanced plans that let you sit by a river, drink local tea, and look around at your own comfortable, natural pace.'
    }
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12 py-12 sm:py-20 relative w-full text-left select-none">
      
      {/* 1. INTRO SPLIT STORY BLOCK (Asymmetrical editorial columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-28">
        
        {/* Left Column: Manifesto heading */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <span className={`text-[10px] font-bold tracking-[0.3em] uppercase block font-mono ${
            theme === 'day' ? 'text-[#8B6B52]' : 'text-[#B98A5E]'
          }`}>
            OUR MANIFESTO
          </span>
          <h1 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.1] ${textTitleColor}`}>
            We started Route Story to make travel <span className="italic font-normal text-[#8B5E3C] dark:text-[#C6B08E]">personal again</span>.
          </h1>
          <div className="h-[2px] w-12 bg-[#8B5E3C]/30" />
        </div>

        {/* Right Column: Deep descriptive paragraphs */}
        <div className="lg:col-span-7 space-y-6 text-xs sm:text-sm font-light leading-relaxed text-left">
          <p className={textSubColor}>
            Modern travel often feels rushed—a succession of rigid timetables, crowded buses, and fleeting photo stops. We believe you deserve to slow down.
          </p>
          
          <p className={textSubColor}>
            We started **Route Story** to return intention to travel. Every mountain path, quiet valley cottage, and ancient temple deserves to be experienced patiently rather than consumed.
          </p>

          <p className={textSubColor}>
            By building direct, personal friendships with native guides, temple keepers, and local mountain families, we ensure your journey is rooted in quiet, slow, and authentic moments.
          </p>
        </div>
      </div>

      {/* 2. THE THREE FOUNDATIONAL PILLARS (Asymmetrical overlap layout) */}
      <section className="py-16 md:py-24 border-t border-b border-black/5 dark:border-white/5 bg-[#8B5E3C]/[2%] rounded-none mb-28 px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 space-y-4 text-left">
            <span className="text-[10px] tracking-widest font-mono uppercase opacity-55">FOUNDATIONAL BINDINGS</span>
            <h3 className={`font-serif text-2xl sm:text-3xl font-light tracking-tight ${textTitleColor}`}>
              Our Commitments
            </h3>
            <p className={`text-xs ${textSubColor}`}>
              These are the permanent values we register for every route we sketch.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="space-y-4 text-left">
                <span className="font-serif italic text-lg text-[#8B5E3C] dark:text-[#C6B08E] font-semibold">0{idx + 1}</span>
                <h4 className={`font-sans font-bold text-sm tracking-wide uppercase ${theme === 'day' ? 'text-[#4A2E1F]' : 'text-white'}`}>
                  {value.label}
                </h4>
                <p className={`text-xs leading-relaxed ${textSubColor}`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. MODERN MINIMALIST FOUNDERS SECTION */}
      <div className="mb-20">
        <div className="max-w-2xl mb-12 text-left space-y-4">
          <span className={`text-[10px] font-bold tracking-widest uppercase font-mono ${theme === 'day' ? 'text-[#8B6B52]' : 'text-[#B98A5E]'}`}>
            THE TEAM
          </span>
          <h2 className={`font-serif text-3xl sm:text-4xl font-light tracking-tight ${textTitleColor}`}>
            Meet the Founders
          </h2>
          <p className={`text-xs sm:text-sm leading-relaxed ${textSubColor}`}>
            We are real people who love travel. We handle everything directly, so you always speak to someone who actually understands your trip.
          </p>
        </div>

        {/* Co-founder Cards: Clean, minimal, modern grid with consistent styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          
          {/* Card 1: Vanshika Maheshwari */}
          <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${cardBgClasses}`}>
            <div className="space-y-6">
              {/* Elegant Text-Based Monogram Badge */}
              <div className="aspect-[4/5] w-full rounded-xl flex items-center justify-center relative border border-[#C6B08E]/15 bg-[#8B5E3C]/5 dark:bg-[#C6B08E]/5">
                <div className="text-center space-y-2">
                  <div className="font-serif text-6xl font-extralight tracking-widest text-[#8B5E3C]/20 dark:text-[#C6B08E]/20">
                    VM
                  </div>
                  <div className="h-[1px] w-6 bg-[#8B5E3C]/25 mx-auto" />
                  <div className="text-[8px] font-mono tracking-[0.25em] text-[#8B5E3C]/60 dark:text-[#C6B08E]/60 uppercase">
                    EST. CO-FOUNDER
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-left">
                <span className="text-[10px] tracking-[0.18em] font-mono text-[#8B5E3C] dark:text-[#C6B08E] uppercase font-bold block">
                  Co-Founder | Client Relations & Brand Growth
                </span>
                <h3 className={`font-serif text-xl font-light tracking-tight ${textTitleColor}`}>
                  Vanshika Maheshwari
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed font-light ${textSubColor}`}>
                  Vanshika manages customer interactions, itinerary planning, and community engagement. She helps travelers find experiences that match their interests while also leading Route Story’s social media presence and brand communication.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 text-left">
              <p className={`text-xs italic leading-relaxed opacity-95 ${textSubColor}`}>
                “I believe travel is about true local connection. I stay in touch with our hosts and travelers to make sure everyone is comfortable and safe.”
              </p>
            </div>
          </div>

          {/* Card 2: Khushal Chordia */}
          <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${cardBgClasses}`}>
            <div className="space-y-6">
              {/* Elegant Text-Based Monogram Badge */}
              <div className="aspect-[4/5] w-full rounded-xl flex items-center justify-center relative border border-[#C6B08E]/15 bg-[#8B5E3C]/5 dark:bg-[#C6B08E]/5">
                <div className="text-center space-y-2">
                  <div className="font-serif text-6xl font-extralight tracking-widest text-[#8B5E3C]/20 dark:text-[#C6B08E]/20">
                    KC
                  </div>
                  <div className="h-[1px] w-6 bg-[#8B5E3C]/25 mx-auto" />
                  <div className="text-[8px] font-mono tracking-[0.25em] text-[#8B5E3C]/60 dark:text-[#C6B08E]/60 uppercase">
                    EST. CO-FOUNDER
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-left">
                <span className="text-[10px] tracking-[0.18em] font-mono text-[#8B5E3C] dark:text-[#C6B08E] uppercase font-bold block">
                  Co-Founder | Technology & Digital Experience
                </span>
                <h3 className={`font-serif text-xl font-light tracking-tight ${textTitleColor}`}>
                  Khushal Chordia
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed font-light ${textSubColor}`}>
                  Khushal manages Route Story’s website, technical infrastructure, and digital systems. He ensures a seamless online experience, secure booking processes, and reliable platform performance for every traveler.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 text-left">
              <p className={`text-xs italic leading-relaxed opacity-95 ${textSubColor}`}>
                “Our digital space should be simple, clear, and trustworthy. No annoying ads or tracking—just a calm space to book your next trip.”
              </p>
            </div>
          </div>

          {/* Card 3: Rishabh Jain */}
          <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${cardBgClasses}`}>
            <div className="space-y-6">
              {/* Elegant Text-Based Monogram Badge */}
              <div className="aspect-[4/5] w-full rounded-xl flex items-center justify-center relative border border-[#C6B08E]/15 bg-[#8B5E3C]/5 dark:bg-[#C6B08E]/5">
                <div className="text-center space-y-2">
                  <div className="font-serif text-6xl font-extralight tracking-widest text-[#8B5E3C]/20 dark:text-[#C6B08E]/20">
                    RJ
                  </div>
                  <div className="h-[1px] w-6 bg-[#8B5E3C]/25 mx-auto" />
                  <div className="text-[8px] font-mono tracking-[0.25em] text-[#8B5E3C]/60 dark:text-[#C6B08E]/60 uppercase">
                    FOUNDER & OPERATIONS LEAD
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-left">
                <span className="text-[10px] tracking-[0.18em] font-mono text-[#8B5E3C] dark:text-[#C6B08E] uppercase font-bold block">
                  Founder & Operations Lead
                </span>
                <h3 className={`font-serif text-xl font-light tracking-tight ${textTitleColor}`}>
                  Rishabh Jain
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed font-light ${textSubColor}`}>
                  Rishabh oversees the overall management and operations of Route Story. From coordinating the team and developing travel packages to ensuring smooth customer experiences, he focuses on turning every travel plan into a well-organized and memorable journey.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 text-left">
              <p className={`text-xs italic leading-relaxed opacity-95 ${textSubColor}`}>
                “The outdoors require respect and careful preparation. I design our logistics with extreme care so that you can travel at ease.”
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

