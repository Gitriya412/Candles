import React from 'react';
import { Heart, Sparkles, ShieldCheck, Palette } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      id: 'handcrafted',
      title: 'Handcrafted with Love',
      subtitle: 'Small Artisanal Batches',
      description: 'Never mass-produced in automated factories. Every jar is hand-measured, hand-wicked, and hand-poured with mindful intention and artisanal precision.',
      icon: Heart,
      accentColor: '#C66B4E',
      bgHover: 'group-hover:border-terracotta/40',
      iconBg: 'bg-terracotta/10 text-terracotta',
      badge: 'Artisan Soul',
    },
    {
      id: 'fragrance',
      title: 'Beautiful Fragrance Blends',
      subtitle: 'IFRA-Certified Complex Notes',
      description: 'Crafted with master perfumers using pure botanical oils and non-toxic essential essences that release a lingering, headache-free aroma throw.',
      icon: Sparkles,
      accentColor: '#C68B3E',
      bgHover: 'group-hover:border-amberGold/40',
      iconBg: 'bg-amberGold/10 text-amberGold',
      badge: 'Zero Headache',
    },
    {
      id: 'ingredients',
      title: 'Premium Quality Ingredients',
      subtitle: '100% Biodegradable Soy',
      description: 'Zero paraffin, zero petroleum wax, and zero toxic heavy-metal wicks. Our crackling FSC-certified wood and pure organic cotton wicks burn clean and even.',
      icon: ShieldCheck,
      accentColor: '#829477',
      bgHover: 'group-hover:border-sage/40',
      iconBg: 'bg-sage/10 text-sage-dark',
      badge: 'Eco-Conscious',
    },
    {
      id: 'artistic',
      title: 'Unique Artistic Designs',
      subtitle: 'Chromatic & Sculptural Aesthetics',
      description: 'Candles designed to be gorgeous decor objects. Featuring hand-tinted terracotta pots, ribbed vintage glasses, and pastel geometric arch candles.',
      icon: Palette,
      accentColor: '#D89A9B',
      bgHover: 'group-hover:border-dustyRose/40',
      iconBg: 'bg-dustyRose/15 text-dustyRose-dark',
      badge: 'Modern Decor',
    },
  ];

  return (
    <section id="why-lumora" className="py-20 md:py-28 bg-cream-50/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 text-xs font-semibold tracking-wider uppercase text-terracotta mb-3">
            <span>The LUMORA Distinction</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-espresso tracking-tight">
            Why Choose LUMORA
          </h2>
          <p className="mt-4 text-base text-espresso/70 leading-relaxed">
            We reject synthetic shortcuts to craft thoughtful, non-toxic candles that honor your wellness, your aesthetic, and the environment.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className={`group bg-white rounded-3xl p-7 border border-espresso/10 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${feature.bgHover}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${feature.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-cream-100 text-espresso/70 border border-espresso/10">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-espresso group-hover:text-terracotta transition-colors leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider font-semibold text-terracotta mt-1">
                    {feature.subtitle}
                  </p>

                  <p className="mt-3.5 text-xs sm:text-sm text-espresso/75 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-espresso/5 flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: feature.accentColor }}
                  />
                  <span className="text-[11px] font-medium text-espresso/60">
                    Artisanal Standard Guaranteed
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
