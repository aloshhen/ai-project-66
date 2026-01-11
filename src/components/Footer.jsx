import React from 'react'
import { cn } from '../utils'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              CoffeeChain
            </h3>
            <p className="text-slate-400 mb-4">
              Высокотехнологичная кофейная экосистема с интеграцией криптовалют и NFT
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H9v-3h3a3 3 0 0 0 3-3V9a5 5 0 0 0-5-5H6" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.27 19.27 0 0 1-3.07-8.87A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11A8.97 8.97 0 0 0 5 9.81a8.96 8.96 0 0 0 4.5 8.2 12.84 12.84 0 0 1 2.82.7A2 2 0 0 1 12 22h3a2 2 0 0 1 1.72-1.1A12.84 12.84 0 0 0 19.89 9a8.98 8.98 0 0 0 2.3-5.7 19.59 19.59 0 0 0-6-6.42 2 2 0 0 1-1.1-1.72V3.1a2 2 0 0 1 2.18-2A19.8 19.8 0 0 1 22 16.92z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-slate-200">Продукт</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white">Функции</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Цены</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Интеграции</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Документация</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-slate-200">Ресурсы</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white">Блог</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Сообщество</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Помощь</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-slate-200">Компания</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white">О нас</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Карьера</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Контакты</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Политика конфиденциальности</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-slate-400">
          <p>© {new Date().getFullYear()} CoffeeChain. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}