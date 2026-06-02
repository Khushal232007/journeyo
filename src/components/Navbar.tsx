import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
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

  const toggleTheme = () => {
    const newTheme = theme === 'day' ? 'night' : 'day';
    setTheme(newTheme);
    localStorage.setItem('journeyo_theme', newTheme);
  };

  const navBrandClass = theme === 'day' 
    ? 'text-teal-950 font-semibold tracking-[0.25em]' 
    : 'text-white font-semibold tracking-[0.25em]';

  return (
    <header className="sticky top-0 left-0 w-full z-45 px-4 sm:px-6 lg:px-8 pt-4 pointer-events-none">
      <nav 
        id="navbar-journeyo"
        className="max-w-[1280px] mx-auto w-full rounded-2xl border border-white/20 dark:border-white/10 bg-white/15 dark:bg-black/25 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] px-6 py-4 flex items-center justify-between pointer-events-auto transition-all duration-300"
      >
        {/* Brand Logo */}
        <button 
          onClick={() => { setCurrentTab('home'); setIsOpen(false); }}
          className="flex items-center cursor-pointer group text-left"
        >
          {/* Custom generated logo image replacing the old SVG circle & branding text */}
          <div className="h-10 sm:h-11 px-3 py-1 rounded-xl bg-white dark:bg-white flex items-center justify-center overflow-hidden shadow-md border border-white/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300">
            <img 
              src={logoImg} 
              alt="JOURNEYO Logo" 
              className="h-full object-contain pointer-events-none select-none max-w-[120px] sm:max-w-[150px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentTab(item.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer overflow-hidden group`}
              >
                {/* Active Backdrop pill */}
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-teal-850/10 dark:bg-white/10 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative transition-colors duration-300 ${
                  isActive 
                    ? 'text-teal-800 dark:text-white font-semibold' 
                    : theme === 'day' 
                    ? 'text-teal-950/75 hover:text-teal-900' 
                    : 'text-slate-300 hover:text-white'
                }`}>
                  {item.label}
                </span>

                {/* Bottom line hover effect */}
                {!isActive && (
                  <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-teal-500 dark:bg-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right side controls: Theme Toggle + Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          {/* Manual Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl border cursor-pointer transition-all duration-300 ${
              theme === 'day'
                ? 'bg-amber-100/30 border-amber-200/50 text-amber-900 hover:bg-amber-200/50'
                : 'bg-indigo-950/50 border-indigo-900/30 text-indigo-200 hover:bg-indigo-900/50'
            }`}
            title={theme === 'day' ? 'Switch to Cinematic Night' : 'Switch to Tropical Day'}
          >
            {theme === 'day' ? (
              <Moon className="w-4 h-4 animate-pulse" />
            ) : (
              <Sun className="w-4 h-4 text-amber-300 animate-spin-slow" />
            )}
          </button>

          {/* Hamburger Menu (Mobile/Tablet) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl border transition-all duration-300 cursor-pointer ${
              theme === 'day'
                ? 'bg-teal-50/40 border-teal-100/50 text-teal-950 hover:bg-teal-100/50'
                : 'bg-slate-900/40 border-slate-800/40 text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Glass Drawer (Slides down smoothly inside header layout overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="lg:hidden max-w-[1280px] mx-auto w-full mt-2 rounded-2xl border border-white/20 dark:border-white/10 bg-white/20 dark:bg-black/35 backdrop-blur-lg shadow-2xl p-5 flex flex-col gap-2 pointer-events-auto"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full py-3 px-4 rounded-xl text-left text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-teal-800/10 dark:bg-white/10 text-teal-800 dark:text-white border-l-4 border-teal-500 dark:border-indigo-400 pl-3'
                      : theme === 'day'
                      ? 'text-teal-950 hover:bg-teal-50/40'
                      : 'text-slate-300 hover:bg-slate-900/40 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-indigo-400" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
