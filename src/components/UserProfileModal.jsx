import React from 'react'
import { X, User, Mail, Phone, MapPin, Package, LogOut, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react'
import { useStore } from '../context/StoreContext'

export default function UserProfileModal() {
  const {
    isProfileOpen,
    setIsProfileOpen,
    currentUser,
    logout,
    userOrders,
    formatPrice
  } = useStore()

  if (!isProfileOpen || !currentUser) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto select-none">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={() => setIsProfileOpen(false)}
      />

      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="relative w-full max-w-2xl bg-[#111111] border border-[#2B2B2B] rounded-2xl overflow-hidden shadow-2xl z-10 text-[#FAF9F6] animate-fade-in">
          
          {/* Header */}
          <div className="p-6 bg-[#0A0A0A] border-b border-[#222222] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1F1F1F] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-serif font-bold text-lg">
                {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <div>
                <h2 className="font-serif tracking-luxury text-base font-semibold uppercase text-white">
                  {currentUser.name}
                </h2>
                <span className="text-[10px] text-[#D4AF37] tracking-widest uppercase font-semibold">
                  Maison VIP Member
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsProfileOpen(false)}
              className="p-1.5 text-[#888888] hover:text-white transition rounded-full hover:bg-[#1C1C1C]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Account Details Box */}
            <div className="p-4 rounded-xl bg-[#141414] border border-[#262626] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-center gap-2.5 text-[#CCCCCC]">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <div>
                  <span className="text-[10px] text-[#777777] block uppercase">Email</span>
                  <span>{currentUser.email}</span>
                </div>
              </div>

              {currentUser.phone && (
                <div className="flex items-center gap-2.5 text-[#CCCCCC]">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <div>
                    <span className="text-[10px] text-[#777777] block uppercase">Phone</span>
                    <span>{currentUser.phone}</span>
                  </div>
                </div>
              )}

              {currentUser.address && (
                <div className="flex items-center gap-2.5 text-[#CCCCCC] sm:col-span-2">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <div>
                    <span className="text-[10px] text-[#777777] block uppercase">Saved Residence</span>
                    <span>{currentUser.address}, {currentUser.city} {currentUser.postalCode}, {currentUser.country}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Past Orders Section */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-lg font-light text-white flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#D4AF37]" />
                  <span>Your Atelier Orders ({userOrders.length})</span>
                </h3>
              </div>

              {userOrders.length === 0 ? (
                <div className="p-6 rounded-xl bg-[#141414] border border-[#222222] text-center text-xs text-[#888888]">
                  You have not placed any orders yet. Explore the runway collection to start.
                </div>
              ) : (
                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {userOrders.map((ord) => (
                    <div
                      key={ord.orderNumber}
                      className="p-4 rounded-xl bg-[#151515] border border-[#262626] flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-[#D4AF37] font-bold">{ord.orderNumber}</span>
                          <span className="text-[10px] text-[#777777]">• {ord.date}</span>
                        </div>
                        <p className="text-[11px] text-[#AAAAAA] line-clamp-1">
                          {ord.items.map((it) => `${it.quantity}x ${it.title}`).join(', ')}
                        </p>
                      </div>

                      <div className="text-right flex-shrink-0">
                        <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 block mb-1">
                          {ord.status || 'Processing'}
                        </span>
                        <span className="font-serif font-bold text-[#FAF9F6] text-sm">
                          {formatPrice(ord.total)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#222222] flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] text-[#666666] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Protected by Luxe Atelier Security</span>
              </span>

              <div className="flex items-center gap-2">
                {(currentUser.email === 'arifmuneeb81@gmail.com' || currentUser.role === 'admin') && (
                  <button
                    onClick={() => {
                      setIsProfileOpen(false)
                      setIsAdminOpen(true)
                    }}
                    className="px-4 py-2.5 rounded-lg bg-[#D4AF37] hover:bg-[#B38F22] text-black font-bold text-xs tracking-wider uppercase transition flex items-center gap-1.5 shadow-lg shadow-[#D4AF37]/20"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>OWNER CONSOLE</span>
                  </button>
                )}

                <button
                  onClick={logout}
                  className="px-5 py-2.5 rounded-lg bg-[#181818] hover:bg-red-950/40 hover:border-red-500/50 border border-[#333333] text-xs text-red-400 font-semibold tracking-wider uppercase transition flex items-center gap-2"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>SIGN OUT</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
