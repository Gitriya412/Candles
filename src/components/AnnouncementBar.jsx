import React, { useState } from 'react';
import { Sparkles, X, ChevronRight } from 'lucide-react';

export default function AnnouncementBar({ onOpenPromo }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside aria-label="Announcement" className="bg-espresso text-cream-100 text-xs sm:text-sm py-2.5 px-4 relative transition-all duration-300 border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 flex items-center justify-center gap-2 sm:gap-3 text-center">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-terracotta text-white text-[11px] font-medium tracking-wider uppercase">
            <Sparkles className="w-3 h-3 text-amberGold-light animate-pulse" /> Special Offer
          </span>
          <p className="font-medium tracking-wide">
            Handcrafted with Love <span className="opacity-40 mx-1.5">|</span> Free Shipping Above ₹999
          </p>
          <span className="hidden md:inline-flex items-center gap-1 text-dustyRose font-medium cursor-pointer hover:underline" onClick={onOpenPromo}>
            Use code <strong className="text-amberGold-light underline ml-1">GLOW10</strong> for 10% off
            <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-cream-200/70 hover:text-white p-1 transition-colors rounded-full hover:bg-white/10 ml-2"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
