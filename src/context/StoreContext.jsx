import React, { createContext, useContext, useState, useEffect } from 'react'
import { products as initialProducts } from '../data/products'

const StoreContext = createContext()

export const currencies = {
  USD: { symbol: '$', rate: 1, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.79, label: 'GBP (£)' },
  PKR: { symbol: 'Rs', rate: 278, label: 'PKR (₨)' },
}

export function StoreProvider({ children }) {
  const [currency, setCurrency] = useState('USD')
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
          email: 'client@luxury.com',
          password: 'password123',
          phone: '+1 (555) 019-2834',
          address: '742 Evergreen Boulevard, Penthouse 4B',
          city: 'New York',
          postalCode: '10001',
          country: 'United States',
          createdAt: '2026-09-01'
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

  // Products State with localStorage persistence
  const [allProducts, setAllProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('luxe_products')
      return saved ? JSON.parse(saved) : initialProducts
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
          userId: 'usr-demo-01',
          customerName: 'Muneeb Ahmad',
          email: 'client@luxury.com',
          shippingAddress: '742 Evergreen Boulevard, Penthouse 4B, New York, USA',
          items: [
            { id: 'luxe-01', title: 'Double-Faced Cashmere Overcoat', selectedSize: 'M', quantity: 1, price: 890 }
          ],
          total: 890,
          status: 'White-Glove Dispatched'
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
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('luxe_wishlist')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  // Modals & Navigation States
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [isAdminOpen, setIsAdminOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState(null)

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
      createdAt: new Date().toISOString().split('T')[0]
    }

    setUsers((prev) => [...prev, newUser])
    setCurrentUser(newUser)
    setIsAuthModalOpen(false)
    showToast(`Welcome to the House of Luxe, ${newUser.name}!`)

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
    const orderRecord = {
      ...newOrder,
      userId: currentUser ? currentUser.id : 'guest',
      status: 'Processing'
    }
    setOrders((prev) => [orderRecord, ...prev])
  }

  const updateOrderStatus = (orderNumber, status) => {
    setOrders((prev) =>
      prev.map((ord) =>
        ord.orderNumber === orderNumber ? { ...ord, status } : ord
      )
    )
    showToast(`Order ${orderNumber} status set to: ${status}`)
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

  const freeShippingThresholdUSD = 500
  const isFreeShipping = cartSubtotalUSD >= freeShippingThresholdUSD || cartItems.length === 0
  const shippingUSD = cartItems.length === 0 ? 0 : (isFreeShipping ? 0 : 35)
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
        selectedProduct,
        setSelectedProduct,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isAdminOpen,
        setIsAdminOpen,
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
