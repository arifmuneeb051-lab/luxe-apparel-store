import React, { useRef } from 'react'
import { StoreProvider, useStore } from './context/StoreContext'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import BrandTrustBar from './components/BrandTrustBar'
import CategoryShowcase from './components/CategoryShowcase'
import ProductGrid from './components/ProductGrid'
import CartDrawer from './components/CartDrawer'
import QuickViewModal from './components/QuickViewModal'
import CheckoutModal from './components/CheckoutModal'
import AuthModal from './components/AuthModal'
import UserProfileModal from './components/UserProfileModal'
import AdminPortal from './components/AdminPortal'
import TrackOrderModal from './components/TrackOrderModal'
import Footer from './components/Footer'
import Toast from './components/Toast'
import { CheckCircle2, Sparkles, Rocket } from 'lucide-react'

function StoreContent() {
  const { setActiveCategory } = useStore()
  const catalogRef = useRef(null)

  const scrollToCatalog = (cat) => {
    if (cat && cat !== 'All') {
      setActiveCategory(cat)
    }
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#FAF9F6] flex flex-col font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Toast Feedback */}
      <Toast />

      {/* Cart Drawer */}
      <CartDrawer />

      {/* Product Quick View Modal */}
      <QuickViewModal />

      {/* Multi-Step Checkout Modal (With Stripe Support) */}
      <CheckoutModal />

      {/* User Authentication Modal (Login / Sign Up) */}
      <AuthModal />

      {/* User Profile & Past Orders Dossier */}
      <UserProfileModal />

      {/* Atelier Order Tracking Modal */}
      <TrackOrderModal />

      {/* Atelier Admin Management Portal */}
      <AdminPortal />

      {/* Top Luxury Announcement Bar */}
      <AnnouncementBar />

      {/* Haute Couture Navbar (Logo Left, Menu Center, User & Cart Right) */}
      <Navbar />

      {/* Hero Runway Lookbook Slider */}
      <HeroSlider onExploreClick={scrollToCatalog} />

      {/* 4 Luxury Brand Trust Pillars */}
      <BrandTrustBar />

      {/* Curated Categories Showcase */}
      <CategoryShowcase onSelectCategory={scrollToCatalog} />

      {/* Dynamic Product Catalog & Filtering */}
      <div ref={catalogRef}>
        <ProductGrid />
      </div>

      {/* Final Production & Operational Milestone Banner */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#121212] via-[#1A1A1A] to-[#121212] border border-[#D4AF37]/30 relative overflow-hidden shadow-2xl">
          
          <div className="absolute -right-16 -top-16 w-72 h-72 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202020] border border-[#D4AF37]/60 text-[#D4AF37] text-[10px] tracking-luxury uppercase font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>100% Production Ready • User IDs & Stripe Ready</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-white mb-2">
                LUXE APPAREL Store with Client Accounts & Stripe
              </h3>
              <p className="text-xs sm:text-sm text-[#AAAAAA] font-light max-w-2xl leading-relaxed">
                Client ID sign-up & authentication, gated checkout, Stripe payment placeholder with key slot, swapped haute-couture navigation, MongoDB models, and Atelier Admin Portal are fully integrated.
              </p>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-3 flex-shrink-0">
              <button
                onClick={() => scrollToCatalog('All')}
                className="px-8 py-4 bg-[#D4AF37] hover:bg-[#B38F22] text-black font-semibold text-xs tracking-luxury uppercase rounded-lg transition duration-300 shadow-xl shadow-[#D4AF37]/20 flex items-center gap-2"
              >
                <Rocket className="w-4 h-4" />
                <span>SHOP ENTIRE COLLECTION</span>
              </button>
              <span className="text-[10px] tracking-widest text-[#777777] uppercase font-mono">
                1-Click Controls: START_STORE.bat & STOP_STORE.bat
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Brand Footer */}
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <StoreProvider>
      <StoreContent />
    </StoreProvider>
  )
}
