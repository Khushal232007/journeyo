import React, { useState, useEffect } from 'react';
import { Compass, Calendar, Users, MessageSquare, Sparkles, CheckCircle, Phone } from 'lucide-react';

interface SpecialRequestProps {
  theme: 'day' | 'night';
}

export default function SpecialRequest({ theme }: SpecialRequestProps) {
  const [formData, setFormData] = useState({
    destination: '',
    phone: '',
    budget: '',
    travelers: '',
    dates: '',
    addOns: [] as string[],
    notes: '',
  });

  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.destination) {
      setSubmitError("Please declare a destination before proceeding.");
      return;
    }
    if (!formData.phone) {
      setSubmitError("Please provide a contact number so we can reach you.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    setShowSuccess(false);

    try {
      const selectedAddOns = formData.addOns.length > 0 ? formData.addOns.join(', ') : "None";
      const response = await fetch("https://formsubmit.co/ajax/journeyo2701@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Custom Trip Request: ${formData.destination}`,
          Form: "Customize Trip Form",
          Destination: formData.destination,
          Contact_Number: formData.phone,
          Dates: formData.dates || "Flexible",
          Number_of_Travelers: formData.travelers || "Flexible",
          Budget_INR: formData.budget || "Flexible",
          Add_Ons: selectedAddOns,
          Special_Requests: formData.notes || "None"
        })
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          destination: '',
          phone: '',
          budget: '',
          travelers: '',
          dates: '',
          addOns: [],
          notes: ''
        });
        setTimeout(() => setShowSuccess(false), 8000);
      } else {
        setSubmitError("Failed to submit details. Please try again or contact our travel curators directly.");
      }
    } catch (err) {
      console.error(err);
      setSubmitError("Network connection error. Please verify status and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Live WhatsApp formatter
  useEffect(() => {
    const selectedAddOns = formData.addOns.length > 0 ? formData.addOns.map(a => `✅ ${a}`).join(', ') : 'None';

    const message = `*Customize Your Trip With Route Story* \n` +
      `=============================\n` +
      `• *Destination / Area:* ${formData.destination || 'e.g. Goa, Manali, Kashmir, Meghalaya'}\n` +
      `• *Contact Number:* ${formData.phone || 'e.g. +91 99999 99999'}\n` +
      `• *Travel Dates:* ${formData.dates || 'Select your preferred travel dates'}\n` +
      `• *Number of Travelers:* ${formData.travelers || 'e.g. 2 Travelers'}\n` +
      `• *Budget (INR):* ${formData.budget || 'e.g. ₹25,000'}\n` +
      `• *Add-on options:* ${selectedAddOns}\n` +
      `• *Special Requests:* ${formData.notes || 'None'}\n` +
      `=============================\n` +
      `Note: Our team will contact you within 24 hours to discuss your travel requirements and create a personalized itinerary.`;

    const encoded = encodeURIComponent(message);
    setWhatsappUrl(`https://wa.me/917742484898?text=${encoded}`);
  }, [formData]);

  // Theme values
  const textTitleColor = theme === 'day' ? 'text-[#4A2E1F]' : 'text-[#F5E9DB]';
  const textSubColor = theme === 'day' ? 'text-[#6E5847]' : 'text-[#D7C2A5]';
  const cardBgClasses = theme === 'day'
    ? 'bg-[#FFFFFF] border-[#C6B08E]/45 hover:shadow-xl text-[#4A2E1F]'
    : 'bg-[#2A211B] border-[#4A3A2F]/50 hover:shadow-xl text-[#F5E9DB]';

  const inputStyle = theme === 'day'
    ? 'bg-[#E8DFCF]/30 border-[#C6B08E]/40 text-[#4A2E1F] focus:border-[#8B5E3C]'
    : 'bg-[#16110D]/60 border-[#4A3A2F]/30 text-[#F5E9DB] focus:border-[#C6B08E]';

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 relative w-full text-left">
      
      {/* Header section */}
      <div className="max-w-2xl mb-12 sm:mb-16">
        <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${textTitleColor}`}>
          Customize Your Trip With Route Story
        </h2>
        <p className={`text-sm leading-relaxed ${textSubColor}`}>
          Tell us your desired destination, preferences, and timeline. Our travel creators will craft a custom, slow-paced itinerary tailored uniquely to your journey.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
        
        {/* LEFT COLUMN: The Custom Fields Form */}
        <div className="lg:col-span-7 space-y-6">
          <div className={`p-6 sm:p-10 rounded-2xl border backdrop-blur-sm shadow-xl ${cardBgClasses}`}>
            <h3 className={`text-lg sm:text-xl font-bold tracking-tight mb-8 flex items-center gap-2 ${textTitleColor}`}>
              <Sparkles className="w-5 h-5 text-[#8B5E3C] dark:text-[#C6B08E] animate-spin-slow" />
              Trip Details
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Target Destination & Dates (Side-by-side) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label 
                    className="block text-[10px] font-bold uppercase tracking-wider mb-2 opacity-80"
                    style={theme === 'day' ? { color: '#4A2E1F' } : undefined}
                  >
                    Destination / Area
                  </label>
                  <div className="relative">
                    <Compass className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 opacity-50" />
                    <input
                      type="text"
                      placeholder="e.g. Goa, Manali, Kashmir, Meghalaya"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs border outline-none transition-all ${inputStyle}`}
                    />
                  </div>
                </div>

                <div>
                  <label 
                    className="block text-[10px] font-bold uppercase tracking-wider mb-2 opacity-80"
                    style={theme === 'day' ? { color: '#4A2E1F' } : undefined}
                  >
                    Travel Dates
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 opacity-50" />
                    <input
                      type="text"
                      placeholder="Select your preferred travel dates"
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
                    style={theme === 'day' ? { color: '#4A2E1F' } : undefined}
                  >
                    Number of Travelers
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 opacity-50 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="e.g. 2 Travelers"
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs border outline-none transition-all ${inputStyle}`}
                    />
                  </div>
                </div>

                <div>
                  <label 
                    className="block text-[10px] font-bold uppercase tracking-wider mb-2 opacity-80"
                    style={theme === 'day' ? { color: '#4A2E1F' } : undefined}
                  >
                    Budget (INR)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">₹</span>
                    <input
                      type="text"
                      placeholder="e.g. ₹25,000"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className={`w-full pl-8 pr-4 py-3 rounded-xl text-xs border outline-none transition-all ${inputStyle}`}
                    />
                  </div>
                </div>
              </div>

              {/* Contact Number */}
              <div>
                <label 
                  className="block text-[10px] font-bold uppercase tracking-wider mb-2 opacity-80"
                  style={theme === 'day' ? { color: '#4A2E1F' } : undefined}
                >
                  CONTACT NUMBER
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 opacity-50" />
                  <input
                    type="tel"
                    required
                    placeholder="+917700044000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs border outline-none transition-all ${inputStyle}`}
                  />
                </div>
              </div>

              {/* Add On Selection Grid */}
              <div>
                <label 
                  className="block text-[10px] font-bold uppercase tracking-wider mb-2 opacity-80"
                  style={theme === 'day' ? { color: '#4A2E1F' } : undefined}
                >
                  Add on:-
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    'Adventure Trip',
                    'Family Vacation',
                    'Honeymoon Trip',
                    'Solo Travel',
                    'Group Tour',
                    'Spiritual Journey'
                  ].map((addOn) => {
                    const isSelected = formData.addOns.includes(addOn);
                    return (
                      <button
                        key={addOn}
                        type="button"
                        onClick={() => {
                          const updated = isSelected
                            ? formData.addOns.filter(a => a !== addOn)
                            : [...formData.addOns, addOn];
                          setFormData({ ...formData, addOns: updated });
                        }}
                        className={`p-3 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? 'border-[#8B5E3C] bg-[#8B5E3C]/10 text-[#8B5E3C] dark:border-[#C6B08E] dark:bg-[#C6B08E]/15 dark:text-[#C6B08E]'
                            : theme === 'day'
                            ? 'border-[#C6B08E]/30 hover:bg-[#E8DFCF]/40 text-[#6E5847]'
                            : 'border-[#4A3A2F]/40 text-[#D7C2A5]/70 hover:bg-[#2a211b]'
                        }`}
                        style={theme === 'day' && !isSelected ? { color: '#6E5847' } : undefined}
                      >
                        <span className="truncate">{addOn}</span>
                        <span className="text-[10px] sm:text-xs shrink-0 font-bold ml-1 text-slate-400 dark:text-slate-500">
                          {isSelected ? '✅' : '⚙️'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label 
                  className="block text-[10px] font-bold uppercase tracking-wider mb-2 opacity-80"
                  style={theme === 'day' ? { color: '#4A2E1F' } : undefined}
                >
                  Special Requests
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your preferences, hotel category, activities, transportation needs, or any special requirements."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className={`w-full p-4 rounded-xl text-xs border outline-none transition-all resize-none ${inputStyle}`}
                />
              </div>

              {/* Submission notifications */}
              {showSuccess && (
                <div className="p-4 border text-xs rounded-xl mb-4 bg-emerald-500/10 border-emerald-500/35 text-emerald-500 font-semibold space-y-2">
                  <p className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 shrink-0 text-emerald-500" />
                    <span>Your request specifications have been safely coordinated and delivered directly to our planning curators!</span>
                  </p>
                  <p className="text-[11px] opacity-90 leading-normal">
                    Our curators will build your customized itinerary and contact you within 24 hours. Interested in chatting with us on WhatsApp right away? Click below:
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs underline font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:brightness-115 cursor-pointer"
                  >
                    Discuss Specifications on WhatsApp ↗
                  </a>
                </div>
              )}

              {submitError && (
                <div className="p-4 border text-xs rounded-xl mb-4 bg-rose-500/10 border-rose-500/35 text-rose-500 font-medium">
                  <strong>⚠️ Error:</strong> {submitError}
                </div>
              )}

              {/* Submit trigger styled button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#8B5E3C] hover:bg-[#A47148] disabled:opacity-50 disabled:cursor-not-allowed rounded-xl active:scale-[0.99] text-white text-center font-bold text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <MessageSquare className="w-4.5 h-4.5 animate-pulse" />
                  {isSubmitting ? "Transmitting Specs..." : "Submit Custom Itinerary Request to Email"}
                </button>
                <p className={`text-[10px] sm:text-xs leading-normal opacity-80 mt-3 text-center sm:text-left ${theme === 'day' ? 'text-[#8B5E3C]' : 'text-[#C6B08E]'}`}>
                  <strong>Note:</strong> Our team will contact you within 24 hours to discuss your travel requirements and create a personalized itinerary.
                </p>
              </div>

            </form>
            <div className={`mt-8 pt-6 border-t font-semibold text-xs flex flex-wrap justify-between items-center gap-4 ${
              theme === 'day' ? 'border-[#C6B08E]/25 text-[#4A2E1F]' : 'border-[#4A3A2F]/30 text-[#F5E9DB]'
            }`}>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-500 font-bold">✅</span> Personalized Itineraries
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-500 font-bold">✅</span> Affordable Packages
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-500 font-bold">✅</span> 24/7 Travel Support
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Ticket-themed preview of their custom expedition */}
        <div className="lg:col-span-5 flex flex-col justify-center font-sans">
          <div className="relative rounded-2xl border border-[#C6B08E]/35 bg-[#2A211B] text-[#F5E9DB] overflow-hidden shadow-2xl p-6 sm:p-8 select-none">
            {/* Holographic background glow */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-br from-[#C6B08E]/10 to-[#8B5E3C]/10 rounded-full blur-[45px]" />
            <div className="absolute bottom-[-10%] left-[-15%] w-[180px] h-[180px] bg-[#C6B08E]/5 rounded-full blur-[40px]" />

            {/* Ticket header strip */}
            <div className="flex justify-between items-center border-b border-[#4A3A2F]/30 pb-5 mb-5 uppercase text-left relative">
              <div>
                <span className="text-[9px] font-bold text-[#C6B08E] tracking-wider">CHARTER CODE</span>
                <p className="text-xs font-semibold font-mono text-[#F5E9DB]/85">RS-B_2026_CUSTOM</p>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-bold text-[#C6B08E] tracking-wider">BOARDING LEDGER</span>
                <p className="text-xs font-semibold font-mono text-[#F5E9DB]/85">VVIP ACCESS</p>
              </div>
            </div>

            {/* Ticket Body details */}
            <div className="text-left space-y-4 mb-6 relative">
              <div>
                <span className="text-[9px] text-[#F5E9DB]/60 block tracking-wider uppercase">Destination Domain</span>
                <span className="text-sm font-bold text-[#C6B08E] font-sans tracking-tight">
                  {formData.destination || 'e.g. Goa, Manali, Kashmir, Meghalaya'}
                </span>
              </div>

              <div>
                <span className="text-[9px] text-[#F5E9DB]/60 block tracking-wider uppercase">Contact Coordinates</span>
                <span className="text-xs font-semibold text-[#F5E9DB]">{formData.phone || 'e.g. +91 99999 99999'}</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[9px] text-[#F5E9DB]/60 block tracking-wider uppercase">Travelers</span>
                  <span className="text-xs font-semibold text-[#F5E9DB]">{formData.travelers || 'e.g. 2 Travelers'}</span>
                </div>
                <div>
                  <span className="text-[9px] text-[#F5E9DB]/60 block tracking-wider uppercase">Target Budget</span>
                  <span className="text-xs font-semibold text-[#C6B08E]">
                    {formData.budget || 'e.g. ₹25,000'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[9px] text-[#F5E9DB]/60 block tracking-wider uppercase">Travel Schedule</span>
                  <span className="text-xs font-semibold text-[#F5E9DB]">{formData.dates || 'Select travel dates'}</span>
                </div>
                <div>
                  <span className="text-[9px] text-[#F5E9DB]/60 block tracking-wider uppercase">Add-ons Selected</span>
                  <span className="text-[10px] font-semibold text-[#C6B08E] font-mono tracking-tighter uppercase whitespace-normal leading-tight block">
                    {formData.addOns.length > 0 ? formData.addOns.join(', ') : 'None selected'}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[9px] text-[#F5E9DB]/60 block tracking-wider uppercase">Special Requests</span>
                <p className="text-[11px] leading-relaxed text-[#F5E9DB]/80 italic max-h-[80px] overflow-y-auto pr-1">
                  "{formData.notes || 'None declared. Complete bespoke itinerary...'}"
                </p>
              </div>
            </div>

            {/* Cut-off receipt line design */}
            <div className="relative border-t-2 border-dashed border-[#4A3A2F]/35 pt-5 text-left flex items-center justify-between">
              {/* Absolutes circular notches on the left/right margins to denote travel ticket clipping */}
              <div className={`absolute left-[-32px] sm:left-[-40px] top-[-10px] w-5 h-5 rounded-full z-10 ${
                theme === 'day' ? 'bg-[#F7F4EE]' : 'bg-[#16110D]'
              }`} />
              <div className={`absolute right-[-32px] sm:right-[-40px] top-[-10px] w-5 h-5 rounded-full z-10 ${
                theme === 'day' ? 'bg-[#F7F4EE]' : 'bg-[#16110D]'
              }`} />

              <div>
                <p className="text-[9px] font-mono text-[#F5E9DB]/60">PASSPORT NO: REQ_2026_M</p>
                <p className="text-[10px] font-bold text-[#C6B08E]">AUTHORIZED ROUTE STORY CORE</p>
              </div>
              
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#C6B08E] animate-pulse" />
                <span className="text-[9px] font-semibold text-[#F5E9DB]/80">SYSTEM KEY ONSTANDBY</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
