import React from 'react'
import { ShieldCheck, Truck, RotateCcw, Headphones } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    title: '100% PURE FABRIC ARTISTRY',
    desc: 'Grade-A pure mulberry silks, handspun chiffon, and opulent hand-embroidered velvet.',
  },
  {
    icon: Truck,
    title: 'NATIONWIDE CASH ON DELIVERY',
    desc: 'Swift, secure COD and trackable express delivery to all cities across Pakistan.',
  },
  {
    icon: RotateCcw,
    title: 'BESPOKE TAILORING & RETURNS',
    desc: 'Custom fit stitching, bespoke hemming, and effortless doorstep size exchange.',
  },
  {
    icon: Headphones,
    title: 'VIP ATELIER CONCIERGE 24/7',
    desc: 'Direct styling consultation and WhatsApp custom order assistance.',
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
