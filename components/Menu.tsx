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
    name: 'Tavuklu Salatali Sandviç',
    description: 'Taze pişmiş ekşi mayalı ekmak, tavuk salatası (tiftiklenmiş tavuk göğsü, tatlı & ekşi salatalık turşusu, mısır, mayonez), kaşar peyniri, marul, mor soğan ',
    image: '/images/tavuklu_sandvic.png',
  },
  {
    name: 'Hindi Füme Sandviç',
    description: 'Taze pişmiş ekşi mayalı esmer ekmek arasına; pesto mayonez, hindi füme, taze kaşar peyniri, marul, roka, mor soğan',
    image: '/images/hindifume_sandvic.png',
  },
  {
    name: 'Hangover Sandviç',
    description: 'Taşe pişmiş ekşi mayalı esmer ekmek; tane hardallı mayonez, hangover sos (közlenmiş kapya biber, domates, kereviz sapı, tane karabiber, çok az miktarda madonuz ve sarımsak) , trakya eski kaşar peyniri, taze kaşar peyniri, marul, roka ',
    image: '/images/hangover_sandvic.png',
  },
];

const breakfast: MenuItem[] = [
  {
    name: 'Baya Karışık Tost',
    description: 'Ev yapımı salça, kasap sucuk, taze kaşar peyniri, dana jambon, cheddar peyniri, amerikan salatası',
    image: '/images/bayakarisiktost.png',
  },
  {
    name: 'Beyaz Peynirli Lutenitsalı Tost',
    description: 'Trakya sert beyaz peynir, trakya yumuşak beyaz peynir, lutenitsa (közlenmiş patlıcan, közlenmiş kapya biber, domates, maydanoz, çok az sarımsak',
    image: '/images/beyazpeynirli.png',
  },
  {
    name: 'Kahvehane Tost',
    description: 'Ev yapımı salça, kasap sucuk, taze kaşar peyniri',
    image: '/images/kahvehane.png',
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
      <Image
        src={item.image}
        alt={item.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
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
            Tutico Lüleburgaz: Sandviç, Tost, Kuruvasan ve Eşsiz Lezzetler
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lüleburgaz&apos;ın en taze lezettelerini keşfedin. Her gün taze malzemelerle hazırlanan özel tariflerimiz.
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
            Tost Çeşitlerimiz
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
            Ev Yapımı Tepsi Mantısı
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
                  
                </p>
              </div>
              <div className="relative h-140 rounded-xl overflow-hidden">
                <Image
                  src="/images/manti.png"
                  alt="Ev Yapımı Tepsi Mantısı"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}
