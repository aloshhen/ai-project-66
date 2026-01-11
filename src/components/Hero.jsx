import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../utils'

export default function Hero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-900/10 to-slate-950 opacity-20"></div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
            Кофе. Код. Крипто.
          </h1>
          <p className="mt-6 text-xl text-slate-400">
            Система лояльности нового поколения для кофейных заведений с поддержкой криптовалют и NFT
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 rounded-xl text-white font-medium shadow-lg shadow-orange-500/20"
            >
              Начать работу
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/10 rounded-xl text-white font-medium hover:bg-white/5 transition-colors"
            >
              Документация
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}