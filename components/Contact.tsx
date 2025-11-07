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
                    [Tam Adres Buraya Eklenecek]<br />
                    Lüleburgaz, Kırklareli
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
                    href="tel:+905551234567" 
                    className="text-gray-700 hover:text-[#ff6b35] transition-colors"
                  >
                    +90 555 123 45 67
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
                    <p>Hafta İçi: 09:00 - 22:00</p>
                    <p>Hafta Sonu: 09:00 - 23:00</p>
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
              className="h-[400px] rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47659.84983335681!2d27.35!3d41.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4f3e3c3c3c3c3%3A0x3c3c3c3c3c3c3c3c!2zTMO8bGVidXJnYXo!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tutico Lüleburgaz Konum"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
