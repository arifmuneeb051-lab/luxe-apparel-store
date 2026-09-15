import React, { useState } from 'react'
import { X, Heart, ShoppingBag, Check, ShieldCheck, Sparkles, Truck, RotateCcw } from 'lucide-react'
import { useStore } from '../context/StoreContext'

export default function QuickViewModal() {
  const {
    selectedProduct,
    setSelectedProduct,
    formatPrice,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setIsCartOpen
  } = useStore()

  if (!selectedProduct) return null

  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [selectedSize, setSelectedSize] = useState(selectedProduct.sizes[0] || '')
  const [selectedColor, setSelectedColor] = useState(selectedProduct.colors[0] || null)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const isFavorited = isInWishlist(selectedProduct.id)

  const handleAddToCart = () => {
    addToCart(selectedProduct, selectedSize, selectedColor ? selectedColor.name : '', quantity)
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
      setSelectedProduct(null)
      setIsCartOpen(true)
    }, 900)
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto select-none">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={() => setSelectedProduct(null)}
      />

      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="relative w-full max-w-4xl bg-[#111111] border border-[#262626] rounded-2xl overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-12 animate-fade-in">
          
          {/* Close Button */}
          <button
            onClick={() => setSelectedProduct(null)}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-[#D4AF37] hover:text-black text-white flex items-center justify-center border border-white/20 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: Image Gallery */}
          <div className="md:col-span-6 p-6 flex flex-col items-center justify-between bg-[#0A0A0A] border-b md:border-b-0 md:border-r border-[#222222]">
            {/* Main Active Image */}
            <div className="relative aspect-[3/4] w-full max-w-sm rounded-xl overflow-hidden bg-[#161616] mb-4">
              <img
                src={selectedProduct.images[activeImageIndex] || selectedProduct.images[0]}
                alt={selectedProduct.title}
                className="w-full h-full object-cover object-center"
              />
              {selectedProduct.badge && (
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-bold tracking-luxury uppercase rounded">
                    {selectedProduct.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail Selector */}
            {selectedProduct.images.length > 1 && (
              <div className="flex gap-3 justify-center">
                {selectedProduct.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`w-16 h-20 rounded-lg overflow-hidden border-2 transition ${
                      activeImageIndex === i
                        ? 'border-[#D4AF37] scale-105'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Angle preview" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Customization & Ordering */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between text-[#FAF9F6]">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs text-[#888888] mb-2">
                <span className="tracking-widest uppercase">{selectedProduct.category} • {selectedProduct.subCategory}</span>
                <span className="text-[#D4AF37] font-medium">★ {selectedProduct.rating} ({selectedProduct.reviewsCount} reviews)</span>
              </div>

              {/* Title & Subtitle */}
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-white mb-2">
                {selectedProduct.title}
              </h2>
              <p className="text-xs text-[#999999] font-light leading-relaxed mb-4">
                {selectedProduct.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6 pb-4 border-b border-[#222222]">
                <span className="text-2xl font-serif font-bold text-[#FAF9F6]">
                  {formatPrice(selectedProduct.price)}
                </span>
                {selectedProduct.originalPrice && (
                  <span className="text-sm text-[#666666] line-through font-light">
                    {formatPrice(selectedProduct.originalPrice)}
                  </span>
                )}
                {selectedProduct.inStock && (
                  <span className="ml-auto text-[11px] text-amber-400/90 font-medium px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20">
                    Only {selectedProduct.inStock} left in atelier
                  </span>
                )}
              </div>

              {/* Color Selector */}
              {selectedProduct.colors && selectedProduct.colors.length > 0 && (
                <div className="mb-5">
                  <label className="text-xs font-semibold tracking-luxury uppercase text-[#CCCCCC] block mb-2">
                    Color: <span className="text-[#D4AF37]">{selectedColor ? selectedColor.name : ''}</span>
                  </label>
                  <div className="flex items-center gap-2">
                    {selectedProduct.colors.map((clr, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedColor(clr)}
                        className={`w-7 h-7 rounded-full border-2 transition-all ${
                          selectedColor && selectedColor.name === clr.name
                            ? 'border-[#D4AF37] scale-110 shadow-lg shadow-[#D4AF37]/20'
                            : 'border-[#444444] hover:scale-105'
                        }`}
                        style={{ backgroundColor: clr.hex }}
                        title={clr.name}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold tracking-luxury uppercase text-[#CCCCCC]">
                    Select Size
                  </label>
                  <span className="text-[11px] text-[#888888] underline cursor-pointer hover:text-white">
                    Atelier Size Guide
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-4 py-2 text-xs font-semibold rounded border transition ${
                        selectedSize === sz
                          ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold shadow-md'
                          : 'bg-[#181818] text-[#BBBBBB] border-[#333333] hover:border-white'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Picker & Add to Bag */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-[#333333] rounded-lg bg-[#181818] p-1">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="w-8 h-8 flex items-center justify-center text-[#888888] hover:text-white transition"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-mono font-bold text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="w-8 h-8 flex items-center justify-center text-[#888888] hover:text-white transition"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-3.5 px-6 rounded-lg text-xs font-semibold tracking-luxury uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-xl ${
                    added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#D4AF37] hover:bg-[#B38F22] text-black shadow-[#D4AF37]/20'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>ADDED TO BAG</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>ADD TO SHOPPING BAG</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => toggleWishlist(selectedProduct)}
                  className={`p-3.5 rounded-lg border transition ${
                    isFavorited
                      ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                      : 'bg-[#181818] border-[#333333] text-[#AAAAAA] hover:text-[#D4AF37] hover:border-[#D4AF37]'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'fill-black' : ''}`} />
                </button>
              </div>

              {/* Fabric Specs & Atelier Guarantee */}
              <div className="p-3.5 rounded-xl bg-[#161616] border border-[#222222] space-y-2 text-[11px] text-[#888888]">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span>{selectedProduct.fabric}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                  <span>Complimentary Insured Express Delivery Worldwide</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                  <span>30-Day White-Glove Atelier Returns & Doorstep Exchange</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
