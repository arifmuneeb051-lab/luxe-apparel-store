import React, { useState, useEffect } from 'react'
import { Sparkles, Globe, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { useStore, currencies } from '../context/StoreContext'

const messages = [
  'Complimentary Worldwide Express Delivery on orders over $150',
  'Autumn / Winter 2026 Haute Couture Collection is now live',
  'Private Atelier Concierge: White-Glove Support 24/7',
]

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0)
  const { currency, setCurrency } = useStore()
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-[#090909] text-[#E0E0E0] border-b border-[#222222] text-xs font-light relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
        
        {/* Left: Concierge / Atelier Note */}
        <div className="hidden md:flex items-center gap-2 text-[#9E9E9E] hover:text-[#D4AF37] transition cursor-pointer">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="tracking-wider uppercase text-[11px] font-medium">Luxe Atelier Concierge</span>
        </div>

        {/* Center: Rotating High-Fashion News */}
        <div className="flex-1 flex items-center justify-center gap-2 overflow-hidden px-4">
          <button
            onClick={() => setIndex((prev) => (prev - 1 + messages.length) % messages.length)}
            className="text-[#666666] hover:text-white transition p-0.5"
            aria-label="Previous announcement"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          
          <span className="truncate text-[11px] sm:text-xs tracking-widest uppercase font-medium text-[#FAF9F6] transition-all duration-500">
            {messages[index]}
          </span>

          <button
            onClick={() => setIndex((prev) => (prev + 1) % messages.length)}
            className="text-[#666666] hover:text-white transition p-0.5"
            aria-label="Next announcement"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right: Currency Selector */}
        <div className="relative">
          <button
            onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
            className="flex items-center gap-1.5 text-[11px] tracking-wider uppercase text-[#D4AF37] hover:text-white font-medium transition py-1"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{currency}</span>
            <ChevronDown className="w-3 h-3 text-[#888888]" />
          </button>

          {isCurrencyDropdownOpen && (
            <div className="absolute right-0 mt-1 w-28 bg-[#141414] border border-[#2D2D2D] rounded-md shadow-2xl py-1 z-50">
              {Object.keys(currencies).map((currKey) => (
                <button
                  key={currKey}
                  onClick={() => {
                    setCurrency(currKey)
                    setIsCurrencyDropdownOpen(false)
                  }}
                  className={`w-full text-left px-3 py-1.5 text-[11px] tracking-wider flex items-center justify-between hover:bg-[#202020] transition ${
                    currency === currKey ? 'text-[#D4AF37] font-semibold' : 'text-[#BBBBBB]'
                  }`}
                >
                  <span>{currKey}</span>
                  <span className="text-[#666666]">{currencies[currKey].symbol}</span>
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
