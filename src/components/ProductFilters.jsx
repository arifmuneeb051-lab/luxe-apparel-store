import React, { useState } from 'react'
import { SlidersHorizontal, ArrowUpDown, RotateCcw, ChevronDown } from 'lucide-react'
import { useStore } from '../context/StoreContext'

export default function ProductFilters({ totalCount }) {
  const {
    activeGender,
    setActiveGender,
    activeCategory,
    setActiveCategory,
    selectedSizeFilter,
    setSelectedSizeFilter,
    maxPrice,
    setMaxPrice,
    sortBy,
    setSortBy,
    formatPrice
  } = useStore()

  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false)

  const categories = [
    'All',
    'Outerwear',
    'Tailoring',
    'Dresses',
    'Knitwear',
    'Leather',
    'Accessories'
  ]

  const sizes = ['All', 'XS', 'S', 'M', 'L', 'XL']

  const resetFilters = () => {
    setActiveGender('All')
    setActiveCategory('All')
    setSelectedSizeFilter('All')
    setMaxPrice(1200)
    setSortBy('featured')
  }

  const isFiltered =
    activeGender !== 'All' ||
    activeCategory !== 'All' ||
    selectedSizeFilter !== 'All' ||
    maxPrice < 1200 ||
    sortBy !== 'featured'

  return (
    <div className="w-full mb-10">
      
      {/* Top Bar: Gender Tabs & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#222222] pb-5">
        
        {/* Gender Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {['All', 'Women', 'Men'].map((gender) => (
            <button
              key={gender}
              onClick={() => setActiveGender(gender)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-luxury uppercase transition-all flex-shrink-0 ${
                activeGender === gender
                  ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20'
                  : 'bg-[#141414] text-[#AAAAAA] hover:text-white border border-[#282828]'
              }`}
            >
              {gender === 'All' ? 'Complete Runway' : `${gender}'s Edit`}
            </button>
          ))}
        </div>

        {/* Right: Filter Toggle & Sort Dropdown */}
        <div className="flex items-center gap-3">
          {/* Sort Selector */}
          <div className="relative flex items-center bg-[#141414] border border-[#282828] rounded-lg px-3 py-2 text-xs">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#D4AF37] mr-2" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-white outline-none cursor-pointer pr-4 font-medium"
            >
              <option value="featured" className="bg-[#181818] text-white">Curated Selection</option>
              <option value="price-low" className="bg-[#181818] text-white">Price: Low to High</option>
              <option value="price-high" className="bg-[#181818] text-white">Price: High to Low</option>
              <option value="rating" className="bg-[#181818] text-white">Highest Rated</option>
            </select>
          </div>

          {/* Filter Panel Drawer Toggle */}
          <button
            onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition border ${
              isFilterPanelOpen || isFiltered
                ? 'bg-[#222222] text-[#D4AF37] border-[#D4AF37]'
                : 'bg-[#141414] text-[#CCCCCC] border-[#282828] hover:border-[#444444]'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters</span>
            {isFiltered && (
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            )}
          </button>
        </div>
      </div>

      {/* Sub-Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-4 border-b border-[#1C1C1C]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-md text-[11px] font-medium tracking-wider uppercase transition-all flex-shrink-0 ${
              activeCategory === cat
                ? 'bg-white text-black font-bold'
                : 'text-[#888888] hover:text-[#FAF9F6] hover:bg-[#1A1A1A]'
            }`}
          >
            {cat === 'All' ? 'All Garments' : cat}
          </button>
        ))}
      </div>

      {/* Expandable Advanced Filter Drawer */}
      {isFilterPanelOpen && (
        <div className="p-6 mt-4 rounded-xl bg-[#121212] border border-[#262626] animate-fade-in grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          {/* Size Filter */}
          <div>
            <label className="text-xs font-semibold tracking-luxury uppercase text-[#D4AF37] block mb-2.5">
              Filter by Size
            </label>
            <div className="flex flex-wrap gap-2">
              {sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSizeFilter(sz)}
                  className={`px-3 py-1.5 rounded text-xs font-medium border transition ${
                    selectedSizeFilter === sz
                      ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold'
                      : 'bg-[#181818] text-[#AAAAAA] border-[#2E2E2E] hover:border-white'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold tracking-luxury uppercase text-[#D4AF37]">
                Max Price
              </label>
              <span className="text-xs font-mono font-bold text-white">
                {formatPrice(maxPrice)}
              </span>
            </div>
            <input
              type="range"
              min="200"
              max="1200"
              step="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#D4AF37] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#666666] mt-1 font-mono">
              <span>{formatPrice(200)}</span>
              <span>{formatPrice(1200)}+</span>
            </div>
          </div>

          {/* Reset Filters / Summary */}
          <div className="flex flex-col justify-end">
            {isFiltered && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#1F1F1F] border border-[#333333] hover:border-red-500/50 text-xs font-semibold tracking-wider text-red-400 hover:text-red-300 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            )}
            <p className="text-[11px] text-[#777777] mt-3 font-light text-center sm:text-right">
              Showing <span className="text-white font-medium">{totalCount}</span> luxury pieces
            </p>
          </div>

        </div>
      )}

    </div>
  )
}
