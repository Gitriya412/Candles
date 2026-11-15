import React from 'react';
import { ArrowRight, Sparkles, Flame, ShieldCheck, Heart } from 'lucide-react';

export default function Hero({ onExploreClick, onStoryClick }) {
  const colorAccents = [
    { name: 'Terracotta', color: '#C66B4E', label: 'Earthy Russet' },
    { name: 'Sage Green', color: '#829477', label: 'Botanical Herb' },
    { name: 'Dusty Rose', color: '#D89A9B', label: 'Blush Velvet' },
    { name: 'Lavender', color: '#A18BB9', label: 'Twilight Lilac' },
    { name: 'Amber Gold', color: '#C68B3E', label: 'Warm Glow' },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-16 lg:py-20">
      {/* Decorative Warm Ambient Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amberGold/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-lavender/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Editorial Typography */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200/90 border border-espresso/10 text-xs tracking-wider uppercase font-medium text-terracotta shadow-xs">
              <Flame className="w-3.5 h-3.5 fill-current text-terracotta flame-glow" />
              <span>Artisanal Soy & Sculptural Candles</span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight text-espresso leading-[1.08]">
              Light Up Life in <br />
              <span className="italic font-normal text-terracotta underline decoration-amberGold/40 decoration-wavy decoration-1 underline-offset-8">
                Every Shade.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-espresso/80 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Handcrafted candles designed to bring colour, fragrance and warmth into your everyday moments. Poured with 100% natural soy wax and evocative botanical oils.
            </p>

            {/* Colour Swatches Strip (Showing vibrant color story) */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-espresso/60 font-semibold mb-2.5">
                Our Signature Artisanal Palette
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2.5">
                {colorAccents.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex flex-col items-center cursor-pointer"
                  >
                    <div
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white shadow-sm transition-transform duration-200 group-hover:scale-115 group-hover:shadow-md"
                      style={{ backgroundColor: item.color }}
                      title={`${item.name} — ${item.label}`}
                    />
                    <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] whitespace-nowrap font-medium text-espresso bg-white px-2 py-0.5 rounded shadow-xs pointer-events-none z-20">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-terracotta hover:bg-terracotta-dark text-white font-medium text-base tracking-wide shadow-md hover:shadow-glow-terracotta transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onStoryClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-cream-200 hover:bg-cream-300 text-espresso font-medium text-base tracking-wide border border-espresso/15 transition-all duration-300"
              >
                <span>Discover Our Story</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-espresso/10 grid grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sage" />
                <span className="text-xs text-espresso/80 font-medium">100% Soy Wax</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-dustyRose" />
                <span className="text-xs text-espresso/80 font-medium">Clean Burning</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amberGold" />
                <span className="text-xs text-espresso/80 font-medium">Small Batches</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Colourful Candle Composition Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Feature Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-luxury border-4 border-white/80 bg-warmSand/20 aspect-[4/5] sm:aspect-[4/4.5] group">
                <img
                  src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=85"
                  alt="Colourful handmade candles by LUMORA in dusty rose, sage and amber"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
                
                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card border border-white/40 shadow-soft">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-terracotta">
                        Featured Composition
                      </p>
                      <h4 className="font-serif text-lg font-medium text-espresso">
                        The Artisanal Palette Collection
                      </h4>
                      <p className="text-xs text-espresso/70 mt-0.5">
                        Handcrafted with vegan mineral pigments & natural botanicals
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-amberGold/20 flex items-center justify-center text-amberGold">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Offset Image Card: Sculptural Bubble & Arch Candles */}
              <div className="hidden sm:block absolute -top-6 -left-8 w-44 rounded-2xl overflow-hidden shadow-lg border-3 border-white bg-cream-100 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=400&q=80"
                  alt="Sculpted bubble pastel candles"
                  className="w-full h-36 object-cover"
                />
                <div className="p-2.5 bg-cream-50">
                  <span className="text-[10px] font-semibold text-lavender uppercase tracking-wider block">Sculpted</span>
                  <span className="text-xs font-medium text-espresso">Pastel Lilac & Sage</span>
                </div>
              </div>

              {/* Floating Offset Image Card: Terracotta Pot Candle with Crackle Wood Wick */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 rounded-2xl overflow-hidden shadow-lg border-3 border-white bg-cream-100 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=400&q=80"
                  alt="Terracotta clay candle with wood wick"
                  className="w-full h-36 object-cover"
                />
                <div className="p-2.5 bg-cream-50 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-semibold text-terracotta uppercase tracking-wider block">Terracotta</span>
                    <span className="text-xs font-medium text-espresso">Cinnamon Ember</span>
                  </div>
                  <span className="text-xs font-bold text-terracotta">₹599</span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full shadow-md border border-white/60 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-semibold text-espresso tracking-wide">
                  Small Batch No. 48
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
