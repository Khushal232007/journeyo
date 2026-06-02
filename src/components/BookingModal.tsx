import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Wallet, Users, Compass } from 'lucide-react';
import { motion } from 'motion/react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName?: string;
  theme: 'day' | 'night';
}

export default function BookingModal({ isOpen, onClose, packageName = '', theme }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    travelers: '2',
    budget: '',
    dates: '',
  });

  const [whatsappUrl, setWhatsappUrl] = useState('');

  // Generate WhatsApp link dynamically on input changes to ensure native anchors are completely functional
  useEffect(() => {
    const formattedBudget = formData.budget
      ? `₹${Number(formData.budget).toLocaleString('en-IN')}`
      : 'Flexible';

    const message = `*JOURNEYO Luxury Booking Enquiry* \n` +
      `=============================\n` +
      `• *Explorer:* ${formData.name || 'Not provided'}\n` +
      `• *Contact:* ${formData.phone || 'Not provided'}\n` +
      `• *Expedition:* ${packageName || 'Customised Trip'} (INR)\n` +
      `• *Guests:* ${formData.travelers} Traveler(s)\n` +
      `• *Luxury Budget:* ${formattedBudget}\n` +
      `• *Travel Schedule:* ${formData.dates || 'Flexible'}\n` +
      `=============================\n` +
      `Please connect with me on WhatsApp to finalize my itinerary. Thank you, JOURNEYO.`;

    const encoded = encodeURIComponent(message);
    setWhatsappUrl(`https://wa.me/919058831564?text=${encoded}`);
  }, [formData, packageName]);

  if (!isOpen) return null;

  const bgClasses = theme === 'day'
    ? 'bg-gradient-to-br from-[#ebf8fa] to-[#f7f2eb] text-teal-950 border border-teal-100'
    : 'bg-gradient-to-br from-[#0c1226] to-[#040817] text-white border border-indigo-900/40';

  const inputStyle = theme === 'day'
    ? 'bg-white/60 border-teal-100 text-teal-950 focus:border-teal-500 focus:bg-white'
    : 'bg-slate-900/60 border-indigo-950 text-slate-100 focus:border-indigo-500 focus:bg-slate-950';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark overlay backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Main Modal body */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className={`relative w-full max-w-lg rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden z-10 ${bgClasses}`}
      >
        {/* Subtle decorative vector circles inside modal */}
        <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-teal-300/[3%] blur-[50px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-indigo-500/[3%] blur-[50px]" />

        {/* Header */}
        <div className="flex items-center justify-between mb-6 relative">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-teal-600 dark:text-indigo-400 mb-1 block">
              Luxury Inquiry
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              {packageName ? 'Bespoke Package Booking' : 'Tailor-Made Vacation'}
            </h3>
            {packageName && (
              <p className="text-sm opacity-70 mt-1 flex items-center gap-1.5 font-medium">
                <Compass className="w-3.5 h-3.5 text-teal-500" />
                {packageName}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="space-y-4 relative">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
              Your Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 opacity-50" />
              <input
                type="text"
                required
                placeholder="Lord Sterling"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none transition-all duration-300 ${inputStyle}`}
              />
            </div>
          </div>

          {/* Contact phone */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
              Active WhatsApp Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 opacity-50" />
              <input
                type="tel"
                required
                placeholder="+1 (555) 0192"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none transition-all duration-300 ${inputStyle}`}
              />
            </div>
          </div>

          {/* Travelers and Budget (Side by Side) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                Guests
              </label>
              <div className="relative">
                <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 opacity-50" />
                <select
                  value={formData.travelers}
                  onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none transition-all duration-300 cursor-pointer appearance-none ${inputStyle}`}
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
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                Luxury Budget (INR)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold opacity-70">₹</span>
                <input
                  type="number"
                  placeholder="e.g. 250000"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className={`w-full pl-8 pr-4 py-2.5 rounded-xl border text-sm outline-none transition-all duration-300 ${inputStyle}`}
                />
              </div>
            </div>
          </div>

          {/* Travel Dates */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
              Target Travel Dates
            </label>
            <div className="relative">
              <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 opacity-50" />
              <input
                type="text"
                placeholder="e.g. Mid-October or Dec 12 - 20"
                value={formData.dates}
                onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none transition-all duration-300 ${inputStyle}`}
              />
            </div>
          </div>

          {/* Guidelines note */}
          <p className="text-[11px] opacity-60 leading-normal pt-1">
            Submitting this enquiry opens your instant high-priority gateway in WhatsApp. Our travel coordinators respond within 15 minutes to configure hotel suites and charter flights.
          </p>

          {/* Submit Anchor (styled like ultra premium button) */}
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                // We briefly delay onClose so user has clicked and redirection started
                setTimeout(() => onClose(), 1000);
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-600 via-teal-500 to-indigo-600 dark:from-teal-500 dark:via-indigo-500 dark:to-teal-400 hover:brightness-105 active:scale-[0.99] text-white text-center font-bold text-sm uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
            >
              Secure Bespoke Space via WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
