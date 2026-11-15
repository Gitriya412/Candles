import React from 'react';
import { Star, Quote, CheckCircle, Heart, Sparkles } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 text-xs font-semibold tracking-wider uppercase text-terracotta mb-3">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Community Stories</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-espresso tracking-tight">
            Words from Those Who Glow
          </h2>
          <p className="mt-4 text-base text-espresso/70 leading-relaxed">
            From intimate bedroom reading corners to grand wedding celebrations, see how LUMORA illuminates spaces across India.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-8 border border-espresso/10 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between relative group"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 text-cream-300 group-hover:text-terracotta/20 transition-colors">
                <Quote className="w-10 h-10 fill-current" />
              </div>

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amberGold mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Headline Quote */}
                <h4 className="font-serif text-xl sm:text-2xl font-medium text-espresso leading-snug">
                  {review.headline}
                </h4>

                {/* Review Body */}
                <p className="mt-3.5 text-xs sm:text-sm text-espresso/75 leading-relaxed font-normal">
                  {review.review}
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-6 pt-5 border-t border-espresso/10">
                <div className="flex items-center gap-3.5">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-11 h-11 rounded-full object-cover border border-espresso/10 shadow-xs"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-serif text-base font-semibold text-espresso">
                        {review.name}
                      </span>
                      {review.verified && (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                      )}
                    </div>
                    <span className="text-[11px] text-espresso/60 block">
                      {review.role} • {review.location}
                    </span>
                    <span className="text-[10px] font-semibold text-terracotta mt-0.5 block">
                      Purchased: {review.candlePurchased}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Aggregate Review Stats Pill */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-cream-200/80 border border-espresso/10 text-xs text-espresso">
            <span className="font-bold text-terracotta">4.9 / 5.0 Average Rating</span>
            <span className="text-espresso/40">|</span>
            <span>Based on 850+ Verified Client Reviews</span>
            <span className="text-amberGold font-bold">★★★★★</span>
          </div>
        </div>

      </div>
    </section>
  );
}
