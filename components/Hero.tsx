'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {

  return (
    <>
      <section className="min-h-screen flex items-center justify-center md:justify-end relative px-4 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/0"></div>
        </div>

        {/* Order Platforms - Mobile: Center, Desktop: Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-3 w-full max-w-xs md:w-64 relative z-10"
        >
            {/* GetirYemek */}
            <a
              href="https://www.getir.com/yemek/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-3.5 md:p-4 hover:bg-white/30 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <p className="text-white font-semibold text-center text-sm md:text-base">GetirYemek</p>
            </a>

            {/* Yemeksepeti */}
            <a
              href="https://www.yemeksepeti.com/restaurant/sgyz/tutico-eatery"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-3.5 md:p-4 hover:bg-white/30 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <p className="text-white font-semibold text-center text-sm md:text-base">Yemeksepeti</p>
            </a>

            {/* Trendyol Yemek */}
            <a
              href="https://trendyolgo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-3.5 md:p-4 hover:bg-white/30 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <p className="text-white font-semibold text-center text-sm md:text-base">Trendyol Yemek</p>
            </a>

            {/* Migros Yemek */}
            <a
              href="https://www.migros.com.tr/yemek?srsltid=AfmBOopONeTehBH88NwmZeHRX1GNaV4909vBADpbt6ElRuHXm3qTfRl2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-3.5 md:p-4 hover:bg-white/30 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <p className="text-white font-semibold text-center text-sm md:text-base">Migros Yemek</p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/905449107680"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-3.5 md:p-4 hover:bg-white/30 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <p className="text-white font-semibold text-center text-sm md:text-base">WhatsApp Sipariş</p>
            </a>

            {/* Telefon */}
            <a
              href="tel:+905449107680"
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-3.5 md:p-4 hover:bg-white/30 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <p className="text-white font-semibold text-center text-sm md:text-base">Telefon Sipariş</p>
            </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="inline-block animate-bounce">
            <svg
              className="w-6 h-6 text-white drop-shadow-md"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </section>
    </>
  );
}
