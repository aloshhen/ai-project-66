import React from 'react'
import { cn } from '../utils'
import { Coffee, Wallet, Trophy, BarChart3 } from 'lucide-react'

export default function Navigation() {
  const isTelegram = typeof window !== 'undefined' && window.Telegram?.WebApp?.initData

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-slate-950/80 border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
          CoffeeChain
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-slate-400 hover:text-white transition-colors">Фишки</a>
          <a href="#how-it-works" className="text-slate-400 hover:text-white transition-colors">Как работает</a>
          <a href="#pricing" className="text-slate-400 hover:text-white transition-colors">Тарифы</a>
          <a href="#login" className="text-slate-400 hover:text-white transition-colors">Войти</a>
        </div>
        {isTelegram && (
          <button 
            onClick={() => window.Telegram?.WebApp.openTelegramLink('https://t.me/coffeecommunity')} 
            className="md:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="M12 16l-4-2 4-5 4 5-4 2z" />
            </svg>
          </button>
        )}
      </div>
    </nav>
  )
}