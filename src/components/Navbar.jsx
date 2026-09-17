import React, { useState } from 'react'
import { Search, Heart, ShoppingBag, Menu, X, ArrowRight, User, Truck } from 'lucide-react'
import { useStore } from '../context/StoreContext'

export default function Navbar() {
  const {
    activeGender,
    setActiveGender,
    wishlistCount,
    cartCount,
    setIsCartOpen,
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    currentUser,
    setIsAuthModalOpen,
    setAuthModalMode,
    setIsProfileOpen,
    setIsWishlistOpen,
    setIsTrackOrderOpen
  } = useStore()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'ALL COLLECTIONS', value: 'All' },
    { label: 'FESTIVE LUXURY', value: 'Festive' },
    { label: 'LUXURY PRET', value: 'Pret' },
    { label: 'MENSWEAR COUTURE', value: 'Men' },
    { label: 'VELVET & SILK', value: 'Velvet' },
    { label: 'BRIDAL ATELIER', value: 'Atelier' },
  ]

  const handleUserClick = () => {
    if (currentUser) {
      setIsProfileOpen(true)
    } else {
      setAuthModalMode('login')
      setIsAuthModalOpen(true)
    }
  }

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#222222] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* LEFT SIDE: Brand Monogram & Logo (Shifted to Left as requested) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1.5 text-[#CCCCCC] hover:text-white transition"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div
              onClick={() => setActiveGender('All')}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F5E6B3] flex items-center justify-center text-black font-serif font-bold text-base shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                L
              </div>
              <div className="flex flex-col">
                <h1 className="font-serif tracking-widest text-xl font-bold uppercase text-[#FAF9F6] tracking-[0.22em] group-hover:text-[#D4AF37] transition-colors duration-300">
                  LUXE APPAREL
                </h1>
                <p className="text-[8px] tracking-[0.3em] uppercase text-[#777777] -mt-0.5 hidden sm:block">
                  Haute Couture Atelier
                </p>
              </div>
            </div>
          </div>

          {/* CENTER: Navigation Menu Links (Shifted to Center as requested) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => setActiveGender(link.value)}
                className={`text-[11px] font-medium tracking-luxury uppercase transition-colors relative py-1 ${
                  activeGender === link.value
                    ? 'text-[#D4AF37] font-semibold'
                    : 'text-[#AAAAAA] hover:text-[#FAF9F6]'
                }`}
              >
                {link.label}
                {activeGender === link.value && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#D4AF37] animate-fade-in" />
                )}
              </button>
            ))}
          </nav>

          {/* RIGHT SIDE: Action Icons (Search, Wishlist, User Account ID, Shopping Bag) */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-[#CCCCCC] hover:text-[#D4AF37] transition"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="p-2 text-[#CCCCCC] hover:text-[#D4AF37] transition relative"
              aria-label="Wishlist"
              title="Atelier Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#D4AF37] text-black text-[9px] font-bold rounded-full flex items-center justify-center shadow-md animate-scale">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* TRACK ORDER BUTTON */}
            <button
              onClick={() => setIsTrackOrderOpen(true)}
              className="p-2 text-[#CCCCCC] hover:text-[#D4AF37] transition flex items-center gap-1.5"
              title="Track Consignment & Live Status"
              aria-label="Track Order"
            >
              <Truck className="w-5 h-5" />
              <span className="hidden xl:inline text-[11px] tracking-widest uppercase font-medium text-[#AAAAAA] hover:text-white">
                Track
              </span>
            </button>

            {/* USER ACCOUNT / ID BUTTON */}
            <button
              onClick={handleUserClick}
              className="p-2 text-[#CCCCCC] hover:text-[#D4AF37] transition flex items-center gap-1.5"
              aria-label="User Account"
            >
              {currentUser ? (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#D4AF37] text-black font-serif font-bold text-xs flex items-center justify-center shadow-sm">
                    {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <span className="hidden md:inline text-xs tracking-wider uppercase font-medium text-white max-w-[100px] truncate">
                    {currentUser.name.split(' ')[0]}
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5">
                  <User className="w-5 h-5" />
                  <span className="hidden md:inline text-[11px] tracking-widest uppercase font-medium text-[#AAAAAA] hover:text-white">
                    Sign In
                  </span>
                </div>
              )}
            </button>

            {/* Shopping Bag / Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-[#CCCCCC] hover:text-[#D4AF37] transition relative flex items-center gap-2 group"
              aria-label="Shopping Bag"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform duration-200 text-[#D4AF37]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-[#D4AF37] text-black text-[9px] font-bold rounded-full flex items-center justify-center shadow-md">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs tracking-wider uppercase font-medium text-[#AAAAAA] group-hover:text-white transition">
                Bag {cartCount > 0 ? `(${cartCount})` : ''}
              </span>
            </button>
          </div>

        </div>

        {/* Expandable Luxury Search Drawer */}
        {isSearchOpen && (
          <div className="border-t border-[#222222] bg-[#111111] px-4 py-4 animate-fade-in">
            <div className="max-w-3xl mx-auto flex items-center gap-3">
              <Search className="w-5 h-5 text-[#D4AF37]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cashmere coats, Italian silk blazers, velvet dresses, leather boots..."
                className="w-full bg-transparent text-sm text-white placeholder-[#666666] outline-none font-sans"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-[#888888] hover:text-white"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-1 text-[#888888] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-4/5 max-w-sm bg-[#0D0D0D] border-r border-[#262626] h-full p-6 flex flex-col justify-between z-10 shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#222222]">
                <span className="font-serif tracking-widest text-lg font-bold uppercase text-[#FAF9F6]">
                  LUXE APPAREL
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#888888] hover:text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* User sign-in status in mobile menu */}
              <div className="py-4 border-b border-[#222222]">
                {currentUser ? (
                  <div
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setIsProfileOpen(true)
                    }}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-black font-serif font-bold text-sm flex items-center justify-center">
                        {currentUser.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">{currentUser.name}</p>
                        <p className="text-[10px] text-[#888888]">Maison VIP Member</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setAuthModalMode('login')
                      setIsAuthModalOpen(true)
                    }}
                    className="w-full py-2.5 bg-[#D4AF37] text-black font-semibold text-xs tracking-wider uppercase rounded"
                  >
                    Sign In / Create Account
                  </button>
                )}
              </div>

              <div className="mt-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.value}
                    onClick={() => {
                      setActiveGender(link.value)
                      setMobileMenuOpen(false)
                    }}
                    className={`text-left text-sm tracking-widest uppercase py-2 flex items-center justify-between transition ${
                      activeGender === link.value
                        ? 'text-[#D4AF37] font-bold'
                        : 'text-[#AAAAAA] hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-40" />
                  </button>
                ))}

                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setIsWishlistOpen(true)
                  }}
                  className="text-left text-xs tracking-widest uppercase py-2 text-[#CCCCCC] hover:text-[#D4AF37] flex items-center justify-between pt-4 border-t border-[#222222]"
                >
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#D4AF37]" />
                    <span>Atelier Wishlist</span>
                  </div>
                  {wishlistCount > 0 && (
                    <span className="px-2 py-0.5 text-[9px] bg-[#D4AF37] text-black font-bold rounded-full">
                      {wishlistCount}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setIsTrackOrderOpen(true)
                  }}
                  className="text-left text-xs tracking-widest uppercase py-2 text-[#CCCCCC] hover:text-[#D4AF37] flex items-center gap-2"
                >
                  <Truck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Track Consignment / Orders</span>
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#222222] text-xs text-[#777777] flex flex-col gap-2">
              <p className="tracking-widest uppercase text-[#D4AF37]">Complimentary Express Delivery</p>
              <p>24/7 Atelier Concierge & Personal Stylist</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
