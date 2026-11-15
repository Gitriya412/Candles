import React from 'react';
import { X, Flame, Scissors, Clock, Recycle, Sparkles } from 'lucide-react';

export default function CandleCareModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const rituals = [
    {
      icon: Clock,
      title: 'The First Burn is Crucial',
      desc: 'Allow the wax pool to melt completely to the edges of the vessel during your initial burn (approx. 2 to 3 hours). This prevents "candle tunneling" and ensures a smooth, even surface for every future lighting.',
    },
    {
      icon: Scissors,
      title: 'Always Trim Your Wick to 1/4 Inch',
      desc: 'Before every lighting, trim your cotton wick to 1/4 inch (6mm) or pinch the charred tip of crackling wood wicks. This prevents high flames, smoke, and preserves a clean burn.',
    },
    {
      icon: Flame,
      title: 'Max 4-Hour Burn Sessions',
      desc: 'Never burn your candle for longer than 4 consecutive hours. Give the glass or ceramic time to cool and reset before relighting.',
    },
    {
      icon: Recycle,
      title: 'Repurpose the Artistic Vessel',
      desc: 'When 1/2 inch of wax remains, pour warm water to loosen the wax, wipe clean, and repurpose your terracotta pot or frosted glass as a succulent planter or vanity holder.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-espresso/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-cream-100 rounded-3xl max-w-2xl w-full p-6 sm:p-8 text-left shadow-2xl border border-espresso/10 z-10 animate-fade-up">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-espresso/60 hover:text-espresso hover:bg-cream-200"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center max-w-lg mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta/10 text-terracotta text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The LUMORA Ritual</span>
          </div>
          <h3 className="font-serif text-3xl font-medium text-espresso">
            Candle Care & Longevity Guide
          </h3>
          <p className="text-xs sm:text-sm text-espresso/70 mt-1">
            Handcrafted candles burn best when cared for with intention. Follow these simple steps for up to 55 hours of aromatic perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rituals.map((ritual, idx) => {
            const Icon = ritual.icon;
            return (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-espresso/10 space-y-2">
                <div className="flex items-center gap-2.5 text-terracotta">
                  <div className="w-8 h-8 rounded-xl bg-terracotta/10 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-base font-semibold text-espresso">
                    {ritual.title}
                  </h4>
                </div>
                <p className="text-xs text-espresso/70 leading-relaxed font-normal">
                  {ritual.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-espresso/10 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-espresso text-cream-100 text-xs font-semibold uppercase tracking-wider hover:bg-espresso-dark"
          >
            I Understand the Ritual
          </button>
        </div>
      </div>
    </div>
  );
}
