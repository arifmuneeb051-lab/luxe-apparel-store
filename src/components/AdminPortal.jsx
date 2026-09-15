import React, { useState } from 'react'
import {
  X,
  Package,
  ShoppingBag,
  Tag,
  TrendingUp,
  Plus,
  Trash2,
  Edit2,
  Check,
  ShieldCheck,
  Sparkles,
  Layers
} from 'lucide-react'
import { useStore } from '../context/StoreContext'

export default function AdminPortal() {
  const {
    isAdminOpen,
    setIsAdminOpen,
    allProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    orders,
    updateOrderStatus,
    coupons,
    addCoupon,
    deleteCoupon,
    formatPrice
  } = useStore()

  const [activeTab, setActiveTab] = useState('inventory') // 'inventory', 'orders', 'coupons'
  const [isAddingProduct, setIsAddingProduct] = useState(false)

  // New Product Form State
  const [newProd, setNewProd] = useState({
    title: '',
    subtitle: '',
    category: 'Women',
    subCategory: 'Outerwear',
    price: 450,
    badge: 'NEW DROP',
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [{ name: 'Noir Black', hex: '#111111' }, { name: 'Champagne Gold', hex: '#D4AF37' }],
    fabric: '100% Noble Italian Fabric • Hand-Finished',
    inStock: 10
  })

  // New Coupon Form State
  const [newCouponCode, setNewCouponCode] = useState('')
  const [newCouponDiscount, setNewCouponDiscount] = useState(15)
  const [newCouponLabel, setNewCouponLabel] = useState('')

  if (!isAdminOpen) return null

  const handleCreateProduct = (e) => {
    e.preventDefault()
    if (!newProd.title.trim()) return
    addProduct(newProd)
    setIsAddingProduct(false)
    setNewProd({
      title: '',
      subtitle: '',
      category: 'Women',
      subCategory: 'Outerwear',
      price: 450,
      badge: 'NEW DROP',
      images: [
        'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop'
      ],
      sizes: ['S', 'M', 'L'],
      colors: [{ name: 'Noir Black', hex: '#111111' }],
      fabric: '100% Noble Italian Fabric',
      inStock: 10
    })
  }

  const handleCreateCoupon = (e) => {
    e.preventDefault()
    if (!newCouponCode.trim()) return
    addCoupon(newCouponCode, newCouponDiscount, newCouponLabel || `${newCouponDiscount}% Privilege`)
    setNewCouponCode('')
    setNewCouponLabel('')
  }

  const totalRevenueUSD = orders.reduce((acc, o) => acc + (o.total || 0), 0)

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto select-none">
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={() => setIsAdminOpen(false)}
      />

      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="relative w-full max-w-5xl bg-[#0F0F0F] border border-[#2B2B2B] rounded-2xl overflow-hidden shadow-2xl z-10 text-[#FAF9F6] animate-fade-in flex flex-col max-h-[90vh]">
          
          {/* Admin Header */}
          <div className="p-6 bg-[#080808] border-b border-[#222222] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#181818] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif tracking-luxury text-base font-semibold uppercase text-white">
                  ATELIER MAISON DASHBOARD
                </h2>
                <span className="text-[10px] text-[#888888] tracking-widest uppercase font-mono">
                  Store Management Portal • Inventory & Orders
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsAdminOpen(false)}
              className="p-2 text-[#888888] hover:text-white transition rounded-full hover:bg-[#1C1C1C]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* KPI Analytics Cards */}
          <div className="p-6 bg-[#121212] border-b border-[#222222] grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#161616] border border-[#262626]">
              <span className="text-[10px] text-[#888888] uppercase tracking-wider block mb-1">Total Sales Revenue</span>
              <span className="font-serif font-bold text-lg text-[#D4AF37]">{formatPrice(totalRevenueUSD)}</span>
            </div>
            <div className="p-4 rounded-xl bg-[#161616] border border-[#262626]">
              <span className="text-[10px] text-[#888888] uppercase tracking-wider block mb-1">Total Orders Placed</span>
              <span className="font-serif font-bold text-lg text-white">{orders.length}</span>
            </div>
            <div className="p-4 rounded-xl bg-[#161616] border border-[#262626]">
              <span className="text-[10px] text-[#888888] uppercase tracking-wider block mb-1">Garments in Catalog</span>
              <span className="font-serif font-bold text-lg text-white">{allProducts.length}</span>
            </div>
            <div className="p-4 rounded-xl bg-[#161616] border border-[#262626]">
              <span className="text-[10px] text-[#888888] uppercase tracking-wider block mb-1">Active Promo Codes</span>
              <span className="font-serif font-bold text-lg text-emerald-400">{coupons.length}</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-[#222222] px-6 bg-[#0E0E0E]">
            <button
              onClick={() => setActiveTab('inventory')}
              className={`py-3.5 px-5 text-xs font-semibold tracking-wider uppercase border-b-2 transition flex items-center gap-2 ${
                activeTab === 'inventory'
                  ? 'border-[#D4AF37] text-[#D4AF37]'
                  : 'border-transparent text-[#888888] hover:text-white'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Garments Inventory ({allProducts.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('orders')}
              className={`py-3.5 px-5 text-xs font-semibold tracking-wider uppercase border-b-2 transition flex items-center gap-2 ${
                activeTab === 'orders'
                  ? 'border-[#D4AF37] text-[#D4AF37]'
                  : 'border-transparent text-[#888888] hover:text-white'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Client Orders ({orders.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('coupons')}
              className={`py-3.5 px-5 text-xs font-semibold tracking-wider uppercase border-b-2 transition flex items-center gap-2 ${
                activeTab === 'coupons'
                  ? 'border-[#D4AF37] text-[#D4AF37]'
                  : 'border-transparent text-[#888888] hover:text-white'
              }`}
            >
              <Tag className="w-4 h-4" />
              <span>Privilege Coupons ({coupons.length})</span>
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* TAB 1: Inventory Management */}
            {activeTab === 'inventory' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-light text-white">
                    Haute Couture Garment Catalog
                  </h3>

                  <button
                    onClick={() => setIsAddingProduct(true)}
                    className="px-4 py-2 bg-[#D4AF37] hover:bg-[#B38F22] text-black font-semibold text-xs tracking-wider uppercase rounded transition flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Garment</span>
                  </button>
                </div>

                {/* Add Garment Modal Form */}
                {isAddingProduct && (
                  <form onSubmit={handleCreateProduct} className="p-5 rounded-xl bg-[#141414] border border-[#D4AF37]/50 space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between border-b border-[#222222] pb-2">
                      <span className="text-xs font-semibold tracking-wider uppercase text-[#D4AF37]">
                        New Garment Specification
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsAddingProduct(false)}
                        className="text-xs text-[#888888] hover:text-white"
                      >
                        Cancel
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] text-[#AAAAAA] uppercase block mb-1">Title *</label>
                        <input
                          type="text"
                          required
                          value={newProd.title}
                          onChange={(e) => setNewProd({ ...newProd, title: e.target.value })}
                          placeholder="e.g. Sculpted Italian Trench"
                          className="w-full bg-[#181818] border border-[#333333] text-xs text-white p-2.5 rounded outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] text-[#AAAAAA] uppercase block mb-1">Subtitle / Craftsmanship *</label>
                        <input
                          type="text"
                          required
                          value={newProd.subtitle}
                          onChange={(e) => setNewProd({ ...newProd, subtitle: e.target.value })}
                          placeholder="e.g. Hand-tailored in Milan"
                          className="w-full bg-[#181818] border border-[#333333] text-xs text-white p-2.5 rounded outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                      <div>
                        <label className="text-[11px] text-[#AAAAAA] uppercase block mb-1">Category</label>
                        <select
                          value={newProd.category}
                          onChange={(e) => setNewProd({ ...newProd, category: e.target.value })}
                          className="w-full bg-[#181818] border border-[#333333] text-xs text-white p-2.5 rounded outline-none"
                        >
                          <option value="Women">Women</option>
                          <option value="Men">Men</option>
                          <option value="Accessories">Accessories</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] text-[#AAAAAA] uppercase block mb-1">Sub-Category</label>
                        <select
                          value={newProd.subCategory}
                          onChange={(e) => setNewProd({ ...newProd, subCategory: e.target.value })}
                          className="w-full bg-[#181818] border border-[#333333] text-xs text-white p-2.5 rounded outline-none"
                        >
                          <option value="Outerwear">Outerwear</option>
                          <option value="Tailoring">Tailoring</option>
                          <option value="Dresses">Dresses</option>
                          <option value="Knitwear">Knitwear</option>
                          <option value="Leather">Leather</option>
                          <option value="Accessories">Accessories</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] text-[#AAAAAA] uppercase block mb-1">Base Price ($ USD)</label>
                        <input
                          type="number"
                          required
                          value={newProd.price}
                          onChange={(e) => setNewProd({ ...newProd, price: Number(e.target.value) })}
                          className="w-full bg-[#181818] border border-[#333333] text-xs text-white p-2.5 rounded outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] text-[#AAAAAA] uppercase block mb-1">Luxury Badge</label>
                        <select
                          value={newProd.badge}
                          onChange={(e) => setNewProd({ ...newProd, badge: e.target.value })}
                          className="w-full bg-[#181818] border border-[#333333] text-xs text-white p-2.5 rounded outline-none"
                        >
                          <option value="NEW RUNWAY">NEW RUNWAY</option>
                          <option value="ATELIER EDIT">ATELIER EDIT</option>
                          <option value="LIMITED EDITION">LIMITED EDITION</option>
                          <option value="BESTSELLER">BESTSELLER</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] text-[#AAAAAA] uppercase block mb-1">Primary Image URL</label>
                      <input
                        type="url"
                        value={newProd.images[0]}
                        onChange={(e) => setNewProd({ ...newProd, images: [e.target.value] })}
                        className="w-full bg-[#181818] border border-[#333333] text-xs text-white p-2.5 rounded outline-none font-mono text-[11px]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#D4AF37] text-black font-semibold text-xs tracking-wider uppercase rounded"
                    >
                      Publish Garment To Store
                    </button>
                  </form>
                )}

                {/* Garments Table */}
                <div className="rounded-xl border border-[#222222] overflow-hidden bg-[#131313]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#181818] text-[#888888] uppercase tracking-wider text-[10px] border-b border-[#262626]">
                      <tr>
                        <th className="py-3 px-4">Garment</th>
                        <th className="py-3 px-4">Category</th>
                        <th className="py-3 px-4">Price</th>
                        <th className="py-3 px-4">Stock</th>
                        <th className="py-3 px-4">Badge</th>
                        <th className="py-3 px-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1F1F1F]">
                      {allProducts.map((p) => (
                        <tr key={p.id} className="hover:bg-[#181818] transition">
                          <td className="py-3 px-4 flex items-center gap-3">
                            <img src={p.images[0]} alt={p.title} className="w-10 h-12 object-cover rounded bg-[#202020]" />
                            <div>
                              <p className="font-serif font-medium text-white line-clamp-1">{p.title}</p>
                              <p className="text-[10px] text-[#777777] line-clamp-1">{p.subtitle}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-[#AAAAAA]">{p.category} ({p.subCategory})</td>
                          <td className="py-3 px-4 font-semibold text-white">{formatPrice(p.price)}</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 rounded text-[10px] bg-[#222222] text-[#CCCCCC]">
                              {p.inStock || 10} in atelier
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 rounded text-[9px] font-bold tracking-wider bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37]">
                              {p.badge}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <button
                              onClick={() => deleteProduct(p.id)}
                              className="p-1.5 text-[#666666] hover:text-red-400 transition"
                              title="Archive Garment"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 2: Orders Dossier */}
            {activeTab === 'orders' && (
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-light text-white">
                  Client Order Records & Fulfillment
                </h3>

                <div className="space-y-3">
                  {orders.map((ord) => (
                    <div
                      key={ord.orderNumber}
                      className="p-4 rounded-xl bg-[#131313] border border-[#242424] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2.5 mb-1">
                          <span className="font-mono text-[#D4AF37] font-bold text-sm">{ord.orderNumber}</span>
                          <span className="text-[11px] text-[#888888]">• {ord.date}</span>
                          <span className="text-[10px] text-[#AAAAAA]">Client: <strong className="text-white">{ord.customerName}</strong></span>
                        </div>
                        <p className="text-[11px] text-[#777777] mb-1">
                          Destination: {ord.shippingAddress}
                        </p>
                        <p className="text-xs text-[#CCCCCC]">
                          Items: {ord.items.map((it) => `${it.quantity}x ${it.title}`).join(', ')}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 sm:flex-col sm:items-end">
                        <span className="font-serif font-bold text-base text-[#D4AF37]">
                          {formatPrice(ord.total)}
                        </span>

                        <select
                          value={ord.status || 'Processing'}
                          onChange={(e) => updateOrderStatus(ord.orderNumber, e.target.value)}
                          className="bg-[#1C1C1C] border border-[#333333] text-[11px] text-emerald-400 p-1.5 rounded outline-none font-semibold cursor-pointer"
                        >
                          <option value="Processing">Processing</option>
                          <option value="White-Glove Dispatched">White-Glove Dispatched</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: Privilege Coupons */}
            {activeTab === 'coupons' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-light text-white">
                    Privilege Promotional Coupons
                  </h3>
                </div>

                <form onSubmit={handleCreateCoupon} className="p-4 rounded-xl bg-[#141414] border border-[#282828] flex flex-col sm:flex-row items-center gap-3">
                  <input
                    type="text"
                    required
                    value={newCouponCode}
                    onChange={(e) => setNewCouponCode(e.target.value)}
                    placeholder="COUPON CODE (e.g. VIP25)"
                    className="flex-1 bg-[#181818] border border-[#333333] text-xs text-white p-2.5 rounded outline-none uppercase font-mono"
                  />
                  <input
                    type="number"
                    required
                    min="1"
                    max="90"
                    value={newCouponDiscount}
                    onChange={(e) => setNewCouponDiscount(e.target.value)}
                    placeholder="Discount %"
                    className="w-28 bg-[#181818] border border-[#333333] text-xs text-white p-2.5 rounded outline-none font-mono"
                  />
                  <input
                    type="text"
                    value={newCouponLabel}
                    onChange={(e) => setNewCouponLabel(e.target.value)}
                    placeholder="Description (e.g. 25% VIP Privilege)"
                    className="flex-1 bg-[#181818] border border-[#333333] text-xs text-white p-2.5 rounded outline-none"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#B38F22] text-black font-semibold text-xs tracking-wider uppercase rounded"
                  >
                    Create Coupon
                  </button>
                </form>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {coupons.map((c) => (
                    <div
                      key={c.code}
                      className="p-4 rounded-xl bg-[#141414] border border-[#282828] flex items-center justify-between"
                    >
                      <div>
                        <span className="font-mono text-sm font-bold text-[#D4AF37] block">{c.code}</span>
                        <span className="text-[11px] text-[#888888]">{c.label} ({c.discountPercent || c.discountFixed}%)</span>
                      </div>
                      <button
                        onClick={() => deleteCoupon(c.code)}
                        className="text-[#666666] hover:text-red-400 p-1"
                        title="Decommission Coupon"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  )
}
