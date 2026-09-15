# LUXE APPAREL — Master System Architecture, Operations Manual & Changelog

> **Project Name:** LUXE APPAREL (Haute Couture & Ready-to-Wear Online Store)  
> **Status:** 100% COMPLETE, LOCALLY VERIFIED & PRODUCTION READY  
> **Target Aesthetic:** High-End Fashion Brand (Zara / Massimo Dutti / Fear of God / Vogue lookbook)  
> **Primary Runtime:** Node.js (v24+) + Vite 6 + React 18 + Tailwind CSS + Express/MongoDB  
> **Location:** `D:\Luxe Apparel Store` (and synchronized in workspace)

---

## 1. System Overview

**LUXE APPAREL** is a production-grade luxury clothing e-commerce web platform featuring:
- **Haute Couture Brand Layout:** Brand Monogram & Name on the **Left**, Navigation Menu in the **Center**, and User Account, Wishlist, Search, and Shopping Bag on the **Right**.
- **Client Identification & Authentication System:**
  - Users can create an account / ID with Name, Email, Password, Phone, and Address.
  - Gated Checkout: Customers are prompted to sign in or register before completing their purchase so every order links to their personal client dossier.
  - Client Profile Modal: Displays account information, saved delivery residence, and real-time history of placed orders.
- **Stripe Payment Gateway Integration:**
  - Dedicated Stripe payment method configured in checkout with masked card inputs, SSL security emblems, and ready `.env` slot (`VITE_STRIPE_PUBLIC_KEY="pk_live_..."`).
  - Allows the store owner to plug in their Stripe credentials whenever ready with zero code refactoring needed.
- **Atelier Admin Management Portal:**
  - Manage inventory (add new garments, set prices/stock, assign luxury status badges, delete garments).
  - Client orders dossier: Review all orders, customer details, and update dispatch status ("Processing", "White-Glove Dispatched", "Delivered").
  - Privilege coupon manager: Create new promotional discount codes (`LUXE20`, `ATELIER`, `VIP50`).
- **MongoDB Backend Architecture:**
  - Express server in `server/server.js` with Mongoose schemas for `User`, `Product`, and `Order`.
  - Connects to local MongoDB or cloud MongoDB Atlas via `MONGODB_URI` in `.env`.
- **Global Multi-Currency Engine:** Live automatic conversion across **USD ($)**, **EUR (€)**, **GBP (£)**, and **PKR (₨)**.
- **1-Click Windows Server Automation:**
  - `START_STORE.bat`: Starts Store frontend (5173), starts MongoDB API (5000), and opens browser automatically.
  - `STOP_STORE.bat`: Shuts down both port 5173 and port 5000 cleanly.
- **Git & Cloud Deployment Ready:** Clean local Git repository committed and configured for immediate push to user's GitHub, Vercel, and Netlify.

---

## 2. Directory Structure

