import React from 'react';
import { ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { collections } from '../data/collections';

export default function Collections({ onSelectCollection }) {
  return (
    <section id="collections" className="py-16 md:py-24 bg-cream-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 text-terracotta text-xs font-semibold tracking-wider uppercase mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Curated Worlds of Glow</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-espresso tracking-tight">
              Shop by Collection
            </h2>
            <p className="mt-3 text-base text-espresso/70 leading-relaxed">
              Explore candles crafted around specific moods, distinct chromatic palettes, and nostalgic aroma profiles.
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-espresso/60 font-medium">
            5 Distinct Artisanal Stories
          </div>
        </div>

        {/* Collections Grid - Editorial Bento-style Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((item, index) => {
            // First two cards are larger or featured
            const isFeatured = index === 0 || index === 3;
            
            return (
              <div
                key={item.id}
                onClick={() => onSelectCollection(item.id)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1.5 shadow-soft hover:shadow-soft-lg border border-espresso/10 flex flex-col justify-between bg-white ${
                  index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image Container with Zoom effect */}
                <div className={`relative w-full overflow-hidden ${
                  index === 0 ? 'h-72 sm:h-80 md:h-96' : 'h-64 sm:h-72'
                }`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  {/* Gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/25 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/90 backdrop-blur-md text-espresso shadow-xs">
                      {item.tag}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-espresso/60 backdrop-blur-md text-cream-100 border border-white/20">
                      {item.itemCount}
                    </span>
                  </div>

                  {/* Swatch dots inside card */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
                    {item.colorPalette.map((hex, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-full border border-white/60 shadow-xs"
                        style={{ backgroundColor: hex }}
                      />
                    ))}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-2xl sm:text-3xl font-medium text-espresso group-hover:text-terracotta transition-colors">
                        {item.title}
                      </h3>
                      <div className="w-9 h-9 rounded-full bg-cream-200 text-espresso group-hover:bg-terracotta group-hover:text-white flex items-center justify-center transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-terracotta mt-1">
                      {item.subtitle}
                    </p>
                    <p className="mt-3 text-sm text-espresso/75 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-espresso/10 flex items-center justify-between text-xs font-semibold text-espresso/70 group-hover:text-terracotta transition-colors">
                    <span>Explore Products in this Collection</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
