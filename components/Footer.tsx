'use client';

import { Facebook, Instagram, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#ff6b35]">Tutico</h3>
            <p className="text-gray-400 text-sm">
              Lüleburgaz&apos;ın en lezzetli sandviç, tost, kruvasan, mantı ve daha fazlası
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#ff6b35]" />
              Adres
            </h4>
            <address className="text-gray-400 text-sm not-italic">
              Siteler, Nazif Balkan Cd. No:11 D:B, 39750 Lüleburgaz/Kırklareli, Türkiye<br />
              Türkiye
            </address>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#ff6b35]" />
              İletişim
            </h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>
                <a href="tel:+905449107680" className="hover:text-[#ff6b35] transition-colors">
                  +90 544 910 76 80
                </a>
              </p>
              <p>
                <a 
                  href="https://www.google.com/maps/place/TutiCo/@41.393341500000005,27.353369199999996,17z" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#ff6b35] transition-colors"
                >
                  Google Maps&apos;te Görüntüle
                </a>
              </p>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#ff6b35]" />
              Çalışma Saatleri
            </h4>
            <div className="text-gray-400 text-sm space-y-2 mb-4">
              <p>Her gün: 08:30 - 20:00</p>
              <p>Salı kapalıyız</p>
            </div>
            
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/tuticoluleburgaz/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff6b35] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/tuticoluleburgaz/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff6b35] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Good design speaks. Our design flirts. – 21collective™
          </p>
          
        </div>
      </div>
    </footer>
  );
}
