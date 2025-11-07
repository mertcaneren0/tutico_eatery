'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface MenuItem {
  name: string;
  description: string;
  image: string;
}

const sandwiches: MenuItem[] = [
  {
    name: 'Klasik Sandviç',
    description: 'Taze malzemelerle hazırlanan özel soslu sandviç',
    image: '/images/sandwich-placeholder.jpg',
  },
  {
    name: 'Tavuklu Sandviç',
    description: 'Izgara tavuk göğsü, taze sebzeler ve özel sos',
    image: '/images/sandwich-placeholder.jpg',
  },
  {
    name: 'Köfteli Sandviç',
    description: 'Ev yapımı köfte, karamelize soğan ve cheddar peyniri',
    image: '/images/sandwich-placeholder.jpg',
  },
];

const breakfast: MenuItem[] = [
  {
    name: 'Serpme Kahvaltı',
    description: 'Zengin çeşitlerle dolu serpme kahvaltı tabağı',
    image: '/images/breakfast-placeholder.jpg',
  },
  {
    name: 'Menemen',
    description: 'Taze domatesli, biberli geleneksel menemen',
    image: '/images/breakfast-placeholder.jpg',
  },
  {
    name: 'Gözleme',
    description: 'El açması hamurdan peynirli veya patatesli gözleme',
    image: '/images/breakfast-placeholder.jpg',
  },
];

const snacks: MenuItem[] = [
  {
    name: 'Kruvasan',
    description: 'Tereyağlı, çıtır çıtır taze kruvasanlar',
    image: '/images/croissant-placeholder.jpg',
  },
  {
    name: 'Poğaça',
    description: 'Peynirli, patatesli veya zeytinli poğaçalar',
    image: '/images/pogaca-placeholder.jpg',
  },
  {
    name: 'Tost',
    description: 'Kaşarlı veya karışık tost çeşitleri',
    image: '/images/toast-placeholder.jpg',
  },
];

const MenuCard = ({ item, index }: { item: MenuItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <div className="relative h-48 bg-gray-200">
      {/* Placeholder for images */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200">
        <span className="text-4xl">🍽️</span>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
      <p className="text-gray-600 text-sm">{item.description}</p>
    </div>
  </motion.div>
);

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main H1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tutico Lüleburgaz: Sandviç, Kahvaltı ve Eşsiz Lezzetler
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lüleburgaz&apos;ın en taze ve lezzetli yemeklerini keşfedin. Her gün taze malzemelerle hazırlanan özel tariflerimiz.
          </p>
        </motion.div>

        {/* Sandwiches Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
          >
            Lüleburgaz Sandviç Çeşitlerimiz
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sandwiches.map((item, index) => (
              <MenuCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Breakfast Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
          >
            Zengin Lüleburgaz Kahvaltı Seçenekleri
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {breakfast.map((item, index) => (
              <MenuCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Mantı Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
          >
            Ev Yapımı Lüleburgaz Mantısı
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Geleneksel Mantı
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Ev yapımı hamurdan, özenle hazırlanmış mantılarımız. Yoğurt ve tereyağlı sos ile servis edilir. 
                  Lüleburgaz&apos;da geleneksel lezzetin en güzel hali.
                </p>
              </div>
              <div className="relative h-64 bg-gradient-to-br from-orange-200 to-red-200 rounded-xl flex items-center justify-center">
                <span className="text-6xl">🥟</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Snacks Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
          >
            Atıştırmalıklar ve Kruvasanlar
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {snacks.map((item, index) => (
              <MenuCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
