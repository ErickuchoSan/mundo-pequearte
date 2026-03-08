// Configuración SEO centralizada

export const SITE_CONFIG = {
  name: 'Mundo PequeArte',
  url: 'https://mundopequearte.com', // Actualizar con dominio real
  description: 'Llevamos creatividad y magia a tu evento. Pintacaritas, manualidades, spa infantil y más actividades para fiestas infantiles en CDMX y área metropolitana.',
  phone: '+52 55 3988 7030',
  email: 'mundopequearte@gmail.com',
  address: {
    city: 'Ciudad de México',
    state: 'CDMX',
    country: 'México',
    postalCode: '00000'
  },
  social: {
    instagram: 'https://instagram.com/mundopequearte',
    facebook: 'https://facebook.com/mundopequearte',
    tiktok: 'https://tiktok.com/@mundopequearte'
  }
};

// Schema.org para LocalBusiness
export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_CONFIG.url}/#organization`,
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: SITE_CONFIG.address.state,
    addressCountry: SITE_CONFIG.address.country,
    postalCode: SITE_CONFIG.address.postalCode
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.4326,  // CDMX centro - actualizar con ubicación real
    longitude: -99.1332
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 19.4326,
      longitude: -99.1332
    },
    geoRadius: '50000' // 50km radio (área metropolitana)
  },
  sameAs: [
    SITE_CONFIG.social.instagram,
    SITE_CONFIG.social.facebook,
    SITE_CONFIG.social.tiktok
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '15:00'
    }
  ]
});

// Schema.org para Service
export const getServiceSchema = (serviceName, description, url) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description: description,
  provider: {
    '@id': `${SITE_CONFIG.url}/#organization`
  },
  areaServed: {
    '@type': 'City',
    name: 'Ciudad de México'
  },
  url: url,
  serviceType: 'Entretenimiento Infantil'
});

// Keywords por página
export const PAGE_KEYWORDS = {
  home: 'pintacaritas cdmx, entretenimiento infantil cdmx, fiestas infantiles, animación infantil, manualidades niños, eventos infantiles',
  pintacaritas: 'pintacaritas cdmx, pintacaritas para fiestas, maquillaje infantil, face painting, animación infantil',
  manualidades: 'manualidades infantiles, talleres creativos, actividades artísticas niños, craft para fiestas',
  spa: 'spa infantil, mini spa niñas, spa party, pamper party cdmx',
  animacion: 'animación infantil cdmx, animadores fiestas, show infantil, entretenimiento fiestas',
  poolParty: 'pool party infantil, fiesta alberca niños, juegos acuáticos, fiesta piscina',
  nosotras: 'quienes somos mundo pequearte, equipo entretenimiento infantil, artistas infantiles cdmx',
  contacto: 'contacto mundo pequearte, cotizar fiesta infantil, precios entretenimiento infantil'
};
