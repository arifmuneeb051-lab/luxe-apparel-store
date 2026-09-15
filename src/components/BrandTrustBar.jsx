import React from 'react'
import { ShieldCheck, Truck, RotateCcw, Headphones } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'HAUTE CRAFTSMANSHIP',
    desc: 'Pure Italian cashmere, double-faced wool, & organic mulberry silks.',
  },
  {
    icon: Truck,
    title: 'COMPLIMENTARY EXPRESS',
    desc: 'White-glove insured global delivery dispatched within 24 hours.',
  },
  {
    icon: RotateCcw,
    title: '30-DAY ATELIER RETURNS',
    desc: 'Hassle-free doorstep pickup & bespoke size exchange service.',
  },
  {
    icon: Headphones,
    title: 'PRIVATE CONCIERGE 24/7',
    desc: 'Direct styling advice & wardrobe curation from our certified atelier.',
  },
]

export default function BrandTrustBar() {
  return (
    <section className="bg-[#090909] border-y border-[#1E1E1E] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon
          return (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-lg bg-[#0F0F0F] border border-[#1C1C1C] hover:border-[#D4AF37]/40 transition duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#181818] border border-[#282828] flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:border-[#D4AF37] transition duration-300 flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-luxury uppercase text-[#FAF9F6] mb-1.5 font-sans">
                  {pillar.title}
                </h3>
                <p className="text-[11px] text-[#888888] leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
