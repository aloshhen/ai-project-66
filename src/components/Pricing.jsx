import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../utils'

export default function Pricing() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold tracking-tighter text-center mb-16 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
          Тарифы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-xl font-bold mb-2">Lite</h3>
            <p className="text-slate-400 mb-4">Базовый функционал для маленьких кофеен</p>
            <div className="text-3xl font-bold mb-6">$9.99/мес</div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-slate-400">
                <span className="w-5 h-5 mr-2 rounded-full bg-green-500/30 flex items-center justify-center">
                  <span className="text-green-500 text-xs">✓</span>
                </span>
                Базовая аналитика
              </li>
              <li className="flex items-center text-slate-400">
                <span className="w-5 h-5 mr-2 rounded-full bg-green-500/30 flex items-center justify-center">
                  <span className="text-green-500 text-xs">✓</span>
                </span>
                Оплата криптовалютой
              </li>
              <li className="flex items-center text-slate-400">
                <span className="w-5 h-5 mr-2 rounded-full bg-red-500/30 flex items-center justify-center">
                  <span className="text-red-500 text-xs">✗</span>
                </span>
                NFT-бонусы
              </li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
              Выбрать
            </button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600/30 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="px-3 py-1 bg-orange-500/30 text-white rounded-full text-sm font-medium">
                Самый популярный
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <p className="text-slate-400 mb-4">Расширенный функционал для средних кофеен</p>
            <div className="text-3xl font-bold mb-6">$29.99/мес</div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-slate-400">
                <span className="w-5 h-5 mr-2 rounded-full bg-green-500/30 flex items-center justify-center">
                  <span className="text-green-500 text-xs">✓</span>
                </span>
                Расширенная аналитика
              </li>
              <li className="flex items-center text-slate-400">
                <span className="w-5 h-5 mr-2 rounded-full bg-green-500/30 flex items-center justify-center">
                  <span className="text-green-500 text-xs">✓</span>
                </span>
                Оплата криптовалютой
              </li>
              <li className="flex items-center text-slate-400">
                <span className="w-5 h-5 mr-2 rounded-full bg-green-500/30 flex items-center justify-center">
                  <span className="text-green-500 text-xs">✓</span>
                </span>
                NFT-бонусы
              </li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
              Выбрать
            </button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <p className="text-slate-400 mb-4">Полный функционал для крупных кофейных сетей</p>
            <div className="text-3xl font-bold mb-6">$99.99/мес</div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-slate-400">
                <span className="w-5 h-5 mr-2 rounded-full bg-green-500/30 flex items-center justify-center">
                  <span className="text-green-500 text-xs">✓</span>
                </span>
                Полная аналитика
              </li>
              <li className="flex items-center text-slate-400">
                <span className="w-5 h-5 mr-2 rounded-full bg-green-500/30 flex items-center justify-center">
                  <span className="text-green-500 text-xs">✓</span>
                </span>
                Оплата криптовалютой
              </li>
              <li className="flex items-center text-slate-400">
                <span className="w-5 h-5 mr-2 rounded-full bg-green-500/30 flex items-center justify-center">
                  <span className="text-green-500 text-xs">✓</span>
                </span>
                NFT-бонусы
              </li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
              Выбрать
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}