import React, { useState } from 'react'
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, ShieldCheck, Sparkles, Check } from 'lucide-react'
import { useStore } from '../context/StoreContext'

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeFromCart,
    updateQuantity,
    formatPrice,
    cartSubtotalUSD,
    discountUSD,
    shippingUSD,
    taxUSD,
    cartTotalUSD,
    freeShippingThresholdUSD,
    isFreeShipping,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    setIsCheckoutOpen,
    currentUser,
    openAuthForCheckout
  } = useStore()

  const [couponInput, setCouponInput] = useState('')
  const [couponError, setCouponError] = useState('')

  if (!isCartOpen) return null

  const handleApplyCoupon = (e) => {
    e.preventDefault()
    setCouponError('')
    if (!couponInput) return

    const res = applyCoupon(couponInput)
    if (!res.success) {
      setCouponError(res.message || 'Invalid coupon code')
    } else {
      setCouponInput('')
    }
  }

  const handleCheckoutClick = () => {
    setIsCartOpen(false)
    if (!currentUser) {
      openAuthForCheckout()
    } else {
      setIsCheckoutOpen(true)
    }
  }

  // Progress to free shipping
  const progressPercent = Math.min(100, Math.round((cartSubtotalUSD / freeShippingThresholdUSD) * 100))
  const remainingForFreeShipping = Math.max(0, freeShippingThresholdUSD - cartSubtotalUSD)

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      {/* Dimmed backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0E0E0E] border-l border-[#222222] shadow-2xl flex flex-col justify-between text-[#FAF9F6] animate-fade-in">
          
          {/* Header */}
          <div className="p-6 border-b border-[#1F1F1F]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="font-serif tracking-luxury text-sm font-semibold uppercase">
                  ATELIER SHOPPING BAG
                </h2>
                <span className="text-xs text-[#888888]">({cartItems.length})</span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 text-[#888888] hover:text-white transition rounded-full hover:bg-[#1A1A1A]"
                aria-label="Close Bag"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Meter */}
            <div className="bg-[#161616] p-3 rounded-lg border border-[#262626]">
              <div className="flex items-center justify-between text-[11px] mb-1.5">
                {isFreeShipping && cartItems.length > 0 ? (
                  <span className="text-emerald-400 font-medium flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    Complimentary Express Delivery Unlocked
                  </span>
                ) : (
                  <span className="text-[#BBBBBB]">
                    Add <span className="text-[#D4AF37] font-semibold">{formatPrice(remainingForFreeShipping)}</span> for Free Express
                  </span>
                )}
                <span className="text-[10px] text-[#777777] font-mono">{progressPercent}%</span>
              </div>
              <div className="w-full h-1.5 bg-[#252525] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#181818] border border-[#2B2B2B] flex items-center justify-center text-[#555555] mb-4">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-lg text-white font-light mb-2">
                  Your Atelier Bag is Empty
                </h3>
                <p className="text-xs text-[#888888] font-light max-w-xs mb-6 leading-relaxed">
                  Explore our Autumn / Winter collection and select your bespoke pieces.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 bg-[#D4AF37] text-black font-semibold text-xs tracking-luxury uppercase transition hover:bg-[#B38F22]"
                >
                  EXPLORE COLLECTION
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.uniqueId}
                  className="flex gap-4 p-3.5 rounded-xl bg-[#131313] border border-[#222222] hover:border-[#333333] transition"
                >
                  {/* Item Image */}
                  <div className="w-20 h-24 rounded-lg overflow-hidden bg-[#1A1A1A] flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-sm font-normal text-white line-clamp-1">
                          {item.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.uniqueId)}
                          className="text-[#666666] hover:text-red-400 transition p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-3 mt-1 text-[11px] text-[#888888]">
                        <span className="px-2 py-0.5 rounded bg-[#1F1F1F] border border-[#2D2D2D] text-[#CCCCCC]">
                          Size: {item.selectedSize}
                        </span>
                        {item.selectedColor && (
                          <span className="truncate">{item.selectedColor}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#1C1C1C]">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-[#2A2A2A] rounded bg-[#181818]">
                        <button
                          onClick={() => updateQuantity(item.uniqueId, -1)}
                          className="p-1 text-[#888888] hover:text-white transition"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-mono font-medium text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.uniqueId, 1)}
                          className="p-1 text-[#888888] hover:text-white transition"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="text-xs font-semibold text-[#FAF9F6]">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Financial Checkout Summary */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#1F1F1F] bg-[#0B0B0B]">
              
              {/* Coupon Code Input */}
              <div className="mb-4">
                {appliedCoupon ? (
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#141414] border border-[#D4AF37]/50 text-xs">
                    <div className="flex items-center gap-2 text-[#D4AF37]">
                      <Tag className="w-3.5 h-3.5" />
                      <span className="font-medium">{appliedCoupon.code}</span>
                      <span className="text-[10px] text-[#AAAAAA]">({appliedCoupon.label})</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-xs text-red-400 hover:text-red-300 font-medium underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="Promotional code (e.g. LUXE20)"
                      className="flex-1 bg-[#141414] border border-[#2A2A2A] focus:border-[#D4AF37] text-xs text-white px-3 py-2 rounded outline-none uppercase font-mono"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#202020] hover:bg-[#D4AF37] hover:text-black text-[#CCCCCC] text-xs font-semibold tracking-wider uppercase rounded transition"
                    >
                      APPLY
                    </button>
                  </form>
                )}
                {couponError && (
                  <p className="text-[10px] text-red-400 mt-1">{couponError}</p>
                )}
                {!appliedCoupon && (
                  <p className="text-[10px] text-[#666666] mt-1">
                    Try VIP privilege code <span className="text-[#D4AF37] font-mono cursor-pointer" onClick={() => setCouponInput('LUXE20')}>LUXE20</span> for 20% off
                  </p>
                )}
              </div>

              {/* Breakdown */}
              <div className="space-y-2 text-xs text-[#999999] border-t border-[#1C1C1C] pt-3 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white font-medium">{formatPrice(cartSubtotalUSD)}</span>
                </div>

                {discountUSD > 0 && (
                  <div className="flex justify-between text-[#D4AF37]">
                    <span>Atelier Privilege Discount</span>
                    <span>-{formatPrice(discountUSD)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Estimated Express Courier</span>
                  <span className={shippingUSD === 0 ? 'text-emerald-400 font-medium' : 'text-white font-medium'}>
                    {shippingUSD === 0 ? 'COMPLIMENTARY' : formatPrice(shippingUSD)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Estimated Tax (8%)</span>
                  <span className="text-white font-medium">{formatPrice(taxUSD)}</span>
                </div>

                <div className="flex justify-between text-sm font-semibold text-white border-t border-[#222222] pt-2">
                  <span>Total Due</span>
                  <span className="text-base text-[#D4AF37] font-serif font-bold">
                    {formatPrice(cartTotalUSD)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckoutClick}
                className="w-full py-4 bg-[#D4AF37] hover:bg-[#B38F22] text-black font-semibold text-xs tracking-luxury uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-[#D4AF37]/20"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#666666] mt-3">
                <ShieldCheck className="w-3.5 h-3.5 text-[#888888]" />
                <span>256-Bit Encrypted • Complimentary 30-Day White Glove Returns</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  )
}
