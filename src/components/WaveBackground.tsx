import React from 'react';

interface WaveBackgroundProps {
  theme: 'day' | 'night';
}

const STATIC_STARS = [
  { x: 5, y: 15, size: 1.5, opacity: 0.7 },
  { x: 12, y: 8, size: 2, opacity: 0.9 },
  { x: 22, y: 25, size: 1.2, opacity: 0.6 },
  { x: 30, y: 18, size: 2.5, opacity: 0.8 },
  { x: 38, y: 35, size: 1.5, opacity: 0.5 },
  { x: 45, y: 10, size: 2, opacity: 0.9 },
  { x: 52, y: 28, size: 1.2, opacity: 0.4 },
  { x: 60, y: 15, size: 2.8, opacity: 0.85 },
  { x: 68, y: 38, size: 1.6, opacity: 0.6 },
  { x: 75, y: 22, size: 2, opacity: 0.7 },
  { x: 84, y: 8, size: 1.2, opacity: 0.5 },
  { x: 91, y: 27, size: 2.4, opacity: 0.8 },
  { x: 96, y: 16, size: 1.8, opacity: 0.7 },
  { x: 8, y: 44, size: 1.5, opacity: 0.5 },
  { x: 18, y: 38, size: 2.2, opacity: 0.75 },
  { x: 28, y: 48, size: 1.3, opacity: 0.4 },
  { x: 40, y: 42, size: 1.8, opacity: 0.6 },
  { x: 58, y: 45, size: 1.2, opacity: 0.5 },
  { x: 70, y: 49, size: 2, opacity: 0.8 },
  { x: 80, y: 41, size: 1.5, opacity: 0.6 },
  { x: 88, y: 46, size: 2.5, opacity: 0.7 },
];

export default function WaveBackground({ theme }: WaveBackgroundProps) {
  const isDay = theme === 'day';

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden pointer-events-none select-none">
      <div className={`absolute inset-0 w-full h-full transition-colors duration-300 overflow-hidden ${
        isDay 
          ? 'bg-gradient-to-b from-[#F7F4EE] via-[#E8DFCF]/30 to-[#F7F4EE]' 
          : 'bg-gradient-to-b from-[#16110D] via-[#211A15]/80 to-[#16110D]'
      }`}>
        {/* Glowing Sun or Moon Ambience */}
        {isDay ? (
          /* Glowing Golden Soft Sun */
          <div className="absolute top-[8%] left-[12%] w-[110px] h-[110px] rounded-full bg-[#D7C2A5]/50 shadow-[0_0_90px_30px_rgba(215,194,165,0.4)]" />
        ) : (
          /* Glowing Moon */
          <div className="absolute top-[8%] left-[12%] w-[120px] h-[120px] rounded-full bg-[#F5E9DB]/95 shadow-[0_0_80px_20px_rgba(198,138,94,0.25)]" />
        )}
        
        <div className={`absolute top-0 left-[5%] w-[40%] h-[40%] rounded-full blur-[130px] transition-colors duration-300 ${
          isDay ? 'bg-[#8B6B52]/5' : 'bg-[#B98A5E]/10'
        }`} />

        {/* Static Star Constellations - Only shown during high night solitude */}
        {!isDay && (
          <div className="absolute inset-0 w-full h-full opacity-80">
            {STATIC_STARS.map((star, idx) => (
              <div
                key={idx}
                className="absolute rounded-full bg-[#F5E9DB]"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  opacity: star.opacity,
                  boxShadow: star.size > 1.8 ? '0 0 4px 1px rgba(245,233,219,0.4)' : 'none',
                }}
              />
            ))}
          </div>
        )}

        {/* Static Background Clouds for depth */}
        <div className="absolute inset-0 w-full h-full opacity-25">
          <div className={`absolute top-[5%] left-[5%] w-[380px] h-[120px] blur-[50px] rounded-full transition-colors duration-300 ${
            isDay ? 'bg-[#8B6B52]/5' : 'bg-[#B98A5E]/10'
          }`} />
          <div className={`absolute top-[25%] right-[5%] w-[450px] h-[150px] blur-[60px] rounded-full transition-colors duration-300 ${
            isDay ? 'bg-[#D7C2A5]/30' : 'bg-[#211A15]/40'
          }`} />
        </div>

        {/* Interactive / Scenic Sea Waves */}
        <div className="absolute bottom-0 left-0 w-full h-[35%] min-h-[220px]">
          {/* Deep ocean base floor */}
          <div className={`absolute bottom-0 w-full h-[60px] transition-colors duration-300 ${
            isDay ? 'bg-[#F7F4EE]' : 'bg-[#16110D]'
          }`} />

          {/* Wave 3: Deep Sea Floor with Accent Color / Charcoal */}
          <svg
            className={`absolute bottom-0 w-[100%] h-full transition-colors duration-300 ${
              isDay ? 'text-[#F7F4EE]/90' : 'text-[#211A15]/90'
            }`}
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,224 C480,260 960,180 1440,224 L1440,320 L0,320 Z"
            />
          </svg>

          {/* Wave 2: Elegant Mocha with Accent overlay */}
          <svg
            className={`absolute bottom-0 w-[100%] h-full transition-colors duration-300 ${
              isDay ? 'text-[#8B5E3C]/10' : 'text-[#8B5E3C]/25'
            }`}
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,192 C480,240 960,140 1440,192 L1440,320 L0,320 Z"
            />
          </svg>

          {/* Wave 1: Soft Gold glimmer surf line */}
          <svg
            className={`absolute bottom-0 w-[100%] h-full transition-colors duration-300 ${
              isDay ? 'text-[#D7C2A5]/15' : 'text-[#C6B08E]/20'
            }`}
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,256 C360,220 1080,270 1440,256 L1440,320 L0,320 Z"
            />
          </svg>

          {/* Moonlight / Sunlight Water reflections */}
          <div className={`absolute bottom-[28%] left-[12%] w-[30%] h-[30px] bg-gradient-to-r from-transparent to-transparent blur-md transform skew-x-12 ${
            isDay ? 'via-[#8B6B52]/5' : 'via-[#B98A5E]/10'
          }`} />
          <div className={`absolute bottom-[20%] left-[17%] w-[20%] h-[20px] bg-gradient-to-r from-transparent to-transparent blur-sm transform -skew-x-12 ${
            isDay ? 'via-[#D7C2A5]/8' : 'via-[#D7C2A5]/12'
          }`} />
        </div>
      </div>
    </div>
  );
}