```
Luxe Apparel Store/
├── .env                         # Environment keys (Stripe Public Key, MongoDB URI, Port)
├── .gitignore                   # Git ignore file for clean repositories
├── index.html                   # HTML entry point with Google Fonts (Playfair Display & Plus Jakarta Sans)
├── package.json                 # Project dependencies, scripts & metadata
├── vite.config.js               # Vite build tool configuration (port 5173, host enabled)
├── tailwind.config.js           # Tailwind configuration with luxury color palette & typography
├── postcss.config.js            # PostCSS plugin pipeline (Tailwind & Autoprefixer)
├── vercel.json                  # Vercel live cloud hosting configuration with SPA routing
├── netlify.toml                 # Netlify live cloud deployment configuration
├── START_STORE.bat              # 🟢 1-Click launcher: boots frontend + backend and opens browser
├── STOP_STORE.bat               # 🔴 1-Click shutdown: kills processes on port 5173 and 5000 cleanly
├── BUILD_PRODUCTION.bat         # 📦 1-Click compiler: builds optimized production bundle into dist/
├── DEPLOYMENT_GUIDE.md          # 🌐 Complete step-by-step guide to hosting the store online for free
├── STORE_SYSTEM_MANUAL.md       # 📖 Master system manual & operations guide (this file)
├── SYSTEM_CHANGELOG.md          # 📝 Complete itemized changelog of all platform modifications
├── EXECUTIVE_BUSINESS_MODEL.md  # 📊 Executive corporate business model & system architecture conclusion
├── data/                        # 💾 Local Persistent Data Records (Admin & Client Database)
│   ├── users.json               # Seeded client dossiers & superadmin accounts
│   ├── orders.json              # Itemized orders with Stripe, COD & 6-step tracking timelines
│   └── admin_notifications.json # Live event alerts dispatched to arifmuneeb81@gmail.com
├── server/                      # 🗄️ MongoDB & Express Backend API
│   ├── server.js                # Express app, MongoDB connection, Auth/Product/Order/Stripe endpoints
│   ├── package.json             # Backend dependencies (express, mongoose, cors, dotenv)
│   └── models/
│       ├── User.js              # Mongoose user identification schema
│       ├── Product.js           # Mongoose garment product schema
│       └── Order.js             # Mongoose order transaction schema
└── src/
    ├── main.jsx                 # React root renderer
    ├── App.jsx                  # Master store application layout coordinating all modules
    ├── index.css                # Global CSS, typography tokens, custom luxury scrollbar
    ├── data/
    │   └── products.js          # Curated 12+ haute couture products with dual photography, prices, badges
    ├── context/
    │   └── StoreContext.jsx     # Global state: Auth, Multi-Currency, Persistent Cart/Wishlist, Admin, Coupons
    └── components/
        ├── AnnouncementBar.jsx  # Rotating top announcement messages + real-time currency selector
        ├── Navbar.jsx           # Swapped layout: Logo Left, Menu Center, User ID & Cart Right
        ├── HeroSlider.jsx       # Editorial runway lookbook slider with auto-transition & custom CTAs
        ├── BrandTrustBar.jsx    # 4 luxury trust pillars with elegant gold emblems
        ├── CategoryShowcase.jsx # Editorial grid of curated collections (Women, Men, Atelier, Accessories)
        ├── ProductFilters.jsx   # Multi-tier filter drawer (Gender, Categories, Sizes, Price Slider, Sorting)
        ├── ProductCard.jsx      # Luxury card with hover angle flip, quick size picker, wishlist toggle, Add to Bag
        ├── ProductGrid.jsx      # Responsive catalog masonry with real-time reactive filtering & empty states
        ├── CartDrawer.jsx       # Slide-out shopping bag, free shipping meter, promo coupon codes & live totals
        ├── QuickViewModal.jsx   # Multi-angle high-res garment modal with size/color picker and stock badge
        ├── CheckoutModal.jsx    # Multi-step checkout with Stripe card container & celebratory confetti
        ├── AuthModal.jsx        # Client ID sign-up and sign-in modal with validation and demo login
        ├── UserProfileModal.jsx # Client profile dossier with saved delivery address and past orders list
        ├── TrackOrderModal.jsx  # 6-step visual consignment delivery timeline & courier inspection modal
        ├── AdminPortal.jsx      # Superadmin control center: Products, 1-Click Order verification, Users, Alerts
        ├── Toast.jsx            # Floating feedback alert for Cart and Wishlist actions
        └── Footer.jsx           # Luxury newsletter signup, client concierge links & atelier locations
```

---

## 3. 1-Click Server Control (Local Testing)

- **🟢 Server ON:** `START_STORE.bat` par double-click karein. 
  - Frontend (`http://localhost:5173`) aur Backend API (`http://localhost:5000`) dono start honge aur browser auto-launch hoga.
- **🔴 Server OFF:** `STOP_STORE.bat` par double-click karein. 
  - Port `5173` aur `5000` dono safely terminate ho jayengi.

---

## 4. Stripe Payment Setup

Aapko code mein koi tabdeeli karne ki zaroorat nahi hai:
1. Apne Stripe Dashboard ([dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)) se **Publishable Key** copy karein.
2. Store folder mein mojood **`.env`** file khol kar wahan paste kar dein:
   ```env
   VITE_STRIPE_PUBLIC_KEY="pk_live_aapki_key_yahan"
   ```
3. Checkout modal mein **STRIPE** option pehle se configured hai aur live cards accept karne ke liye tayyar hai.

---

## 5. MongoDB Database Connection

Store folder mein mojood **`server/`** directory mein Express + Mongoose backend tayyar hai:
1. Agar aap **MongoDB Atlas (Cloud)** use kar rahe hain, to `.env` mein apna URI dalein:
   ```env
   MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/luxe_store"
   ```
2. Agar MongoDB offline ya configure nahi bhi hai, to system **Local High-Performance Mode (LocalStorage)** mein seamlessly chalta rahega taake koi error na aaye.

---

## 6. GitHub Push & Live Cloud Deployment (Vercel & Netlify)

1. **GitHub Push:**
   - Git repository pehle se initialize aur committed hai.
   - Jab aap apna GitHub URL denge:
     ```bash
     git remote add origin https://github.com/AapkaUsername/AapkaRepo.git
     git branch -M main
     git push -u origin main
     ```
2. **Vercel / Netlify Deployment:**
   - Vercel: `vercel.json` configured hai. Sirf repo connect karein ya terminal mein `npx vercel` run karein.
   - Netlify: `BUILD_PRODUCTION.bat` run kar ke `dist/` folder ko [app.netlify.com/drop](https://app.netlify.com/drop) par drag-and-drop kar dein.
