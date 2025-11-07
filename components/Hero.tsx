'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import OrderModal from './OrderModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cards = [
    {
      title: 'Menümüz',
      action: () => scrollToSection('menu'),
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Hakkımızda',
      action: () => scrollToSection('hakkimizda'),
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Sipariş Alternatifleri',
      action: () => setIsModalOpen(true),
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fef9f3] to-white px-4 pt-20">
        <div className="max-w-6xl w-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Image
              src="/tutico_turuncu.jpg"
              alt="Tutico Lüleburgaz"
              width={150}
              height={150}
              className="mx-auto rounded-full shadow-2xl mb-6"
              priority
            />
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Tutico
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Lüleburgaz&apos;ın Lezzet Durağı
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cards.map((card, index) => (
              <motion.button
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={card.action}
                className={`bg-gradient-to-br ${card.gradient} text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`}
              >
                <h2 className="text-2xl md:text-3xl font-bold">{card.title}</h2>
              </motion.button>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-center mt-16"
          >
            <div className="inline-block animate-bounce">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
