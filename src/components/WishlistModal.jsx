import React from 'react'
import { X, Heart, ShoppingBag, Trash2, ArrowRight, Sparkles, Check, Truck } from 'lucide-react'
import { useStore } from '../context/StoreContext'

export default function WishlistModal() {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
    formatPrice,
    setIsCartOpen,
    showToast
  } = useStore()

  if (!isWishlistOpen) return null

  const handleMoveToBag = (product) => {
    const defaultSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Standard'
    const defaultColor = product.colors && product.colors.length > 0 ? product.colors[0].name : 'Default'
    addToCart(product, defaultSize, defaultColor, 1)
    toggleWishlist(product)
    showToast(`Moved "${product.title}" to your Shopping Bag`)
  }

  const handleMoveAllToBag = () => {
    wishlist.forEach((product) => {
      const defaultSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Standard'
      const defaultColor = product.colors && product.colors.length > 0 ? product.colors[0].name : 'Default'
      addToCart(product, defaultSize, defaultColor, 1)
    })
    wishlist.forEach((product) => toggleWishlist(product))
    setIsWishlistOpen(false)
    setIsCartOpen(true)
    showToast('All wishlisted items moved to your Shopping Bag!')
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      {/* Dimmed backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0E0E0E] border-l border-[#222222] shadow-2xl flex flex-col justify-between text-[#FAF9F6] animate-fade-in">
          
          {/* Header */}
          <div className="p-6 border-b border-[#1F1F1F]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#181818] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
                  <Heart className="w-4 h-4 fill-[#D4AF37]" />
                </div>
                <div>
                  <h2 className="font-serif tracking-luxury text-sm font-semibold uppercase text-white">
                    ATELIER WISHLIST
                  </h2>
                  <span className="text-[10px] text-[#888888] tracking-widest uppercase">
                    Saved Haute Couture Pieces
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsWishlistOpen(false)}
                className="p-2 text-[#777777] hover:text-white hover:bg-[#1A1A1A] rounded-full transition"
                aria-label="Close Wishlist"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#1C1C1C] text-[11px]">
              <span className="text-[#AAAAAA]">
                {wishlist.length} {wishlist.length === 1 ? 'Piece Saved' : 'Pieces Saved'}
              </span>
              <span className="text-emerald-400 flex items-center gap-1 font-mono">
                <Truck className="w-3 h-3" />
                <span>Nationwide COD Available</span>
              </span>
            </div>
          </div>

          {/* Body: Items or Empty State */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
            {wishlist.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center px-4 py-16">
                <div className="w-16 h-16 rounded-full bg-[#141414] border border-[#262626] flex items-center justify-center text-[#555555] mb-4">
                  <Heart className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-lg font-light text-white mb-2">
                  Your Wishlist is Empty
                </h3>
                <p className="text-xs text-[#888888] max-w-xs font-light leading-relaxed mb-6">
                  Save your favorite festive luxury formals, pure silk gowns, and bespoke menswear to curate your private wardrobe.
                </p>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="px-6 py-3 bg-[#D4AF37] hover:bg-[#B38F22] text-black font-semibold text-xs tracking-luxury uppercase rounded transition"
                >
                  EXPLORE COLLECTIONS
                </button>
              </div>
            ) : (
              wishlist.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-[#131313] border border-[#222222] hover:border-[#D4AF37]/40 transition duration-300 flex gap-4 group"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-24 rounded-lg overflow-hidden bg-[#1A1A1A] flex-shrink-0 relative">
                    <img
                      src={item.images ? item.images[0] : item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    {item.badge && (
                      <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/80 text-[#D4AF37] text-[8px] font-bold tracking-widest uppercase border border-[#D4AF37]/30">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold">
                          {item.category}
                        </span>
                        <button
                          onClick={() => toggleWishlist(item)}
                          className="text-[#666666] hover:text-rose-400 transition p-1"
                          title="Remove from Wishlist"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h4 className="font-serif text-xs font-semibold text-white mt-0.5 line-clamp-1">
                        {item.title}
                      </h4>

                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="font-serif text-sm font-bold text-[#D4AF37]">
                          {formatPrice(item.price)}
                        </span>
                        {item.originalPrice && (
                          <span className="text-[10px] text-[#666666] line-through">
                            {formatPrice(item.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#1C1C1C] flex items-center justify-between mt-2">
                      <span className="text-[9px] font-mono text-emerald-400">
                        {item.inStock ? `${item.inStock} Left in Stock` : '✓ In Stock'}
                      </span>

                      <button
                        onClick={() => handleMoveToBag(item)}
                        className="px-3.5 py-1.5 rounded bg-[#1C1C1C] hover:bg-[#D4AF37] text-[#FAF9F6] hover:text-black text-[10px] font-bold tracking-wider uppercase transition flex items-center gap-1.5"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>MOVE TO BAG</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Actions */}
          {wishlist.length > 0 && (
            <div className="p-6 border-t border-[#1F1F1F] bg-[#0A0A0A] space-y-3">
              <button
                onClick={handleMoveAllToBag}
                className="w-full py-3.5 bg-[#D4AF37] hover:bg-[#B38F22] text-black font-semibold text-xs tracking-luxury uppercase rounded transition flex items-center justify-center gap-2 shadow-xl shadow-[#D4AF37]/15"
              >
                <span>MOVE ALL ITEMS TO BAG</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-[11px] text-[#777777] pt-1">
                <span>Free delivery across Pakistan on orders over Rs. 10,000</span>
                <button
                  onClick={() => wishlist.forEach((p) => toggleWishlist(p))}
                  className="text-rose-400/80 hover:text-rose-400 underline transition text-[10px]"
                >
                  Clear Wishlist
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
