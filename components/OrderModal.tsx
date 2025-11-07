'use client';

import { X } from 'lucide-react';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const orderOptions = [
  {
    name: 'GetirYemek',
    url: 'https://www.getir.com/yemek/',
    color: 'bg-purple-600',
    hoverColor: 'hover:bg-purple-700',
  },
  {
    name: 'Yemeksepeti',
    url: 'https://www.yemeksepeti.com/',
    color: 'bg-red-600',
    hoverColor: 'hover:bg-red-700',
  },
  {
    name: 'Trendyol Yemek',
    url: 'https://www.trendyol.com/yemek',
    color: 'bg-orange-600',
    hoverColor: 'hover:bg-orange-700',
  },
  {
    name: 'WhatsApp Sipariş',
    url: 'https://wa.me/905551234567',
    color: 'bg-green-600',
    hoverColor: 'hover:bg-green-700',
  },
  {
    name: 'QR Menü',
    url: '#menu',
    color: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700',
  },
];

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
                <h2 className="text-2xl font-bold text-gray-900">
                  Sipariş Alternatifleri
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Kapat"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 text-center">
                  Size en uygun sipariş yöntemini seçin
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {orderOptions.map((option, index) => (
                    <motion.a
                      key={option.name}
                      href={option.url}
                      target={option.url.startsWith('http') ? '_blank' : '_self'}
                      rel={option.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={option.url === '#menu' ? onClose : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`${option.color} ${option.hoverColor} text-white p-6 rounded-xl text-center font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-xl transform hover:-translate-y-1`}
                    >
                      {option.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
