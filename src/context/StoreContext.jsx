import React, { createContext, useContext, useState, useEffect } from 'react'
import { products as initialProducts } from '../data/products'

const StoreContext = createContext()

export const currencies = {
  PKR: { symbol: 'Rs. ', rate: 50, label: 'PKR (Rs)' },
  USD: { symbol: '$', rate: 1, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.79, label: 'GBP (£)' },
}

export function StoreProvider({ children }) {
  const [currency, setCurrency] = useState(() => {
    try {
      const saved = localStorage.getItem('luxe_currency')
      return saved || 'PKR'
    } catch {
      return 'PKR'
    }
  })
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeGender, setActiveGender] = useState('All')
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedSizeFilter, setSelectedSizeFilter] = useState('All')
  const [maxPrice, setMaxPrice] = useState(1200)
  const [sortBy, setSortBy] = useState('featured')

  // User Authentication State
  const [users, setUsers] = useState(() => {
    try {
      const saved = localStorage.getItem('luxe_users')
      if (saved) return JSON.parse(saved)
      return [
        {
          id: 'usr-demo-01',
          name: 'Muneeb Ahmad',
          email: 'arifmuneeb81@gmail.com',
          password: 'password123',
          phone: '+92 300 1234567',
          address: 'Executive Suite 4B, Blue Area',
          city: 'Islamabad',
          postalCode: '44000',
          country: 'Pakistan',
          role: 'admin',
          createdAt: '2026-09-01'
        },
        {
          id: 'usr-demo-02',
          name: 'Victoria Sterling',
          email: 'v.sterling@mayfair.co.uk',
          password: 'password123',
          phone: '+44 20 7946 0912',
          address: '14 Berkeley Square, Mayfair',
          city: 'London',
          postalCode: 'W1J 5AW',
          country: 'United Kingdom',
          role: 'client',
          createdAt: '2026-09-05'
        }
      ]
    } catch {
      return []
    }
  })

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('luxe_current_user')
      return saved ? JSON.parse(saved) : null
    } catch {
      return null
    }
  })

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authModalMode, setAuthModalMode] = useState('login') // 'login' | 'register'
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [authRedirectAction, setAuthRedirectAction] = useState(null) // e.g. 'checkout'

  // Products State with localStorage persistence & auto-upgrade to expanded catalog
  const [allProducts, setAllProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('luxe_products')
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length >= initialProducts.length) {
          return parsed
        }
      }
      return initialProducts
    } catch {
      return initialProducts
    }
  })

  // Orders State with localStorage persistence
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('luxe_orders')
      if (saved) return JSON.parse(saved)
      return [
        {
          orderNumber: 'LX-2026-9041',
          date: 'September 12, 2026',
          userId: 'usr-demo-02',
          customerName: 'Victoria Sterling',
          email: 'v.sterling@mayfair.co.uk',
          phone: '+44 20 7946 0912',
          shippingAddress: '14 Berkeley Square, Mayfair, London, W1J 5AW, United Kingdom',
          items: [
            {
              id: 'luxe-01',
              title: 'Double-Faced Cashmere Overcoat',
              selectedSize: 'M',
              selectedColor: 'Camel Tan',
              quantity: 1,
              price: 890
            }
          ],
          total: 890,
          paymentMethod: 'STRIPE',
          paymentStatus: 'Paid',
          status: 'In Transit',
          verificationStatus: 'Verified by Admin',
          verifiedBy: 'arifmuneeb81@gmail.com',
          verifiedAt: 'September 12, 2026, 11:30 AM',
          adminNotifiedEmail: 'arifmuneeb81@gmail.com',
          tracking: {
            courier: 'Luxe Atelier White-Glove Logistics',
            trackingNumber: 'TRK-LX-9041-GB',
            estimatedDelivery: 'September 16, 2026',
            currentLocation: 'London Central Logistics Hub',
            timeline: [
              { status: 'Order Placed', time: 'Sep 12, 09:14 AM', completed: true, note: 'Order received in atelier system.' },
              { status: 'Admin Verified & Confirmed', time: 'Sep 12, 11:30 AM', completed: true, note: 'Verified by management (arifmuneeb81@gmail.com).' },
              { status: 'Atelier Tailoring & Quality Check', time: 'Sep 13, 02:45 PM', completed: true, note: 'Hand-steamed and encased in garment box.' },
              { status: 'Dispatched via White-Glove Courier', time: 'Sep 14, 08:00 AM', completed: true, note: 'Departed Florence atelier to London hub.' },
              { status: 'Out for Handover Delivery', time: 'Pending', completed: false, note: 'Scheduled for signature handover.' },
              { status: 'Delivered to Residence', time: 'Pending', completed: false, note: 'White-glove private reception.' }
            ]
          }
        },
        {
          orderNumber: 'LX-2026-8819',
          date: 'September 14, 2026',
          userId: 'usr-demo-01',
          customerName: 'Alexander Vance',
          email: 'avance@nycatelier.com',
          phone: '+1 (555) 019-2834',
          shippingAddress: '432 Park Avenue, Penthouse 72, New York, 10022, United States',
          items: [
            {
              id: 'luxe-02',
              title: 'Structured Italian Wool Tuxedo Blazer',
              selectedSize: '42R',
              selectedColor: 'Midnight Black',
              quantity: 1,
              price: 750
            },
            {
              id: 'luxe-06',
              title: 'Monogram Calfskin Atelier Briefcase',
              selectedSize: 'One Size',
              selectedColor: 'Espresso Brown',
              quantity: 1,
              price: 940
            }
          ],
          total: 1690,
          paymentMethod: 'CASH ON DELIVERY (COD)',
          paymentStatus: 'Pending Handover',
          status: 'Pending Admin Verification',
          verificationStatus: 'Awaiting Admin Review',
          verifiedBy: null,
          verifiedAt: null,
          adminNotifiedEmail: 'arifmuneeb81@gmail.com',
          tracking: {
            courier: 'Luxe Private Chauffeur Dispatch',
            trackingNumber: 'TRK-LX-8819-US',
            estimatedDelivery: 'September 18, 2026',
            currentLocation: 'New York Atelier Flagship',
            timeline: [
              { status: 'Order Placed', time: 'Sep 14, 03:20 PM', completed: true, note: 'Cash on Delivery request logged.' },
              { status: 'Admin Verified & Confirmed', time: 'Pending', completed: false, note: 'Admin arifmuneeb81@gmail.com confirmation pending.' },
              { status: 'Atelier Tailoring & Packaging', time: 'Pending', completed: false, note: 'Waiting for confirmation.' },
              { status: 'Dispatched via White-Glove Courier', time: 'Pending', completed: false, note: 'Awaiting dispatch.' },
              { status: 'Out for Handover Delivery', time: 'Pending', completed: false, note: 'Payment collected upon handover.' },
              { status: 'Delivered to Residence', time: 'Pending', completed: false, note: 'Order complete.' }
            ]
          }
        }
      ]
    } catch {
      return []
    }
  })

  // Cart & Wishlist with localStorage persistence
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('luxe_cart')
      if (saved) return JSON.parse(saved)
      return []
    } catch {
      return []
    }
  })

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('luxe_wishlist')
      if (saved) return JSON.parse(saved)
      return []
    } catch {
      return []
    }
  })

  // Modals & Navigation States
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [isAdminOpen, setIsAdminOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState(null)

  // Tracking Modal State
  const [isTrackOrderOpen, setIsTrackOrderOpen] = useState(false)
  const [trackingOrderNumber, setTrackingOrderNumber] = useState('')

  // Admin Notifications for arifmuneeb81@gmail.com
  const [adminNotifications, setAdminNotifications] = useState(() => {
    try {
      const saved = localStorage.getItem('luxe_admin_notifications')
      if (saved) return JSON.parse(saved)
      return [
        {
          id: 'notif-001',
          type: 'NEW_ORDER_ALERT',
          recipientEmail: 'arifmuneeb81@gmail.com',
          title: 'New High-Value Order Placed: #LX-2026-8819 ($1,690)',
          timestamp: '2026-09-14T15:20:00.000Z',
          customer: 'Alexander Vance (avance@nycatelier.com)',
          paymentMethod: 'CASH ON DELIVERY (COD)',
          itemsCount: 2,
          total: 1690,
          status: 'Awaiting Admin Verification',
          actionRequired: 'Verify client address and confirm order fulfillment.'
        },
        {
          id: 'notif-002',
          type: 'NEW_USER_REGISTRATION',
          recipientEmail: 'arifmuneeb81@gmail.com',
          title: 'New Maison Client Registered: Victoria Sterling',
          timestamp: '2026-09-05T12:15:00.000Z',
          customer: 'Victoria Sterling (v.sterling@mayfair.co.uk)',
          location: 'London, United Kingdom',
          status: 'Active VIP Client'
        }
      ]
    } catch {
      return []
    }
  })

  // Coupons
  const [coupons, setCoupons] = useState(() => {
    try {
      const saved = localStorage.getItem('luxe_coupons')
      if (saved) return JSON.parse(saved)
      return [
        { code: 'LUXE20', discountPercent: 20, label: '20% Atelier Privilege' },
        { code: 'ATELIER', discountPercent: 15, label: '15% Seasonal Runway' },
        { code: 'VIP50', discountFixed: 50, label: '$50 VIP Credit' }
      ]
    } catch {
      return [
        { code: 'LUXE20', discountPercent: 20, label: '20% Atelier Privilege' },
        { code: 'ATELIER', discountPercent: 15, label: '15% Seasonal Runway' },
        { code: 'VIP50', discountFixed: 50, label: '$50 VIP Credit' }
      ]
    }
  })

  const [appliedCoupon, setAppliedCoupon] = useState(null)

  // Persistence Effects
  useEffect(() => {
    try {
      localStorage.setItem('luxe_users', JSON.stringify(users))
    } catch (e) {
      console.error(e)
    }
  }, [users])

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('luxe_current_user', JSON.stringify(currentUser))
      } else {
        localStorage.removeItem('luxe_current_user')
      }
    } catch (e) {
      console.error(e)
    }
  }, [currentUser])

  useEffect(() => {
    try {
      localStorage.setItem('luxe_products', JSON.stringify(allProducts))
    } catch (e) {
      console.error(e)
    }
  }, [allProducts])

  useEffect(() => {
    try {
      localStorage.setItem('luxe_orders', JSON.stringify(orders))
    } catch (e) {
      console.error(e)
    }
  }, [orders])

  useEffect(() => {
    try {
      localStorage.setItem('luxe_coupons', JSON.stringify(coupons))
    } catch (e) {
      console.error(e)
    }
  }, [coupons])

  useEffect(() => {
    try {
      localStorage.setItem('luxe_cart', JSON.stringify(cartItems))
    } catch (e) {
      console.error(e)
    }
  }, [cartItems])

  useEffect(() => {
    try {
      localStorage.setItem('luxe_wishlist', JSON.stringify(wishlist))
    } catch (e) {
      console.error(e)
    }
  }, [wishlist])

  useEffect(() => {
    try {
      localStorage.setItem('luxe_admin_notifications', JSON.stringify(adminNotifications))
    } catch (e) {
      console.error(e)
    }
  }, [adminNotifications])

  useEffect(() => {
    try {
      localStorage.setItem('luxe_currency', currency)
    } catch (e) {
      console.error(e)
    }
  }, [currency])

  // Live Serverless Backend Sync for Vercel
  useEffect(() => {
    try {
      fetch('/api/products')
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (data && data.success && Array.isArray(data.data) && data.data.length > 0) {
            setAllProducts(data.data)
          }
        })
        .catch(() => {})
    } catch (e) {}
  }, [])

  // Toast notification helper
  const showToast = (message) => {
    setToastMessage(message)
    setTimeout(() => setToastMessage(null), 3200)
  }

  // Currency Formatter
  const formatPrice = (usdPrice) => {
    if (usdPrice == null) return ''
    const curr = currencies[currency] || currencies.USD
    const converted = usdPrice * curr.rate
    return `${curr.symbol}${converted.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })}`
  }

  // Authentication Handlers
  const register = ({ name, email, password, phone, address, city, postalCode, country }) => {
    const cleanEmail = email.trim().toLowerCase()
    const existing = users.find((u) => u.email.toLowerCase() === cleanEmail)
    if (existing) {
      return { success: false, message: 'An account with this email already exists.' }
    }

    const newUser = {
      id: `usr-${Date.now()}`,
      name: name.trim(),
      email: cleanEmail,
      password,
      phone: phone || '',
      address: address || '',
      city: city || '',
      postalCode: postalCode || '',
      country: country || 'United States',
      role: 'client',
      createdAt: new Date().toISOString().split('T')[0]
    }

    setUsers((prev) => [...prev, newUser])
    setCurrentUser(newUser)
    setIsAuthModalOpen(false)
    showToast(`Welcome to the House of Luxe, ${newUser.name}!`)

    // Notify Admin arifmuneeb81@gmail.com
    const notifAlert = {
      id: `notif-${Date.now()}`,
      type: 'NEW_USER_REGISTRATION',
      recipientEmail: 'arifmuneeb81@gmail.com',
      title: `New Client Registered: ${newUser.name}`,
      timestamp: new Date().toISOString(),
      customer: `${newUser.name} (${newUser.email})`,
      location: `${newUser.city || 'Undisclosed'}, ${newUser.country}`,
      status: 'Active VIP Client'
    }
    setAdminNotifications((prev) => [notifAlert, ...prev])

    // Post to live serverless users API if online
    try {
      fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      }).catch(() => {})
    } catch (e) {}

    // If there was a pending action (like proceed to checkout)
    if (authRedirectAction === 'checkout') {
      setAuthRedirectAction(null)
      setIsCheckoutOpen(true)
    }

    return { success: true }
  }

  const login = (email, password) => {
    const cleanEmail = email.trim().toLowerCase()
    const user = users.find((u) => u.email.toLowerCase() === cleanEmail)
    if (!user) {
      return { success: false, message: 'No account found with this email.' }
    }
    if (user.password !== password) {
      return { success: false, message: 'Incorrect password entered.' }
    }

    setCurrentUser(user)
    setIsAuthModalOpen(false)
    showToast(`Welcome back, ${user.name}!`)

    if (authRedirectAction === 'checkout') {
      setAuthRedirectAction(null)
      setIsCheckoutOpen(true)
    }

    return { success: true }
  }

  const logout = () => {
    setCurrentUser(null)
    setIsProfileOpen(false)
    showToast('You have been signed out safely.')
  }

  const openAuthForCheckout = () => {
    setAuthRedirectAction('checkout')
    setAuthModalMode('login')
    setIsAuthModalOpen(true)
    showToast('Please sign in or create an account to complete your purchase.')
  }

  // Admin Product Management
  const addProduct = (newProd) => {
    const prodWithId = {
      ...newProd,
      id: `luxe-${Date.now()}`,
      rating: 5.0,
      reviewsCount: 1,
      inStock: newProd.inStock || 10
    }
    setAllProducts((prev) => [prodWithId, ...prev])
    showToast(`Added new garment: "${prodWithId.title}"`)
  }

  const updateProduct = (id, updatedFields) => {
    setAllProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedFields } : p))
    )
    showToast(`Updated garment specifications`)
  }

  const deleteProduct = (id) => {
    setAllProducts((prev) => prev.filter((p) => p.id !== id))
    showToast(`Garment archived from catalog`)
  }

  // Orders Management
  const addOrder = (newOrder) => {
    const isCOD = (newOrder.paymentMethod || '').toUpperCase().includes('COD') || (newOrder.paymentMethod || '').toUpperCase().includes('CASH')
    const orderRecord = {
      ...newOrder,
      userId: currentUser ? currentUser.id : (newOrder.userId || 'guest'),
      paymentMethod: newOrder.paymentMethod || 'STRIPE',
      paymentStatus: isCOD ? 'Pending Handover' : 'Paid via Stripe',
      status: newOrder.status || (isCOD ? 'Pending Admin Verification' : 'White-Glove Dispatched'),
      verificationStatus: newOrder.verificationStatus || (isCOD ? 'Awaiting Admin Review' : 'Verified by Admin'),
      verifiedBy: isCOD ? null : 'arifmuneeb81@gmail.com',
      verifiedAt: isCOD ? null : new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      adminNotifiedEmail: 'arifmuneeb81@gmail.com',
      tracking: newOrder.tracking || {
        courier: isCOD ? 'Luxe Private Chauffeur Dispatch' : 'Luxe Atelier White-Glove Logistics',
        trackingNumber: `TRK-LX-${Math.floor(1000 + Math.random() * 9000)}-${isCOD ? 'COD' : 'ST'}`,
        estimatedDelivery: '3-5 Business Days',
        currentLocation: 'Atelier Central Logistics Hub',
        timeline: [
          { status: 'Order Placed', time: newOrder.date || 'Today', completed: true, note: `${newOrder.paymentMethod || 'Order'} logged in atelier system.` },
          { status: 'Admin Verified & Confirmed', time: isCOD ? 'Pending' : 'Confirmed', completed: !isCOD, note: 'Verification by management (arifmuneeb81@gmail.com).' },
          { status: 'Atelier Tailoring & Packaging', time: isCOD ? 'Pending' : 'In Progress', completed: !isCOD, note: 'Garment preparation in atelier.' },
          { status: 'Dispatched via White-Glove Courier', time: 'Scheduled', completed: false, note: 'Climate-controlled insured transit.' },
          { status: 'Out for Handover Delivery', time: 'Pending', completed: false, note: isCOD ? 'Payment collected upon handover.' : 'Signature handover.' },
          { status: 'Delivered to Residence', time: 'Pending', completed: false, note: 'White-glove private reception.' }
        ]
      }
    }
    setOrders((prev) => [orderRecord, ...prev])

    // Push alert to admin notifications for arifmuneeb81@gmail.com
    const alertNotif = {
      id: `notif-${Date.now()}`,
      type: 'NEW_ORDER_ALERT',
      recipientEmail: 'arifmuneeb81@gmail.com',
      title: `New Order Placed: #${orderRecord.orderNumber} (${formatPrice(orderRecord.total)})`,
      timestamp: new Date().toISOString(),
      customer: `${orderRecord.customerName} (${orderRecord.email})`,
      paymentMethod: orderRecord.paymentMethod,
      itemsCount: orderRecord.items.length,
      total: orderRecord.total,
      status: orderRecord.verificationStatus,
      actionRequired: isCOD
        ? 'Awaiting Admin arifmuneeb81@gmail.com review and verification before dispatch.'
        : 'Payment settled via Stripe. Dispatched to master tailor.'
    }
    setAdminNotifications((prev) => [alertNotif, ...prev])

    // Post to live serverless orders API if online
    try {
      fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderRecord)
      }).catch(() => {})
    } catch (e) {}
  }

  const updateOrderStatus = (orderNumber, status) => {
    setOrders((prev) =>
      prev.map((ord) =>
        ord.orderNumber === orderNumber ? { ...ord, status } : ord
      )
    )
    showToast(`Order ${orderNumber} status set to: ${status}`)
  }

  const verifyOrder = (orderNumber) => {
    const timeNow = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }) + ', ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.orderNumber === orderNumber) {
          const updatedTimeline = (ord.tracking?.timeline || []).map((step) => {
            if (step.status.includes('Admin Verified') || step.status.includes('Verified')) {
              return { ...step, completed: true, time: timeNow, note: 'Verified and confirmed by arifmuneeb81@gmail.com' }
            }
            if (step.status.includes('Tailoring')) {
              return { ...step, completed: true, time: 'In Progress' }
            }
            return step
          })

          return {
            ...ord,
            verificationStatus: 'Verified by Admin',
            verifiedBy: 'arifmuneeb81@gmail.com',
            verifiedAt: timeNow,
            status: ord.status === 'Pending Admin Verification' ? 'White-Glove Dispatched' : ord.status,
            tracking: {
              ...ord.tracking,
              timeline: updatedTimeline.length > 0 ? updatedTimeline : undefined
            }
          }
        }
        return ord
      })
    )
    showToast(`Order ${orderNumber} verified by arifmuneeb81@gmail.com!`)

    // Post to live serverless verify API if online
    try {
      fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderNumber, verifiedBy: 'arifmuneeb81@gmail.com' })
      }).catch(() => {})
    } catch (e) {}
  }

  const openOrderTracking = (orderNum = '') => {
    if (orderNum) setTrackingOrderNumber(orderNum)
    setIsTrackOrderOpen(true)
  }

  // Coupons
  const addCoupon = (code, discountPercent, label) => {
    const newC = { code: code.toUpperCase(), discountPercent: Number(discountPercent), label }
    setCoupons((prev) => [...prev, newC])
    showToast(`Created privilege coupon: ${newC.code}`)
  }

  const deleteCoupon = (code) => {
    setCoupons((prev) => prev.filter((c) => c.code !== code))
    showToast(`Coupon ${code} decommissioned`)
  }

  // Cart Operations
  const addToCart = (product, size, color, quantity = 1) => {
    const chosenSize = size || product.sizes[0]
    const chosenColor = color || (product.colors && product.colors[0] ? product.colors[0].name : '')
    const uniqueId = `${product.id}-${chosenSize}-${chosenColor}`

    setCartItems((prev) => {
      const existing = prev.find((item) => item.uniqueId === uniqueId)
      if (existing) {
        return prev.map((item) =>
          item.uniqueId === uniqueId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [
        ...prev,
        {
          ...product,
          uniqueId,
          selectedSize: chosenSize,
          selectedColor: chosenColor,
          quantity
        }
      ]
    })

    showToast(`Added "${product.title}" (${chosenSize}) to Bag`)
  }

  const removeFromCart = (uniqueId) => {
    setCartItems((prev) => prev.filter((item) => item.uniqueId !== uniqueId))
  }

  const updateQuantity = (uniqueId, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.uniqueId === uniqueId) {
            const newQty = item.quantity + delta
            return newQty > 0 ? { ...item, quantity: newQty } : null
          }
          return item
        })
        .filter(Boolean)
    )
  }

  const clearCart = () => {
    setCartItems([])
    setAppliedCoupon(null)
  }

  // Wishlist
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const isFavorited = prev.some((p) => p.id === product.id)
      if (isFavorited) {
        showToast(`Removed "${product.title}" from Wishlist`)
        return prev.filter((p) => p.id !== product.id)
      } else {
        showToast(`Saved "${product.title}" to Wishlist`)
        return [...prev, product]
      }
    })
  }

  const isInWishlist = (productId) => wishlist.some((p) => p.id === productId)

  // Apply Coupon
  const applyCoupon = (code) => {
    const clean = code.trim().toUpperCase()
    const found = coupons.find((c) => c.code === clean)
    if (found) {
      setAppliedCoupon(found)
      showToast(`${found.label} applied successfully!`)
      return { success: true }
    } else {
      return { success: false, message: 'Invalid or unrecognized privilege code' }
    }
  }

  const removeCoupon = () => {
    setAppliedCoupon(null)
    showToast('Promotional coupon removed')
  }

  // Financial calculations
  const cartSubtotalUSD = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  
  let discountUSD = 0
  if (appliedCoupon) {
    if (appliedCoupon.discountPercent) {
      discountUSD = (cartSubtotalUSD * appliedCoupon.discountPercent) / 100
    } else if (appliedCoupon.discountFixed) {
      discountUSD = Math.min(appliedCoupon.discountFixed, cartSubtotalUSD)
    }
  }

  const freeShippingThresholdUSD = 200
  const isFreeShipping = cartSubtotalUSD >= freeShippingThresholdUSD || cartItems.length === 0
  const shippingUSD = cartItems.length === 0 ? 0 : (isFreeShipping ? 0 : 5)
  const taxUSD = (cartSubtotalUSD - discountUSD) * 0.08
  const cartTotalUSD = Math.max(0, cartSubtotalUSD - discountUSD + shippingUSD + taxUSD)

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)
  const wishlistCount = wishlist.length

  // User's past orders
  const userOrders = currentUser ? orders.filter((o) => o.userId === currentUser.id || o.email === currentUser.email) : []

  return (
    <StoreContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
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
        // Authentication
        currentUser,
        users,
        register,
        login,
        logout,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authModalMode,
        setAuthModalMode,
        isProfileOpen,
        setIsProfileOpen,
        openAuthForCheckout,
        userOrders,
        // Catalog & Admin
        allProducts,
        addProduct,
        updateProduct,
        deleteProduct,
        orders,
        addOrder,
        updateOrderStatus,
        coupons,
        addCoupon,
        deleteCoupon,
        // Cart & Wishlist
        cartItems,
        setCartItems,
        clearCart,
        wishlist,
        setWishlist,
        cartCount,
        wishlistCount,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        selectedProduct,
        setSelectedProduct,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isAdminOpen,
        setIsAdminOpen,
        // Order Tracking Modal State
        isTrackOrderOpen,
        setIsTrackOrderOpen,
        trackingOrderNumber,
        setTrackingOrderNumber,
        openOrderTracking,
        verifyOrder,
        adminNotifications,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        isInWishlist,
        toastMessage,
        showToast,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        cartSubtotalUSD,
        discountUSD,
        shippingUSD,
        taxUSD,
        cartTotalUSD,
        freeShippingThresholdUSD,
        isFreeShipping
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)
