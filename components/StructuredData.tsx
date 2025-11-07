export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Tutico Lüleburgaz',
    description: 'Lüleburgaz\'ın en lezzetli sandviç, kahvaltı, mantı ve atıştırmalıkları',
    image: 'https://www.tuticoleburgaz.com/tutico_turuncu.jpg',
    '@id': 'https://www.tuticoleburgaz.com',
    url: 'https://www.tuticoleburgaz.com',
    telephone: '+905551234567',
    priceRange: '₺₺',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '[Tam Adres Buraya Eklenecek]',
      addressLocality: 'Lüleburgaz',
      addressRegion: 'Kırklareli',
      postalCode: '39750',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.4,
      longitude: 27.35,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '09:00',
        closes: '23:00',
      },
    ],
    servesCuisine: ['Turkish', 'Sandwiches', 'Breakfast'],
    menu: 'https://www.tuticoleburgaz.com/#menu',
    acceptsReservations: 'False',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
