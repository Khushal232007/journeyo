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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setSubmitError('');
    try {
      const response = await fetch("https://formsubmit.co/ajax/journeyo2701@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Route Story Inquiry: ${subject || 'Bespoke Vacations Inquiry'}`,
          Form: "General Contact / Inquiry Memoir",
          Name: name,
          Email: email,
          Subject: subject || "None declared",
          Message: message
        })
      });

      if (response.ok) {
        setShowSuccess(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setTimeout(() => setShowSuccess(false), 6000);
      } else {
        setSubmitError("Failed to transmit message. Please try again or email journeyo2701@gmail.com directly.");
      }
    } catch (err) {
      console.error(err);
      setSubmitError("Network connection error. Please verify status & submit again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Theme values
  const textTitleColor = theme === 'day' ? 'text-[#4A2E1F]' : 'text-[#F5E9DB]';
  const textSubColor = theme === 'day' ? 'text-[#6E5847]' : 'text-[#D7C2A5]';
  const cardBgClasses = theme === 'day'
    ? 'bg-[#FFFFFF] border-[#C6B08E]/45 hover:shadow-lg text-[#4A2E1F]'
    : 'bg-[#2A211B] border-[#4A3A2F]/50 hover:shadow-lg text-[#F5E9DB]';

  const inputStyle = theme === 'day'
    ? 'bg-[#E8DFCF]/30 border-[#C6B08E]/40 text-[#4A2E1F] focus:border-[#8B5E3C]'
    : 'bg-[#16110D]/60 border-[#4A3A2F]/50 text-[#F5E9DB] focus:border-[#C6B08E]';

  const numberStr = '+917742484898';
  const whatsappUrl = `https://wa.me/917742484898?text=${encodeURIComponent('Hello Route Story! I am seeking immediate VVIP support for planning my next custom journey.')}`;

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 relative w-full text-left">
      
      {/* Header section */}
      <div className="max-w-2xl mb-12 sm:mb-16">
        <span className={`text-xs font-bold tracking-widest uppercase mb-2 block font-mono ${
          theme === 'day' ? 'text-[#8B5E3C]' : 'text-[#C6B08E]'
        }`}>
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
            <p className={`text-xs leading-relaxed mb-6 ${theme === 'day' ? 'text-[#3B2E25]/80' : 'text-[#F5E6D3]/70'}`}>
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

              {/* Call Expert direct connection */}
              <a
                href={`tel:${numberStr}`}
                className={`w-full py-3 px-5 rounded-xl border font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${
                  theme === 'day'
                    ? 'border-[#C6B08E]/40 text-[#8B5E3C] hover:bg-[#8B5E3C]/10'
                    : 'border-[#4A3A2F]/50 text-[#F5E9DB] hover:bg-[#8B5E3C]/15'
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                Call specialist: +91 77424 84898
              </a>
            </div>
          </div>

          {/* Core Business info list */}
          <div className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-sm shadow-md text-left space-y-5 ${cardBgClasses}`}>
            <h3 className={`text-base sm:text-lg font-bold tracking-tight mb-2 ${textTitleColor}`}>
              General Inquiries
            </h3>

            <div className="flex items-start gap-3.5 text-xs">
              <Mail className={`w-5 h-5 shrink-0 mt-0.5 ${theme === 'day' ? 'text-[#8B6B52]' : 'text-[#B98A5E]'}`} />
              <div>
                <span className={`font-bold block mb-1 ${theme === 'day' ? 'text-[#4A2E1F]' : 'text-[#F5E9DB]'}`}>
                  Direct Support & Email
                </span>
                <p className={`opacity-75 leading-normal font-mono ${theme === 'day' ? 'text-[#4A2E1F]' : 'text-[#F5E9DB]/80'}`}>
                  routestory2701@gmail.com
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
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: PREMIUM CONTACT FORM AND DISPATCHER */}
        <div className="lg:col-span-7 font-sans">
          <div className={`p-6 sm:p-10 rounded-2xl border backdrop-blur-sm shadow-xl relative ${cardBgClasses}`}>
            <h3 className={`text-lg sm:text-xl font-bold tracking-tight mb-8 flex items-center gap-2 ${textTitleColor}`}>
              <Compass className={`w-5 h-5 animate-spin-slow ${theme === 'day' ? 'text-[#8B6B52]' : 'text-[#B98A5E]'}`} />
              Submit Dispatch Memoir
            </h3>

            {/* Submission notifications */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 border text-xs rounded-xl mb-6 flex items-center gap-2 font-medium bg-emerald-500/10 border-emerald-500/35 text-emerald-500"
                >
                  <Send className="w-4 h-4 shrink-0 text-emerald-500" />
                  Your message has been sent directly to journeyo2701@gmail.com. We will respond within 24 hours.
                </motion.div>
              )}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 border text-xs rounded-xl mb-6 flex items-center gap-2 font-medium bg-rose-500/10 border-rose-500/35 text-rose-500"
                >
                  <span className="shrink-0 text-rose-500 font-bold">⚠️</span>
                  {submitError}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleContactSubmit} className="space-y-5">
              {/* Name & Email (Split) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1.5 opacity-80 ${
                    theme === 'day' ? 'text-[#4A2E1F]' : 'text-[#F5E9DB]'
                  }`}>
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
                  <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1.5 opacity-80 ${
                    theme === 'day' ? 'text-[#4A2E1F]' : 'text-[#F5E9DB]'
                  }`}>
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
                <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1.5 opacity-80 ${
                  theme === 'day' ? 'text-[#4A2E1F]' : 'text-[#F5E9DB]'
                }`}>
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
                <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1.5 opacity-80 ${
                  theme === 'day' ? 'text-[#4A2E1F]' : 'text-[#F5E9DB]'
                }`}>
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
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#8B5E3C] hover:bg-[#A47148] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Sending Ticket..." : "Dispatch Inquiry to Concierge Office"}
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>

    </div>
  );
}
