import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../utils'
import { Coffee, Wallet, Trophy, BarChart3 } from 'lucide-react'

export default function Features() {
  return (
    <section className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold tracking-tighter text-center mb-16 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
          Фишки
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-orange-500/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 flex items-center justify-center mb-4">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Order</h3>
            <p className="text-slate-400">
              Предзаказ кофе через мобильное приложение с возможностью оплаты криптовалютой
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-orange-500/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 flex items-center justify-center mb-4">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Crypto Payments</h3>
            <p className="text-slate-400">
              Поддержка TON и Stars для оплаты кофе и получения бонусов
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-orange-500/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">NFT Loyalty</h3>
            <p className="text-slate-400">
              Уникальные NFT-бонусы за каждую покупку в кофейне
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-orange-500/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Live Analytics</h3>
            <p className="text-slate-400">
              Данные о продажах и лояльности в реальном времени для владельцев кофеен
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}