# Tutico Lüleburgaz - Proje Geliştirme Planı

## Proje Özeti
- **Marka**: Tutico
- **Lokasyon**: Lüleburgaz, Türkiye
- **Teknoloji**: Next.js (SSG), React, TailwindCSS
- **Hedef**: SEO odaklı, modern, yüksek performanslı website

## SEO Hedef Anahtar Kelimeler
- lüleburgaz sandviç
- lüleburgaz yemek
- lüleburgaz kahvaltı
- lüleburgaz mantı
- tutico lüleburgaz

---

## Geliştirme Aşamaları

### ✅ Aşama 1: Proje Kurulumu
- [x] Next.js projesi oluşturma (App Router)
- [x] TailwindCSS kurulumu
- [x] Gerekli bağımlılıklar (framer-motion, lucide-react)
- [x] Proje klasör yapısı

### ✅ Aşama 2: Temel Layout ve Bileşenler
- [x] Header komponenti (Logo + Hakkımızda + Sipariş Ver butonları)
- [x] Hero section (Ana sayfa - 3 kart)
- [x] Sipariş Alternatifleri Modal
- [x] Footer komponenti (SEO için kritik)

### ✅ Aşama 3: İçerik Bölümleri (SEO)
- [x] Menü bölümü (H1, H2, H3 yapısı)
  - Sandviç çeşitleri
  - Kahvaltı seçenekleri
  - Mantı
  - Atıştırmalıklar ve kruvasanlar
- [x] Hakkımızda bölümü
- [x] İletişim bölümü (Google Maps entegrasyonu)

### ✅ Aşama 4: SEO Optimizasyonu
- [x] Metadata yapılandırması
- [x] Semantic HTML yapısı
- [x] Schema.org yapılandırılmış veri
- [x] robots.txt ve sitemap.xml
- [x] Open Graph ve Twitter Cards

### ⏳ Aşama 5: Performans ve Son Dokunuşlar
- [x] Image optimization (next/image)
- [x] Smooth scroll animasyonları
- [x] Responsive tasarım kontrolü
- [ ] Lighthouse performans testi
- [ ] Production build ve test

---

## Teknik Detaylar

### Teknoloji Stack
- **Framework**: Next.js 14+ (App Router)
- **Rendering**: Static Site Generation (SSG)
- **Styling**: TailwindCSS
- **Animasyonlar**: Framer Motion
- **İkonlar**: Lucide React
- **Font**: Google Fonts (Inter veya Poppins)

### Site Yapısı
```
/
├── Hero Section (Above the fold)
│   ├── Header (Logo + Buttons)
│   ├── Tutico Logo (Center)
│   └── 3 Ana Kart (Menümüz, Hakkımızda, Sipariş Alternatifleri)
├── Menü Bölümü (Scroll)
│   ├── H1: Tutico Lüleburgaz: Sandviç, Kahvaltı ve Eşsiz Lezzetler
│   ├── H2: Lüleburgaz Sandviç Çeşitlerimiz
│   ├── H2: Zengin Lüleburgaz Kahvaltı Seçenekleri
│   ├── H2: Ev Yapımı Lüleburgaz Mantısı
│   └── H2: Atıştırmalıklar ve Kruvasanlar
├── Hakkımızda Bölümü (Scroll)
│   └── H2: Biz Kimiz? (Tutico'nun Hikayesi)
├── İletişim Bölümü (Scroll)
│   └── H2: Bize Ulaşın (Google Maps)
└── Footer (SEO Critical)
    ├── Adres
    ├── Telefon
    ├── Çalışma Saatleri
    ├── Sosyal Medya
    └── Google Business Profile Link
```

### Modal İçeriği (Sipariş Alternatifleri)
1. GetirYemek
2. Yemeksepeti
3. Trendyol Yemek
4. WhatsApp Sipariş
5. QR Menü

---

## Notlar
- Tüm içerik statik olacak (CMS yok)
- Görseller yüksek kaliteli ve iştah açıcı olmalı
- Arka planlar minimal ve temiz
- Premium ve modern his
- Smooth scroll animasyonları
- Mobile-first responsive tasarım

---

## Güncellemeler
- **07.11.2025**: Proje planı oluşturuldu
- **07.11.2025**: Next.js projesi kuruldu (v15, TailwindCSS v4)
- **07.11.2025**: Tüm bileşenler oluşturuldu (Header, Hero, Menu, About, Contact, Footer, OrderModal)
- **07.11.2025**: SEO optimizasyonları tamamlandı (metadata, schema.org, sitemap, robots.txt)
- **07.11.2025**: Ana sayfa entegrasyonu tamamlandı

## Yapılması Gerekenler
1. **Gerçek İçerik Ekleme**:
   - Tutico'nun gerçek adresi
   - Gerçek telefon numarası
   - Gerçek çalışma saatleri
   - Gerçek Google Maps koordinatları
   - Sosyal medya linkleri (Facebook, Instagram)
   - Sipariş platformu linkleri (GetirYemek, Yemeksepeti, vb.)

2. **Görseller**:
   - Yüksek kaliteli yemek fotoğrafları
   - Her menü öğesi için profesyonel fotoğraflar
   - Optimizasyon için WebP formatına dönüştürme

3. **Test ve Optimizasyon**:
   - Development server'da test
   - Production build
   - Lighthouse performans testi
   - Mobile responsive test
   - SEO audit
