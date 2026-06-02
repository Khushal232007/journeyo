import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface WaveBackgroundProps {
  theme: 'day' | 'night';
}

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: string;
  duration: string;
}

interface Bird {
  id: number;
  top: number;
  delay: number;
  speed: number;
  scale: number;
}

export default function WaveBackground({ theme }: WaveBackgroundProps) {
  const [stars, setStars] = useState<Star[]>([]);
  const [birds, setBirds] = useState<Bird[]>([]);
  const [dayParticles, setDayParticles] = useState<Star[]>([]);

  // Generate random stars for Night Mode
  useEffect(() => {
    const starArray: Star[] = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 55, // keep on top half of screen
      size: Math.random() * 2 + 1,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
    }));
    setStars(starArray);
  }, []);

  // Generate birds for Day Mode
  useEffect(() => {
    const birdArray: Bird[] = Array.from({ length: 4 }).map((_, i) => ({
      id: i,
      top: 10 + Math.random() * 25, // percentage
      delay: i * 8, // staggered starts
      speed: 25 + Math.random() * 15, // seconds to cross screen
      scale: 0.5 + Math.random() * 0.6,
    }));
    setBirds(birdArray);

    // Generate floating shimmering light particles for Day Mode
    const particlesArray: Star[] = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 15 + Math.random() * 65,
      size: Math.random() * 2.5 + 1.5,
      delay: `${Math.random() * 10}s`,
      duration: `${8 + Math.random() * 10}s`,
    }));
    setDayParticles(particlesArray);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden pointer-events-none select-none">
      {/* Container with a transition effect */}
      <AnimatePresence mode="wait">
        {theme === 'day' ? (
          /* ====================================================
             DAY MODE: "Luxury Tropical Resort"
             ==================================================== */
          <motion.div
            key="day-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#bbe8f5] via-[#ebf8fa] to-[#f7f2eb] overflow-hidden"
          >
            {/* Ambient Sunlight Flare & Pulsing Sunbeams */}
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-yellow-100/30 to-coral-200/10 blur-[120px]" />
            <div className="absolute top-[15%] left-[20%] w-[350px] h-[350px] rounded-full bg-[#3ae0d8]/5 blur-[80px]" />
            <div className="absolute top-[-50px] right-[-50px] w-[250px] h-[250px] bg-yellow-100/15 rounded-full blur-[70px] animate-[sunbeam_14s_ease-in-out_infinite]" />
            <div className="absolute top-[20px] right-[20px] w-[180px] h-[180px] bg-gradient-to-br from-amber-200/20 to-teal-400/5 rounded-full blur-[45px] animate-[sunbeam_10s_ease-in-out_infinite]" style={{ animationDelay: '-5s' }} />

            {/* Shimmering Golden Dust Particles */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              {dayParticles.map((p) => (
                <span
                  key={p.id}
                  className="absolute rounded-full bg-gradient-to-tr from-amber-200/30 to-white/40 blur-[0.5px] animate-[floatUp_20s_linear_infinite]"
                  style={{
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    animationDelay: p.delay,
                    animationDuration: p.duration,
                  }}
                />
              ))}
            </div>

            {/* Clouds Drifting Slowly */}
            <div className="absolute inset-0 w-full h-full opacity-65">
              <div 
                className="absolute top-[8%] left-[-20%] w-[300px] h-[100px] bg-white/40 blur-[30px] rounded-full animate-[cloudDrift_75s_linear_infinite]"
                style={{ animationDelay: '0s' }}
              />
              <div 
                className="absolute top-[18%] right-[-15%] w-[450px] h-[140px] bg-white/30 blur-[40px] rounded-full animate-[cloudDriftReverse_95s_linear_infinite]"
                style={{ animationDelay: '-15s' }}
              />
              <div 
                className="absolute top-[5%] left-[40%] w-[200px] h-[70px] bg-white/20 blur-[20px] rounded-full animate-[cloudDrift_60s_linear_infinite]"
                style={{ animationDelay: '-30s' }}
              />
            </div>

            {/* Flying Tropical Birds */}
            <div className="absolute inset-0 w-full h-full">
              {birds.map((bird) => (
                <div
                  key={bird.id}
                  className="absolute opacity-80"
                  style={{
                    top: `${bird.top}%`,
                    left: '-10%',
                    transform: `scale(${bird.scale})`,
                    animation: `flyAcross ${bird.speed}s linear infinite`,
                    animationDelay: `${bird.delay}s`,
                  }}
                >
                  <svg
                    width="44"
                    height="18"
                    viewBox="0 0 44 18"
                    fill="none"
                    stroke="currentColor"
                    className="text-teal-600/50"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Flapping Wing Animation inside SVG via pure CSS elements */}
                    <path
                      d="M2 10 Q11 1 22 10 Q33 1 42 10"
                      className="animate-[wingFlap_1.2s_ease-in-out_infinite]"
                    />
                  </svg>
                </div>
              ))}
            </div>

            {/* Distant Biome Landscapes: Mountains & Desert Dunes */}
            <div className="absolute bottom-[200px] left-0 w-full h-[180px] pointer-events-none select-none z-0">
              
              {/* --- 1. MOUNTAINS (Left Sky) --- */}
              <div className="absolute bottom-0 left-[3%] w-[45%] h-[160px] opacity-60">
                <svg viewBox="0 0 500 200" className="w-full h-full object-contain" preserveAspectRatio="none">
                  {/* Left mountain peak */}
                  <polygon points="50,200 160,40 270,200" fill="#94a3b8" />
                  {/* Snowcap */}
                  <polygon points="135,76 160,40 185,76 172,70 160,82 148,70" fill="#ffffff" />
                  
                  {/* Right twin mountain peak closer */}
                  <polygon points="180,200 290,20 400,200" fill="#cbd5e1" />
                  {/* Snowcap */}
                  <polygon points="265,58 290,20 315,58 302,52 290,65 278,52" fill="#ffffff" />

                  {/* Shaded facets */}
                  <polygon points="160,40 270,200 160,200" fill="#475569" opacity="0.15" />
                  <polygon points="290,20 400,200 290,200" fill="#475569" opacity="0.1" />
                </svg>
              </div>

              {/* --- 2. DESERT DUNES (Right Sky with golden/orange warm gradient) --- */}
              <div className="absolute bottom-0 right-[2%] w-[48%] h-[140px] opacity-75">
                <svg viewBox="0 0 500 200" className="w-full h-full object-contain" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="duneGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="50%" stopColor="#fde047" />
                      <stop offset="100%" stopColor="#ca8a04" />
                    </linearGradient>
                    <linearGradient id="duneGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fcd34d" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                  </defs>
                  {/* Back Dunes */}
                  <path d="M 0 200 Q 180 80 320 150 T 500 120 L 500 200 Z" fill="url(#duneGrad1)" opacity="0.85" />
                  {/* Front Dune */}
                  <path d="M 100 200 Q 280 110 420 180 T 500 150 L 500 200 L 100 200 Z" fill="url(#duneGrad2)" opacity="0.95" />

                  {/* Small desert oasis and lone desert palm silhouette */}
                  <circle cx="180" cy="180" r="12" fill="#2dd4bf" opacity="0.4" />
                  <circle cx="180" cy="180" r="6" fill="#0d9488" opacity="0.6" />
                </svg>

                {/* Micro caravan: A few camels trekking across desert, slowly walking */}
                <div className="absolute bottom-[28px] right-[20%] opacity-70 animate-[caravanWalk_45s_linear_infinite] select-none pointer-events-none">
                  <svg width="60" height="15" viewBox="0 0 60 15" fill="currentColor" className="text-amber-900/60">
                    <path d="M 2 12 Q 3 4 5 4 H 7 Q 8 6 9 6 Q 10 3 13 4 Q 15 6 15 12 M 15 12 L 13 15 M 10 12 L 11 15 M 4 12 L 3 15" stroke="currentColor" strokeWidth="1" />
                    <path d="M 18 12 Q 19 4 21 4 H 23 Q 24 6 25 6 Q 26 3 29 4 Q 31 6 31 12 M 31 12 L 29 15 M 26 12 L 27 15 M 20 12 L 19 15" stroke="currentColor" strokeWidth="1" />
                    <path d="M 34 12 Q 35 5 37 5 H 39 Q 40 7 41 7 Q 42 4 45 5 Q 47 7 47 12 M 47 12 L 45 15 M 42 12 L 43 15 M 36 12 L 35 15" stroke="currentColor" strokeWidth="1" />
                    <line x1="15" y1="8" x2="18" y2="7" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                    <line x1="31" y1="8" x2="34" y2="7" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                  </svg>
                </div>
              </div>

              {/* --- 3. MOUNTAIN FOREST TREES (Pine / Evergreen Spruce Trees) --- */}
              <div className="absolute bottom-[-15px] left-[5%] flex gap-4 opacity-75">
                {Array.from({ length: 5 }).map((_, i) => {
                  const size = 30 + (i % 3) * 12;
                  const delay = i * 0.4;
                  return (
                    <div 
                      key={`pine-${i}`} 
                      className="origin-bottom"
                      style={{ 
                        width: `${size}px`, 
                        height: `${size * 1.6}px`, 
                        animation: `pineWindSway ${4 + (i % 2) * 2}s ease-in-out infinite`,
                        animationDelay: `${delay}s`,
                        transformOrigin: 'bottom center'
                      }}
                    >
                      <svg viewBox="0 0 100 150" className="w-full h-full">
                        <rect x="45" y="120" width="10" height="30" fill="#78350f" />
                        <polygon points="50,10 90,80 10,80" fill="#134e4a" />
                        <polygon points="50,35 85,95 15,95" fill="#0f766e" />
                        <polygon points="50,60 80,115 20,115" fill="#115e59" stroke="#14b8a6" strokeWidth="1" />
                      </svg>
                    </div>
                  );
                })}
              </div>

              {/* --- 4. TRUNK PALM TREES ON DESERT DUNES & BEACH EDGE --- */}
              <div className="absolute bottom-[-12px] right-[15%] flex gap-8 opacity-80 max-md:hidden">
                <div 
                  className="w-[45px] h-[90px]"
                  style={{
                    animation: 'palmBeachSway 8s ease-in-out infinite',
                    transformOrigin: 'bottom center'
                  }}
                >
                  <svg viewBox="0 0 100 180" className="w-full h-full">
                    <path d="M 50 180 Q 30 110 50 40" stroke="#78350f" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M 50 40 Q 80 45 95 65" stroke="#15803d" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M 50 40 Q 20 45 5 65" stroke="#15803d" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M 50 40 Q 70 20 85 10" stroke="#16a34a" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M 50 40 Q 30 20 15 10" stroke="#16a34a" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M 50 40 Q 50 10 50 0" stroke="#22c55e" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                    <circle cx="46" cy="46" r="4.5" fill="#451a03" />
                    <circle cx="54" cy="45" r="4" fill="#451a03" />
                  </svg>
                </div>
                <div 
                  className="w-[35px] h-[75px]"
                  style={{
                    animation: 'palmBeachSway 10s ease-in-out infinite',
                    animationDelay: '-3s',
                    transformOrigin: 'bottom center'
                  }}
                >
                  <svg viewBox="0 0 100 180" className="w-full h-full">
                    <path d="M 50 180 Q 70 110 50 40" stroke="#78350f" strokeWidth="5.5" fill="none" strokeLinecap="round" />
                    <path d="M 50 40 Q 80 50 90 70" stroke="#15803d" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M 50 40 Q 20 50 10 70" stroke="#15803d" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M 50 40 Q 75 25 80 15" stroke="#16a34a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <path d="M 50 40 Q 25 25 20 15" stroke="#16a34a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

            </div>

            {/* Realistic Sea Shoreline (Layered SVG Waves) */}
            <div className="absolute bottom-0 left-0 w-full h-[35%] min-h-[220px]">
              {/* Flat base sand */}
              <div className="absolute bottom-0 w-full h-[60px] bg-gradient-to-t from-[#efe7dc] to-[#f4ebe1]">
                
                {/* Animated beach umbrella */}
                <div 
                  className="absolute bottom-6 left-[18%] w-[55px] h-[55px] origin-bottom z-[2]"
                  style={{
                    animation: 'beachUmbrellaSway 6s ease-in-out infinite',
                    transformOrigin: 'bottom center'
                  }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
                    <line x1="50" y1="95" x2="50" y2="25" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                    <path d="M 12 40 Q 50 5 88 40 Z" fill="#2dd4bf" />
                    <path d="M 28 32 Q 50 5 72 32 Z" fill="#f8fafc" />
                    <path d="M 40 22 Q 50 5 60 22 Z" fill="#f43f5e" />
                    <circle cx="12" cy="40" r="2" fill="#e2e8f0" />
                    <circle cx="31" cy="35" r="2" fill="#e2e8f0" />
                    <circle cx="50" cy="33" r="2" fill="#e2e8f0" />
                    <circle cx="69" cy="35" r="2" fill="#e2e8f0" />
                    <circle cx="88" cy="40" r="2" fill="#e2e8f0" />
                  </svg>
                </div>

                {/* Sparkling Starfish / Sea Shell on another corner */}
                <div className="absolute bottom-3 left-[28%] w-4 h-4 text-amber-500/80 animate-[shimmerGlint_3s_ease-in-out_infinite] z-[1]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]">
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.784 1.4 8.168-7.334-3.856-7.334 3.856 1.4-8.168-5.934-5.784 8.2-1.192z" />
                  </svg>
                </div>

                {/* Sea shell sparkling */}
                <div 
                  className="absolute bottom-2 left-[38%] w-3 h-3 text-rose-300 animate-[shimmerGlint_4s_ease-in-out_infinite] z-[1]"
                  style={{ animationDelay: '1.5s' }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5s.5.22.5.5v4zm-.5-5.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75z" />
                  </svg>
                </div>

              </div>

              {/* Wave 3: Deep Shore water */}
              <svg
                className="absolute bottom-0 w-[200%] h-full text-teal-300/40 translate-x-[-25%] animate-[waveSwell_14s_ease-in-out_infinite]"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
              >
                <path
                  fill="currentColor"
                  d="M0,224 C480,290 960,160 1440,224 L1440,320 L0,320 Z"
                />
              </svg>

              {/* Wave 2: Turquoise Water */}
              <svg
                className="absolute bottom-0 w-[200%] h-full text-[#4ee5df]/30 translate-x-[-15%] animate-[waveSwell_11s_ease-in-out_infinite]"
                style={{ animationDelay: '-3s' }}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
              >
                <path
                  fill="currentColor"
                  d="M0,192 C480,110 960,260 1440,192 L1440,320 L0,320 Z"
                />
              </svg>

              {/* Wave 1: Gentle Beach foam shoreline */}
              <svg
                className="absolute bottom-0 w-[200%] h-full text-teal-100/40 translate-x-[-10%] animate-[waveSwell_8s_ease-in-out_infinite]"
                style={{ animationDelay: '-5s' }}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
              >
                <path
                  fill="currentColor"
                  d="M0,256 C360,210 1080,290 1440,256 L1440,320 L0,320 Z"
                />
              </svg>

              {/* Shimmering Sunlight specular sparkles on ocean surface */}
              <div className="absolute bottom-[35%] left-[20%] right-[20%] h-[30px] flex justify-around opacity-45">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" style={{ animationDuration: '3s', animationDelay: '0.2s' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-100 animate-ping" style={{ animationDuration: '4s', animationDelay: '1.5s' }} />
                <span className="w-2 h-2 rounded-full bg-teal-50 animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.8s' }} />
                <span className="w-1 h-1 rounded-full bg-white animate-ping" style={{ animationDuration: '5s', animationDelay: '2.1s' }} />
              </div>
            </div>

            {/* Elegant luxury sailing yacht on distant sea line */}
            <div 
              className="absolute bottom-[210px] opacity-25 select-none z-0 pointer-events-none"
              style={{
                animation: 'sailAcross 200s linear infinite',
                animationDelay: '10s'
              }}
            >
              <svg width="24" height="20" viewBox="0 0 24 20" fill="currentColor" className="text-teal-900/60">
                <path d="M2 13 C8 13, 14 13, 22 13 Q16 16 2 13 Z" />
                <path d="M12 2 L12 12" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 3 Q19 7 12 11" opacity="0.8" />
                <path d="M11 3 Q5 6 11 10" opacity="0.7" />
              </svg>
            </div>

            {/* Elegant Swaying Palm Leaf Silhouettes on Margins */}
            <div className="absolute top-0 right-[-3%] w-[380px] h-[55%] max-md:hidden opacity-30 select-none">
              <svg
                viewBox="0 0 400 600"
                className="w-full h-full object-contain origin-[top_right] animate-[palmSway_12s_ease-in-out_infinite]"
              >
                <path
                  d="M400,0 Q320,100 250,250 T200,450"
                  stroke="#115e59"
                  strokeWidth="8"
                  fill="none"
                />
                {/* Feathery detailed palm fronds */}
                {Array.from({ length: 18 }).map((_, idx) => (
                  <path
                    key={idx}
                    d={`M${380 - idx * 10},${idx * 16} Q${220 - idx * 8},${idx * 18 + 80} ${140 - idx * 5},${idx * 15 + 160}`}
                    stroke="#134e4a"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                ))}
              </svg>
            </div>

            <div className="absolute bottom-0 left-[-3%] w-[340px] h-[50%] max-md:hidden opacity-25 select-none">
              <svg
                viewBox="0 0 400 600"
                className="w-full h-full object-contain origin-[bottom_left] animate-[palmSway_10s_ease-in-out_infinite]"
                style={{ animationDelay: '-4s' }}
              >
                {/* Single majestic palm trunk arching outward */}
                <path
                  d="M0,600 Q90,450 180,300 T260,0"
                  stroke="#115e59"
                  strokeWidth="6"
                  fill="none"
                />
                {/* Leaf fronds arching down */}
                {Array.from({ length: 15 }).map((_, idx) => (
                  <path
                    key={idx}
                    d={`M${110 + idx * 8},${450 - idx * 24} Q${240 + idx * 6},${400 - idx * 22} ${350 + idx * 3},${500 - idx * 18}`}
                    stroke="#134e4a"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    fill="none"
                  />
                ))}
              </svg>
            </div>
          </motion.div>
        ) : (
          /* ====================================================
             NIGHT MODE: "Cinematic Ocean Night"
             ==================================================== */
          <motion.div
            key="night-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#030712] via-[#091024] to-[#040817] overflow-hidden"
          >
            {/* Glowing Moon Ambience */}
            <div className="absolute top-[8%] left-[12%] w-[120px] h-[120px] rounded-full bg-[#f8fafc]/95 shadow-[0_0_80px_20px_rgba(248,250,252,0.4)]" />
            <div className="absolute top-0 left-[5%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 blur-[130px]" />

            {/* Star Constellations Twinkling */}
            <div className="absolute inset-0 w-full h-full">
              {stars.map((star) => (
                <div
                  key={star.id}
                  className="absolute rounded-full bg-white"
                  style={{
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    boxShadow: star.size > 1.8 ? '0 0 6px 1px rgba(255,255,255,0.7)' : 'none',
                    animation: `starTwinkle ${star.duration} ease-in-out infinite`,
                    animationDelay: star.delay,
                  }}
                />
              ))}
            </div>

            {/* Glowing Silver Clouds */}
            <div className="absolute inset-0 w-full h-full opacity-35">
              <div 
                className="absolute top-[5%] left-[5%] w-[380px] h-[120px] bg-sky-950/40 blur-[45px] rounded-full animate-[cloudDrift_90s_linear_infinite]"
                style={{ animationDelay: '-10s' }}
              />
              <div 
                className="absolute top-[25%] right-[-10%] w-[500px] h-[150px] bg-slate-900/50 blur-[50px] rounded-full animate-[cloudDriftReverse_110s_linear_infinite]"
                style={{ animationDelay: '-40s' }}
              />
            </div>

            {/* Deep Night Sea Waves */}
            <div className="absolute bottom-0 left-0 w-full h-[35%] min-h-[220px]">
              {/* Deep ocean base dark floor */}
              <div className="absolute bottom-0 w-full h-[60px] bg-gradient-to-t from-[#02040a] to-[#030612]" />

              {/* Wave 3: Deep Night Sea Floor */}
              <svg
                className="absolute bottom-0 w-[200%] h-full text-indigo-950/40 translate-x-[-15%] animate-[waveSwell_16s_ease-in-out_infinite]"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
              >
                <path
                  fill="currentColor"
                  d="M0,224 C480,260 960,180 1440,224 L1440,320 L0,320 Z"
                />
              </svg>

              {/* Wave 2: Moonlit water surface */}
              <svg
                className="absolute bottom-0 w-[200%] h-full text-[#1d2d54]/30 translate-x-[-30%] animate-[waveSwell_13s_ease-in-out_infinite]"
                style={{ animationDelay: '-4s' }}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
              >
                <path
                  fill="currentColor"
                  d="M0,192 C480,240 960,140 1440,192 L1440,320 L0,320 Z"
                />
              </svg>

              {/* Wave 1: Silver moon glimmer surf line */}
              <svg
                className="absolute bottom-0 w-[200%] h-full text-slate-800/35 translate-x-[-5%] animate-[waveSwell_10s_ease-in-out_infinite]"
                style={{ animationDelay: '-7s' }}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
              >
                <path
                  fill="currentColor"
                  d="M0,256 C360,220 1080,270 1440,256 L1440,320 L0,320 Z"
                />
              </svg>

              {/* Moonlight Silver Water Reflections */}
              <div 
                className="absolute bottom-[28%] left-[10%] w-[35%] h-[40px] bg-gradient-to-r from-transparent via-[#f8fafc]/10 to-transparent blur-md transform skew-x-12 animate-[moonlightRipple_6s_ease-in-out_infinite]"
              />
              <div 
                className="absolute bottom-[20%] left-[15%] w-[25%] h-[25px] bg-gradient-to-r from-transparent via-[#f8fafc]/15 to-transparent blur-sm transform -skew-x-12 animate-[moonlightRipple_4s_ease-in-out_infinite]"
                style={{ animationDelay: '1.5s' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes cloudDrift {
          0% { transform: translateX(0vw); }
          100% { transform: translateX(110vw); }
        }
        @keyframes cloudDriftReverse {
          0% { transform: translateX(0vw); }
          100% { transform: translateX(-110vw); }
        }
        @keyframes flyAcross {
          0% { left: -10%; }
          100% { left: 110%; }
        }
        @keyframes wingFlap {
          0%, 100% { d: path("M2 10 Q11 1 22 10 Q33 1 42 10"); }
          50% { d: path("M2 10 Q11 18 22 10 Q33 18 42 10"); }
        }
        @keyframes waveSwell {
          0%, 100% { transform: translateY(0) scaleY(1) translateX(-5%); }
          50% { transform: translateY(8px) scaleY(1.05) translateX(10px); }
        }
        @keyframes palmSway {
          0%, 100% { transform: rotate(0deg) skewX(0deg); }
          50% { transform: rotate(-3deg) skewX(-1.5deg); }
        }
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes moonlightRipple {
          0%, 100% { opacity: 0.4; transform: scaleX(0.95) translateX(0px); }
          50% { opacity: 0.8; transform: scaleX(1.08) translateX(15px); }
        }
        @keyframes floatUp {
          0% {
            transform: translateY(40px) scale(0.8) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.85;
          }
          85% {
            opacity: 0.85;
          }
          100% {
            transform: translateY(-80px) scale(1.1) rotate(15deg);
            opacity: 0;
          }
        }
        @keyframes sunbeam {
          0%, 100% { transform: scale(1) translateY(0px) rotate(0deg); opacity: 0.55; }
          50% { transform: scale(1.18) translateY(6px) rotate(4deg); opacity: 0.9; }
        }
        @keyframes sailAcross {
          0% { left: -10%; transform: translateY(0px); }
          50% { transform: translateY(-3px); }
          100% { left: 110%; transform: translateY(0px); }
        }
        @keyframes pineWindSway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(1.5deg) skewX(0.5deg); }
        }
        @keyframes palmBeachSway {
          0%, 100% { transform: rotate(0deg) scaleX(1); }
          50% { transform: rotate(-2.5deg) scaleX(1.02); }
        }
        @keyframes beachUmbrellaSway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes caravanWalk {
          0% { transform: translateX(0px); }
          50% { transform: translateX(35px); }
          100% { transform: translateX(0px); }
        }
        @keyframes shimmerGlint {
          0%, 100% { opacity: 0.6; transform: scale(1) rotate(0deg); filter: brightness(1); }
          50% { opacity: 1; transform: scale(1.15) rotate(5deg); filter: brightness(1.3); }
        }
      `}</style>
    </div>
  );
}
