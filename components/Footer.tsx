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
              Lüleburgaz&apos;ın en lezzetli sandviç, kahvaltı ve ev yapımı yemekleri
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#ff6b35]" />
              Adres
            </h4>
            <address className="text-gray-400 text-sm not-italic">
              [Tam Adres Buraya Eklenecek]<br />
              Lüleburgaz, Kırklareli<br />
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
                <a href="tel:+905551234567" className="hover:text-[#ff6b35] transition-colors">
                  +90 555 123 45 67
                </a>
              </p>
              <p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Tutico+Lüleburgaz" 
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
              <p>Hafta İçi: 09:00 - 22:00</p>
              <p>Hafta Sonu: 09:00 - 23:00</p>
            </div>
            
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff6b35] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
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
            © {new Date().getFullYear()} Tutico Lüleburgaz. Tüm hakları saklıdır.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Lüleburgaz Sandviç | Lüleburgaz Kahvaltı | Lüleburgaz Yemek | Lüleburgaz Mantı
          </p>
        </div>
      </div>
    </footer>
  );
}
