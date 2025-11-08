'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative px-4 pt-20">
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

        <div className="max-w-6xl w-full relative z-10">
          

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-center mt-200"
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
        </div>
      </section>
    </>
  );
}
