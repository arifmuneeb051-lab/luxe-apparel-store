import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useStore } from '../context/StoreContext'

const collections = [
  {
    id: 'pret',
    title: 'LUXURY PRET & FORMALS',
    subtitle: 'Hand-Embroidered Raw Silk & Chiffon Kurtas',
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    span: 'col-span-1 lg:col-span-2',
    height: 'h-[420px]'
  },
  {
    id: 'men',
    title: 'MENSWEAR COUTURE',
    subtitle: 'Bespoke Prince Coats, Waistcoats & Tuxedos',
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
    span: 'col-span-1',
    height: 'h-[420px]'
  },
  {
    id: 'velvet',
    title: 'FESTIVE VELVET & SILK',
    subtitle: 'Opulent Zardozi & Dabka Embellished Silhouettes',
    category: 'Atelier',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop',
    span: 'col-span-1',
    height: 'h-[380px]'
  },
  {
    id: 'accessories',
    title: 'ATELIER SHAWLS & LEATHER',
    subtitle: 'Pure Pashmina Shawls, Clutches & Accessories',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop',
    span: 'col-span-1 lg:col-span-2',
    height: 'h-[380px]'
  }
]

export default function CategoryShowcase({ onSelectCategory }) {
  const { setActiveCategory } = useStore()

  const handleSelect = (cat) => {
    setActiveCategory(cat)
    if (onSelectCategory) onSelectCategory(cat)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#222222] pb-6">
        <div>
          <span className="text-[#D4AF37] text-xs font-semibold tracking-luxury uppercase">
            Curated Collections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF9F6] font-light mt-1">
            Explore The Wardrobe
          </h2>
        </div>
        <p className="text-xs text-[#888888] tracking-widest uppercase mt-4 md:mt-0 font-medium">
          Haute Couture • Ready-to-Wear • Accessories
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((item) => (
          <div
            key={item.id}
            onClick={() => handleSelect(item.category)}
            className={`group relative overflow-hidden rounded-xl cursor-pointer ${item.span} ${item.height} bg-[#111111] border border-[#222222] hover:border-[#D4AF37]/50 transition-all duration-500`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
            />
            
            {/* Elegant luxury overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
              <div className="flex justify-end">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37] transition duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div>
                <p className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase mb-1">
                  {item.subtitle}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-wide">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
