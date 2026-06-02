import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface FloatingActionsProps {
  theme: 'day' | 'night';
}

export default function FloatingActions({ theme }: FloatingActionsProps) {
  const number = '+919058831564';
  const whatsappUrl = `https://wa.me/919058831564?text=${encodeURIComponent('Hello JOURNEYO! I am looking to plan a premium luxury vacation. Please connect me with a luxury travel architect.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5 pointer-events-auto">
      {/* Call Button */}
      <motion.a
        href={`tel:${number}`}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group relative w-12 h-12 rounded-full flex items-center justify-center border border-white/20 shadow-[0_4px_20px_0_rgba(0,0,0,0.15)] bg-teal-600/90 dark:bg-sky-600/90 backdrop-blur-md text-white transition-all duration-300"
        title="Call JOURNEYO Specialist"
      >
        {/* Glow radar ring */}
        <span className="absolute inset-x-0 inset-y-0 rounded-full bg-teal-400/30 animate-ping group-hover:block" style={{ animationDuration: '3s' }} />
        
        {/* Contact info overlay tooltip */}
        <span className="absolute right-14 whitespace-nowrap bg-slate-900/95 dark:bg-slate-950/95 text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border border-slate-800 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
          Call Expert
        </span>
        <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group relative w-12 h-12 rounded-full flex items-center justify-center border border-white/20 shadow-[0_4px_20px_0_rgba(0,0,0,0.15)] bg-[#25D366]/90 backdrop-blur-md text-white transition-all duration-300"
        title="Chat on WhatsApp"
      >
        {/* Glow radar ring */}
        <span className="absolute inset-x-0 inset-y-0 rounded-full bg-green-400/30 animate-ping group-hover:block" style={{ animationDuration: '2.5s' }} />

        {/* Contact info overlay tooltip */}
        <span className="absolute right-14 whitespace-nowrap bg-slate-900/95 dark:bg-slate-950/95 text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border border-slate-800 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
          WhatsApp Chat
        </span>
        <MessageCircle className="w-5.5 h-5.5 group-hover:scale-110 transition-transform duration-300" />
      </motion.a>
    </div>
  );
}
