import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { instagramPosts } from '../data/instagram';

export default function InstagramGallery() {
  return (
    <section className="py-20 bg-cream-50/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200 text-xs font-semibold tracking-wider uppercase text-terracotta mb-3">
            <Instagram className="w-3.5 h-3.5" />
            <span>@lumora.candles</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-espresso tracking-tight">
            Colour Your Feed with a Little Glow.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-espresso/70 leading-relaxed">
            Follow our daily hand-pouring rituals, packaging sneak peeks, and warm cozy home styling ideas.
          </p>
        </div>

        {/* 6 Photos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-2xl overflow-hidden aspect-square shadow-soft border border-espresso/10 bg-cream-200 cursor-pointer"
            >
              <img
                src={post.image}
                alt="Instagram lifestyle candle post"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover Dark Overlay with Stats */}
              <div className="absolute inset-0 bg-espresso/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-cream-100 text-center">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-dustyRose" />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-3 text-xs font-semibold">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-current text-dustyRose" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      {post.comments}
                    </span>
                  </div>
                  <p className="text-[10px] text-cream-200/80 line-clamp-2 mt-1">
                    {post.caption}
                  </p>
                </div>

                <span className="text-[9px] font-semibold tracking-wider text-amberGold uppercase">
                  {post.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Follow Button */}
        <div className="mt-10 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-cream-200 text-espresso text-xs font-semibold tracking-wider uppercase border border-espresso/15 shadow-xs transition-colors"
          >
            <Instagram className="w-4 h-4 text-terracotta" />
            <span>Follow on Instagram #GlowWithLumora</span>
          </a>
        </div>

      </div>
    </section>
  );
}
