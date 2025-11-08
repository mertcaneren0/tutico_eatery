'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="iletisim" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Bize Ulaşın
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4 p-6 bg-orange-50 rounded-xl"
              >
                <MapPin className="w-6 h-6 text-[#ff6b35] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Adres</h3>
                  <p className="text-gray-700">
                    Siteler, Nazif Balkan Cd. No:11 D:B, 39750 Lüleburgaz/Kırklareli, Türkiye
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 p-6 bg-orange-50 rounded-xl"
              >
                <Phone className="w-6 h-6 text-[#ff6b35] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Telefon</h3>
                  <a 
                    href="tel:+905449107680" 
                    className="text-gray-700 hover:text-[#ff6b35] transition-colors"
                  >
                    +90 544 910 76 80
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4 p-6 bg-orange-50 rounded-xl"
              >
                <Clock className="w-6 h-6 text-[#ff6b35] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Çalışma Saatleri</h3>
                  <div className="text-gray-700 space-y-1">
                    <p>Her gün: 08:30 - 20:00</p>
                    <p>Salı kapalyız</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="h-[450px] rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.1134966795476!2d27.353369199999996!3d41.393341500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4a529ae576059%3A0x4a6efd54541b78ac!2sTutiCo!5e0!3m2!1str!2suk!4v1762567362704!5m2!1str!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TutiCo. Lüleburgaz Konum"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
