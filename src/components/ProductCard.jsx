import React, { useState } from 'react'
import { Heart, Eye, ShoppingBag, Check } from 'lucide-react'
import { useStore } from '../context/StoreContext'

export default function ProductCard({ product }) {
  const {
    formatPrice,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setSelectedProduct
  } = useStore()

  const [isHovered, setIsHovered] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || null)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || null)
  const [addedAnimation, setAddedAnimation] = useState(false)

  const isFavorited = isInWishlist(product.id)

  const handleQuickAdd = (e, sizeToUse) => {
    e.stopPropagation()
    const size = sizeToUse || selectedSize
    addToCart(product, size, selectedColor ? selectedColor.name : '')
    setAddedAnimation(true)
    setTimeout(() => setAddedAnimation(false), 1400)
  }

  const handleCardClick = () => {
    setSelectedProduct(product)
  }

  return (
    <div
      className="group relative flex flex-col bg-[#0F0F0F] border border-[#1F1F1F] hover:border-[#D4AF37]/50 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/80 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Image Container with Hover Flip */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#161616]">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.title}
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
            isHovered && product.images[1] ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />

        {/* Secondary Angle Image */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.title} Alternate`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out ${
              isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        )}

        {/* Badge Overlay */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 bg-[#090909]/90 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[9px] font-bold tracking-luxury uppercase rounded">
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist Heart Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            toggleWishlist(product)
          }}
          className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300 ${
            isFavorited
              ? 'bg-[#D4AF37] text-black border-[#D4AF37] scale-110'
              : 'bg-black/60 text-white border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37]'
          }`}
          aria-label="Toggle Wishlist"
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-black' : ''}`} />
        </button>

        {/* Quick View Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            setSelectedProduct(product)
          }}
          className="absolute top-12 right-3 z-10 w-8 h-8 rounded-full bg-black/60 text-white border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"
          aria-label="Quick View"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Quick Size Picker Bar (Slides up on card hover) */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col gap-2 z-10">
          <p className="text-[10px] tracking-widest uppercase text-[#AAAAAA] text-center font-medium">
            Quick Select Size
          </p>
          <div className="flex items-center justify-center gap-1.5 flex-wrap">
            {product.sizes.map((sz) => (
              <button
                key={sz}
                type="button"
                onClick={(e) => handleQuickAdd(e, sz)}
                className="px-2.5 py-1 text-[11px] font-semibold bg-[#1F1F1F]/90 hover:bg-[#D4AF37] hover:text-black text-white border border-[#333333] rounded transition duration-200"
              >
                {sz}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Subtitle & Fabric Tag */}
          <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-[#888888] mb-1">
            <span>{product.subCategory}</span>
            <span className="text-[#D4AF37] font-medium">★ {product.rating}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-base font-normal text-[#FAF9F6] group-hover:text-[#D4AF37] transition-colors duration-300 line-clamp-1">
            {product.title}
          </h3>

          <p className="text-xs text-[#777777] font-light mt-0.5 line-clamp-1">
            {product.subtitle}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#1C1C1C] flex items-center justify-between">
          {/* Price display */}
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-semibold text-white tracking-wide">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#666666] line-through font-light">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Color Swatches */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5">
              {product.colors.map((clr, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedColor(clr)
                  }}
                  title={clr.name}
                  className={`w-3.5 h-3.5 rounded-full border transition-all ${
                    selectedColor && selectedColor.name === clr.name
                      ? 'border-[#D4AF37] scale-125'
                      : 'border-[#444444] hover:scale-110'
                  }`}
                  style={{ backgroundColor: clr.hex }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Add To Bag Primary Button */}
        <button
          type="button"
          onClick={(e) => handleQuickAdd(e, selectedSize)}
          className={`mt-3 w-full py-2.5 px-4 rounded text-xs font-semibold tracking-luxury uppercase flex items-center justify-center gap-2 transition duration-300 ${
            addedAnimation
              ? 'bg-emerald-600 text-white'
              : 'bg-[#181818] text-[#D4AF37] border border-[#2B2B2B] hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37]'
          }`}
        >
          {addedAnimation ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>ADDED TO BAG</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>ADD TO BAG</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}
