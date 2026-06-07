import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Users, Compass } from 'lucide-react';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setSubmitError('');
    setShowSuccess(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/journeyo2701@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Route Story Inquiry: ${packageName || 'Bespoke Trip'} by ${formData.name}`,
          Form: "Expedition Booking Form",
          Expedition: packageName || "Customised Package",
          Explorer_Name: formData.name,
          WhatsApp_Number: formData.phone,
          Number_of_Guests: formData.travelers,
          Luxury_Budget: formData.budget ? `₹${formData.budget}` : "Flexible / Not declared",
          Travel_Schedule: formData.dates || "Flexible"
        })
      });

      if (response.ok) {
        setShowSuccess(true);
        
        // Automatically open the prefilled WhatsApp link in a new tab as requested
        try {
          window.open(whatsappUrl, '_blank');
        } catch (err) {
          console.error("Popup blocker prevented auto-opening WhatsApp. Direct link is displayed.", err);
        }

        setTimeout(() => {
          setFormData({
            name: '',
            phone: '',
            travelers: '2',
            budget: '',
            dates: '',
          });
          setShowSuccess(false);
          onClose();
        }, 5500);
      } else {
        setSubmitError("Transmission error. Please try again or reach our travel curation desk directly.");
      }
    } catch (err) {
      console.error(err);
      setSubmitError("Network connection error. Please verify status & try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate WhatsApp link dynamically on input changes to ensure native anchors are completely functional
  useEffect(() => {
    const formattedBudget = formData.budget
      ? `₹${Number(formData.budget).toLocaleString('en-IN')}`
      : 'Flexible';

    const message = `*Route Story Luxury Booking Enquiry* \n` +
      `=============================\n` +
      `• *Explorer:* ${formData.name || 'Not provided'}\n` +
      `• *Contact:* ${formData.phone || 'Not provided'}\n` +
      `• *Expedition:* ${packageName || 'Customised Trip'} (INR)\n` +
      `• *Guests:* ${formData.travelers} Traveler(s)\n` +
      `• *Luxury Budget:* ${formattedBudget}\n` +
      `• *Travel Schedule:* ${formData.dates || 'Flexible'}\n` +
      `=============================\n` +
      `Please connect with me on WhatsApp to finalize my itinerary. Thank you, Route Story.`;

    const encoded = encodeURIComponent(message);
    setWhatsappUrl(`https://wa.me/919058831564?text=${encoded}`);
  }, [formData, packageName]);

  if (!isOpen) return null;

  const isDay = theme === 'day';
  const bgClasses = isDay 
    ? 'bg-[#FFFFFF] text-[#4A2E1F] border border-[#C6B08E]/45'
    : 'bg-[#2A211B] text-[#F5E9DB] border border-[#4A3A2F]/50';

  const inputStyle = isDay
    ? 'bg-[#E8DFCF]/30 border-[#C6B08E]/40 text-[#4A2E1F] focus:border-[#8B5E3C] focus:bg-[#FFFFFF]'
    : 'bg-[#16110D]/70 border-[#4A3A2F]/50 text-[#F5E9DB] focus:border-[#C6B08E] focus:bg-[#2A211B]';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark overlay backdrop (Static, no transitions) */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Main Modal body */}
      <div className={`relative w-full max-w-lg rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden z-10 transition-all duration-300 ${bgClasses}`}>
        {/* Subtle decorative vector circles inside modal */}
        <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-[#8B6B52]/[3%] blur-[50px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-[#D4B48C]/[3%] blur-[50px]" />

        {/* Header */}
        <div className="flex items-center justify-between mb-6 relative">
          <div>
            <span className={`text-xs font-semibold tracking-widest uppercase mb-1 block font-mono ${isDay ? 'text-[#8B5E3C]' : 'text-[#C6B08E]'}`}>
              Luxury Inquiry
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              {packageName ? 'Bespoke Package Booking' : 'Tailor-Made Vacation'}
            </h3>
            {packageName && (
              <p className="text-sm opacity-70 mt-1 flex items-center gap-1.5 font-medium">
                <Compass className={`w-3.5 h-3.5 ${isDay ? 'text-[#8B5E3C]' : 'text-[#C6B08E]'}`} />
                {packageName}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className={`p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer ${isDay ? 'text-[#3B2E25]' : 'text-[#F5E6D3]'}`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleBookingSubmit} className="space-y-4 relative">
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
                  <option value="1" className={isDay ? 'text-[#4A2E1F] bg-[#FFFFFF]' : 'text-[#F5E9DB] bg-[#2A211B]'}>1 Explorer</option>
                  <option value="2" className={isDay ? 'text-[#4A2E1F] bg-[#FFFFFF]' : 'text-[#F5E9DB] bg-[#2A211B]'}>2 Explorers</option>
                  <option value="4" className={isDay ? 'text-[#4A2E1F] bg-[#FFFFFF]' : 'text-[#F5E9DB] bg-[#2A211B]'}>4 Explorers</option>
                  <option value="6" className={isDay ? 'text-[#4A2E1F] bg-[#FFFFFF]' : 'text-[#F5E9DB] bg-[#2A211B]'}>6+ Explorers</option>
                  <option value="12" className={isDay ? 'text-[#4A2E1F] bg-[#FFFFFF]' : 'text-[#F5E9DB] bg-[#2A211B]'}>VVIP Charter Party (10+)</option>
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

          {/* Submission and error indicators */}
          {showSuccess && (
            <div className="p-4 border text-xs rounded-xl bg-emerald-500/10 border-emerald-500/35 text-emerald-500 font-semibold space-y-1.5">
              <p>✅ Inquiry submitted directly to our travel planners!</p>
              <p className="text-[10px] opacity-90 leading-tight">
                Our support team is notified. You can also click below to open instant WhatsApp coordinates if preferred.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[10px] underline tracking-wider uppercase font-bold text-emerald-600 dark:text-emerald-400"
              >
                Send via WhatsApp too ↗
              </a>
            </div>
          )}

          {submitError && (
            <div className="p-3.5 border text-xs rounded-xl bg-rose-500/10 border-rose-500/35 text-rose-500 font-medium">
              ⚠️ {submitError}
            </div>
          )}

          {/* Guidelines note */}
          <p className="text-[11px] opacity-60 leading-normal pt-1">
            Submitting this enquiry transmits specifications to our concierge email instantly. You can optionally open live chat on WhatsApp for priority booking in 15 minutes.
          </p>

          {/* Submit Action (colored beautifully in mocha) */}
          <div className="pt-2 font-sans">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-[#8B5E3C] hover:bg-[#A47148] disabled:opacity-50 disabled:cursor-not-allowed text-[#F5E9DB] text-center font-bold text-sm uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
            >
              {isSubmitting ? "Submitting Inquiry..." : "Submit Reservation / Booking Inquiry"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
