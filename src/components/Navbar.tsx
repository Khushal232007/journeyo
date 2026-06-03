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
  { id: 'gallery', label: 'Gallery' },
  { id: 'about-us', label: 'About Us' },
  { id: 'special-request', label: 'Customise Trip' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ currentTab, setCurrentTab, theme, setTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-45 px-4 sm:px-6 lg:px-8 pt-4 pointer-events-none">
      <nav 
        id="navbar-journeyo"
        className={`max-w-[1280px] mx-auto w-full rounded-2xl border backdrop-blur-md shadow-xl px-6 py-4 flex items-center justify-between pointer-events-auto transition-colors duration-300 ${
          theme === 'day'
            ? 'border-[#8B6B52]/20 bg-[#FFFDFC]/90 text-[#3B2E25]'
            : 'border-[#8B6B52]/25 bg-[#2A2522]/90 text-[#F5E6D3]'
        }`}
      >
        {/* Brand Logo */}
        <button 
          onClick={() => { setCurrentTab('home'); setIsOpen(false); }}
          className="flex items-center cursor-pointer text-left"
        >
          <div className="h-10 sm:h-11 px-3 py-1 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-md border border-white/20">
            <img 
              src={logoImg} 
              alt="JOURNEYO Logo" 
              className="h-full object-contain pointer-events-none select-none max-w-[120px] sm:max-w-[150px]"
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
                className="relative px-4 py-2 rounded-lg text-sm font-medium tracking-wide uppercase cursor-pointer"
              >
                {/* Static Backdrop pill */}
                {isActive ? (
                  <span className={`absolute inset-0 rounded-lg -z-10 ${
                    theme === 'day' ? 'bg-[#8B6B52]/10' : 'bg-[#D4B48C]/15'
                  }`} />
                ) : null}
                <span className={`relative transition-colors ${
                  isActive 
                    ? theme === 'day' ? 'text-[#8B6B52] font-bold' : 'text-[#D4B48C] font-semibold' 
                    : theme === 'day'
                    ? 'text-[#3B2E25]/75 hover:text-[#3B2E25]'
                    : 'text-[#F5E6D3]/75 hover:text-[#F5E6D3]'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right side controls: Theme Toggle & Hamburger Menu */}
        <div className="flex items-center gap-3">
          {/* Theme Switch Button */}
          <button
            onClick={() => setTheme(theme === 'day' ? 'night' : 'day')}
            className={`p-2.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-center ${
              theme === 'day'
                ? 'border-[#8B6B52]/25 bg-[#F5E6D3]/40 text-[#3B2E25] hover:bg-[#F5E6D3]/60'
                : 'border-[#8B6B52]/30 bg-[#2A2522]/50 text-[#F5E6D3] hover:bg-[#2A2522]/80'
            }`}
            title={theme === 'day' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {theme === 'day' ? (
              <Moon className="w-5 h-5 text-[#8B6B52]" />
            ) : (
              <Sun className="w-5 h-5 text-amber-400 fill-amber-400" />
            )}
          </button>

          {/* Hamburger Menu (Mobile/Tablet) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2.5 rounded-xl border cursor-pointer transition-all duration-300 ${
              theme === 'day'
                ? 'border-[#8B6B52]/20 bg-[#F5E6D3]/30 text-[#3B2E25] hover:bg-[#F5E6D3]/50'
                : 'border-[#8B6B52]/30 bg-[#2A2522]/50 text-[#F5E6D3] hover:bg-[#2A2522]/80'
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (No transition animations) */}
      {isOpen && (
        <div className={`lg:hidden max-w-[1280px] mx-auto w-full mt-2 rounded-2xl border backdrop-blur-lg shadow-2xl p-5 flex flex-col gap-2 pointer-events-auto transition-colors duration-300 ${
          theme === 'day'
            ? 'border-[#8B6B52]/20 bg-[#FFFDFC]/95 text-[#3B2E25]'
            : 'border-[#8B6B52]/20 bg-[#121212]/95 text-[#F5E6D3]'
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
                    ? 'bg-[#D4B48C]/15 text-[#D4B48C] border-l-4 border-[#D4B48C] pl-3'
                    : theme === 'day'
                    ? 'text-[#3B2E25]/80 hover:bg-[#FAF7F2]/80'
                    : 'text-[#F5E6D3]/80 hover:bg-[#2A2522]/40 hover:text-[#F5E6D3]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#D4B48C]" />}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
