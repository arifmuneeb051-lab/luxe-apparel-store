import React, { useState, useEffect } from 'react'
import {
  X,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  CreditCard,
  Truck,
  MapPin,
  Sparkles,
  Lock,
  Printer,
  ShoppingBag,
  User,
  Key
} from 'lucide-react'
import { useStore } from '../context/StoreContext'
import confetti from 'canvas-confetti'

export default function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cartItems,
    clearCart,
    formatPrice,
    cartSubtotalUSD,
    discountUSD,
    shippingUSD,
    taxUSD,
    cartTotalUSD,
    appliedCoupon,
    currentUser,
    setIsAuthModalOpen,
    setAuthModalMode,
    addOrder
  } = useStore()

  const [step, setStep] = useState(1) // 1: Shipping, 2: Delivery, 3: Payment, 4: Success
  const [shippingMethod, setShippingMethod] = useState('standard') // 'standard', 'express'
  const [paymentMethod, setPaymentMethod] = useState('stripe') // 'stripe', 'card', 'apple', 'cod'
  const [giftWrap, setGiftWrap] = useState(true)
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderData, setOrderData] = useState(null)

  // Stripe Card Details Placeholder State
  const [stripeConfig, setStripeConfig] = useState({
    publishableKey: 'pk_test_sample_51O9LuxeApparelDemoKeyPlaceholderXYZ',
    isReady: true,
    cardNumber: '4242 •••• •••• 4242',
    cardExpiry: '08/29',
    cardCvc: '888',
    cardZip: '10001'
  })

  // Form Fields
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'United States',
    postalCode: '',
    cardNumber: '•••• •••• •••• 4242',
    cardExpiry: '12/28',
    cardCvc: '•••'
  })

  const [errors, setErrors] = useState({})

  // Automatically pre-fill fields if user is logged in
  useEffect(() => {
    if (currentUser) {
      const names = (currentUser.name || '').split(' ')
      setForm((prev) => ({
        ...prev,
        firstName: prev.firstName || names[0] || '',
        lastName: prev.lastName || names.slice(1).join(' ') || '',
        email: prev.email || currentUser.email || '',
        phone: prev.phone || currentUser.phone || '',
        address: prev.address || currentUser.address || '',
        city: prev.city || currentUser.city || '',
        postalCode: prev.postalCode || currentUser.postalCode || '',
        country: prev.country || currentUser.country || 'United States'
      }))
    }
  }, [currentUser, isCheckoutOpen])

  useEffect(() => {
    if (step === 4) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#FAF9F6', '#E5C158', '#FFFFFF']
        })
      } catch (e) {
        console.error(e)
      }
    }
  }, [step])

  if (!isCheckoutOpen) return null

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null })
    }
  }

  const validateStep1 = () => {
    const errs = {}
    if (!form.firstName.trim()) errs.firstName = 'First name required'
    if (!form.lastName.trim()) errs.lastName = 'Last name required'
    if (!form.email.trim() || !form.email.includes('@')) errs.email = 'Valid email required'
    if (!form.address.trim()) errs.address = 'Street address required'
    if (!form.city.trim()) errs.city = 'City required'
    if (!form.postalCode.trim()) errs.postalCode = 'Postal code required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleNextStep = () => {
    if (step === 1) {
      if (validateStep1()) setStep(2)
    } else if (step === 2) {
      setStep(3)
    }
  }

  const handlePlaceOrder = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      const randomOrderNum = `LX-2026-${Math.floor(1000 + Math.random() * 9000)}`
      const newOrder = {
        orderNumber: randomOrderNum,
        date: new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        }),
        items: [...cartItems],
        total: cartTotalUSD + (shippingMethod === 'express' ? 25 : 0),
        shippingAddress: `${form.address}, ${form.city}, ${form.postalCode}, ${form.country}`,
        customerName: `${form.firstName} ${form.lastName}`,
        email: form.email,
        paymentMethod: paymentMethod.toUpperCase(),
        userId: currentUser ? currentUser.id : 'guest'
      }

      setOrderData(newOrder)
      addOrder(newOrder)
      clearCart()
      setStep(4)
    }, 1500)
  }

  const handleClose = () => {
    setIsCheckoutOpen(false)
    setStep(1)
  }

  const deliveryExtraUSD = shippingMethod === 'express' ? 25 : 0
  const finalTotalUSD = cartTotalUSD + deliveryExtraUSD

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto select-none">
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={step === 4 ? handleClose : undefined}
      />

      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="relative w-full max-w-3xl bg-[#111111] border border-[#2B2B2B] rounded-2xl overflow-hidden shadow-2xl z-10 text-[#FAF9F6] animate-fade-in">
          
          {/* Header */}
          <div className="p-6 border-b border-[#222222] flex items-center justify-between bg-[#0A0A0A]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F5E6B3] flex items-center justify-center text-black font-serif font-bold text-sm">
                L
              </div>
              <div>
                <h2 className="font-serif tracking-luxury text-sm font-semibold uppercase">
                  LUXE ATELIER CHECKOUT
                </h2>
                <p className="text-[10px] text-[#888888] tracking-widest uppercase">
                  Encrypted & Insured White-Glove Dispatch
                </p>
              </div>
            </div>

            {step !== 4 && (
              <button
                onClick={handleClose}
                className="p-1.5 text-[#888888] hover:text-white transition rounded-full hover:bg-[#1C1C1C]"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Stepper Indicator (Steps 1-3) */}
          {step !== 4 && (
            <div className="px-6 py-4 bg-[#141414] border-b border-[#222222] flex items-center justify-between text-xs font-medium">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#D4AF37]' : 'text-[#666666]'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-[#D4AF37] text-black font-bold' : 'bg-[#222222]'}`}>
                  1
                </span>
                <span>Shipping Address</span>
              </div>
              <div className="h-0.5 w-12 bg-[#2B2B2B]" />
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#D4AF37]' : 'text-[#666666]'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-[#D4AF37] text-black font-bold' : 'bg-[#222222]'}`}>
                  2
                </span>
                <span>Delivery Speed</span>
              </div>
              <div className="h-0.5 w-12 bg-[#2B2B2B]" />
              <div className={`flex items-center gap-2 ${step >= 3 ? 'text-[#D4AF37]' : 'text-[#666666]'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-[#D4AF37] text-black font-bold' : 'bg-[#222222]'}`}>
                  3
                </span>
                <span>Payment</span>
              </div>
            </div>
          )}

          {/* Modal Body */}
          <div className="p-6 sm:p-8">
            
            {/* STEP 1: Shipping Address */}
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-light text-white mb-1">
                      Client Delivery Address
                    </h3>
                    <p className="text-xs text-[#888888]">
                      Please specify the private residence or suite where your bespoke garments will be delivered.
                    </p>
                  </div>

                  {currentUser ? (
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181818] border border-[#333333] text-[11px] text-[#D4AF37]">
                      <User className="w-3.5 h-3.5" />
                      <span>{currentUser.name} (VIP ID)</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setAuthModalMode('login')
                        setIsAuthModalOpen(true)
                      }}
                      className="text-xs text-[#D4AF37] underline hover:text-white"
                    >
                      Sign In for Faster Checkout
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#AAAAAA] uppercase tracking-wider block mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleInputChange}
                      placeholder="e.g. Muneeb"
                      className="w-full bg-[#161616] border border-[#2B2B2B] focus:border-[#D4AF37] text-xs text-white p-3 rounded outline-none"
                    />
                    {errors.firstName && <p className="text-[10px] text-red-400 mt-1">{errors.firstName}</p>}
                  </div>

                  <div>
                    <label className="text-xs text-[#AAAAAA] uppercase tracking-wider block mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleInputChange}
                      placeholder="e.g. Ahmad"
                      className="w-full bg-[#161616] border border-[#2B2B2B] focus:border-[#D4AF37] text-xs text-white p-3 rounded outline-none"
                    />
                    {errors.lastName && <p className="text-[10px] text-red-400 mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#AAAAAA] uppercase tracking-wider block mb-1">
                      Email Address (For Order Dossier) *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      placeholder="client@luxury.com"
                      className="w-full bg-[#161616] border border-[#2B2B2B] focus:border-[#D4AF37] text-xs text-white p-3 rounded outline-none"
                    />
                    {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="text-xs text-[#AAAAAA] uppercase tracking-wider block mb-1">
                      Phone Number (For White-Glove Handover)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 019-2834"
                      className="w-full bg-[#161616] border border-[#2B2B2B] focus:border-[#D4AF37] text-xs text-white p-3 rounded outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#AAAAAA] uppercase tracking-wider block mb-1">
                    Street Address & Suite / Penthouse *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleInputChange}
                    placeholder="742 Evergreen Boulevard, Penthouse 4B"
                    className="w-full bg-[#161616] border border-[#2B2B2B] focus:border-[#D4AF37] text-xs text-white p-3 rounded outline-none"
                  />
                  {errors.address && <p className="text-[10px] text-red-400 mt-1">{errors.address}</p>}
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs text-[#AAAAAA] uppercase tracking-wider block mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleInputChange}
                      placeholder="New York"
                      className="w-full bg-[#161616] border border-[#2B2B2B] focus:border-[#D4AF37] text-xs text-white p-3 rounded outline-none"
                    />
                    {errors.city && <p className="text-[10px] text-red-400 mt-1">{errors.city}</p>}
                  </div>

                  <div>
                    <label className="text-xs text-[#AAAAAA] uppercase tracking-wider block mb-1">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={form.postalCode}
                      onChange={handleInputChange}
                      placeholder="10001"
                      className="w-full bg-[#161616] border border-[#2B2B2B] focus:border-[#D4AF37] text-xs text-white p-3 rounded outline-none"
                    />
                    {errors.postalCode && <p className="text-[10px] text-red-400 mt-1">{errors.postalCode}</p>}
                  </div>

                  <div>
                    <label className="text-xs text-[#AAAAAA] uppercase tracking-wider block mb-1">
                      Country
                    </label>
                    <select
                      name="country"
                      value={form.country}
                      onChange={handleInputChange}
                      className="w-full bg-[#161616] border border-[#2B2B2B] focus:border-[#D4AF37] text-xs text-white p-3 rounded outline-none"
                    >
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="France">France</option>
                      <option value="Italy">Italy</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Pakistan">Pakistan</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleNextStep}
                    className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#B38F22] text-black font-semibold text-xs tracking-luxury uppercase rounded transition flex items-center gap-2"
                  >
                    <span>CONTINUE TO DELIVERY</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Delivery Method */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="font-serif text-xl font-light text-white mb-2">
                  Select Delivery Protocol
                </h3>

                <div className="space-y-3">
                  <label
                    onClick={() => setShippingMethod('standard')}
                    className={`flex items-start justify-between p-4 rounded-xl border cursor-pointer transition ${
                      shippingMethod === 'standard'
                        ? 'bg-[#181818] border-[#D4AF37]'
                        : 'bg-[#131313] border-[#262626] hover:border-[#3A3A3A]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center ${shippingMethod === 'standard' ? 'border-[#D4AF37]' : 'border-[#666666]'}`}>
                        {shippingMethod === 'standard' && <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />}
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-wider uppercase text-white">
                          White-Glove Insured Courier (2-3 Business Days)
                        </p>
                        <p className="text-[11px] text-[#888888] mt-0.5 font-light">
                          Dispatched in temperature-controlled bespoke garment carriers with real-time signature required.
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-400">
                      {shippingUSD === 0 ? 'COMPLIMENTARY' : formatPrice(shippingUSD)}
                    </span>
                  </label>

                  <label
                    onClick={() => setShippingMethod('express')}
                    className={`flex items-start justify-between p-4 rounded-xl border cursor-pointer transition ${
                      shippingMethod === 'express'
                        ? 'bg-[#181818] border-[#D4AF37]'
                        : 'bg-[#131313] border-[#262626] hover:border-[#3A3A3A]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center ${shippingMethod === 'express' ? 'border-[#D4AF37]' : 'border-[#666666]'}`}>
                        {shippingMethod === 'express' && <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />}
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-wider uppercase text-white flex items-center gap-2">
                          <span>VIP Runway Priority Express (Next Day)</span>
                          <span className="px-2 py-0.5 bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[9px] rounded font-bold">
                            PRIORITY
                          </span>
                        </p>
                        <p className="text-[11px] text-[#888888] mt-0.5 font-light">
                          Hand-carried priority service with dedicated atelier chauffeur dispatch.
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-white">
                      +{formatPrice(25)}
                    </span>
                  </label>
                </div>

                <div className="p-4 rounded-xl bg-[#141414] border border-[#262626] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    <div>
                      <p className="text-xs font-medium text-white">Signature Maison Gift Presentation</p>
                      <p className="text-[10px] text-[#888888]">Encased in black silk ribbon with hand-calligraphed note card.</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={giftWrap}
                    onChange={(e) => setGiftWrap(e.target.checked)}
                    className="w-4 h-4 accent-[#D4AF37] cursor-pointer"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-3 bg-transparent border border-[#333333] hover:border-white text-xs font-medium tracking-wider uppercase rounded transition flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>BACK</span>
                  </button>
                  <button
                    onClick={handleNextStep}
                    className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#B38F22] text-black font-semibold text-xs tracking-luxury uppercase rounded transition flex items-center gap-2"
                  >
                    <span>PROCEED TO PAYMENT</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Payment Simulation (With Stripe Integration Hook) */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="font-serif text-xl font-light text-white mb-2">
                  Select Secure Payment Method
                </h3>

                {/* Payment Tabs: Stripe is Primary! */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('stripe')}
                    className={`p-3 rounded-lg border text-xs font-semibold tracking-wider flex flex-col items-center gap-1.5 transition ${
                      paymentMethod === 'stripe'
                        ? 'bg-[#181818] border-[#D4AF37] text-[#D4AF37]'
                        : 'bg-[#131313] border-[#282828] text-[#888888]'
                    }`}
                  >
                    <Lock className="w-4 h-4 text-[#D4AF37]" />
                    <span className="font-bold">STRIPE</span>
                    <span className="text-[9px] text-[#AAAAAA]">Global Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-lg border text-xs font-semibold tracking-wider flex flex-col items-center gap-1.5 transition ${
                      paymentMethod === 'card'
                        ? 'bg-[#181818] border-[#D4AF37] text-[#D4AF37]'
                        : 'bg-[#131313] border-[#282828] text-[#888888]'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>DIRECT CARD</span>
                    <span className="text-[9px] text-[#AAAAAA]">Visa / Amex</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('apple')}
                    className={`p-3 rounded-lg border text-xs font-semibold tracking-wider flex flex-col items-center gap-1.5 transition ${
                      paymentMethod === 'apple'
                        ? 'bg-[#181818] border-[#D4AF37] text-[#D4AF37]'
                        : 'bg-[#131313] border-[#282828] text-[#888888]'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>APPLE PAY</span>
                    <span className="text-[9px] text-[#AAAAAA]">Biometric</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-lg border text-xs font-semibold tracking-wider flex flex-col items-center gap-1.5 transition ${
                      paymentMethod === 'cod'
                        ? 'bg-[#181818] border-[#D4AF37] text-[#D4AF37]'
                        : 'bg-[#131313] border-[#282828] text-[#888888]'
                    }`}
                  >
                    <Truck className="w-4 h-4" />
                    <span>HANDOVER</span>
                    <span className="text-[9px] text-[#AAAAAA]">On Delivery</span>
                  </button>
                </div>

                {/* STRIPE PAYMENT CONTAINER (Configured for User's Stripe Keys) */}
                {paymentMethod === 'stripe' && (
                  <div className="p-5 rounded-xl bg-[#141414] border border-[#D4AF37]/50 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
                      <div className="flex items-center gap-2">
                        <div className="px-2 py-0.5 rounded bg-[#635BFF] text-white text-[10px] font-bold tracking-wider">
                          stripe
                        </div>
                        <span className="text-xs font-semibold text-white">Stripe Payment Gateway</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Key Slot Ready
                      </span>
                    </div>

                    {/* Developer / User Stripe Key Indicator Box */}
                    <div className="p-3 rounded-lg bg-[#0F0F0F] border border-[#2A2A2A] text-[11px] text-[#999999] flex items-start gap-2.5">
                      <Key className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white font-medium block">Stripe Key Placeholder Configured:</span>
                        <span className="font-mono text-[10px] text-[#D4AF37] block mt-0.5">
                          VITE_STRIPE_PUBLIC_KEY="pk_live_your_key_here"
                        </span>
                        <p className="text-[10px] text-[#777777] mt-1">
                          Aap apna Stripe Secret & Public Key <code className="text-white">.env</code> mein dalenge to yeh direct live Stripe Checkout se connect ho jayega.
                        </p>
                      </div>
                    </div>

                    {/* Simulated Stripe Card Element */}
                    <div id="stripe-card-element-container" className="space-y-3">
                      <div>
                        <label className="text-[11px] text-[#AAAAAA] uppercase tracking-wider block mb-1">
                          Card Number (Stripe Element)
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            readOnly
                            value={stripeConfig.cardNumber}
                            className="w-full bg-[#1A1A1A] border border-[#333333] text-xs text-white p-3 rounded font-mono"
                          />
                          <span className="absolute right-3 top-3 text-[10px] text-[#D4AF37] font-bold">
                            STRIPE SECURED
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-[11px] text-[#AAAAAA] uppercase tracking-wider block mb-1">
                            MM / YY
                          </label>
                          <input
                            type="text"
                            readOnly
                            value={stripeConfig.cardExpiry}
                            className="w-full bg-[#1A1A1A] border border-[#333333] text-xs text-white p-3 rounded font-mono"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] text-[#AAAAAA] uppercase tracking-wider block mb-1">
                            CVC
                          </label>
                          <input
                            type="text"
                            readOnly
                            value={stripeConfig.cardCvc}
                            className="w-full bg-[#1A1A1A] border border-[#333333] text-xs text-white p-3 rounded font-mono"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Direct Card Fields */}
                {paymentMethod === 'card' && (
                  <div className="p-4 rounded-xl bg-[#141414] border border-[#262626] space-y-4">
                    <div>
                      <label className="text-[11px] text-[#AAAAAA] uppercase tracking-wider block mb-1">
                        Card Number (Demo)
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          readOnly
                          value={form.cardNumber}
                          className="w-full bg-[#1A1A1A] border border-[#333333] text-xs text-white p-3 rounded font-mono"
                        />
                        <span className="absolute right-3 top-3 text-[10px] text-[#D4AF37] font-bold">
                          VISA / AMEX
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] text-[#AAAAAA] uppercase tracking-wider block mb-1">
                          Expiry
                        </label>
                        <input
                          type="text"
                          readOnly
                          value={form.cardExpiry}
                          className="w-full bg-[#1A1A1A] border border-[#333333] text-xs text-white p-3 rounded font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-[#AAAAAA] uppercase tracking-wider block mb-1">
                          CVC
                        </label>
                        <input
                          type="text"
                          readOnly
                          value={form.cardCvc}
                          className="w-full bg-[#1A1A1A] border border-[#333333] text-xs text-white p-3 rounded font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'apple' && (
                  <div className="p-6 rounded-xl bg-[#141414] border border-[#262626] text-center">
                    <p className="text-xs text-[#CCCCCC] mb-2">Biometric Authentication Ready</p>
                    <p className="text-[11px] text-[#888888]">Your default Apple Pay billing address will be synced upon placement.</p>
                  </div>
                )}

                {paymentMethod === 'cod' && (
                  <div className="p-6 rounded-xl bg-[#141414] border border-[#262626] text-center">
                    <p className="text-xs text-[#D4AF37] font-semibold mb-1">White-Glove Doorstep Handover</p>
                    <p className="text-[11px] text-[#888888]">Pay with card or cash to our atelier courier upon private delivery inspection.</p>
                  </div>
                )}

                {/* Final Order Review Total */}
                <div className="p-4 rounded-xl bg-[#0F0F0F] border border-[#222222] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#888888] uppercase tracking-wider block">Final Total Due</span>
                    <span className="text-xl font-serif font-bold text-[#D4AF37]">
                      {formatPrice(finalTotalUSD)}
                    </span>
                  </div>
                  <div className="text-right text-[11px] text-[#888888]">
                    <p>Delivering to: <span className="text-white font-medium">{form.city}, {form.country}</span></p>
                    <p className="text-emerald-400">All Taxes & Customs Covered</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="px-6 py-3 bg-transparent border border-[#333333] hover:border-white text-xs font-medium tracking-wider uppercase rounded transition flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>BACK</span>
                  </button>

                  <button
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                    className="px-10 py-4 bg-[#D4AF37] hover:bg-[#B38F22] text-black font-bold text-xs tracking-luxury uppercase rounded transition flex items-center gap-2 shadow-xl shadow-[#D4AF37]/20 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <span>AUTHENTICATING ATELIER ORDER...</span>
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        <span>AUTHORIZE & PLACE ORDER</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[10px] text-[#666666] pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#888888]" />
                  <span>Stripe & Atelier 256-Bit SSL Encryption • Zero Fraud Liability</span>
                </div>
              </div>
            )}

            {/* STEP 4: Order Confirmation & Receipt Screen */}
            {step === 4 && orderData && (
              <div className="text-center py-6 animate-fade-in space-y-6">
                
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/10">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-[10px] tracking-luxury uppercase text-[#D4AF37] font-semibold">
                    Atelier Order Confirmed
                  </span>
                  <h3 className="font-serif text-3xl font-light text-white mt-1">
                    Thank You, {orderData.customerName}
                  </h3>
                  <p className="text-xs text-[#888888] font-light mt-1">
                    A bespoke confirmation dossier has been dispatched to <span className="text-white font-medium">{orderData.email}</span>.
                  </p>
                </div>

                {/* Order Receipt Card */}
                <div className="max-w-md mx-auto p-6 rounded-xl bg-[#0D0D0D] border border-[#262626] text-left text-xs space-y-4 shadow-xl">
                  <div className="flex justify-between border-b border-[#222222] pb-3">
                    <span className="text-[#888888]">Order Identifier:</span>
                    <span className="font-mono text-[#D4AF37] font-bold">{orderData.orderNumber}</span>
                  </div>

                  <div className="flex justify-between border-b border-[#222222] pb-3">
                    <span className="text-[#888888]">Date of Order:</span>
                    <span className="text-white">{orderData.date}</span>
                  </div>

                  <div className="flex justify-between border-b border-[#222222] pb-3">
                    <span className="text-[#888888]">Payment Method:</span>
                    <span className="text-emerald-400 font-semibold">{orderData.paymentMethod}</span>
                  </div>

                  <div className="flex justify-between border-b border-[#222222] pb-3">
                    <span className="text-[#888888]">Delivery Destination:</span>
                    <span className="text-white text-right max-w-[220px] truncate">{orderData.shippingAddress}</span>
                  </div>

                  <div className="border-b border-[#222222] pb-3">
                    <p className="text-[#888888] mb-2">Selected Garments ({orderData.items.length}):</p>
                    <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                      {orderData.items.map((it) => (
                        <div key={it.uniqueId} className="flex justify-between text-[11px]">
                          <span className="text-[#CCCCCC] truncate max-w-[240px]">
                            {it.quantity}x {it.title} ({it.selectedSize})
                          </span>
                          <span className="text-white font-mono">{formatPrice(it.price * it.quantity)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between text-sm font-bold pt-1">
                    <span className="text-white">Amount Settled:</span>
                    <span className="text-base text-[#D4AF37] font-serif font-bold">
                      {formatPrice(orderData.total)}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-center gap-4 pt-2">
                  <button
                    onClick={() => window.print()}
                    className="px-6 py-3 rounded-lg bg-[#181818] border border-[#333333] hover:border-white text-xs font-semibold tracking-wider uppercase transition flex items-center gap-2"
                  >
                    <Printer className="w-4 h-4" />
                    <span>PRINT DOSSIER</span>
                  </button>

                  <button
                    onClick={handleClose}
                    className="px-8 py-3 bg-[#D4AF37] hover:bg-[#B38F22] text-black font-semibold text-xs tracking-luxury uppercase rounded transition flex items-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>RETURN TO ATELIER</span>
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  )
}
