import React, { useState } from 'react';
import { X, Star, ShoppingBag, Heart, ShieldCheck, Flame, Sparkles, Check, Clock, Package } from 'lucide-react';

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) {
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-espresso/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6 text-center">
        <div
          className="relative bg-cream-100 rounded-3xl max-w-4xl w-full p-6 sm:p-8 text-left shadow-2xl border border-espresso/10 overflow-hidden transform transition-all animate-fade-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-espresso/70 hover:text-espresso hover:bg-cream-200 transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Left: Product Imagery */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/4.5] bg-cream-200 shadow-soft border border-espresso/10">
                <img
                  src={selectedImage || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/95 text-espresso shadow-xs">
                    {product.badge || 'Artisanal'}
                  </span>
                </div>
              </div>

              {/* Thumbnails if secondary image exists */}
              {product.secondaryImage && (
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedImage(product.image)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === product.image ? 'border-terracotta ring-2 ring-terracotta/20' : 'border-transparent opacity-70'
                    }`}
                  >
                    <img src={product.image} alt="Thumbnail 1" className="w-full h-full object-cover" />
                  </button>
                  <button
                    onClick={() => setSelectedImage(product.secondaryImage)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === product.secondaryImage ? 'border-terracotta ring-2 ring-terracotta/20' : 'border-transparent opacity-70'
                    }`}
                  >
                    <img src={product.secondaryImage} alt="Thumbnail 2" className="w-full h-full object-cover" />
                  </button>
                </div>
              )}
            </div>

            {/* Right: Product Details */}
            <div className="space-y-5">
              <div>
                {/* Colour Badge */}
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cream-200 border border-espresso/10 text-xs font-medium text-espresso mb-2">
                  <span
                    className="w-3 h-3 rounded-full border border-white"
                    style={{ backgroundColor: product.colorHex }}
                  />
                  <span>Colour: <strong>{product.colorName}</strong></span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-espresso">
                  {product.name}
                </h2>

                <div className="flex items-center gap-3 mt-2 text-xs">
                  <div className="flex items-center text-amberGold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="ml-1.5 font-bold text-espresso">{product.rating}</span>
                  </div>
                  <span className="text-espresso/40">•</span>
                  <span className="text-espresso/70">{product.reviewsCount} Verified Reviews</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-espresso">
                  ₹{product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-espresso/40 line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800">
                  Save ₹{product.originalPrice - product.price}
                </span>
              </div>

              {/* Short Description */}
              <p className="text-sm text-espresso/80 leading-relaxed">
                {product.shortDesc}
              </p>

              {/* Fragrance Hierarchy Card */}
              <div className="p-4 rounded-2xl bg-cream-200/60 border border-espresso/10 space-y-2 text-xs">
                <p className="font-semibold uppercase tracking-wider text-terracotta text-[11px]">
                  Fragrance Pyramid
                </p>
                <div className="grid grid-cols-3 gap-2 text-espresso/80 pt-1">
                  <div>
                    <span className="block font-semibold text-espresso">Top Notes</span>
                    <span className="text-[11px] text-espresso/70">{product.fragranceNotes.top}</span>
                  </div>
                  <div>
                    <span className="block font-semibold text-espresso">Heart Notes</span>
                    <span className="text-[11px] text-espresso/70">{product.fragranceNotes.heart}</span>
                  </div>
                  <div>
                    <span className="block font-semibold text-espresso">Base Notes</span>
                    <span className="text-[11px] text-espresso/70">{product.fragranceNotes.base}</span>
                  </div>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs text-espresso/70">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-terracotta" />
                  <span>Burn: <strong>{product.burnTime}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-terracotta" />
                  <span>Weight: <strong>{product.weight}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-terracotta" />
                  <span>Wax: <strong>{product.waxType}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-terracotta" />
                  <span>Wick: <strong>{product.wick}</strong></span>
                </div>
              </div>

              {/* Quantity & Add to Cart Controls */}
              <div className="pt-4 border-t border-espresso/10 flex items-center gap-4">
                <div className="flex items-center border border-espresso/20 rounded-xl bg-white overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3.5 py-2.5 text-espresso/70 hover:bg-cream-200 transition-colors font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-sm font-semibold text-espresso min-w-[36px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3.5 py-2.5 text-espresso/70 hover:bg-cream-200 transition-colors font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-3 px-6 rounded-xl font-medium text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-sm ${
                    addedSuccess
                      ? 'bg-emerald-600 text-white'
                      : 'bg-terracotta hover:bg-terracotta-dark text-white hover:shadow-glow-terracotta'
                  }`}
                >
                  {addedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Shopping Bag • ₹{product.price * quantity}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onToggleWishlist(product)}
                  className="p-3 rounded-xl border border-espresso/20 bg-white hover:bg-cream-200 text-espresso transition-colors"
                  aria-label="Wishlist"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isWishlisted ? 'fill-terracotta text-terracotta' : 'text-espresso/70'
                    }`}
                  />
                </button>
              </div>

              <div className="text-center text-[11px] text-espresso/60">
                ✨ Free luxury packaging with custom matchbox on orders above ₹999.
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
