import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setErrorMessage('');
    }, 600);
  };

  return (
    <section className="py-20 md:py-24 bg-espresso text-cream-100 relative overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-terracotta/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amberGold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amberGold text-xs font-semibold tracking-wider uppercase mb-4 border border-white/15">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The LUMORA Inner Circle</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
          Get Inspired. Stay Glowing.
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-cream-200/80 max-w-xl mx-auto leading-relaxed">
          Subscribe to receive secret seasonal scent drops, candle-care rituals, and an instant <strong>10% coupon</strong> for your first artisanal order.
        </p>

        {/* Form */}
        <div className="mt-8 max-w-md mx-auto">
          {status === 'success' ? (
            <div className="p-6 rounded-2xl bg-white/10 border border-emerald-500/40 text-cream-100 text-center animate-fade-in space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-medium text-white">Welcome to the Inner Circle!</h4>
              <p className="text-xs text-cream-200/80">
                Check your inbox for your 10% welcome voucher: <strong className="text-amberGold underline">GLOW10</strong>.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="text-[11px] text-terracotta-light hover:underline pt-2 block mx-auto font-medium"
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-cream-200/50" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Enter your email address..."
                    className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-cream-200/40 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-terracotta focus:bg-white/15 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-7 py-3.5 rounded-full bg-terracotta hover:bg-terracotta-dark text-white text-xs font-semibold tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  <span>{status === 'loading' ? 'Joining...' : 'Subscribe'}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {status === 'error' && (
                <p className="text-xs text-rose-400 text-left pl-4 font-medium animate-fade-in">
                  {errorMessage}
                </p>
              )}
            </form>
          )}

          <p className="text-[11px] text-cream-200/50 mt-4">
            We cherish your inbox serenity. No spam, ever. Unsubscribe with one click anytime.
          </p>
        </div>

      </div>
    </section>
  );
}
