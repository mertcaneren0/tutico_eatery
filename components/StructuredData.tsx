export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Tutico Lüleburgaz',
    description: 'Lüleburgaz\'ın en lezzetli sandviç, tost, mantı ve kruvasanları',
    image: 'https://tutico.co/tutico_turuncu.jpg',
    '@id': 'https://tutico.co',
    url: 'https://tutico.co',
    telephone: '+905449107680',
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
      latitude: 41.393341500000005,
      longitude: 27.353369199999996,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:30',
        closes: '20:00',
      },
    ],
    servesCuisine: ['Turkish', 'Sandwiches', 'Toast', 'Manti'],
    menu: 'https://tutico.co/#menu',
    acceptsReservations: 'False',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
