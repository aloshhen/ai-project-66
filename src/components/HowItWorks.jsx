import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../utils'
import { Coffee, Wallet, Trophy, BarChart3 } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold tracking-tighter text-center mb-16 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
          Как это работает
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/10"></div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="relative pb-8">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="ml-16">
                  <h3 className="text-xl font-bold mb-2">Создайте аккаунт</h3>
                  <p className="text-slate-400">
                    Зарегистрируйтесь в системе и подключите кофейню к экосистеме CoffeeChain
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div className="relative pb-8">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="ml-16">
                  <h3 className="text-xl font-bold mb-2">Покупайте кофе</h3>
                  <p className="text-slate-400">
                    Оплачивайте кофе криптовалютой и получайте NFT-бонусы за каждую покупку
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <div className="relative pb-8">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="ml-16">
                  <h3 className="text-xl font-bold mb-2">Получайте прибыль</h3>
                  <p className="text-slate-400">
                    Используйте аналитику для оптимизации продаж и увеличения лояльности клиентов
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}