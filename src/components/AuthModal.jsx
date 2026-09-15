import React, { useState } from 'react'
import { X, Lock, Mail, User, Phone, MapPin, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react'
import { useStore } from '../context/StoreContext'

export default function AuthModal() {
  const {
    isAuthModalOpen,
    setIsAuthModalOpen,
    authModalMode,
    setAuthModalMode,
    login,
    register
  } = useStore()

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    city: '',
    postalCode: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (!isAuthModalOpen) return null

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    setTimeout(() => {
      if (authModalMode === 'login') {
        const res = login(form.email, form.password)
        if (!res.success) {
          setError(res.message)
        }
      } else {
        if (!form.name.trim() || !form.email.trim() || !form.password) {
          setError('Please fill all required fields.')
          setLoading(false)
          return
        }
        const res = register(form)
        if (!res.success) {
          setError(res.message)
        }
      }
      setLoading(false)
    }, 600)
  }

  const fillDemo = () => {
    setForm({
      name: 'Muneeb Ahmad',
      email: 'client@luxury.com',
      password: 'password123',
      phone: '+1 (555) 019-2834',
      address: '742 Evergreen Boulevard, Penthouse 4B',
      city: 'New York',
      postalCode: '10001'
    })
    setAuthModalMode('login')
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto select-none">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={() => setIsAuthModalOpen(false)}
      />

      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="relative w-full max-w-md bg-[#111111] border border-[#2A2A2A] rounded-2xl overflow-hidden shadow-2xl z-10 text-[#FAF9F6] animate-fade-in">
          
          {/* Close Button */}
          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-[#D4AF37] hover:text-black text-white flex items-center justify-center border border-white/20 transition"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="p-6 sm:p-8 bg-[#0A0A0A] border-b border-[#222222] text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F5E6B3] flex items-center justify-center text-black font-serif font-bold text-xl mx-auto mb-3 shadow-lg shadow-[#D4AF37]/20">
              L
            </div>
            <h2 className="font-serif tracking-luxury text-xl font-bold uppercase text-[#FAF9F6]">
              LUXE ATELIER PRIVÉ
            </h2>
            <p className="text-xs text-[#888888] font-light mt-1 tracking-wider uppercase">
              {authModalMode === 'login' ? 'Sign In To Your Client Account' : 'Create Your Maison Identification'}
            </p>

            {/* Mode Switcher Tabs */}
            <div className="flex border border-[#2A2A2A] rounded-lg p-1 bg-[#141414] mt-5">
              <button
                type="button"
                onClick={() => {
                  setAuthModalMode('login')
                  setError('')
                }}
                className={`flex-1 py-2 text-xs font-semibold tracking-wider uppercase rounded transition ${
                  authModalMode === 'login'
                    ? 'bg-[#D4AF37] text-black shadow'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthModalMode('register')
                  setError('')
                }}
                className={`flex-1 py-2 text-xs font-semibold tracking-wider uppercase rounded transition ${
                  authModalMode === 'register'
                    ? 'bg-[#D4AF37] text-black shadow'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                Create Account
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            {error && (
              <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/50 text-red-400 text-xs text-center">
                {error}
              </div>
            )}

            {authModalMode === 'register' && (
              <div>
                <label className="text-[11px] text-[#AAAAAA] uppercase tracking-wider block mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#666666] absolute left-3 top-3.5" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Muneeb Ahmad"
                    required
                    className="w-full bg-[#161616] border border-[#2B2B2B] focus:border-[#D4AF37] text-xs text-white pl-9 pr-3 py-3 rounded outline-none"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-[11px] text-[#AAAAAA] uppercase tracking-wider block mb-1">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#666666] absolute left-3 top-3.5" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  placeholder="client@luxury.com"
                  required
                  className="w-full bg-[#161616] border border-[#2B2B2B] focus:border-[#D4AF37] text-xs text-white pl-9 pr-3 py-3 rounded outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] text-[#AAAAAA] uppercase tracking-wider block mb-1">
                Password *
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#666666] absolute left-3 top-3.5" />
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  required
                  className="w-full bg-[#161616] border border-[#2B2B2B] focus:border-[#D4AF37] text-xs text-white pl-9 pr-3 py-3 rounded outline-none"
                />
              </div>
            </div>

            {authModalMode === 'register' && (
              <>
                <div>
                  <label className="text-[11px] text-[#AAAAAA] uppercase tracking-wider block mb-1">
                    Phone Number (Optional)
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#666666] absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 019-2834"
                      className="w-full bg-[#161616] border border-[#2B2B2B] focus:border-[#D4AF37] text-xs text-white pl-9 pr-3 py-3 rounded outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-[#AAAAAA] uppercase tracking-wider block mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleInputChange}
                      placeholder="New York"
                      className="w-full bg-[#161616] border border-[#2B2B2B] focus:border-[#D4AF37] text-xs text-white p-3 rounded outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-[#AAAAAA] uppercase tracking-wider block mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={form.postalCode}
                      onChange={handleInputChange}
                      placeholder="10001"
                      className="w-full bg-[#161616] border border-[#2B2B2B] focus:border-[#D4AF37] text-xs text-white p-3 rounded outline-none"
                    />
                  </div>
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3.5 bg-[#D4AF37] hover:bg-[#B38F22] text-black font-bold text-xs tracking-luxury uppercase rounded transition flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 disabled:opacity-50"
            >
              {loading ? (
                <span>AUTHENTICATING...</span>
              ) : (
                <>
                  <span>{authModalMode === 'login' ? 'SIGN IN' : 'CREATE MAISON ACCOUNT'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Quick Demo Login Option */}
            <div className="pt-2">
              <button
                type="button"
                onClick={fillDemo}
                className="w-full py-2 bg-[#181818] hover:bg-[#222222] border border-[#333333] text-[11px] text-[#D4AF37] rounded transition"
              >
                Use Demo VIP Account Credentials
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] text-[#666666] pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#888888]" />
              <span>Encrypted Client Credentials • Strict Atelier Privacy</span>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}
