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
import { Compass, Phone, Mail } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPackageName, setBookingPackageName] = useState('');

  // Live premium theme state: automatically detect day (6 AM - 6 PM) or night (6 PM - 6 AM)
  const [theme, setTheme] = useState<'day' | 'night'>(() => {
    const hour = new Date().getHours();
    return (hour >= 6 && hour < 18) ? 'day' : 'night';
  });

  // Track if user has manually changed the theme in this session
  const [userToggled, setUserToggled] = useState(false);

  // Check and apply automatic theme based on time of day
  useEffect(() => {
    // If the user manually toggled, we can respect their preference for this session
    if (userToggled) return;

    const updateThemeAutomatic = () => {
      const hour = new Date().getHours();
      const nextTheme = (hour >= 6 && hour < 18) ? 'day' : 'night';
      setTheme(nextTheme);
    };

    updateThemeAutomatic();

    // Recheck every 15 seconds to ensure accuracy if the boundary is crossed live
    const interval = setInterval(updateThemeAutomatic, 15000);

    // Also recheck when browser window gains focus
    window.addEventListener('focus', updateThemeAutomatic);

    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', updateThemeAutomatic);
    };
  }, [userToggled]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'day') {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
  }, [theme]);

  // Scroll to top instantly on tab transitions without animation delays
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [activeTab]);

  const handleBookPackageTrigger = (packageName: string) => {
    setBookingPackageName(packageName);
    setIsBookingOpen(true);
  };

  const handleCustomEnquiryTrigger = () => {
    setBookingPackageName('');
    setIsBookingOpen(true);
  };

  // Styled helper classes matching user palette
  const fontColorClass = theme === 'day' ? 'text-[#3B2E25]' : 'text-[#F5E6D3]';
  const mainBgClass = theme === 'day' ? 'bg-[#FAF7F2]' : 'bg-[#121212]';

  const footerBgClass = theme === 'day' ? 'bg-[#F5E6D3]/60 border-[#8B6B52]/20' : 'bg-[#2A2522]/80 border-[#8B6B52]/20';
  const footerTitleClass = theme === 'day' ? 'text-[#3B2E25]' : 'text-[#F5E6D3]';
  const footerTextClass = theme === 'day' ? 'text-[#3B2E25]/70' : 'text-slate-400';
  const footerAlertClass = theme === 'day' ? 'text-[#3B2E25]/60' : 'text-slate-500';

  return (
    <div className={`min-h-screen relative flex flex-col justify-between font-sans overflow-x-hidden ${fontColorClass} ${mainBgClass} transition-colors duration-300`}>
      {/* 1. Static background vector wave systems */}
      <WaveBackground theme={theme} />

      {/* 2. Sticky Navbar */}
      <Navbar 
        currentTab={activeTab} 
        setCurrentTab={setActiveTab} 
        theme={theme} 
        setTheme={(newTheme) => {
          setTheme(newTheme);
          setUserToggled(true);
        }} 
      />

      {/* 3. Main interactive content frames (Instantly switched, no slide/flicker animations) */}
      <main id="journeyo-prime-content" className="flex-1 w-full relative">
        <div className="w-full">
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
        </div>
      </main>

      {/* 4. Persistent floating whatsapp + call triggers */}
      <FloatingActions theme={theme} />

      {/* 5. VVIP Corporate Board Footer */}
      <footer className={`border-t mt-16 py-12 px-6 sm:px-10 lg:px-12 backdrop-blur-md relative z-10 transition-colors duration-300 ${footerBgClass}`}>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left text-xs">
          
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#D4B48C]" />
              <span className={`text-base font-bold uppercase tracking-widest ${footerTitleClass}`}>
                JOURNEYO
              </span>
            </div>
            <p className={`leading-relaxed font-light text-[11px] max-w-sm ${footerTextClass}`}>
              Launched in 2026, JOURNEYO is an emerging premier travel startup. We are on a mission to redefine high-priority travel craft, organizing bespoke mountain, forest, and islet retreats driven by fresh eco-mindful, high-security standards.
            </p>
          </div>
 
          <div className="md:col-span-4 space-y-3">
            <span className="font-bold uppercase tracking-wider block text-[#D4B48C]">
              Contact Curators
            </span>
            <div className={`space-y-1.5 text-[11px] ${footerTextClass}`}>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#8B6B52] dark:text-[#D4B48C]" strokeWidth={2.5} />
                Hotlines: +91 9058831564, +91 7742484898
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#8B6B52] dark:text-[#D4B48C]" />
                journeyo2701@gmail.com
              </p>
            </div>
          </div>

          <div className="md:col-span-4 space-y-3">
            <span className={`font-bold uppercase tracking-wider block ${footerTitleClass}`}>
              Sovereign Safeguard Note
            </span>
            <p className={`leading-relaxed font-light text-[10px] ${footerAlertClass}`}>
              *Disclaimer: Private helicopter transfers, naturalist escorts, and medical evacuation standbys require specialized secure billing clearings. JOURNEYO offsets charter emissions under strict carbon-mitigation registry numbers. Registered under Uttarakhand Division code JO-B_2026.
            </p>
          </div>

        </div>

        {/* Legal copyright footer base */}
        <div className={`max-w-[1280px] mx-auto border-t border-black/5 dark:border-white/5 mt-8 pt-6 text-center text-[10px] flex flex-col sm:flex-row justify-between items-center gap-2 ${footerTextClass}`}>
          <span>&copy; {new Date().getFullYear()} JOURNEYO Luxury Travel Ltd. All sovereign rights reserved.</span>
        </div>
      </footer>

      {/* 6. Booking Inquiry overlay */}
      {isBookingOpen && (
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          packageName={bookingPackageName}
          theme={theme}
        />
      )}
    </div>
  );
}
