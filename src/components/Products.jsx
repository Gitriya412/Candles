import React, { useState, useMemo } from 'react';
import { Flame, SlidersHorizontal, Sparkles, Filter, Check } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function Products({
  onAddToCart,
  onQuickView,
  wishlist,
  onToggleWishlist,
  activeCollectionFilter,
  setActiveCollectionFilter,
}) {
  const [selectedColor, setSelectedColor] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Creations' },
    { id: 'floral-dreams', name: 'Floral Dreams' },
    { id: 'earthy-elements', name: 'Earthy Elements' },
    { id: 'golden-hour', name: 'Golden Hour' },
    { id: 'sculpted-stories', name: 'Sculpted Stories' },
    { id: 'gift-of-glow', name: 'Gift of Glow' },
  ];

  const colorFilters = [
    { id: 'all', name: 'All Shades', hex: null },
    { id: 'Dusty Rose', name: 'Dusty Rose', hex: '#D89A9B' },
    { id: 'Sage Green', name: 'Sage Green', hex: '#829477' },
    { id: 'Amber Gold', name: 'Amber Gold', hex: '#C68B3E' },
    { id: 'Lavender', name: 'Lavender', hex: '#A18BB9' },
    { id: 'Terracotta', name: 'Terracotta', hex: '#C66B4E' },
    { id: 'Deep Burgundy', name: 'Burgundy', hex: '#713C43' },
  ];

  // Filtering & sorting logic
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Collection filter
      const matchesCategory =
        activeCollectionFilter === 'all' || item.collectionId === activeCollectionFilter;

      // Color filter
      const matchesColor =
        selectedColor === 'all' || item.colorName.toLowerCase().includes(selectedColor.toLowerCase());

      return matchesCategory && matchesColor;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // default featured
    });
  }, [activeCollectionFilter, selectedColor, sortBy]);

  return (
    <section id="shop" className="py-16 md:py-24 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta/10 text-terracotta text-xs font-semibold tracking-wider uppercase mb-3">
            <Flame className="w-3.5 h-3.5 fill-current flame-glow" />
            <span>Pure Botanical Wax & Non-Toxic Fragrance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-espresso tracking-tight">
            Bestselling Candles
          </h2>
          <p className="mt-3 text-base text-espresso/70 leading-relaxed">
            Each piece is hand-poured in small artisanal batches with lead-free wicks, natural botanicals, and rich mineral colorways.
          </p>
        </div>

        {/* Filter & Sort Controls Bar */}
        <div className="bg-cream-200/60 p-4 sm:p-5 rounded-3xl border border-espresso/10 mb-10 space-y-4">
          
          {/* Collection Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCollectionFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-200 ${
                  activeCollectionFilter === cat.id
                    ? 'bg-espresso text-cream-100 shadow-sm'
                    : 'bg-white/80 text-espresso/80 hover:bg-white hover:text-espresso'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Secondary Filter Row: Color Filter & Sort */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-3 border-t border-espresso/10">
            
            {/* Color Swatch Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-espresso/60 uppercase tracking-wider mr-1">
                Filter by Shade:
              </span>
              {colorFilters.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedColor === color.id
                      ? 'bg-terracotta text-white shadow-xs'
                      : 'bg-white/70 text-espresso/80 hover:bg-white'
                  }`}
                >
                  {color.hex && (
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-white/80"
                      style={{ backgroundColor: color.hex }}
                    />
                  )}
                  <span>{color.name}</span>
                </button>
              ))}
            </div>

            {/* Sort Select */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="text-xs font-medium text-espresso/60">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white text-espresso text-xs font-medium rounded-xl px-3 py-1.5 border border-espresso/15 focus:outline-none focus:ring-1 focus:ring-terracotta cursor-pointer"
              >
                <option value="featured">Featured Artisanal</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated (5.0★)</option>
              </select>
            </div>

          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-cream-50 rounded-3xl border border-dashed border-espresso/20 p-8">
            <p className="font-serif text-2xl text-espresso">No candles found in this shade.</p>
            <p className="text-sm text-espresso/70 mt-2">Try clearing your filters to explore our complete palette.</p>
            <button
              onClick={() => {
                setActiveCollectionFilter('all');
                setSelectedColor('all');
              }}
              className="mt-4 px-5 py-2.5 rounded-full bg-terracotta text-white text-xs font-semibold uppercase tracking-wider hover:bg-terracotta-dark"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>
        )}

        {/* Bottom Guarantee Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-warmSand/30 border border-warmSand-dark/20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amberGold/20 flex items-center justify-center text-amberGold flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-medium text-espresso">
                Need a Custom Scent or Bulk Event Favours?
              </h4>
              <p className="text-sm text-espresso/70 mt-0.5">
                We handcraft personalized candles with custom labels, colours and fragrance blends for your weddings and corporate celebrations.
              </p>
            </div>
          </div>
          <a
            href="#custom-gifting"
            className="px-6 py-3 rounded-full bg-espresso hover:bg-espresso-dark text-cream-100 text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-colors"
          >
            Explore Custom Gifting
          </a>
        </div>

      </div>
    </section>
  );
}
