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
  Layers,
  Users,
  Bell,
  Truck,
  ExternalLink,
  Mail,
  CheckCircle2,
  Clock,
  CreditCard,
  Banknote,
  MapPin,
  Calendar,
  AlertCircle,
  Phone,
  ShieldAlert
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
    verifyOrder,
    openOrderTracking,
    users,
    adminNotifications,
    coupons,
    addCoupon,
    deleteCoupon,
    formatPrice
  } = useStore()

  const [activeTab, setActiveTab] = useState('inventory') // 'inventory' | 'orders' | 'users' | 'notifications' | 'coupons'
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
        <div className="relative w-full max-w-6xl bg-[#0F0F0F] border border-[#2B2B2B] rounded-2xl overflow-hidden shadow-2xl z-10 text-[#FAF9F6] animate-fade-in flex flex-col max-h-[92vh]">
          
          {/* Admin Header */}
          <div className="p-5 sm:p-6 bg-[#080808] border-b border-[#222222] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#181818] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-serif tracking-luxury text-base font-semibold uppercase text-white">
                    ATELIER MAISON CONTROL CENTER
                  </h2>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-bold tracking-widest uppercase border border-emerald-500/40">
                    Live
                  </span>
                </div>
                <p className="text-[10px] text-[#888888] tracking-widest uppercase font-mono">
                  Superadmin Operations • arifmuneeb81@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Admin Email Capsule */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#2B2B2B]">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-[11px] font-mono text-[#D4AF37] font-semibold">
                  arifmuneeb81@gmail.com
                </span>
                <span className="text-[8px] uppercase px-1.5 py-0.5 rounded bg-[#D4AF37]/20 text-[#D4AF37] font-bold">
                  Verified Owner
                </span>
              </div>

              <button
                onClick={() => setIsAdminOpen(false)}
                className="p-2 text-[#888888] hover:text-white transition rounded-full hover:bg-[#1C1C1C]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* KPI Analytics Cards */}
          <div className="p-5 bg-[#121212] border-b border-[#222222] grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div className="p-3.5 rounded-xl bg-[#161616] border border-[#262626]">
              <span className="text-[9px] text-[#888888] uppercase tracking-wider block mb-1">Total Sales Revenue</span>
              <span className="font-serif font-bold text-base sm:text-lg text-[#D4AF37]">{formatPrice(totalRevenueUSD)}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#161616] border border-[#262626]">
              <span className="text-[9px] text-[#888888] uppercase tracking-wider block mb-1">Total Orders</span>
              <span className="font-serif font-bold text-base sm:text-lg text-white">{orders.length}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#161616] border border-[#262626]">
              <span className="text-[9px] text-[#888888] uppercase tracking-wider block mb-1">Registered Clients</span>
              <span className="font-serif font-bold text-base sm:text-lg text-white">{users.length}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#161616] border border-[#262626]">
              <span className="text-[9px] text-[#888888] uppercase tracking-wider block mb-1">Garments in Catalog</span>
              <span className="font-serif font-bold text-base sm:text-lg text-white">{allProducts.length}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#161616] border border-[#262626]">
              <span className="text-[9px] text-[#888888] uppercase tracking-wider block mb-1">Admin Alerts</span>
              <span className="font-serif font-bold text-base sm:text-lg text-amber-400">{adminNotifications.length}</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex overflow-x-auto border-b border-[#222222] px-6 bg-[#0E0E0E] scrollbar-none">
            <button
              onClick={() => setActiveTab('inventory')}
              className={`py-3 px-4 text-xs font-semibold tracking-wider uppercase border-b-2 transition flex items-center gap-2 flex-shrink-0 ${
                activeTab === 'inventory'
                  ? 'border-[#D4AF37] text-[#D4AF37]'
                  : 'border-transparent text-[#888888] hover:text-white'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Garments ({allProducts.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('orders')}
              className={`py-3 px-4 text-xs font-semibold tracking-wider uppercase border-b-2 transition flex items-center gap-2 flex-shrink-0 ${
                activeTab === 'orders'
                  ? 'border-[#D4AF37] text-[#D4AF37]'
                  : 'border-transparent text-[#888888] hover:text-white'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Client Orders ({orders.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('users')}
              className={`py-3 px-4 text-xs font-semibold tracking-wider uppercase border-b-2 transition flex items-center gap-2 flex-shrink-0 ${
                activeTab === 'users'
                  ? 'border-[#D4AF37] text-[#D4AF37]'
                  : 'border-transparent text-[#888888] hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Registered Clients ({users.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('notifications')}
              className={`py-3 px-4 text-xs font-semibold tracking-wider uppercase border-b-2 transition flex items-center gap-2 flex-shrink-0 ${
                activeTab === 'notifications'
                  ? 'border-[#D4AF37] text-[#D4AF37]'
                  : 'border-transparent text-[#888888] hover:text-white'
              }`}
            >
              <Bell className="w-4 h-4" />
              <span>Admin Alerts ({adminNotifications.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('coupons')}
              className={`py-3 px-4 text-xs font-semibold tracking-wider uppercase border-b-2 transition flex items-center gap-2 flex-shrink-0 ${
                activeTab === 'coupons'
                  ? 'border-[#D4AF37] text-[#D4AF37]'
                  : 'border-transparent text-[#888888] hover:text-white'
              }`}
            >
              <Tag className="w-4 h-4" />
              <span>Coupons ({coupons.length})</span>
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

            {/* TAB 2: Orders Dossier & Verification */}
            {activeTab === 'orders' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-lg font-light text-white">
                      Client Order Records & Verification Control
                    </h3>
                    <p className="text-[11px] text-[#888888]">
                      Orders requiring review can be confirmed directly by admin <strong className="text-[#D4AF37]">arifmuneeb81@gmail.com</strong>
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {orders.map((ord) => {
                    const isCOD = (ord.paymentMethod || '').toUpperCase().includes('COD') || (ord.paymentMethod || '').toUpperCase().includes('CASH')
                    const isVerified = ord.verificationStatus === 'Verified by Admin'

                    return (
                      <div
                        key={ord.orderNumber}
                        className="p-5 rounded-xl bg-[#131313] border border-[#242424] hover:border-[#333333] transition space-y-4"
                      >
                        {/* Order Header Row */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#202020] pb-3">
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-[#D4AF37] font-bold text-sm">{ord.orderNumber}</span>
                            <span className="text-[11px] text-[#888888]">• {ord.date}</span>
                            
                            {/* Payment Badge */}
                            {isCOD ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase bg-amber-500/20 text-amber-400 border border-amber-500/40">
                                <Banknote className="w-3 h-3" />
                                <span>Cash on Delivery (COD)</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                                <CreditCard className="w-3 h-3" />
                                <span>Stripe Online Payment</span>
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            {/* Verification Status Pill */}
                            {isVerified ? (
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>Verified by arifmuneeb81@gmail.com</span>
                              </div>
                            ) : (
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-400">
                                <AlertCircle className="w-3.5 h-3.5" />
                                <span>Awaiting Admin Verification</span>
                              </div>
                            )}

                            <span className="font-serif font-bold text-base text-[#D4AF37]">
                              {formatPrice(ord.total)}
                            </span>
                          </div>
                        </div>

                        {/* Order Body Details */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                          <div>
                            <span className="text-[10px] text-[#777777] uppercase block mb-1">Client Dossier</span>
                            <p className="font-semibold text-white">{ord.customerName}</p>
                            <p className="text-[11px] text-[#AAAAAA]">{ord.email}</p>
                            {ord.phone && <p className="text-[11px] text-[#888888]">{ord.phone}</p>}
                          </div>

                          <div>
                            <span className="text-[10px] text-[#777777] uppercase block mb-1">Delivery Destination</span>
                            <p className="text-[#CCCCCC] leading-relaxed line-clamp-2">{ord.shippingAddress}</p>
                            <p className="text-[10px] text-[#888888] mt-1">
                              Carrier: {ord.tracking?.courier || 'Luxe White-Glove VIP Logistics'}
                            </p>
                          </div>

                          <div>
                            <span className="text-[10px] text-[#777777] uppercase block mb-1">Purchased Garments</span>
                            <div className="space-y-1 max-h-16 overflow-y-auto pr-1">
                              {ord.items.map((it, idx) => (
                                <p key={idx} className="text-[#AAAAAA] text-[11px] truncate">
                                  {it.quantity}x {it.title} ({it.selectedSize || 'Standard'})
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Order Footer Actions */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#202020]">
                          <div className="flex items-center gap-2">
                            {/* Verify Button (if not verified yet) */}
                            {!isVerified && (
                              <button
                                onClick={() => verifyOrder(ord.orderNumber)}
                                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase rounded-lg transition flex items-center gap-1.5 shadow-md shadow-emerald-900/30"
                              >
                                <Check className="w-3.5 h-3.5" />
                                <span>Verify & Confirm Order</span>
                              </button>
                            )}

                            {/* View Live Tracking Modal */}
                            <button
                              onClick={() => openOrderTracking(ord.orderNumber)}
                              className="px-3 py-2 bg-[#1C1C1C] hover:bg-[#252525] border border-[#333333] hover:border-[#D4AF37] text-xs text-[#FAF9F6] rounded-lg transition flex items-center gap-1.5"
                            >
                              <Truck className="w-3.5 h-3.5 text-[#D4AF37]" />
                              <span>Live Tracking Consignment</span>
                            </button>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[11px] text-[#888888]">Status:</span>
                            <select
                              value={ord.status || 'Processing'}
                              onChange={(e) => updateOrderStatus(ord.orderNumber, e.target.value)}
                              className="bg-[#1C1C1C] border border-[#333333] text-xs text-emerald-400 p-1.5 rounded-lg outline-none font-semibold cursor-pointer"
                            >
                              <option value="Pending Admin Verification">Pending Verification</option>
                              <option value="Processing">Processing</option>
                              <option value="White-Glove Dispatched">White-Glove Dispatched</option>
                              <option value="Delivered">Delivered</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </div>
                        </div>

                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* TAB 3: Registered Clients / Users Dossier */}
            {activeTab === 'users' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-light text-white">
                      Registered Client Accounts & VIP Dossiers
                    </h3>
                    <p className="text-[11px] text-[#888888]">
                      Client accounts created before checkout. Stored locally in <code className="text-[#D4AF37] font-mono">data/users.json</code>
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-[#222222] overflow-hidden bg-[#131313]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#181818] text-[#888888] uppercase tracking-wider text-[10px] border-b border-[#262626]">
                      <tr>
                        <th className="py-3 px-4">Client ID & Name</th>
                        <th className="py-3 px-4">Email Address</th>
                        <th className="py-3 px-4">Phone</th>
                        <th className="py-3 px-4">Residence City / Country</th>
                        <th className="py-3 px-4">Account Role</th>
                        <th className="py-3 px-4 text-right">Registered</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1F1F1F]">
                      {users.map((u) => (
                        <tr key={u.id} className="hover:bg-[#181818] transition">
                          <td className="py-3.5 px-4 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F5E6B3] text-black font-serif font-bold text-xs flex items-center justify-center flex-shrink-0">
                              {u.name ? u.name.charAt(0).toUpperCase() : 'U'}
                            </div>
                            <div>
                              <p className="font-semibold text-white">{u.name}</p>
                              <p className="text-[10px] font-mono text-[#777777]">{u.id}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4 font-mono text-xs text-[#CCCCCC]">{u.email}</td>
                          <td className="py-3 px-4 text-[#AAAAAA]">{u.phone || '—'}</td>
                          <td className="py-3 px-4 text-[#AAAAAA]">
                            {u.city ? `${u.city}, ${u.country}` : u.country || 'Global'}
                          </td>
                          <td className="py-3 px-4">
                            {u.role === 'admin' || u.email === 'arifmuneeb81@gmail.com' ? (
                              <span className="px-2 py-0.5 rounded text-[9px] font-bold tracking-wider bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37]">
                                SUPERADMIN
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded text-[9px] font-bold tracking-wider bg-purple-500/20 border border-purple-500/40 text-purple-300">
                                MAISON VIP CLIENT
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-right text-[11px] text-[#777777]">
                            {u.createdAt || '2026-09-01'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 4: Admin Notifications for arifmuneeb81@gmail.com */}
            {activeTab === 'notifications' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-lg font-light text-white">
                      Atelier Management Inbox & Alerts
                    </h3>
                    <p className="text-[11px] text-[#888888]">
                      All live customer order events and signups notified to <strong className="text-[#D4AF37]">arifmuneeb81@gmail.com</strong>
                    </p>
                  </div>

                  <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-[#181818] border border-[#2B2B2B] text-[#D4AF37]">
                    Monitoring: arifmuneeb81@gmail.com
                  </span>
                </div>

                <div className="space-y-3">
                  {adminNotifications.map((notif) => (
                    <div
                      key={notif.id}
                      className="p-4 rounded-xl bg-[#131313] border border-[#242424] flex flex-col sm:flex-row sm:items-start justify-between gap-4 text-xs hover:border-[#333333] transition"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#1C1C1C] border border-[#333333] flex items-center justify-center text-[#D4AF37] flex-shrink-0 mt-0.5">
                          {notif.type === 'NEW_ORDER_ALERT' ? (
                            <ShoppingBag className="w-4 h-4" />
                          ) : (
                            <Users className="w-4 h-4" />
                          )}
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-white text-sm">{notif.title}</span>
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#202020] text-[#888888]">
                              {notif.type}
                            </span>
                          </div>

                          <p className="text-[11px] text-[#CCCCCC] mb-1">
                            {notif.customer} • {notif.location || notif.paymentMethod || 'Atelier'}
                          </p>

                          {notif.actionRequired && (
                            <p className="text-[11px] text-amber-400 font-medium">
                              Action: {notif.actionRequired}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="text-left sm:text-right flex-shrink-0 text-[10px] text-[#777777] font-mono">
                        <p>{notif.timestamp ? new Date(notif.timestamp).toLocaleString() : 'Just now'}</p>
                        <p className="text-[#D4AF37] mt-0.5">To: arifmuneeb81@gmail.com</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 5: Privilege Coupons */}
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
