import React, { useState } from 'react';
import { Gift, Check, Send, Sparkles, Phone, Calendar, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { giftingCategories } from '../data/gifting';

export default function CustomGifting({ onOpenWhatsAppWithDetails }) {
  const [selectedGiftingTab, setSelectedGiftingTab] = useState(giftingCategories[0].id);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    occasion: 'Weddings & Favours',
    jarColor: 'Terracotta Russet',
    scent: 'Rose Petal & White Cashmere',
    quantity: '50-100 pieces',
    customLabel: 'Aarav & Priya • 18.04.2026',
    contactName: '',
    contactPhone: '',
    message: '',
  });

  const activeCategory = giftingCategories.find((cat) => cat.id === selectedGiftingTab) || giftingCategories[0];

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const text = `Hello LUMORA Studio! I would like to inquire about Custom Candles for *${inquiryForm.occasion}*. 
- Preferred Jar Color: ${inquiryForm.jarColor}
- Scent: ${inquiryForm.scent}
- Quantity: ${inquiryForm.quantity}
- Custom Text: "${inquiryForm.customLabel}"`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="custom-gifting" className="py-20 md:py-28 bg-gradient-to-b from-[#C66B4E] to-[#A65338] text-cream-100 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-espresso/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-cream-100 text-xs font-semibold tracking-wider uppercase mb-3 backdrop-blur-sm border border-white/20">
            <Gift className="w-3.5 h-3.5 text-amberGold-light" />
            <span>Bespoke Artisanal Craft</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            Custom Orders & Gifting
          </h2>
          <p className="mt-4 text-base sm:text-lg text-cream-200/90 leading-relaxed font-normal">
            Whether it's 200 wedding favours, anniversary tokens, or corporate celebration hampers, we personalize vessels, fragrances, and dedicated labels for your milestone moments.
          </p>
        </div>

        {/* Occasion Selection Tabs */}
        <div className="flex items-center justify-center gap-2.5 overflow-x-auto pb-4 scrollbar-none mb-12">
          {giftingCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedGiftingTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap ${
                selectedGiftingTab === cat.id
                  ? 'bg-cream-100 text-terracotta shadow-lg scale-105'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Dynamic Showcase of Selected Gifting Category */}
        <div className="bg-white/95 text-espresso rounded-3xl p-6 sm:p-10 shadow-luxury border border-white/20 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Photo */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/4.5] shadow-md bg-cream-200">
              <img
                src={activeCategory.image}
                alt={activeCategory.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-terracotta text-white shadow-xs">
                  {activeCategory.badge}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-terracotta block">
                  {activeCategory.colorTheme}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-medium text-espresso mt-1">
                  {activeCategory.title}
                </h3>
                <p className="text-sm italic text-espresso/70 mt-0.5">
                  “{activeCategory.tagline}”
                </p>
              </div>

              <p className="text-sm sm:text-base text-espresso/80 leading-relaxed">
                {activeCategory.description}
              </p>

              {/* Specs Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-2 text-xs">
                <div className="p-3 rounded-xl bg-cream-100 border border-espresso/10">
                  <span className="text-[10px] uppercase font-semibold text-espresso/50 block">Minimum Order</span>
                  <span className="font-bold text-espresso">{activeCategory.minOrder}</span>
                </div>
                <div className="p-3 rounded-xl bg-cream-100 border border-espresso/10">
                  <span className="text-[10px] uppercase font-semibold text-espresso/50 block">Lead Time</span>
                  <span className="font-bold text-espresso">{activeCategory.leadTime}</span>
                </div>
                <div className="p-3 rounded-xl bg-cream-100 border border-espresso/10 col-span-2 sm:col-span-1">
                  <span className="text-[10px] uppercase font-semibold text-espresso/50 block">Signature Scent</span>
                  <span className="font-bold text-espresso truncate block">{activeCategory.popularScent}</span>
                </div>
              </div>

              {/* What is Included List */}
              <div className="space-y-2 pt-2">
                <p className="text-xs uppercase font-semibold text-espresso/70 tracking-wider">
                  Bespoke Perks Included:
                </p>
                <div className="space-y-1.5">
                  {activeCategory.perks.map((perk, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-espresso/80">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => {
                    setInquiryForm({
                      ...inquiryForm,
                      occasion: activeCategory.title,
                      scent: activeCategory.popularScent,
                    });
                    const formElement = document.getElementById('gifting-form-box');
                    if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-colors"
                >
                  Configure Inquiry Below
                </button>

                <button
                  onClick={handleDirectWhatsApp}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp Concierge</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Interactive Custom Order Form Builder */}
        <div id="gifting-form-box" className="bg-espresso text-cream-100 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-amberGold-light">
                Direct Studio Concierge
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white mt-1">
                Design Your Personalized Candle Batch
              </h3>
              <p className="text-xs sm:text-sm text-cream-200/70 mt-1">
                Fill out your preferred specifications and our master candlemaker will get in touch within 2 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-10 text-center space-y-4 bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h4 className="font-serif text-2xl text-white">Inquiry Received with Love!</h4>
                <p className="text-xs sm:text-sm text-cream-200/80 max-w-md mx-auto">
                  Thank you! We have received your custom order request for <strong>{inquiryForm.occasion}</strong>. Our team is preparing your custom scent proposal.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-terracotta text-white text-xs font-semibold uppercase tracking-wider hover:bg-terracotta-dark"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Occasion */}
                  <div>
                    <label className="block text-xs font-medium text-cream-200 mb-1.5">Occasion / Gifting Purpose</label>
                    <select
                      value={inquiryForm.occasion}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, occasion: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-medium focus:ring-1 focus:ring-terracotta focus:outline-none cursor-pointer"
                    >
                      <option value="Weddings & Favours" className="text-espresso">Weddings & Return Favours</option>
                      <option value="Curated Birthday Boxes" className="text-espresso">Birthday Gifts & Boxes</option>
                      <option value="Romantic Anniversary Gifts" className="text-espresso">Romantic Anniversary Keepsakes</option>
                      <option value="Corporate & Executive Hampers" className="text-espresso">Corporate & Festive Hampers</option>
                      <option value="Personalized Custom Candles" className="text-espresso">Personalized Single Jar with Name</option>
                    </select>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-xs font-medium text-cream-200 mb-1.5">Estimated Quantity Needed</label>
                    <select
                      value={inquiryForm.quantity}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, quantity: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-medium focus:ring-1 focus:ring-terracotta focus:outline-none cursor-pointer"
                    >
                      <option value="1-5 pieces" className="text-espresso">1 to 5 pieces (Single/Family Gifts)</option>
                      <option value="10-25 pieces" className="text-espresso">10 to 25 pieces (Intimate Gatherings)</option>
                      <option value="50-100 pieces" className="text-espresso">50 to 100 pieces (Wedding Favours)</option>
                      <option value="100+ pieces" className="text-espresso">100+ pieces (Corporate / Large Scale)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Jar Colour Preference */}
                  <div>
                    <label className="block text-xs font-medium text-cream-200 mb-1.5">Preferred Vessel Colour</label>
                    <select
                      value={inquiryForm.jarColor}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, jarColor: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-medium focus:ring-1 focus:ring-terracotta focus:outline-none cursor-pointer"
                    >
                      <option value="Terracotta Russet" className="text-espresso">Terracotta Russet Clay</option>
                      <option value="Sage Olive Green" className="text-espresso">Sage Olive Green Ceramic</option>
                      <option value="Dusty Rose Blush" className="text-espresso">Dusty Rose Frosted Glass</option>
                      <option value="Lavender Lilac" className="text-espresso">Pastel Lavender Glass</option>
                      <option value="Amber Gold Vintage" className="text-espresso">Amber Gold Ribbed Glass</option>
                      <option value="Deep Burgundy Wine" className="text-espresso">Deep Burgundy Matte Reserve</option>
                    </select>
                  </div>

                  {/* Fragrance Preference */}
                  <div>
                    <label className="block text-xs font-medium text-cream-200 mb-1.5">Preferred Scent Profile</label>
                    <select
                      value={inquiryForm.scent}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, scent: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-medium focus:ring-1 focus:ring-terracotta focus:outline-none cursor-pointer"
                    >
                      <option value="Rose Petal & White Cashmere" className="text-espresso">Rose Petal & White Cashmere</option>
                      <option value="Forest Whisper & Siberian Pine" className="text-espresso">Forest Whisper & Siberian Pine</option>
                      <option value="Vanilla Sunset & Caramel Honey" className="text-espresso">Vanilla Sunset & Caramel Honey</option>
                      <option value="Lavender Haze & Chamomile" className="text-espresso">Lavender Haze & Chamomile</option>
                      <option value="Cinnamon Ember & Charred Cedar" className="text-espresso">Cinnamon Ember & Charred Cedar</option>
                      <option value="Custom Scent Formulation" className="text-espresso">Create a Bespoke Custom Scent</option>
                    </select>
                  </div>
                </div>

                {/* Custom Dedication Text */}
                <div>
                  <label className="block text-xs font-medium text-cream-200 mb-1.5">Custom Label Text / Couple Monogram / Names</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyal & Rohan • Forever Starts Today • 24.11.2026"
                    value={inquiryForm.customLabel}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, customLabel: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder-cream-200/40 focus:ring-1 focus:ring-terracotta focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-cream-200 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sen"
                      value={inquiryForm.contactName}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, contactName: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder-cream-200/40 focus:ring-1 focus:ring-terracotta focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-cream-200 mb-1.5">WhatsApp / Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={inquiryForm.contactPhone}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, contactPhone: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder-cream-200/40 focus:ring-1 focus:ring-terracotta focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-6 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white text-xs font-semibold uppercase tracking-wider shadow-md transition-colors"
                  >
                    Submit Gifting Request
                  </button>
                  <button
                    type="button"
                    onClick={handleDirectWhatsApp}
                    className="py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
