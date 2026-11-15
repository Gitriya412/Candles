import React, { useState } from 'react';
import { Eye, ShoppingBag, Heart, Star, Sparkles, Check } from 'lucide-react';

export default function ProductCard({
  product,
  onAddToCart,
  onQuickView,
  isWishlisted,
  onToggleWishlist,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden border border-espresso/10 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Image & Visual Container */}
      <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-cream-200/50 cursor-pointer" onClick={() => onQuickView(product)}>
        {/* Main Product Image with smooth crossfade if secondaryImage exists */}
        <img
          src={isHovered && product.secondaryImage ? product.secondaryImage : product.image}
          alt={`${product.name} - ${product.colorName} candle`}
          className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {product.badge ? (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/95 backdrop-blur-md text-espresso shadow-xs">
              {product.badge}
            </span>
          ) : <span />}

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            className="pointer-events-auto p-2 rounded-full bg-white/90 backdrop-blur-md text-espresso hover:text-terracotta hover:bg-white shadow-xs transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isWishlisted ? 'fill-terracotta text-terracotta' : 'text-espresso/70'
              }`}
            />
          </button>
        </div>

        {/* Colour Tag Pill Overlay */}
        <div className="absolute bottom-3 left-3 pointer-events-none">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cream-100/90 backdrop-blur-md text-xs font-medium text-espresso shadow-xs border border-white/40">
            <span
              className="w-2.5 h-2.5 rounded-full shadow-xs border border-white"
              style={{ backgroundColor: product.colorHex }}
            />
            <span>{product.colorName}</span>
          </div>
        </div>

        {/* Quick View Button Hover Overlay */}
        <div className="absolute inset-x-3 bottom-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="w-full py-2.5 px-4 rounded-xl bg-espresso/90 hover:bg-espresso text-cream-100 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm transition-all duration-200 shadow-md flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Card Details Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating & Burn time */}
          <div className="flex items-center justify-between text-xs text-espresso/60 mb-1.5">
            <div className="flex items-center gap-1 text-amberGold">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="font-semibold text-espresso">{product.rating}</span>
              <span className="text-espresso/40">({product.reviewsCount})</span>
            </div>
            <span className="text-[11px] font-medium">{product.burnTime}</span>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif text-xl sm:text-2xl font-medium text-espresso group-hover:text-terracotta transition-colors cursor-pointer"
          >
            {product.name}
          </h3>

          {/* Fragrance Description & Notes */}
          <p className="mt-1 text-xs text-espresso/70 leading-relaxed line-clamp-2">
            {product.shortDesc}
          </p>

          {/* Fragrance Notes pills */}
          <div className="mt-2 text-[11px] text-espresso/60 bg-cream-200/50 rounded-lg p-2 border border-espresso/5">
            <span className="font-semibold text-espresso/80">Notes:</span> {product.fragranceNotes.heart}
          </div>
        </div>

        {/* Pricing & Add to Cart Action */}
        <div className="mt-4 pt-3 border-t border-espresso/10 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-espresso">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-espresso/40 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-700 font-semibold uppercase tracking-wider block">
              In Stock • Hand-poured
            </span>
          </div>

          <button
            onClick={handleAdd}
            className={`px-4 py-2.5 rounded-xl font-medium text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 shadow-xs ${
              addedAnimation
                ? 'bg-emerald-600 text-white'
                : 'bg-terracotta hover:bg-terracotta-dark text-white hover:shadow-glow-terracotta'
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
