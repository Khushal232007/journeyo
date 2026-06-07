import React from 'react';
import { ArrowRight, Star, ShieldCheck, MapPin, Award, Compass, Feather } from 'lucide-react';
// @ts-ignore
import palaceSunset from '../assets/images/gadisar_lake_sunset_1780651087481.png';
// @ts-ignore
import palaceSunsetAuthentic from '../assets/images/palace_sunset_authentic_1780648182756.png';

const LOCAL_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?q=80&w=1200&auto=format&fit=crop";

function handleHomeImageError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
  e.currentTarget.src = LOCAL_FALLBACK_IMAGE;
}

interface HomeProps {
  setCurrentTab: (tab: string) => void;
  theme: 'day' | 'night';
  onOpenBooking: () => void;
}

export default function Home({ setCurrentTab, theme, onOpenBooking }: HomeProps) {
  // Theme color settings
  const textTitleColor = theme === 'day' ? 'text-[#4A2E1F]' : 'text-[#F5E9DB]';
  const textSubColor = theme === 'day' ? 'text-[#6E5847]' : 'text-[#D7C2A5]';
  const cardBgColor = theme === 'day' ? 'bg-[#FFFFFF] border-[#C6B08E]/40' : 'bg-[#211A15] border-[#4A3A2F]/50';
  const accentLightColor = theme === 'day' ? 'bg-[#8B5E3C]/5 text-[#8B5E3C]' : 'bg-[#B98A5E]/10 text-[#B98A5E]';
  const borderCol = theme === 'day' ? 'border-[#C6B08E]/25' : 'border-[#4A3A2F]/30';

  return (
    <div className="w-full relative select-none text-left">
      {/* 1. EDITORIAL FULLBLEED HERO SECTION - UPDATED HEADLINE */}
      <div className="relative w-full h-[85vh] sm:h-[90vh] lg:h-[95vh] min-h-[600px] overflow-hidden flex items-center bg-[#121110]">
        <img 
          src={palaceSunset}
          alt="Ancient desert lake temple of Gadisar Jaisalmer at sunset"
          referrerPolicy="no-referrer"
          onError={handleHomeImageError}
          className="absolute inset-0 w-full h-full object-cover object-center select-none brightness-[0.85]"
        />

        {/* Deep, premium luxury vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/40 to-transparent z-[1]" />
        
        {/* Fine gold line accents to mimic boutique packaging */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C6B08E]/30 to-transparent z-[2]" />

        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10 flex items-center h-full">
          {/* Magazine left-aligned text column */}
          <div className="max-w-[620px] text-left space-y-8 py-12">
            
            <div className="inline-flex items-center gap-3 tracking-[0.3em] text-[10px] font-bold uppercase text-[#D7C2A5]">
              <span className="w-8 h-[1px] bg-[#D7C2A5]/60"></span>
              <span>EST. 2026</span>
            </div>

            {/* Playfair Style Elegant Display Headline - "Every Route Has A Story" */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-extralight tracking-wide text-[#FBF9F6] leading-[1.1] uppercase">
              Every Route <br />
              <span className="italic font-light tracking-wide text-[#D7C2A5]">Has A</span> <br /> 
              Story
            </h1>

            {/* Premium, concise supporting subtitle as requested */}
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-[#F9F6F0]/90 font-light max-w-[460px]">
              Curated journeys, meaningful experiences, and stories worth remembering.
            </p>

            {/* Elegant luxury brand CTAs with minimal style */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <button
                onClick={() => setCurrentTab('packages')}
                className="px-8 py-4 bg-[#8B5E3C] hover:bg-[#A47148] text-white text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 text-center cursor-pointer"
              >
                See Our Trips
              </button>
              
              <button
                onClick={() => setCurrentTab('special-request')}
                className="px-8 py-4 border border-[#D7C2A5]/30 hover:border-[#D7C2A5]/80 text-[#FFFDFC] text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-300 bg-black/20 hover:bg-[#8B5E3C]/20 hover:-translate-y-0.5 text-center cursor-pointer"
              >
                Plan a Custom Trip
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. EMOTIONAL BRAND TRUTH SIGNATURE */}
      <section className="py-16 md:py-24 border-b border-black/5 dark:border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl pr-4 text-left">
            <span className={`text-[10px] font-bold tracking-widest uppercase font-mono mb-4 block ${theme === 'day' ? 'text-[#8B5E3C]' : 'text-[#C6B08E]'}`}>
              THE IDENTITY
            </span>
            <blockquote className={`font-serif text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed ${textTitleColor}`}>
              “We build paths for those who seek to connect, not just consume. Every ancient stone temple, every apple orchard gate in Harsil, and every sand dune under the Jaisalmer moon holds a voice. Our life's work is to translate them for you.”
            </blockquote>
            <p className={`text-xs font-serif tracking-widest uppercase mt-4 block opacity-60 ${textSubColor}`}>
              — THE ROUTE STORY CODE
            </p>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRICAL STORYMAKING: JOURNEY OF THE MONTH */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Storyline Text */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6 text-left">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#8B5E3C]/10 text-[#8B6B52] dark:text-[#C6B08E]">
                <Star className="w-3 h-3 fill-current" />
                <span>Journey of the Month</span>
              </div>
              
              <h2 className={`font-serif text-3xl sm:text-4xl font-light tracking-tight leading-tight ${textTitleColor}`}>
                The Whispering Orchards of <span className="italic font-normal text-[#8B5E3C] dark:text-[#C6B08E]">Harsil Valley</span>
              </h2>
              
              <p className={`text-xs sm:text-sm leading-relaxed font-light ${textSubColor}`}>
                Tucked deep in the mountains beside the Bhagirathi river is Harsil, a quiet village where apple orchards grow below tall cedar trees. We planned this trip for people who want to step away from busy tourist spots and enjoy some peace in the mountains.
              </p>
              
              <p className={`text-xs sm:text-sm leading-relaxed font-light ${textSubColor}`}>
                You will stay in a cozy cedar cabin, wake up to the clean smell of mountain woodsmoke, and walk old trails with a local shepherd who knows the valley inside out. It's a slow, quiet getaway in the Himalayas.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => setCurrentTab('packages')}
                  className={`inline-flex items-center gap-2 pb-1 border-b ${
                    theme === 'day' ? 'border-[#8B5E3C]/40 text-[#4A2E1F]' : 'border-[#C6B08E]/40 text-[#F5E9DB]'
                  } text-xs font-bold uppercase tracking-widest hover:border-[#8B5E3C] transition-colors cursor-pointer`}
                >
                  Read the Harsil Guide <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Layered overlapping images with premium matching URLs */}
            <div className="lg:col-span-7 order-1 lg:order-2 relative flex items-center justify-center">
              
              <div className={`absolute top-[-10%] right-[-5%] w-[80%] h-[110%] rounded-2xl -z-10 ${
                theme === 'day' ? 'bg-[#E8DFCF]/30' : 'bg-[#2A211B]/40'
              }`} />
              
              {/* Main premium pine forest mountain valley landscape */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Harsil_valley_and_the_Bhagirathi_river.jpg"
                  alt="High Himalaya snow pine tree mountain valley of Harsil"
                  referrerPolicy="no-referrer"
                  onError={handleHomeImageError}
                  className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-[1.5s]"
                />
                
                {/* Embedded caption pill inside image */}
                <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/15 text-white">
                  <p className="text-[9px] tracking-widest uppercase font-mono opacity-80 leading-none">Altitude</p>
                  <p className="text-xs font-bold leading-none mt-1">Harsil • 2,620 Meters</p>
                </div>
              </div>

              {/* Overlapping organic detail shot of river stream / temple rocks */}
              <div className="absolute left-[-5%] bottom-[-8%] w-[42%] aspect-[3/4] hidden sm:block rounded-xl overflow-hidden shadow-2xl border-4 border-[#F7F4EE] dark:border-[#16110D]">
                <img 
                  src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=500&auto=format&fit=crop"
                  alt="Traditional organic red apple growing in Harsil Valley orchard"
                  referrerPolicy="no-referrer"
                  onError={handleHomeImageError}
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. FOUNDER PRESENCE: WHY ROUTE STORY EXISTS */}
      <section className={`py-20 md:py-28 border-t border-b ${borderCol} ${cardBgColor} backdrop-blur-sm relative z-10 transition-colors duration-300`}>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#8B5E3C]/[2%] blur-[70px] pointer-events-none -z-10" />
        
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Header info */}
            <div className="md:col-span-4 text-left space-y-4">
              <span className={`text-[10px] font-bold tracking-widest uppercase font-mono ${theme === 'day' ? 'text-[#8B5E3C]' : 'text-[#C6B08E]'}`}>
                HUMAN CONTEXT
              </span>
              <h2 className={`font-serif text-2xl sm:text-3xl font-light tracking-tight leading-tight ${theme === 'day' ? 'text-[#4A2E1F]' : 'text-white'}`}>
                Why Route Story Exists
              </h2>
              <p className={`text-xs sm:text-sm leading-relaxed ${textSubColor}`}>
                We are three friends who got tired of the modern "sightseeing speedrun." We believe the world suffers when travel becomes just another transaction. Let us tell you our story.
              </p>
              
              <div className="h-[1px] w-12 bg-[#8B5E3C]/40 mt-6" />
            </div>

            {/* Letter format written in narrative tone */}
            <div className={`md:col-span-8 text-left space-y-6 font-serif text-sm sm:text-base leading-relaxed ${textSubColor} pl-0 md:pl-8`}>
              <p className="italic">
                “In the summer of 2025, we walked the historical mountain pass down from Gangotri. As we sat by the turquoise meltwaters of the river, drinking ginger tea with a resident monk, we looked around and noticed a modern luxury bus offload sixty tourists. They had fifteen minutes to snap photos, buy plastic water bottles, and board again. They missed the forest scent. They never heard the monk’s story. They left as strangers to the Himalayas.
              </p>
              
              <p className="italic">
                That evening, the idea of **Route Story** was born over a wood-fired hearth.
              </p>
              
              <p className="italic">
                We formed this company around a singular commitment: to treat you like a lifelong companion, not a sales booking. Vanshika manages customer interactions and brand growth. Khushal builds your technology and digital systems. Rishabh guides the overall operations to ensure memorable and well-organized journeys.
              </p>

              <p className="italic">
                We promise you actual human care, slow routes, and memories that linger in your soul long after you unpack. No rushed agendas, no tourist traps—just beautiful, deliberate stories worth living.”
              </p>

              {/* Founders signatures */}
              <div className="pt-4 flex flex-wrap gap-8 items-center justify-start border-t border-black/5 dark:border-white/5">
                <div>
                  <p className="text-xs font-sans tracking-wider uppercase font-semibold text-[#8B5E3C] dark:text-[#C6B08E] leading-none mb-1">Vanshika Maheshwari</p>
                  <span className="text-[10px] font-sans opacity-60">Co-Founder | Client Relations & Brand Growth</span>
                </div>
                <div>
                  <p className="text-xs font-sans tracking-wider uppercase font-semibold text-[#8B5E3C] dark:text-[#C6B08E] leading-none mb-1">Khushal Chordia</p>
                  <span className="text-[10px] font-sans opacity-60">Co-Founder | Technology & Digital Experience</span>
                </div>
                <div>
                  <p className="text-xs font-sans tracking-wider uppercase font-semibold text-[#8B5E3C] dark:text-[#C6B08E] leading-none mb-1">Rishabh Jain</p>
                  <span className="text-[10px] font-sans opacity-60">Founder & Operations Lead</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. STORY DECK (HIDDEN GEMS) - UPDATED WITH HIGH-QUALITY REAL INDIA DESTINATION IMAGES */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12 text-left">
          
          <div className="max-w-2xl mb-16 space-y-4">
            <span className={`text-xs font-bold tracking-widest uppercase font-mono ${theme === 'day' ? 'text-[#8B5E3C]' : 'text-[#C6B08E]'}`}>
              PEOPLE & PLACES
            </span>
            <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight ${textTitleColor}`}>
              A Few Spots <br />
              <span className="italic font-normal font-serif text-[#8B5E3C] dark:text-[#C6B08E]">We Highly Recommend</span>
            </h2>
            <p className={`text-xs sm:text-sm leading-relaxed ${textSubColor}`}>
              We travel off the main roads to find quiet, real places. Here are three exceptional spots we think every traveler should experience.
            </p>
          </div>

          <div className="space-y-24 sm:space-y-32">
            
            {/* Pick 1: Mana - Updated picture with genuine Himalayan trail at Indo-Tibetan border */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 relative">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-black/5 shadow-xl">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e4/A_view_of_Mana_Village.jpg" 
                    alt="Scenic old houses and mountain valley landscape of Mana Village Uttarakhand" 
                    referrerPolicy="no-referrer"
                    onError={handleHomeImageError}
                    className="w-full h-full object-cover transform hover:scale-101 transition-transform duration-700"
                  />
                </div>
                
                <div className={`absolute top-[-15px] left-[-15px] shadow-lg rounded-xl p-4 border font-serif flex flex-col justify-center text-center w-14 h-14 ${
                  theme === 'day' ? 'bg-white border-[#C6B08E]/40 text-[#8B5E3C]' : 'bg-[#211A15] border-[#4A3A2F]/50 text-[#C6B08E]'
                }`}>
                  <span className="text-xs font-bold leading-none">01</span>
                  <span className="text-[8px] font-sans tracking-widest uppercase mt-1">PICK</span>
                </div>
              </div>
              
              <div className="lg:col-span-5 text-left space-y-4 lg:pl-6">
                <span className="text-[10px] tracking-widest font-mono text-[#8B5E3C] dark:text-[#C6B08E] uppercase font-bold">Near the Border</span>
                <h3 className={`font-serif text-2xl font-light tracking-tight ${textTitleColor}`}>
                  Mana — A Village of Local Stories
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${textSubColor}`}>
                  Mana is a beautiful, quiet village situated very close to the Tibetan border. Here, you can walk to Bhim Pul—a massive stone bridge built naturally over the rushing Saraswati River. It is a wonderful place to sit with local weavers, share simple laughter, and listen to stories of the old days.
                </p>
                <div className="pt-2">
                  <button onClick={() => setCurrentTab('packages')} className="text-xs font-semibold tracking-wider text-[#8B5E3C] dark:text-[#C6B08E] uppercase flex items-center gap-1.5 hover:opacity-85 transition-opacity cursor-pointer text-left">
                    View Stays <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Pick 2: Triyuginarayan - Updated picture with holy ritual stone structure/architecture */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1 text-left space-y-4 lg:pr-6">
                <span className="text-[10px] tracking-widest font-mono text-[#8B5E3C] dark:text-[#C6B08E] uppercase font-bold">Ancient Stays</span>
                <h3 className={`font-serif text-2xl font-light tracking-tight ${textTitleColor}`}>
                  Triyuginarayan — The Warm Hearth
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${textSubColor}`}>
                  This temple is famous for a wood fire that has kept burning for generations in the mountain courtyard. Local stories tell us that this is the spot where Lord Shiva and Goddess Parvati were married. Many travelers visit simply to see the fire, sit with the local keepers, and appreciate the peaceful mountain air.
                </p>
                <div className="pt-2">
                  <button onClick={() => setCurrentTab('packages')} className="text-xs font-semibold tracking-wider text-[#8B5E3C] dark:text-[#C6B08E] uppercase flex items-center gap-1.5 hover:opacity-85 transition-opacity cursor-pointer text-left">
                    View Stays <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 relative">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-black/5 shadow-xl">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Triyuginarayan_Temple_by_Sujay25.jpg" 
                    alt="Sacred stone temples of India Himalayas" 
                    referrerPolicy="no-referrer"
                    onError={handleHomeImageError}
                    className="w-full h-full object-cover transform hover:scale-101 transition-transform duration-700"
                  />
                </div>
                
                <div className={`absolute top-[-15px] right-[-15px] shadow-lg rounded-xl p-4 border font-serif flex flex-col justify-center text-center w-14 h-14 ${
                  theme === 'day' ? 'bg-white border-[#C6B08E]/40 text-[#8B5E3C]' : 'bg-[#211A15] border-[#4A3A2F]/50 text-[#C6B08E]'
                }`}>
                  <span className="text-xs font-bold leading-none">02</span>
                  <span className="text-[8px] font-sans tracking-widest uppercase mt-1">PICK</span>
                </div>
              </div>
            </div>

            {/* Pick 3: Surya Kund - Updated picture with scenic mountain spring and sacred stone cliffs of India */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 relative">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-black/5 shadow-xl">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Hot_spring_water_at_Yamunotri.jpg" 
                    alt="Pristine sacred hot spring waters bubbling beneath mountains" 
                    referrerPolicy="no-referrer"
                    onError={handleHomeImageError}
                    className="w-full h-full object-cover transform hover:scale-101 transition-transform duration-700"
                  />
                </div>
                
                <div className={`absolute top-[-15px] left-[-15px] shadow-lg rounded-xl p-4 border font-serif flex flex-col justify-center text-center w-14 h-14 ${
                  theme === 'day' ? 'bg-white border-[#C6B08E]/40 text-[#8B5E3C]' : 'bg-[#211A15] border-[#4A3A2F]/50 text-[#C6B08E]'
                }`}>
                  <span className="text-xs font-bold leading-none">03</span>
                  <span className="text-[8px] font-sans tracking-widest uppercase mt-1">PICK</span>
                </div>
              </div>
              
              <div className="lg:col-span-5 text-left space-y-4 lg:pl-6">
                <span className="text-[10px] tracking-widest font-mono text-[#8B5E3C] dark:text-[#C6B08E] uppercase font-bold">Nature Walks</span>
                <h3 className={`font-serif text-2xl font-light tracking-tight ${textTitleColor}`}>
                  The Hot Springs of Surya Kund
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${textSubColor}`}>
                  Before heading up to the main temple, we highly recommend taking a moment to visit the hot springs of Surya Kund. Rising from deep cracks in the rocks, the warm, bubbling mineral waters look incredible in the cold mountain air. We arrange quiet morning walks here so you can enjoy the spring in peace.
                </p>
                <div className="pt-2">
                  <button onClick={() => setCurrentTab('packages')} className="text-xs font-semibold tracking-wider text-[#8B5E3C] dark:text-[#C6B08E] uppercase flex items-center gap-1.5 hover:opacity-85 transition-opacity cursor-pointer text-left">
                    View Stays <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Centered concluding call-to-action block - integrated elegantly here as reviews are detached */}
          <div className="pt-32 pb-6 text-center max-w-xl mx-auto space-y-6">
            <h3 className={`font-serif text-2xl font-light ${textTitleColor}`}>
              Ready to write your chapter?
            </h3>
            <p className={`text-xs leading-relaxed ${textSubColor}`}>
              Speak with a real travel curator right now. We do not use automatic chat loops. You will connect directly with Vanshika, Khushal, or Rishabh.
            </p>
            <div>
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 bg-[#8B5E3C] hover:bg-[#A47148] text-white text-[10px] tracking-[0.25em] font-bold uppercase cursor-pointer shadow-md transition-all duration-300"
              >
                Inquire with Our Planners
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
