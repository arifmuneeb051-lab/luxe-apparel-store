import React, { useState, useEffect } from 'react'
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    collection: 'AUTUMN / WINTER 2026 RUNWAY',
    title: 'THE ART OF TAILORING',
    subtitle: 'Sculptural silhouettes crafted from double-faced Italian cashmere and structured virgin wool.',
    ctaText: 'EXPLORE THE RUNWAY',
    ctaCategory: 'Tailoring',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop',
    tag: 'NEW RUNWAY DROP'
  },
  {
    id: 2,
    collection: 'HAUTE COUTURE EDITION',
    title: 'EVENING SILK & VELVET',
    subtitle: 'Midnight hues, hand-draped mulberry silks, and sharp architectural shoulders.',
    ctaText: 'SHOP THE ATELIER',
    ctaCategory: 'Atelier',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop',
    tag: 'LIMITED EDITION'
  },
  {
    id: 3,
    collection: 'CONTEMPORARY ESSENTIALS',
    title: 'URBAN MINIMALISM',
    subtitle: 'Relaxed luxury outerwear and heavyweight organic cotton knitted in Milan.',
    ctaText: 'DISCOVER ESSENTIALS',
    ctaCategory: 'Essentials',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop',
    tag: 'MOST COVETED'
  }
]

export default function HeroSlider({ onExploreClick }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section className="relative w-full h-[82vh] min-h-[550px] max-h-[850px] overflow-hidden bg-black select-none">
      {/* Background Image with Cinematic Overlay */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-[6000ms] ease-out"
            style={{
              transform: index === current ? 'scale(1.02)' : 'scale(1.08)',
            }}
          />
          {/* Multi-layered luxury gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-black/40 to-transparent" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-20 sm:pb-24">
        <div className="max-w-2xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818]/80 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[11px] font-semibold tracking-widest uppercase mb-4 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{slide.tag}</span>
          </div>

          <p className="text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-[#CCCCCC] mb-2">
            {slide.collection}
          </p>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#FAF9F6] tracking-tight leading-[1.08] mb-4">
            {slide.title}
          </h2>

          <p className="text-[#C0C0C0] text-sm sm:text-base font-light leading-relaxed mb-8 max-w-lg">
            {slide.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onExploreClick && onExploreClick(slide.ctaCategory)}
              className="px-8 py-4 bg-[#FAF9F6] text-black hover:bg-[#D4AF37] hover:text-black font-semibold text-xs tracking-luxury uppercase transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-[#D4AF37]/20 group"
            >
              <span>{slide.ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onExploreClick && onExploreClick('All')}
              className="px-8 py-4 bg-transparent border border-white/40 hover:border-white text-[#FAF9F6] font-medium text-xs tracking-luxury uppercase transition-colors backdrop-blur-sm"
            >
              VIEW LOOKBOOK
            </button>
          </div>

        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute z-30 bottom-8 right-6 sm:right-12 flex items-center gap-3">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          className="p-2.5 rounded-full bg-[#181818]/70 backdrop-blur-md border border-[#333333] text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Indicator dots */}
        <div className="flex items-center gap-2 px-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 ${
                i === current
                  ? 'w-8 h-1 bg-[#D4AF37] rounded-full'
                  : 'w-2 h-1 bg-white/40 rounded-full hover:bg-white'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="p-2.5 rounded-full bg-[#181818]/70 backdrop-blur-md border border-[#333333] text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  )
}
