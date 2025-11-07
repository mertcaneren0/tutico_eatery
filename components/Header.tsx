'use client';

import Image from 'next/image';
import { useState } from 'react';
import OrderModal from './OrderModal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/tutico_turuncu.jpg"
              alt="Tutico Logo"
              width={50}
              height={50}
              className="rounded-full"
              priority
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('hakkimizda')}
              className="px-6 py-2.5 text-sm font-medium text-gray-700 hover:text-[#ff6b35] transition-colors duration-200"
            >
              Hakkımızda
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 bg-[#ff6b35] text-white text-sm font-medium rounded-full hover:bg-[#ff5722] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Sipariş Ver
            </button>
          </div>
        </div>
      </header>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
