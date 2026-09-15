import React, { useState } from 'react'
import { ArrowRight, Sparkles, Globe, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-[#080808] text-[#999999] border-t border-[#1C1C1C] pt-20 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Atelier Access */}
        <div className="border-b border-[#1C1C1C] pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2B2B2B] text-[#D4AF37] text-[10px] tracking-widest uppercase mb-3 font-semibold">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Privé Access</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF9F6] font-light mb-3">
              Join The House of Luxe
            </h3>
            <p className="text-xs sm:text-sm text-[#888888] font-light max-w-md leading-relaxed">
              Subscribe to receive private runway invites, seasonal lookbooks, and early access to limited atelier drops.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-4 rounded-lg bg-[#141414] border border-[#D4AF37]/40 text-[#D4AF37] text-xs tracking-wider uppercase font-medium text-center animate-fade-in">
                Welcome to the Atelier. Your private invite has been dispatched.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="flex-1 bg-[#121212] border border-[#2B2B2B] focus:border-[#D4AF37] text-sm text-white px-5 py-3.5 rounded-none outline-none font-light placeholder-[#555555] transition"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 bg-[#D4AF37] hover:bg-[#B38F22] text-black font-semibold text-xs tracking-luxury uppercase transition duration-300 flex items-center justify-center gap-2 flex-shrink-0"
                >
                  <span>SUBSCRIBE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
            <p className="text-[10px] text-[#555555] mt-2 tracking-wide">
              By subscribing you agree to our Privacy Policy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Middle Footer Navigation Links */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xs font-semibold tracking-luxury uppercase text-[#FAF9F6] mb-5">
              COLLECTIONS
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li><span className="hover:text-[#D4AF37] transition cursor-pointer">Womenswear 2026</span></li>
              <li><span className="hover:text-[#D4AF37] transition cursor-pointer">Menswear Tailoring</span></li>
              <li><span className="hover:text-[#D4AF37] transition cursor-pointer">Haute Couture Atelier</span></li>
              <li><span className="hover:text-[#D4AF37] transition cursor-pointer">Pure Cashmere Edit</span></li>
              <li><span className="hover:text-[#D4AF37] transition cursor-pointer">Leather Goods & Accessories</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-luxury uppercase text-[#FAF9F6] mb-5">
              CLIENT CONCIERGE
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li><span className="hover:text-[#D4AF37] transition cursor-pointer">Atelier Personal Stylist</span></li>
              <li><span className="hover:text-[#D4AF37] transition cursor-pointer">Complimentary Shipping</span></li>
              <li><span className="hover:text-[#D4AF37] transition cursor-pointer">Doorstep 30-Day Returns</span></li>
              <li><span className="hover:text-[#D4AF37] transition cursor-pointer">Track Insured Delivery</span></li>
              <li><span className="hover:text-[#D4AF37] transition cursor-pointer">Bespoke Size Guide</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-luxury uppercase text-[#FAF9F6] mb-5">
              THE HOUSE
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li><span className="hover:text-[#D4AF37] transition cursor-pointer">Brand Heritage & Vision</span></li>
              <li><span className="hover:text-[#D4AF37] transition cursor-pointer">Ethical Sourcing & Ecology</span></li>
              <li><span className="hover:text-[#D4AF37] transition cursor-pointer">Italian Master Artisans</span></li>
              <li><span className="hover:text-[#D4AF37] transition cursor-pointer">Editorial & Press</span></li>
              <li><span className="hover:text-[#D4AF37] transition cursor-pointer">Careers at Luxe</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-luxury uppercase text-[#FAF9F6] mb-5">
              ATELIER LOCATIONS
            </h4>
            <p className="text-xs font-light leading-relaxed mb-4 text-[#888888]">
              Flagship Ateliers in Milan, Paris, London, New York & Dubai.
            </p>
            <div className="flex items-center gap-3 text-[#888888]">
              <div className="flex items-center gap-1.5 text-xs text-[#AAAAAA] hover:text-[#D4AF37] transition cursor-pointer">
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Global Flagships</span>
              </div>
              <span className="text-[#333333]">•</span>
              <div className="flex items-center gap-1.5 text-xs text-[#AAAAAA] hover:text-[#D4AF37] transition cursor-pointer">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Concierge Call</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Monogram */}
        <div className="border-t border-[#1C1C1C] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
          <div className="flex items-center gap-2">
            <span className="font-serif text-[#D4AF37] font-bold">LUXE APPAREL</span>
            <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <span className="hover:text-[#AAAAAA] transition cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#AAAAAA] transition cursor-pointer">Terms of Haute Couture</span>
            <span className="hover:text-[#AAAAAA] transition cursor-pointer">Cookie Preferences</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
