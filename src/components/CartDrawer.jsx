import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Tag } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [checkoutFormData, setCheckoutFormData] = useState({
    name: 'Aarav Malhotra',
    email: 'aarav@example.com',
    phone: '+91 98765 43210',
    address: 'Flat 402, Lotus Serenity, Indiranagar, Bengaluru, 560038',
    notes: 'Please include a birthday note for Priya.',
  });

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 999;
  const isFreeShipping = subtotal >= freeShippingThreshold || subtotal === 0;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingCost = isFreeShipping ? 0 : 99;
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const finalTotal = subtotal - discountAmount + shippingCost;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!promoCode.trim()) return;
    
    if (promoCode.trim().toUpperCase() === 'GLOW10') {
      setDiscountPercent(10);
      setPromoSuccess('Promo code GLOW10 applied! 10% discount added.');
      setPromoError('');
    } else if (promoCode.trim().toUpperCase() === 'LUMORA15') {
      setDiscountPercent(15);
      setPromoSuccess('Special VIP code applied! 15% discount added.');
      setPromoError('');
    } else {
      setPromoError('Invalid coupon code. Try GLOW10.');
      setPromoSuccess('');
    }
  };

  const handleSimulatedCheckout = (e) => {
    e.preventDefault();
    setOrderSuccess(true);
    setTimeout(() => {
      onClearCart();
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-espresso/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-cream-100 shadow-2xl flex flex-col justify-between border-l border-espresso/10">
          
          {/* Header */}
          <div className="p-6 border-b border-espresso/10 flex items-center justify-between bg-cream-200/50">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-terracotta" />
              <h2 className="font-serif text-2xl font-medium text-espresso">
                Your Shopping Bag
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-terracotta/15 text-terracotta text-xs font-bold">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-espresso/70 hover:text-espresso rounded-full hover:bg-cream-200"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="px-6 py-3.5 bg-warmSand/30 border-b border-espresso/5">
            <div className="flex items-center justify-between text-xs font-medium text-espresso mb-1.5">
              <span>
                {isFreeShipping
                  ? '🎉 You unlocked FREE Shipping across India!'
                  : `Add ₹${amountNeededForFreeShipping} more for FREE shipping`}
              </span>
              <span className="font-bold">
                {isFreeShipping ? '100%' : `${Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100))}%`}
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-cream-200 overflow-hidden">
              <div
                className="h-full bg-terracotta transition-all duration-500 rounded-full"
                style={{
                  width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
                }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cream-200 flex items-center justify-center mx-auto text-espresso/40">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-espresso">Your bag is empty</h3>
                <p className="text-xs text-espresso/70 max-w-xs mx-auto">
                  Bring warmth into your home with our artisanal scented candles.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-terracotta text-white text-xs font-semibold uppercase tracking-wider hover:bg-terracotta-dark transition-colors"
                >
                  Explore Bestsellers
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3.5 rounded-2xl bg-white border border-espresso/10 shadow-xs"
                >
                  {/* Item Image */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-cream-200 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-serif text-base font-medium text-espresso leading-tight">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: item.colorHex }}
                          />
                          <span className="text-[11px] text-espresso/60">{item.colorName}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-espresso/40 hover:text-rose-600 p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantity Controller */}
                      <div className="flex items-center border border-espresso/15 rounded-lg bg-cream-50 overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-xs text-espresso/80 hover:bg-cream-200"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-1 text-xs font-semibold text-espresso">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-xs text-espresso/80 hover:bg-cream-200"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-sm font-bold text-espresso">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-espresso/10 bg-cream-50 space-y-4">
              
              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="space-y-1.5">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-espresso/50" />
                    <input
                      type="text"
                      placeholder="Coupon Code (e.g. GLOW10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-espresso/15 bg-white uppercase font-medium focus:ring-1 focus:ring-terracotta focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-espresso text-cream-100 text-xs font-semibold uppercase hover:bg-espresso-dark transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoError && <p className="text-[11px] text-rose-600">{promoError}</p>}
                {promoSuccess && <p className="text-[11px] text-emerald-700 font-medium">{promoSuccess}</p>}
              </form>

              {/* Price Breakdown */}
              <div className="space-y-2 text-xs text-espresso/80 pt-2 border-t border-espresso/10">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-espresso">₹{subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Discount ({discountPercent}%)</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Standard Shipping</span>
                  <span>{isFreeShipping ? <strong className="text-emerald-700">FREE</strong> : '₹99'}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-espresso pt-2 border-t border-espresso/10">
                  <span>Total Due</span>
                  <span>₹{finalTotal}</span>
                </div>
              </div>

              {/* Simulated Checkout Button */}
              <button
                onClick={() => setCheckoutModalOpen(true)}
                className="w-full py-3.5 px-6 rounded-2xl bg-terracotta hover:bg-terracotta-dark text-white font-semibold text-xs tracking-wider uppercase shadow-md hover:shadow-glow-terracotta transition-all flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-3 text-[11px] text-espresso/60 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-terracotta" />
                <span>Handmade • Secure Simulated Packaging • Pan-India</span>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Simulated Sample Checkout Modal (Frontend-Only) */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-60 overflow-y-auto flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-espresso/70 backdrop-blur-sm"
            onClick={() => setCheckoutModalOpen(false)}
          />

          <div className="relative bg-cream-100 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-espresso/10 z-70 animate-fade-up text-left">
            <button
              onClick={() => {
                setCheckoutModalOpen(false);
                setOrderSuccess(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full text-espresso/60 hover:text-espresso"
            >
              <X className="w-5 h-5" />
            </button>

            {orderSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-3xl font-medium text-espresso">
                  Order Successfully Placed!
                </h3>
                <p className="text-xs text-espresso/70">
                  Order ID: <strong>#LUM-{Math.floor(100000 + Math.random() * 900000)}</strong>
                </p>
                <div className="bg-white p-4 rounded-2xl border border-espresso/10 text-xs text-left space-y-2">
                  <p><strong>Customer:</strong> {checkoutFormData.name}</p>
                  <p><strong>Shipping to:</strong> {checkoutFormData.address}</p>
                  <p><strong>Total Amount:</strong> ₹{finalTotal} (Simulated Payment)</p>
                  <p className="text-emerald-700 font-medium">✨ Your artisanal candles are scheduled to cure and dispatch in 2 business days.</p>
                </div>
                <p className="text-[11px] text-espresso/50 italic">
                  Note: This is a frontend demo order confirmation for client presentation.
                </p>
                <button
                  onClick={() => {
                    setCheckoutModalOpen(false);
                    setOrderSuccess(false);
                    onClose();
                  }}
                  className="w-full py-3 rounded-full bg-terracotta text-white text-xs font-semibold uppercase tracking-wider hover:bg-terracotta-dark"
                >
                  Return to Boutique
                </button>
              </div>
            ) : (
              <form onSubmit={handleSimulatedCheckout} className="space-y-4">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-terracotta">
                    Sample Checkout Demo
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-espresso">
                    Shipping & Delivery Details
                  </h3>
                  <p className="text-xs text-espresso/70 mt-1">
                    Complete your details to experience the order flow.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-medium text-espresso mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={checkoutFormData.name}
                      onChange={(e) => setCheckoutFormData({ ...checkoutFormData, name: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-espresso/20 bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-medium text-espresso mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={checkoutFormData.email}
                        onChange={(e) => setCheckoutFormData({ ...checkoutFormData, email: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-espresso/20 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-espresso mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={checkoutFormData.phone}
                        onChange={(e) => setCheckoutFormData({ ...checkoutFormData, phone: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-espresso/20 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium text-espresso mb-1">Delivery Address</label>
                    <textarea
                      rows={2}
                      required
                      value={checkoutFormData.address}
                      onChange={(e) => setCheckoutFormData({ ...checkoutFormData, address: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-espresso/20 bg-white resize-none"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-espresso mb-1">Gift Note / Candle Dedication (Optional)</label>
                    <input
                      type="text"
                      value={checkoutFormData.notes}
                      onChange={(e) => setCheckoutFormData({ ...checkoutFormData, notes: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-espresso/20 bg-white"
                    />
                  </div>
                </div>

                <div className="p-3 bg-cream-200/60 rounded-xl text-xs space-y-1">
                  <div className="flex justify-between font-semibold text-espresso">
                    <span>Total Order Value:</span>
                    <span>₹{finalTotal}</span>
                  </div>
                  <p className="text-[11px] text-espresso/60">Includes all taxes, custom packaging & {isFreeShipping ? 'Free' : 'Standard'} Shipping.</p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-semibold text-xs tracking-wider uppercase shadow-md transition-colors"
                >
                  Confirm & Place Sample Order
                </button>
              </form>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
