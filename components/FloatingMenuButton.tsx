'use client';

import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const MENU_URL = 'https://view.qrall.co/tr?tenantId=3a19db41-2cb9-f8da-daf2-db752e3bb6ee&channelId=3a19db41-2fb2-44a7-0b88-1f0a8a79fe0b';

export default function FloatingMenuButton() {
  return (
    <motion.a
      href={MENU_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-[#ff6b35] hover:bg-[#ff5722] text-white px-4 py-3 md:px-6 md:py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2 md:gap-3 group"
    >
      <Menu className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-180 transition-transform duration-300" />
      <span className="font-semibold text-sm md:text-base whitespace-nowrap">
        Menümüzün Tamamı
      </span>
    </motion.a>
  );
}
