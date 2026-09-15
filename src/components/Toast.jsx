import React from 'react'
import { Sparkles, CheckCircle } from 'lucide-react'
import { useStore } from '../context/StoreContext'

export default function Toast() {
  const { toastMessage } = useStore()

  if (!toastMessage) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-[#141414]/95 backdrop-blur-md border border-[#D4AF37]/60 text-white shadow-2xl shadow-black">
        <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <p className="text-xs font-medium tracking-wide text-[#FAF9F6]">
          {toastMessage}
        </p>
      </div>
    </div>
  )
}
