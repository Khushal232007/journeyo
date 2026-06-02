import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Send, Instagram, Twitter, Compass, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactProps {
  theme: 'day' | 'night';
}

export default function Contact({ theme }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Standard local confirmation simulation
    setShowSuccess(true);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setTimeout(() => setShowSuccess(false), 5000);
  };

  // Theme values
  const textTitleColor = theme === 'day' ? 'text-teal-950' : 'text-white';
  const textSubColor = theme === 'day' ? 'text-teal-900/70' : 'text-slate-300';
  const cardBgClasses = theme === 'day'
    ? 'bg-white/40 border-teal-100/50 hover:shadow-lg'
    : 'bg-slate-950/45 border-indigo-950/40 hover:shadow-lg';

  const inputStyle = theme === 'day'
    ? 'bg-white/70 border-teal-100 text-teal-950 focus:border-teal-500'
    : 'bg-slate-950/60 border-indigo-950/40 text-slate-100 focus:border-indigo-500';

  const numberStr = '+919058831564';
  const numberStr2 = '+917742484898';
  const whatsappUrl = `https://wa.me/919058831564?text=${encodeURIComponent('Hello JOURNEYO! I am seeking immediate VVIP support for planning my next custom journey.')}`;

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 relative w-full text-left">
      
      {/* Header section */}
      <div className="max-w-2xl mb-12 sm:mb-16">
        <span className="text-xs font-bold tracking-widest uppercase text-teal-600 dark:text-cyan-400 mb-2 block">
          Reach Our Curators
        </span>
        <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${textTitleColor}`}>
          Connect with a Luxury Travel Architect
        </h2>
        <p className={`text-sm leading-relaxed ${textSubColor}`}>
          Our master concierge lines are open and backed by continuous visual tracking. Reach our headquarters under full high-priority parameters.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
        
        {/* LEFT COLUMN: CONTACT DETAILS BENTO CARDS */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Direct Action Buttons Card */}
          <div className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-sm shadow-md text-left ${cardBgClasses}`}>
            <h3 className={`text-base sm:text-lg font-bold tracking-tight mb-4 ${textTitleColor}`}>
              Instant Communication Gateways
            </h3>
            <p 
              className={`text-xs leading-relaxed mb-6 ${theme === 'day' ? '' : 'text-slate-600 dark:text-slate-400'}`}
              style={theme === 'day' ? { color: '#6e739f' } : undefined}
            >
              Launch high-priority redirects to consult on available hotel suites, private charters, and security backstops instantly.
            </p>

            <div className="space-y-3">
              {/* WhatsApp direct connection */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:brightness-105 hover:scale-[1.01] active:scale-[0.99] text-white font-bold text-xs uppercase tracking-widest shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
                Initiate Chat on WhatsApp
              </a>

              {/* Call Expert direct connection - Line 1 */}
              <a
                href={`tel:${numberStr}`}
                className={`w-full py-3 px-5 rounded-xl border font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${
                  theme === 'day'
                    ? 'border-teal-900/10 text-teal-950 hover:bg-white/50'
                    : 'border-white/10 text-white hover:bg-white/5'
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                Call specialist: +91 90588 31564
              </a>

              {/* Call Expert direct connection - Line 2 */}
              <a
                href={`tel:${numberStr2}`}
                className={`w-full py-3 px-5 rounded-xl border font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${
                  theme === 'day'
                    ? 'border-teal-900/10 text-teal-950 hover:bg-white/50'
                    : 'border-white/10 text-white hover:bg-white/5'
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                Call specialist:  +91 77424 84898
              </a>
            </div>
          </div>

          {/* Core Business info list */}
          <div className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-sm shadow-md text-left space-y-5 ${cardBgClasses}`}>
            <h3 className={`text-base sm:text-lg font-bold tracking-tight mb-2 ${textTitleColor}`}>
              Secluded Ateliers
            </h3>

            <div className="flex items-start gap-3.5 text-xs">
              <Mail className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <div>
                <span 
                  className={`font-bold block mb-1 ${theme === 'day' ? '' : 'text-slate-900'}`}
                  style={theme === 'day' ? { color: '#6e739f' } : undefined}
                >
                  Direct Support & Email
                </span>
                <p 
                  className={`opacity-75 leading-normal font-mono ${theme === 'day' ? '' : 'text-slate-800 dark:text-slate-300'}`}
                  style={theme === 'day' ? { color: '#6e739f' } : undefined}
                >
                  journeyo2701@gmail.com
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-black/5 dark:border-white/5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Global Handles
              </span>
              <div className="flex gap-3">
                <a href="#instagram" className="p-2 rounded-xl bg-black/5 dark:bg-white/5 hover:scale-105 hover:bg-teal-500/15 text-slate-600 dark:text-slate-300 transition-all cursor-pointer">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#twitter" className="p-2 rounded-xl bg-black/5 dark:bg-white/5 hover:scale-105 hover:bg-teal-500/15 text-slate-600 dark:text-slate-300 transition-all cursor-pointer">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#youtube" className="p-2 rounded-xl bg-black/5 dark:bg-white/5 hover:scale-105 hover:bg-teal-500/15 text-slate-600 dark:text-slate-300 transition-all cursor-pointer">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: PREMIUM CONTACT FORM AND DISPATCHER */}
        <div className="lg:col-span-7">
          <div className={`p-6 sm:p-10 rounded-2xl border backdrop-blur-sm shadow-xl relative ${cardBgClasses}`}>
            <h3 className={`text-lg sm:text-xl font-bold tracking-tight mb-8 flex items-center gap-2 ${textTitleColor}`}>
              <Compass className="w-5 h-5 text-teal-500 animate-spin-slow" />
              Submit Dispatch Memoir
            </h3>

            {/* Local submission successful notifications */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-teal-500/10 border border-teal-500/20 text-teal-800 dark:text-teal-200 text-xs rounded-xl mb-6 flex items-center gap-2 font-medium"
                >
                  <Send className="w-4 h-4 text-teal-500 shrink-0" />
                  Your message has been beamed directly to our concierge team. You will receive an encrypted follow-up email.
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleContactSubmit} className="space-y-5">
              
              {/* Name & Email (Split) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label 
                    className="block text-[10px] font-bold uppercase tracking-wider mb-1.5 opacity-80"
                    style={theme === 'day' ? { color: '#6e739f' } : undefined}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lord Robert Sterling"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none transition-all ${inputStyle}`}
                  />
                </div>

                <div>
                  <label 
                    className="block text-[10px] font-bold uppercase tracking-wider mb-1.5 opacity-80"
                    style={theme === 'day' ? { color: '#6e739f' } : undefined}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="robert@sterlingports.co"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none transition-all ${inputStyle}`}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label 
                  className="block text-[10px] font-bold uppercase tracking-wider mb-1.5 opacity-80"
                  style={theme === 'day' ? { color: '#6e739f' } : undefined}
                >
                  Subject / Reason
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Booking private VVIP helicopter charter space..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none transition-all ${inputStyle}`}
                />
              </div>

              {/* Message */}
              <div>
                <label 
                  className="block text-[10px] font-bold uppercase tracking-wider mb-1.5 opacity-80"
                  style={theme === 'day' ? { color: '#6e739f' } : undefined}
                >
                  Your message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Draft your queries or feedback regarding coordinates..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-full p-4 rounded-xl text-xs border outline-none transition-all resize-none ${inputStyle}`}
                />
              </div>

              {/* CTA button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-teal-600 via-teal-500 to-indigo-600 hover:brightness-105 active:scale-[0.99] text-white font-bold text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  Dispatch Inquiry to Concierge Office
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>

    </div>
  );
}
