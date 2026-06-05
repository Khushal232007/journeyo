import React, { useState } from 'react';
import { Menu, X, Compass, Sun, Moon } from 'lucide-react';
// @ts-ignore
import logoImg from '../assets/images/journeyo_brand_logo_1780414877692.png';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  theme: 'day' | 'night';
  setTheme: (theme: 'day' | 'night') => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'packages', label: 'Packages' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'about-us', label: 'About Us' },
  { id: 'special-request', label: 'Customise Trip' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ currentTab, setCurrentTab, theme, setTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-45 px-4 sm:px-6 lg:px-8 pt-2 md:pt-2.5 pointer-events-none">
      <nav 
        id="navbar-route-story"
        className={`max-w-[1280px] mx-auto w-full rounded-2xl border backdrop-blur-md shadow-xl px-5 py-2.5 flex items-center justify-between pointer-events-auto transition-colors duration-300 ${
          theme === 'day'
            ? 'border-[#C6B08E]/30 bg-[#FFFFFF]/90 text-[#4A2E1F]'
            : 'border-[#4A3A2F]/50 bg-[#2A211B]/90 text-[#F5E9DB]'
        }`}
      >
        {/* Brand Logo */}
        <button 
          onClick={() => { setCurrentTab('home'); setIsOpen(false); }}
          className="flex items-center cursor-pointer text-left"
        >
          <div className="h-8.5 sm:h-9 py-0.5 px-2.5 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-md border border-white/20">
            <img 
              src={logoImg} 
              alt="Route Story Logo" 
              className="h-full object-contain pointer-events-none select-none max-w-[110px] sm:max-w-[130px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </button>

        {/* Desktop Links (No spring animations, static and clean text states) */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentTab(item.id)}
                className="relative px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide uppercase cursor-pointer"
              >
                {/* Static Backdrop pill */}
                {isActive ? (
                  <span className={`absolute inset-0 rounded-lg -z-10 ${
                    theme === 'day' ? 'bg-[#8B5E3C]/10' : 'bg-[#C6B08E]/15'
                  }`} />
                ) : null}
                <span className={`relative transition-colors ${
                  isActive 
                    ? theme === 'day' ? 'text-[#8B5E3C] font-semibold' : 'text-[#C6B08E] font-semibold' 
                    : theme === 'day'
                    ? 'text-[#6E5847]/75 hover:text-[#4A2E1F]'
                    : 'text-[#D7C2A5]/75 hover:text-[#F5E9DB]'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right side controls: Theme Toggle & Hamburger Menu */}
        <div className="flex items-center gap-2.5">
          {/* Theme Switch Button */}
          <button
            onClick={() => setTheme(theme === 'day' ? 'night' : 'day')}
            className={`p-2 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-center ${
              theme === 'day'
                ? 'border-[#C6B08E]/30 bg-[#E8DFCF]/60 text-[#8B6B52] hover:bg-[#E8DFCF]/80'
                : 'border-[#4A3A2F]/50 bg-[#211A15]/60 text-[#B98A5E] hover:bg-[#211A15]/80'
            }`}
            title={theme === 'day' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {theme === 'day' ? (
              <Moon className="w-4.5 h-4.5 text-[#8B6B52]" />
            ) : (
              <Sun className="w-4.5 h-4.5 text-[#B98A5E] fill-[#B98A5E]" />
            )}
          </button>

          {/* Hamburger Menu (Mobile/Tablet) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl border cursor-pointer transition-all duration-300 ${
              theme === 'day'
                ? 'border-[#C6B08E]/30 bg-[#E8DFCF]/50 text-[#4A2E1F] hover:bg-[#E8DFCF]/80'
                : 'border-[#4A3A2F]/50 bg-[#211A15]/60 text-[#F5E9DB] hover:bg-[#211A15]/80'
            }`}
          >
            {isOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (No transition animations) */}
      {isOpen && (
        <div className={`lg:hidden max-w-[1280px] mx-auto w-full mt-2 rounded-2xl border backdrop-blur-lg shadow-2xl p-5 flex flex-col gap-2 pointer-events-auto transition-colors duration-300 ${
          theme === 'day'
            ? 'border-[#C6B08E]/30 bg-[#FFFFFF]/95 text-[#4A2E1F]'
            : 'border-[#4A3A2F]/50 bg-[#2A211B]/95 text-[#F5E9DB]'
        }`}>
          {NAV_ITEMS.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentTab(item.id);
                  setIsOpen(false);
                }}
                className={`w-full py-3 px-4 rounded-xl text-left text-sm font-semibold tracking-wider uppercase flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'bg-[#C6B08E]/15 text-[#8B5E3C] border-l-4 border-[#8B5E3C] pl-3'
                    : theme === 'day'
                    ? 'text-[#6E5847] hover:bg-[#FAF7F2]/80'
                    : 'text-[#D7C2A5] hover:bg-[#211A15]/40 hover:text-[#F5E9DB]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#8B5E3C]" />}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
