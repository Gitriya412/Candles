import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required.';
    if (!formData.message.trim() || formData.message.trim().length < 10) errs.message = 'Please provide a message (min. 10 chars).';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200 text-xs font-semibold tracking-wider uppercase text-terracotta mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect with our studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-espresso tracking-tight">
            We’d Love to Hear from You
          </h2>
          <p className="mt-4 text-base text-espresso/70 leading-relaxed">
            Have a question about scents, custom vessel orders, or wedding bulk favours? Send us a note or visit our studio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-espresso/10 shadow-soft space-y-6">
              <h3 className="font-serif text-2xl font-medium text-espresso">
                The LUMORA Studio
              </h3>

              <div className="space-y-5 text-sm text-espresso/80">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-espresso block">Studio Address</span>
                    <p className="text-xs text-espresso/70 mt-0.5 leading-relaxed">
                      LUMORA Atelier, #42 Artisans Alley, 12th Main, Indiranagar, Bengaluru, Karnataka – 560038
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sage/15 text-sage-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-espresso block">Email Us</span>
                    <a href="mailto:hello@lumoracandles.com" className="text-xs text-terracotta hover:underline block mt-0.5">
                      hello@lumoracandles.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amberGold/15 text-amberGold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-espresso block">Phone & WhatsApp</span>
                    <a href="tel:+919876543210" className="text-xs text-espresso/70 hover:text-terracotta block mt-0.5">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-lavender/20 text-lavender-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-espresso block">Studio Hours</span>
                    <p className="text-xs text-espresso/70 mt-0.5">
                      Monday – Saturday: 10:00 AM – 7:30 PM (IST)<br />
                      Sunday: By Private Candle Tasting Appointment
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-espresso/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-espresso/60 block mb-2">
                  Sample Website Showcase Note
                </span>
                <p className="text-xs text-espresso/60 leading-relaxed italic">
                  This website is a demonstration portfolio built for handmade candle artisans to visualize how their business can shine online with high-conversion e-commerce.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-espresso/10 shadow-soft">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-3xl font-medium text-espresso">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-espresso/70 max-w-md mx-auto">
                  Thank you for reaching out to LUMORA, <strong>{formData.name}</strong>. Our team will review your inquiry and get back to you at <strong>{formData.email}</strong> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        inquiryType: 'General Inquiry',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-terracotta text-white text-xs font-semibold uppercase tracking-wider hover:bg-terracotta-dark"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-espresso">
                    Send a Message
                  </h3>
                  <p className="text-xs text-espresso/60 mt-1">
                    Fill out the form below and we'll reply within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-medium text-espresso mb-1">Your Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Maya Iyer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full p-3 rounded-xl border ${
                        errors.name ? 'border-rose-500' : 'border-espresso/15'
                      } bg-cream-50 focus:outline-none focus:ring-1 focus:ring-terracotta`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block font-medium text-espresso mb-1">Email Address *</label>
                    <input
                      type="email"
                      placeholder="e.g. maya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full p-3 rounded-xl border ${
                        errors.email ? 'border-rose-500' : 'border-espresso/15'
                      } bg-cream-50 focus:outline-none focus:ring-1 focus:ring-terracotta`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-medium text-espresso mb-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 rounded-xl border border-espresso/15 bg-cream-50 focus:outline-none focus:ring-1 focus:ring-terracotta"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-espresso mb-1">Topic / Inquiry Type</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full p-3 rounded-xl border border-espresso/15 bg-cream-50 focus:outline-none focus:ring-1 focus:ring-terracotta cursor-pointer"
                    >
                      <option value="General Inquiry">General Product Inquiry</option>
                      <option value="Wedding Favours">Wedding Return Gifts</option>
                      <option value="Corporate Gifting">Corporate Bulk Order</option>
                      <option value="Custom Scent">Bespoke Custom Candle</option>
                      <option value="Stockist Partnership">Become a Retail Stockist</option>
                    </select>
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block font-medium text-espresso mb-1">Your Message *</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you have in mind..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full p-3 rounded-xl border ${
                      errors.message ? 'border-rose-500' : 'border-espresso/15'
                    } bg-cream-50 focus:outline-none focus:ring-1 focus:ring-terracotta resize-none`}
                  />
                  {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-terracotta hover:bg-terracotta-dark text-white text-xs font-semibold uppercase tracking-wider shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
