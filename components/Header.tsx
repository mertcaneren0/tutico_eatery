'use client';

import { useState } from 'react';
import OrderModal from '@/components/OrderModal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 right-0 z-50 p-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-3 bg-[#ff6b35] text-white text-base font-semibold rounded-full hover:bg-[#ff5722] transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Sipariş Ver
        </button>
      </header>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
