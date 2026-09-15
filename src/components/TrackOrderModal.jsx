import React, { useState } from 'react'
import {
  X,
  Search,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  Package,
  ShieldCheck,
  Calendar,
  Sparkles,
  Phone,
  AlertCircle
} from 'lucide-react'
import { useStore } from '../context/StoreContext'

export default function TrackOrderModal() {
  const {
    isTrackOrderOpen,
    setIsTrackOrderOpen,
    trackingOrderNumber,
    setTrackingOrderNumber,
    orders,
    formatPrice
  } = useStore()

  const [searchQuery, setSearchQuery] = useState(trackingOrderNumber || '')

  if (!isTrackOrderOpen) return null

  // Find order
  const activeOrder = orders.find(
    (o) => o.orderNumber.toLowerCase() === (searchQuery || trackingOrderNumber || '').trim().toLowerCase()
  )

  const handleSearch = (e) => {
    e.preventDefault()
    setTrackingOrderNumber(searchQuery.trim())
  }

  // Fallback timeline if order doesn't have custom timeline
  const defaultTimeline = [
    { status: 'Order Placed', time: activeOrder?.date || 'Today', completed: true, note: 'Order received in atelier system.' },
    {
      status: 'Admin Verified & Confirmed',
      time: activeOrder?.verifiedAt || (activeOrder?.verificationStatus === 'Verified by Admin' ? 'Confirmed' : 'Pending'),
      completed: activeOrder?.verificationStatus === 'Verified by Admin',
      note: 'Verified by management team (arifmuneeb81@gmail.com).'
    },
    {
      status: 'Atelier Tailoring & Packaging',
      time: 'In Progress',
      completed: activeOrder?.status === 'In Transit' || activeOrder?.status === 'Delivered',
      note: 'Inspected by master tailor and packaged in signature luxury box.'
    },
    {
      status: 'Dispatched via White-Glove Courier',
      time: 'Scheduled',
      completed: activeOrder?.status === 'In Transit' || activeOrder?.status === 'Delivered',
      note: 'Dispatched with climate-controlled insured transit.'
    },
    {
      status: 'Delivered to Residence',
      time: 'Pending',
      completed: activeOrder?.status === 'Delivered',
      note: 'Private doorstep handover with signature confirmation.'
    }
  ]

  const timelineToDisplay = activeOrder?.tracking?.timeline || defaultTimeline

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto select-none">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={() => setIsTrackOrderOpen(false)}
      />

      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="relative w-full max-w-2xl bg-[#111111] border border-[#2B2B2B] rounded-2xl overflow-hidden shadow-2xl z-10 text-[#FAF9F6] animate-fade-in">
          
          {/* Header */}
          <div className="p-6 bg-[#0A0A0A] border-b border-[#222222] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#181818] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif tracking-luxury text-base font-semibold uppercase text-white">
                  ATELIER ORDER TRACKING
                </h2>
                <p className="text-[10px] text-[#888888] tracking-widest uppercase font-mono">
                  Live Courier Timeline & Management Verification Status
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsTrackOrderOpen(false)}
              className="p-1.5 text-[#888888] hover:text-white transition rounded-full hover:bg-[#1C1C1C]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Search Input Bar */}
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#666666] absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter Order Number (e.g. LX-2026-9041 or LX-2026-8819)"
                  className="w-full bg-[#161616] border border-[#2D2D2D] focus:border-[#D4AF37] text-xs text-white pl-10 pr-4 py-3 rounded-lg outline-none font-mono uppercase"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-[#D4AF37] hover:bg-[#B38F22] text-black font-semibold text-xs tracking-wider uppercase rounded-lg transition flex-shrink-0"
              >
                TRACK
              </button>
            </form>

            {/* If Order Found */}
            {activeOrder ? (
              <div className="space-y-6 animate-fade-in">
                
                {/* Order Overview Banner */}
                <div className="p-4 rounded-xl bg-[#161616] border border-[#2B2B2B] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-base font-bold text-[#D4AF37]">{activeOrder.orderNumber}</span>
                      <span className="text-[10px] text-[#888888]">• {activeOrder.date}</span>
                    </div>
                    <p className="text-xs text-white">Client: <span className="font-semibold">{activeOrder.customerName}</span></p>
                    <p className="text-[11px] text-[#777777] line-clamp-1">Destination: {activeOrder.shippingAddress}</p>
                  </div>

                  <div className="text-left sm:text-right flex-shrink-0">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] mb-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{activeOrder.verificationStatus || 'Verified & Confirmed'}</span>
                    </div>
                    <p className="font-serif font-bold text-base text-white">{formatPrice(activeOrder.total)}</p>
                    <p className="text-[10px] text-emerald-400 font-mono">{activeOrder.paymentMethod}</p>
                  </div>
                </div>

                {/* Admin Management Notice */}
                <div className="p-3 rounded-lg bg-[#0F0F0F] border border-[#222222] text-xs text-[#888888] flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">Verified by Luxe Management:</span>
                    <span className="text-[#AAAAAA] block mt-0.5">
                      Order records and verification monitored by <strong className="text-[#D4AF37]">arifmuneeb81@gmail.com</strong>.
                    </span>
                  </div>
                </div>

                {/* Progress Timeline */}
                <div>
                  <h4 className="text-xs font-semibold tracking-luxury uppercase text-[#CCCCCC] mb-4">
                    Delivery Progression
                  </h4>

                  <div className="space-y-4 relative pl-6 border-l border-[#262626] ml-2">
                    {timelineToDisplay.map((item, index) => (
                      <div key={index} className="relative">
                        {/* Circle Bullet */}
                        <div
                          className={`absolute -left-[31px] top-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                            item.completed
                              ? 'bg-[#D4AF37] text-black font-bold shadow-md shadow-[#D4AF37]/30'
                              : 'bg-[#1E1E1E] border border-[#333333] text-[#666666]'
                          }`}
                        >
                          {item.completed ? '✓' : index + 1}
                        </div>

                        <div>
                          <div className="flex items-center justify-between">
                            <span className={`text-xs font-semibold ${item.completed ? 'text-white' : 'text-[#777777]'}`}>
                              {item.status}
                            </span>
                            <span className="text-[10px] text-[#666666] font-mono">{item.time}</span>
                          </div>
                          <p className="text-[11px] text-[#888888] mt-0.5">{item.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Items Summary in this Order */}
                <div className="p-4 rounded-xl bg-[#131313] border border-[#222222]">
                  <p className="text-[11px] text-[#888888] uppercase tracking-wider mb-2 font-medium">
                    Garments in this consignment ({activeOrder.items?.length || 0}):
                  </p>
                  <div className="space-y-1 text-xs">
                    {activeOrder.items?.map((it, idx) => (
                      <div key={idx} className="flex justify-between text-[#CCCCCC]">
                        <span>{it.quantity}x {it.title} ({it.selectedSize})</span>
                        <span className="font-mono text-white">{formatPrice(it.price * it.quantity)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Courier details & Contact */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#888888]">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#D4AF37]" />
                    <span>Courier: <strong className="text-white">{activeOrder.tracking?.courier || 'White-Glove Courier'}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#D4AF37]" />
                    <span>Est. Handover: <strong className="text-white">{activeOrder.tracking?.estimatedDelivery || '3-4 Business Days'}</strong></span>
                  </div>
                </div>

              </div>
            ) : (
              <div className="py-12 text-center border border-[#222222] rounded-xl bg-[#141414] p-6 space-y-3">
                <AlertCircle className="w-10 h-10 text-[#666666] mx-auto" />
                <h4 className="font-serif text-base text-white">No Order Found with Number "{searchQuery || '...'}"</h4>
                <p className="text-xs text-[#888888] max-w-sm mx-auto leading-relaxed">
                  Please verify your order number from your confirmation receipt dossier (e.g. <span className="text-[#D4AF37] font-mono">LX-2026-9041</span> or <span className="text-[#D4AF37] font-mono">LX-2026-8819</span>).
                </p>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  )
}
