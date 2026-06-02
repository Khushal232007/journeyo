/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import WaveBackground from './components/WaveBackground';
import Home from './components/Home';
import Packages from './components/Packages';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import SpecialRequest from './components/SpecialRequest';
import Contact from './components/Contact';
import BookingModal from './components/BookingModal';
import FloatingActions from './components/FloatingActions';
import { Compass, Sparkles, MapPin, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPackageName, setBookingPackageName] = useState('');

  // Automatic daytime/nighttime check (Day is 6:00 AM to 6:00 PM)
  const getAutoTheme = (): 'day' | 'night' => {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18 ? 'day' : 'night';
  };

  const [theme, setTheme] = useState<'day' | 'night'>(() => {
    const saved = localStorage.getItem('journeyo_theme');
    if (saved === 'day' || saved === 'night') return saved;
    return getAutoTheme();
  });

  // Set the theme attribute or dark class to enable full nested support
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'night') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Hook to automatically trigger scrolling to top on tab transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleBookPackageTrigger = (packageName: string) => {
    setBookingPackageName(packageName);
    setIsBookingOpen(true);
  };

  const handleCustomEnquiryTrigger = () => {
    setBookingPackageName('');
    setIsBookingOpen(true);
  };

  // Styled helper classes
  const fontColorClass = theme === 'day' ? 'text-teal-950' : 'text-slate-100';

  return (
    <div className={`min-h-screen relative flex flex-col justify-between font-sans overflow-x-hidden ${fontColorClass} transition-colors duration-300`}>
      {/* 1. Animated background vector wave systems */}
      <WaveBackground theme={theme} />

      {/* 2. Glass floating sticky Navbar */}
      <Navbar 
        currentTab={activeTab} 
        setCurrentTab={setActiveTab} 
        theme={theme} 
        setTheme={setTheme} 
      />

      {/* 3. Main interactive content frames */}
      <main id="journeyo-prime-content" className="flex-1 w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full"
          >
            {activeTab === 'home' && (
              <Home 
                setCurrentTab={setActiveTab} 
                theme={theme} 
                onOpenBooking={handleCustomEnquiryTrigger} 
              />
            )}
            {activeTab === 'packages' && (
              <Packages 
                theme={theme} 
                onBookPackage={handleBookPackageTrigger} 
              />
            )}
            {activeTab === 'reviews' && (
              <Reviews 
                theme={theme} 
              />
            )}
            {activeTab === 'gallery' && (
              <Gallery 
                theme={theme} 
              />
            )}
            {activeTab === 'about-us' && (
              <AboutUs 
                theme={theme} 
              />
            )}
            {activeTab === 'special-request' && (
              <SpecialRequest 
                theme={theme} 
              />
            )}
            {activeTab === 'contact' && (
              <Contact 
                theme={theme} 
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Persistent floating whatsapp + call triggers */}
      <FloatingActions theme={theme} />

      {/* 5. VVIP Corporate Board Footer */}
      <footer className={`border-t border-white/10 mt-16 py-12 px-6 sm:px-10 lg:px-12 backdrop-blur-md relative z-10 transition-colors duration-300 ${
        theme === 'day' ? 'bg-teal-950/5 border-teal-900/10' : 'bg-black/35'
      }`}>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left text-xs text-slate-500">
          
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-teal-500" />
              <span className={`text-base font-bold uppercase tracking-widest ${theme === 'day' ? 'text-teal-950' : 'text-slate-200'}`}>
                JOURNEYO
              </span>
            </div>
            <p className="leading-relaxed font-light text-[11px] max-w-sm">
              Launched in 2026, JOURNEYO is an emerging premier travel startup. We are on a mission to redefine high-priority travel craft, organizing bespoke mountain, forest, and islet retreats driven by fresh eco-mindful, high-security standards.
            </p>
          </div>

          <div className="md:col-span-4 space-y-3">
            <span className={`font-bold uppercase tracking-wider block ${theme === 'day' ? 'text-teal-950' : 'text-slate-300'}`}>
              Contact Curators
            </span>
            <div className="space-y-1.5 text-[11px]">
              <p className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                <Phone className="w-3.5 h-3.5 text-teal-500" strokeWidth={2.5} />
                Hotlines: +91 9058831564, +91 7742484898
              </p>
              <p className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                <Mail className="w-3.5 h-3.5 text-teal-500" />
                journeyo2701@gmail.com
              </p>
            </div>
          </div>

          <div className="md:col-span-4 space-y-3">
            <span className={`font-bold uppercase tracking-wider block ${theme === 'day' ? 'text-teal-950' : 'text-slate-300'}`}>
              Sovereign Safeguard Note
            </span>
            <p className="leading-relaxed font-light text-[10px] text-slate-600 dark:text-slate-500">
              *Disclaimer: Private helicopter transfers, naturalist escorts, and medical evacuation standbys require specialized secure billing clearings. JOURNEYO offsets charter emissions under strict carbon-mitigation registry numbers. Registered under Uttarakhand Division code JO-B_2026.
            </p>
          </div>

        </div>

        {/* Legal copyright footer base */}
        <div className="max-w-[1280px] mx-auto border-t border-black/5 dark:border-white/5 mt-8 pt-6 text-center text-[10px] text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>&copy; {new Date().getFullYear()} JOURNEYO Luxury Travel Ltd. All sovereign rights reserved.</span>
        </div>
      </footer>

      {/* 6. Dynamic booking inquiry overlay */}
      <AnimatePresence>
        {isBookingOpen && (
          <BookingModal
            isOpen={isBookingOpen}
            onClose={() => setIsBookingOpen(false)}
            packageName={bookingPackageName}
            theme={theme}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
