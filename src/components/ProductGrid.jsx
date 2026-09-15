import React, { useMemo } from 'react'
import { useStore } from '../context/StoreContext'
import ProductCard from './ProductCard'
import ProductFilters from './ProductFilters'
import { Sparkles, PackageSearch } from 'lucide-react'

export default function ProductGrid() {
  const {
    allProducts,
    activeGender,
    activeCategory,
    selectedSizeFilter,
    maxPrice,
    sortBy,
    searchQuery
  } = useStore()

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    let result = [...allProducts]

    // Gender Filter
    if (activeGender !== 'All') {
      result = result.filter(
        (p) => p.category.toLowerCase() === activeGender.toLowerCase() || p.category === 'Accessories'
      )
    }

    // Sub-Category Filter
    if (activeCategory !== 'All') {
      result = result.filter(
        (p) => p.subCategory.toLowerCase() === activeCategory.toLowerCase()
      )
    }

    // Size Filter
    if (selectedSizeFilter !== 'All') {
      result = result.filter((p) => p.sizes && p.sizes.includes(selectedSizeFilter))
    }

    // Max Price Filter
    result = result.filter((p) => p.price <= maxPrice)

    // Search Query Filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.subCategory.toLowerCase().includes(q) ||
          (p.fabric && p.fabric.toLowerCase().includes(q))
      )
    }

    // Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [allProducts, activeGender, activeCategory, selectedSizeFilter, maxPrice, sortBy, searchQuery])

  return (
    <section id="catalog-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#2B2B2B] text-[#D4AF37] text-[10px] tracking-luxury uppercase font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Haute Couture Collection 2026</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#FAF9F6] tracking-tight">
          The Atelier Catalog
        </h2>
        <p className="text-xs sm:text-sm text-[#888888] font-light mt-3 max-w-lg">
          Masterfully tailored silhouettes, responsibly sourced noble fabrics, and enduring modern aesthetics.
        </p>
      </div>

      {/* Filter Bar */}
      <ProductFilters totalCount={filteredProducts.length} />

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center border border-[#222222] rounded-2xl bg-[#111111] p-8">
          <PackageSearch className="w-12 h-12 text-[#666666] mx-auto mb-4" />
          <h3 className="font-serif text-xl text-white font-medium mb-2">No garments found</h3>
          <p className="text-sm text-[#888888] max-w-md mx-auto mb-6">
            We couldn't find any pieces matching your current filter criteria. Try adjusting your size, category, or price range.
          </p>
        </div>
      )}
    </section>
  )
}
