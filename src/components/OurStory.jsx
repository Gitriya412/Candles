import React from 'react';
import { Heart, Sparkles, Leaf, Award, Compass, Feather } from 'lucide-react';

export default function OurStory() {
  const values = [
    {
      icon: Leaf,
      title: 'Pure Soy & Botanical Wax',
      desc: 'Clean-burning, non-toxic, and free from petroleum paraffin, phthalates, and harsh chemical stabilizers.',
    },
    {
      icon: Feather,
      title: 'Hand-Poured in Batches of 24',
      desc: 'Each jar is individually blended, measured, and wick-centred by our small team of artisans.',
    },
    {
      icon: Compass,
      title: 'Chromatic Fragrance Storytelling',
      desc: 'We pair specific color shades with curated aroma profiles to evoke distinct nostalgic memories.',
    },
    {
      icon: Award,
      title: 'Repurpose-Ready Vessels',
      desc: 'Our ceramic and frosted glass vessels are made to live on as succulent planters or desk organizers.',
    },
  ];

  return (
    <section id="our-story" className="py-20 md:py-28 bg-cream-100 relative overflow-hidden">
      {/* Decorative Warm Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-dustyRose/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Storytelling Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Workshop Photo */}
              <div className="rounded-3xl overflow-hidden shadow-luxury border-4 border-white bg-warmSand/20 aspect-[4/5] relative group">
                <img
                  src="https://images.unsplash.com/photo-1589363360147-4f2d01e51240?auto=format&fit=crop&w=1000&q=80"
                  alt="Artisan pouring warm scented soy wax into candle vessels"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-cream-100">
                  <p className="text-xs uppercase tracking-wider text-warmSand font-semibold">
                    The LUMORA Studio • Bangalore
                  </p>
                  <p className="font-serif text-xl sm:text-2xl font-normal mt-1">
                    “Candle making is not merely chemistry; it is the quiet art of capturing warmth.”
                  </p>
                </div>
              </div>

              {/* Secondary Floating Detail Card */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-60 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-cream-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-espresso block">48hr Slow Cure</span>
                    <span className="text-[11px] text-espresso/70">For optimum scent throw</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 -left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-espresso/10 hidden sm:flex items-center gap-2">
                <Heart className="w-4 h-4 text-dustyRose fill-current" />
                <span className="text-xs font-semibold text-espresso">100% Female Founded</span>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Text & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200 text-xs font-semibold tracking-wider uppercase text-terracotta">
              <span>Artisanal Heritage</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-espresso tracking-tight leading-tight">
              Every Candle Has a Story. <br />
              <span className="italic font-normal text-terracotta">
                Every Glow Has a Feeling.
              </span>
            </h2>

            <div className="space-y-4 text-base text-espresso/80 leading-relaxed font-normal">
              <p>
                LUMORA began at a wooden kitchen table with a simple longing: candles that didn't just smell heavenly, but brought vivid artistic colour, warmth, and conscious calm into living spaces.
              </p>
              <p>
                Tired of mass-produced white paraffin candles that burned unevenly and emitted black soot, we began blending 100% natural golden soy wax with therapeutic essential oils, organic crackling wooden wicks, and rich mineral hues inspired by natural terra, sage leaves, and twilight lavender skies.
              </p>
              <p>
                Today, every single LUMORA candle is still hand-poured in small batches of twenty-four, gently cooled over 48 hours, and lovingly inspected before it journeys to your doorstep.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {values.map((v, i) => {
                const IconComponent = v.icon;
                return (
                  <div key={i} className="p-4 rounded-2xl bg-cream-50 border border-espresso/10 space-y-1.5">
                    <div className="flex items-center gap-2.5 text-terracotta">
                      <IconComponent className="w-4 h-4" />
                      <h4 className="font-serif text-lg font-medium text-espresso">{v.title}</h4>
                    </div>
                    <p className="text-xs text-espresso/70 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Impact Metric Counters */}
            <div className="pt-6 border-t border-espresso/10 grid grid-cols-3 gap-4 text-center">
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-terracotta">12,000+</span>
                <span className="block text-[11px] font-medium text-espresso/60 uppercase tracking-wider mt-1">Moments Lit</span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-sage-dark">100%</span>
                <span className="block text-[11px] font-medium text-espresso/60 uppercase tracking-wider mt-1">Natural Soy Wax</span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-amberGold">48 Hrs</span>
                <span className="block text-[11px] font-medium text-espresso/60 uppercase tracking-wider mt-1">Hand-Curing Process</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
