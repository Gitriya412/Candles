import React, { useState } from 'react';
import { Flame, Instagram, Facebook, Mail, Phone, MapPin, Heart, Shield, Sparkles, X } from 'lucide-react';

export default function Footer({ onOpenCareGuide }) {
  const [activePolicyModal, setActivePolicyModal] = useState(null);

  const policyContent = {
    shipping: {
      title: 'Shipping & Delivery Policy',
      text: 'We handcraft and pack each candle with shock-resistant honeycomb paper and thermal protection. Standard delivery takes 3 to 6 business days across India. Orders above ₹999 qualify for Free Standard Delivery nationwide. Express courier dispatch is available on request.',
    },
    returns: {
      title: 'Returns & Replacement Guarantee',
      text: 'Because our candles are hand-poured in limited batches, we accept returns on unburned, undamaged items in original packaging within 7 days of delivery. In the rare event of transit damage, share an unboxing photo with hello@lumoracandles.com for an immediate free replacement.',
    },
    privacy: {
      title: 'Privacy Policy',
      text: 'LUMORA values your digital privacy. We never sell, lease, or distribute your email or postal address to third parties. Your details are solely utilized to process your handcrafted orders and deliver your requested seasonal news.',
    },
    terms: {
      title: 'Terms of Service',
      text: 'By visiting LUMORA, you agree to our handcrafted terms. As our candles use organic soy and mineral pigments, subtle color variations and frosting are natural hallmarks of pure botanical wax craftsmanship.',
    },
  };

  return (
    <>
      <footer className="bg-espresso text-cream-100 pt-16 pb-12 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
            
            {/* Column 1: Brand Info (Span 4) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-terracotta flex items-center justify-center text-white">
                  <Flame className="w-4 h-4 fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-bold tracking-[0.16em] uppercase text-white leading-none">
                    LUMORA
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-amberGold font-medium mt-0.5">
                    Light Up Your Moments
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-cream-200/70 leading-relaxed max-w-sm">
                Artisanal handmade scented candles, colourful soy wax sculptures, and custom gifting hampers crafted with botanical ingredients and non-toxic essential oils.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-terracotta text-cream-100 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-terracotta text-cream-100 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <button
                  onClick={onOpenCareGuide}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-amberGold text-cream-100 flex items-center justify-center transition-colors"
                  title="Candle Care Guide"
                  aria-label="Candle Care Guide"
                >
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Column 2: Navigation (Span 2) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-serif text-base font-semibold text-white tracking-wide uppercase text-xs">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs text-cream-200/70 font-medium">
                <li><a href="#home" className="hover:text-amberGold transition-colors">Home</a></li>
                <li><a href="#shop" className="hover:text-amberGold transition-colors">Bestselling Candles</a></li>
                <li><a href="#collections" className="hover:text-amberGold transition-colors">Shop Collections</a></li>
                <li><a href="#our-story" className="hover:text-amberGold transition-colors">Our Handcrafted Story</a></li>
                <li><a href="#custom-gifting" className="hover:text-amberGold transition-colors">Bespoke Gifting & Favours</a></li>
                <li><a href="#reviews" className="hover:text-amberGold transition-colors">Client Reviews</a></li>
                <li><a href="#contact" className="hover:text-amberGold transition-colors">Contact Studio</a></li>
              </ul>
            </div>

            {/* Column 3: Collections (Span 3) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-serif text-base font-semibold text-white tracking-wide uppercase text-xs">
                Signature Collections
              </h4>
              <ul className="space-y-2 text-xs text-cream-200/70 font-medium">
                <li><a href="#collections" className="hover:text-amberGold transition-colors">Floral Dreams (Pastel Peony & Rose)</a></li>
                <li><a href="#collections" className="hover:text-amberGold transition-colors">Earthy Elements (Pine & Terracotta)</a></li>
                <li><a href="#collections" className="hover:text-amberGold transition-colors">Golden Hour (Bourbon Vanilla & Amber)</a></li>
                <li><a href="#collections" className="hover:text-amberGold transition-colors">Sculpted Stories (Geometric Bubble Art)</a></li>
                <li><a href="#collections" className="hover:text-amberGold transition-colors">Gift of Glow (Curated Luxury Hampers)</a></li>
                <li><button onClick={onOpenCareGuide} className="hover:text-amberGold transition-colors text-left">Candle Burning Ritual Guide</button></li>
              </ul>
            </div>

            {/* Column 4: Contact & Studio (Span 3) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-serif text-base font-semibold text-white tracking-wide uppercase text-xs">
                Atelier Location
              </h4>
              <p className="text-xs text-cream-200/70 leading-relaxed">
                LUMORA Candle Atelier<br />
                #42 Artisans Alley, 12th Main<br />
                Indiranagar, Bengaluru, 560038
              </p>
              <div className="text-xs text-cream-200/70 space-y-1 pt-1">
                <p>WhatsApp: +91 98765 43210</p>
                <p>Email: hello@lumoracandles.com</p>
                <p className="text-amberGold text-[11px] font-semibold">Free Shipping Above ₹999</p>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Policies & Copyright */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream-200/60">
            <div className="flex flex-wrap items-center gap-4">
              <button onClick={() => setActivePolicyModal('shipping')} className="hover:text-white transition-colors">
                Shipping Policy
              </button>
              <span>•</span>
              <button onClick={() => setActivePolicyModal('returns')} className="hover:text-white transition-colors">
                Returns & Replacement
              </button>
              <span>•</span>
              <button onClick={() => setActivePolicyModal('privacy')} className="hover:text-white transition-colors">
                Privacy Policy
              </button>
              <span>•</span>
              <button onClick={() => setActivePolicyModal('terms')} className="hover:text-white transition-colors">
                Terms of Service
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px]">Accepted Payments: UPI • Cards • NetBanking • COD</span>
            </div>
          </div>

          <div className="mt-6 text-center text-[11px] text-cream-200/40">
            © 2026 LUMORA Handcrafted Candle Studio. All rights reserved. Designed for real boutique candle businesses.
          </div>

        </div>
      </footer>

      {/* Policy Modal */}
      {activePolicyModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-espresso/70 backdrop-blur-sm"
            onClick={() => setActivePolicyModal(null)}
          />

          <div className="relative bg-cream-100 text-espresso rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-espresso/10 z-10 animate-fade-up">
            <button
              onClick={() => setActivePolicyModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-espresso/60 hover:text-espresso"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-2xl font-medium text-espresso mb-3">
              {policyContent[activePolicyModal]?.title}
            </h3>
            <p className="text-xs sm:text-sm text-espresso/80 leading-relaxed">
              {policyContent[activePolicyModal]?.text}
            </p>

            <div className="mt-6 pt-4 border-t border-espresso/10 text-right">
              <button
                onClick={() => setActivePolicyModal(null)}
                className="px-5 py-2 rounded-full bg-terracotta text-white text-xs font-semibold uppercase tracking-wider hover:bg-terracotta-dark"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
