import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, MapPin, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

interface GalleryProps {
  theme: 'day' | 'night';
}

export default function Gallery({ theme }: GalleryProps) {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Filter Categories setup (for a premium touch)
  const [activeCategory, setActiveCategory] = useState<'all' | 'mountains' | 'islands' | 'historic'>('all');

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'mountains') return item.location.toLowerCase().includes('himalaya') || item.location.toLowerCase().includes('yosemite');
    if (activeCategory === 'islands') return item.location.toLowerCase().includes('maldives') || item.location.toLowerCase().includes('bora') || item.location.toLowerCase().includes('positano');
    if (activeCategory === 'historic') return item.location.toLowerCase().includes('kyoto') || item.location.toLowerCase().includes('turkey');
    return true;
  });

  const nextPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % filteredItems.length);
    }
  };

  const prevPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // theme styling
  const textTitleColor = theme === 'day' ? 'text-teal-950' : 'text-white';
  const textSubColor = theme === 'day' ? 'text-teal-900/70' : 'text-slate-300';

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 relative w-full text-left">
      
      {/* Page Header */}
      <div className="max-w-2xl mb-10">
        <span className="text-xs font-bold tracking-widest uppercase text-teal-600 dark:text-cyan-400 mb-2 block">
          Visual Exponents
        </span>
        <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${textTitleColor}`}>
          A Port of Elite Coordinates
        </h2>
        <p className={`text-sm leading-relaxed ${textSubColor}`}>
          Gaze upon the raw, unmanipulated visuals of high-altitude solitude and deep blue islets captured by our vanguard travel leads during past custom charter explorations.
        </p>
      </div>

      {/* Category Pills Filters */}
      <div className="flex flex-wrap gap-2.5 mb-12">
        {(['all', 'mountains', 'islands', 'historic'] as const).map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActivePhotoIndex(null);
              }}
              className={`px-4.5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-teal-600 text-white shadow-md'
                  : theme === 'day'
                  ? 'bg-white/40 border border-teal-900/10 text-teal-950 hover:bg-white/65'
                  : 'bg-black/20 border border-white/5 text-slate-300 hover:bg-black/45'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid container with custom masonry style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => {
            // map heights based on index
            const heightClass = item.aspect === 'tall' 
              ? 'row-span-2 aspect-[3/4]' 
              : item.aspect === 'wide'
              ? 'col-span-1 sm:col-span-2 aspect-[16/10]'
              : 'aspect-square';

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => setActivePhotoIndex(index)}
                className={`relative group rounded-2xl overflow-hidden cursor-pointer shadow-md border border-white/10 ${heightClass}`}
              >
                {/* Real High-Resolution Image */}
                <img
                  src={item.url}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                />

                {/* Dense shadow Scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left" />

                {/* Floating Content overlays visible on hover */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-end justify-between select-none">
                  <div>
                    <span className="text-[9px] font-bold tracking-widest text-teal-400 uppercase mb-0.5 block flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                    <h4 className="text-sm font-bold tracking-tight">
                      {item.title}
                    </h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/25">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* FULLSCREEN LIGHTBOX PORTLAND WITH RICH DECOR */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActivePhotoIndex(null)}
          >
            {/* Elegant Header absolute toolbar */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10 pointer-events-none">
              <div className="flex items-center gap-3 text-white">
                <Compass className="w-6 h-6 text-teal-400 rotate-45" />
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-teal-400 uppercase block">JOURNEYO EXHIBITS</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-300">{filteredItems[activePhotoIndex].title}</span>
                </div>
              </div>
              <button
                onClick={() => setActivePhotoIndex(null)}
                className="p-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full text-white cursor-pointer transition-colors pointer-events-auto"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Left Button */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white cursor-pointer transition-all z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image display */}
            <motion.div
              layoutId={`gallery-lightbox-${filteredItems[activePhotoIndex].id}`}
              className="relative max-h-[75vh] max-w-[90vw] overflow-hidden rounded-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[activePhotoIndex].url}
                alt={filteredItems[activePhotoIndex].title}
                className="max-h-[75vh] w-auto max-w-[90vw] object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Right Button */}
            <button
              onClick={nextPhoto}
              className="absolute right-4 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white cursor-pointer transition-all z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Absolute Footer Overlay with specific metadata */}
            <div className="absolute bottom-8 inset-x-6 text-center text-white pointer-events-none z-10 select-none">
              <p className="text-[10px] font-bold uppercase tracking-widest text-teal-400 flex items-center justify-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-500" />
                {filteredItems[activePhotoIndex].location}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mt-1.5">
                {filteredItems[activePhotoIndex].title}
              </h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
