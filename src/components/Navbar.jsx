import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Flame, Heart, Sparkles, Phone, BookOpen } from 'lucide-react';

export default function Navbar({
  cartCount,
  onOpenCart,
  onOpenCareGuide,
  onOpenContact,
  activeSection,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Shop', href: '#shop' },
    { name: 'Collections', href: '#collections' },
    { name: 'Our Story', href: '#our-story' },
    { name: 'Why LUMORA', href: '#why-lumora' },
    { name: 'Custom Gifting', href: '#custom-gifting' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-soft border-b border-stone-200/60 py-3.5'
            : 'bg-cream-100/90 backdrop-blur-sm py-4 md:py-5 border-b border-espresso/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile menu trigger */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 -ml-2 rounded-lg text-espresso hover:text-terracotta hover:bg-cream-200 transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta group-hover:bg-terracotta group-hover:text-white transition-all duration-300">
                <Flame className="w-4 h-4 fill-current flame-glow" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-[0.18em] text-espresso uppercase leading-none">
                  LUMORA
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-terracotta font-medium mt-0.5">
                  Light Up Your Moments
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-terracotta tracking-wide relative py-1 ${
                    activeSection === link.href.slice(1)
                      ? 'text-terracotta font-semibold'
                      : 'text-espresso/80'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.slice(1) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-terracotta rounded-full" />
                  )}
                </a>
              ))}
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Candle Care Ritual Guide Button */}
              <button
                onClick={onOpenCareGuide}
                title="Candle Care Guide"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs text-espresso/80 hover:text-terracotta bg-cream-200/80 hover:bg-cream-300/80 px-2.5 py-1.5 rounded-full transition-all border border-espresso/10"
              >
                <BookOpen className="w-3.5 h-3.5 text-terracotta" />
                <span className="font-medium">Care Guide</span>
              </button>

              {/* Shopping Bag Button */}
              <button
                onClick={onOpenCart}
                className="relative p-2.5 rounded-full bg-terracotta text-white hover:bg-terracotta-dark shadow-sm hover:shadow-glow-terracotta transition-all duration-200 flex items-center justify-center group"
                aria-label={`Shopping bag with ${cartCount} items`}
              >
                <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-105" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-amberGold text-white text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-cream-100 shadow-sm animate-bounce-short">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="fixed inset-0 bg-espresso/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`fixed inset-y-0 left-0 max-w-xs w-full bg-cream-100 shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out z-50 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-espresso/10">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-terracotta fill-current" />
                <span className="font-serif text-2xl font-bold tracking-[0.16em] text-espresso uppercase">
                  LUMORA
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-espresso hover:text-terracotta rounded-full hover:bg-cream-200"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-espresso/90 hover:text-terracotta hover:bg-cream-200 transition-colors flex items-center justify-between group"
                >
                  <span>{link.name}</span>
                  <span className="text-terracotta opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-espresso/10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCareGuide();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-cream-200 text-espresso text-sm font-medium hover:bg-cream-300 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-terracotta" />
              Candle Care & Rituals
            </button>
            <div className="text-center text-xs text-espresso/60 pt-2">
              <p>Hand-poured with love in Bangalore</p>
              <p className="mt-1">Free delivery above ₹999 across India</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
