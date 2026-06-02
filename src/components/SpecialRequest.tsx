import React, { useState, useEffect } from 'react';
import { Compass, Calendar, Wallet, Users, MessageSquare, Sparkles, Tag, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SpecialRequestProps {
  theme: 'day' | 'night';
}

export default function SpecialRequest({ theme }: SpecialRequestProps) {
  const [formData, setFormData] = useState({
    destination: '',
    budget: '',
    preferences: 'Absolute Silence & Nature',
    travelers: '2',
    dates: '',
    notes: '',
  });

  const [whatsappUrl, setWhatsappUrl] = useState('');

  // Live WhatsApp formatter
  useEffect(() => {
    const formattedBudget = formData.budget
      ? `₹${Number(formData.budget).toLocaleString('en-IN')}`
      : 'Flexible';

    const message = `*JOURNEYO Customised Trip Request* \n` +
      `=============================\n` +
      `• *Target Destination:* ${formData.destination || 'Uncharted/Flexible'}\n` +
      `• *Luxury Budget (INR):* ${formattedBudget}\n` +
      `• *Travel Archetype:* ${formData.preferences}\n` +
      `• *Explorer Count:* ${formData.travelers} Guest(s)\n` +
      `• *Schedule Dates:* ${formData.dates || 'Flexible'}\n` +
      `• *Bespoke Notes:* ${formData.notes || 'None'}\n` +
      `=============================\n` +
      `Please assign a senior travel architect to map my coordinates. Thank you, JOURNEYO.`;

    const encoded = encodeURIComponent(message);
    setWhatsappUrl(`https://wa.me/917742484898?text=${encoded}`);
  }, [formData]);

  // Theme values
  const textTitleColor = theme === 'day' ? 'text-teal-950' : 'text-white';
  const textSubColor = theme === 'day' ? 'text-teal-900/70' : 'text-slate-300';
  const cardBgClasses = theme === 'day'
    ? 'bg-white/40 border-teal-100/50 hover:shadow-xl'
    : 'bg-slate-950/45 border-indigo-950/40 hover:shadow-xl';

  const inputStyle = theme === 'day'
    ? 'bg-white/70 border-teal-100 text-teal-950 focus:border-teal-500'
    : 'bg-slate-950/60 border-indigo-950/40 text-slate-100 focus:border-indigo-500';

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 relative w-full text-left">
      
      {/* Header section */}
      <div className="max-w-2xl mb-12 sm:mb-16">
        <span className="text-xs font-bold tracking-widest uppercase text-teal-600 dark:text-cyan-400 mb-2 block">
          Customise Trip
        </span>
        <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${textTitleColor}`}>
          Customise Your Trip
        </h2>
        <p className={`text-sm leading-relaxed ${textSubColor}`}>
          If none of our seasonal featured expeditions match your soul’s blueprint, declare your coordinates, budget, and sensory preferences below. We will assign a senior travel architect to map your journey within 30 minutes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
        
        {/* LEFT COLUMN: The Custom Fields Form */}
        <div className="lg:col-span-7 space-y-6">
          <div className={`p-6 sm:p-10 rounded-2xl border backdrop-blur-sm shadow-xl ${cardBgClasses}`}>
            <h3 className={`text-lg sm:text-xl font-bold tracking-tight mb-8 flex items-center gap-2 ${textTitleColor}`}>
              <Sparkles className="w-5 h-5 text-teal-500 animate-spin-slow" />
              Custom Expeditions Specs
            </h3>

            <div className="space-y-6">
              
              {/* Target Destination & Dates (Side-by-side) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label 
                    className="block text-[10px] font-bold uppercase tracking-wider mb-2 opacity-80"
                    style={theme === 'day' ? { color: '#6e739f' } : undefined}
                  >
                    Desired Destination / Area
                  </label>
                  <div className="relative">
                    <Compass className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 opacity-50" />
                    <input
                      type="text"
                      placeholder="e.g. Kyoto Outskirts or Swiss Glaciers"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs border outline-none transition-all ${inputStyle}`}
                    />
                  </div>
                </div>

                <div>
                  <label 
                    className="block text-[10px] font-bold uppercase tracking-wider mb-2 opacity-80"
                    style={theme === 'day' ? { color: '#6e739f' } : undefined}
                  >
                    Target Timeframe / Calendar
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 opacity-50" />
                    <input
                      type="text"
                      placeholder="e.g. Mid-Autumn or Dec 20-27"
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs border outline-none transition-all ${inputStyle}`}
                    />
                  </div>
                </div>
              </div>

              {/* Travelers & Budget (Side-by-side) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label 
                    className="block text-[10px] font-bold uppercase tracking-wider mb-2 opacity-80"
                    style={theme === 'day' ? { color: '#6e739f' } : undefined}
                  >
                    Guest Count
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 opacity-50 pointer-events-none" />
                    <select
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs border outline-none transition-all cursor-pointer appearance-none ${inputStyle}`}
                    >
                      <option value="1">1 Explorer</option>
                      <option value="2">2 Explorers</option>
                      <option value="4">4 Explorers</option>
                      <option value="6">6+ Explorers</option>
                      <option value="12">VVIP Charter Party (10+)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label 
                    className="block text-[10px] font-bold uppercase tracking-wider mb-2 opacity-80"
                    style={theme === 'day' ? { color: '#6e739f' } : undefined}
                  >
                    Luxury Budget Limit (INR)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">₹</span>
                    <input
                      type="number"
                      placeholder="e.g. 500000"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className={`w-full pl-8 pr-4 py-3 rounded-xl text-xs border outline-none transition-all ${inputStyle}`}
                    />
                  </div>
                </div>
              </div>

              {/* Travel Preferences Archetype Selection */}
              <div>
                <label 
                  className="block text-[10px] font-bold uppercase tracking-wider mb-2 opacity-80"
                  style={theme === 'day' ? { color: '#6e739f' } : undefined}
                >
                  Target Travel Archetype
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    'Absolute Silence & Nature',
                    'Heritage Castles & Tea History',
                    'High Adventure & Helicopter Safaris'
                  ].map((arch) => {
                    const isSelected = formData.preferences === arch;
                    return (
                      <button
                        key={arch}
                        type="button"
                        onClick={() => setFormData({ ...formData, preferences: arch })}
                        className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? 'border-teal-500 bg-teal-500/10 text-teal-800 dark:text-teal-200'
                            : theme === 'day'
                            ? 'border-teal-100 hover:bg-white/50'
                            : 'border-indigo-950/30 text-slate-400 hover:bg-black/30'
                        }`}
                        style={theme === 'day' && !isSelected ? { color: '#6e739f' } : undefined}
                      >
                        {arch}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Additional custom notes */}
              <div>
                <label 
                  className="block text-[10px] font-bold uppercase tracking-wider mb-2 opacity-80"
                  style={theme === 'day' ? { color: '#6e739f' } : undefined}
                >
                  Sensory Preferences / Bespoke Requests
                </label>
                <textarea
                  rows={4}
                  placeholder="e.g. Hand-rolled cigars at night, single-estate Darjeeling teas, private sitar performance requested at high camps..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className={`w-full p-4 rounded-xl text-xs border outline-none transition-all resize-none ${inputStyle}`}
                />
              </div>

              {/* Submit trigger styled anchor */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-gradient-to-r from-teal-600 via-teal-500 to-indigo-600 hover:brightness-105 rounded-xl active:scale-[0.99] text-white text-center font-bold text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <MessageSquare className="w-4.5 h-4.5 animate-pulse" />
                  Submit Customise Trip Specifications to WhatsApp
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Ticket-themed preview of their custom expedition */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="relative rounded-2xl border border-white/20 bg-slate-950 text-white overflow-hidden shadow-2xl p-6 sm:p-8 select-none">
            {/* Holographic background glow */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-br from-teal-500/15 to-indigo-500/15 rounded-full blur-[45px]" />
            <div className="absolute bottom-[-10%] left-[-15%] w-[180px] h-[180px] bg-teal-500/10 rounded-full blur-[40px]" />

            {/* Ticket header strip */}
            <div className="flex justify-between items-center border-b border-white/10 pb-5 mb-5 uppercase text-left relative">
              <div>
                <span className="text-[9px] font-bold text-teal-400 tracking-wider">CHARTER CODE</span>
                <p className="text-xs font-semibold font-mono text-slate-300">JO-B_2026_CUSTOM</p>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-bold text-teal-400 tracking-wider">BOARDING LEDGER</span>
                <p className="text-xs font-semibold font-mono text-slate-300">VVIP ACCESS</p>
              </div>
            </div>

            {/* Ticket Body details */}
            <div className="text-left space-y-4 mb-6 relative">
              <div>
                <span className="text-[9px] text-slate-400 block tracking-wider uppercase">Destination Domain</span>
                <span className="text-sm font-bold text-teal-300 font-sans tracking-tight">
                  {formData.destination || 'To Be Mapped (Chordial)'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[9px] text-slate-400 block tracking-wider uppercase">Guest Load</span>
                  <span className="text-xs font-semibold text-slate-100">{formData.travelers} Traveler(s)</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 block tracking-wider uppercase">Target Budget (INR)</span>
                  <span className="text-xs font-semibold text-teal-300">
                    {formData.budget ? `₹${Number(formData.budget).toLocaleString('en-IN')}` : 'Flexible'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[9px] text-slate-400 block tracking-wider uppercase">Travel Schedule</span>
                  <span className="text-xs font-semibold text-slate-100">{formData.dates || 'Flexible Calendar'}</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 block tracking-wider uppercase">Vanguard Archetype</span>
                  <span className="text-xs font-semibold text-teal-300 font-mono tracking-tighter uppercase">{formData.preferences}</span>
                </div>
              </div>

              <div>
                <span className="text-[9px] text-slate-400 block tracking-wider uppercase">Custom Directives requested</span>
                <p className="text-[11px] leading-relaxed text-slate-300 italic">
                  "{formData.notes || 'None declared. Sitar performance, organic dining default.'}"
                </p>
              </div>
            </div>

            {/* Cut-off receipt line design */}
            <div className="relative border-t-2 border-dashed border-white/10 pt-5 text-left flex items-center justify-between">
              {/* Absolutes circular notches on the left/right margins to denote travel ticket clipping */}
              <div className="absolute left-[-32px] sm:left-[-40px] top-[-10px] w-5 h-5 bg-gradient-to-r from-[#ebf8fa] to-[#f7f2eb] dark:from-[#030712] dark:to-[#040817] rounded-full z-10" />
              <div className="absolute right-[-32px] sm:right-[-40px] top-[-10px] w-5 h-5 bg-gradient-to-l from-[#ebf8fa] to-[#f7f2eb] dark:from-[#030712] dark:to-[#040817] rounded-full z-10" />

              <div>
                <p className="text-[9px] font-mono text-slate-400">PASSPORT NO: REQ_2026_M</p>
                <p className="text-[10px] font-bold text-teal-400">AUTHORIZED JOURNEYO CORE</p>
              </div>
              
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-[9px] font-semibold text-slate-300">SYSTEM KEY ONSTANDBY</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
