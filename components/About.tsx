'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="hakkimizda" className="py-20 bg-gradient-to-br from-[#fef9f3] to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Biz Kimiz? (Tutico&apos;nun Hikayesi)
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Tutico, Lüleburgaz&apos;ın kalbinde, lezzet tutkunlarına hizmet vermek için kuruldu. 
                Misyonumuz, her gün taze malzemelerle hazırladığımız ev yapımı lezzetleri sizlerle buluşturmak.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Sandviçlerimizden kahvaltı çeşitlerimize, mantılarımızdan atıştırmalıklarımıza kadar 
                her ürünümüzü özenle seçilmiş malzemelerle ve hijyenik koşullarda hazırlıyoruz.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Lüleburgaz&apos;da kalite ve lezzeti bir araya getiren Tutico, müşteri memnuniyetini 
                her şeyin önünde tutar. Geleneksel tatları modern dokunuşlarla harmanlayarak, 
                unutulmaz bir lezzet deneyimi sunuyoruz.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 bg-orange-50 rounded-xl">
                  <div className="text-4xl mb-3">🥖</div>
                  <h3 className="font-bold text-gray-900 mb-2">Taze Malzemeler</h3>
                  <p className="text-gray-600 text-sm">Her gün taze tedarik edilen kaliteli ürünler</p>
                </div>
                
                <div className="text-center p-6 bg-orange-50 rounded-xl">
                  <div className="text-4xl mb-3">👨‍🍳</div>
                  <h3 className="font-bold text-gray-900 mb-2">Ev Yapımı</h3>
                  <p className="text-gray-600 text-sm">Geleneksel tariflerle özenle hazırlanmış</p>
                </div>
                
                <div className="text-center p-6 bg-orange-50 rounded-xl">
                  <div className="text-4xl mb-3">❤️</div>
                  <h3 className="font-bold text-gray-900 mb-2">Müşteri Memnuniyeti</h3>
                  <p className="text-gray-600 text-sm">Sizin için en iyisini sunmak önceliğimiz</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
