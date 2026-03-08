import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Mundo PequeArte - Entretenimiento Infantil en CDMX',
  description = 'Llevamos creatividad y magia a tu evento. Pintacaritas, manualidades, spa infantil y más actividades para fiestas infantiles en CDMX y área metropolitana.',
  keywords = 'pintacaritas cdmx, entretenimiento infantil, fiestas infantiles, animación infantil, manualidades niños, spa infantil, pool party, eventos infantiles cdmx',
  canonical,
  image = '/icon-only.png',
  type = 'website',
  structuredData
}) => {
  const siteUrl = 'https://mundopequearte.com'; // Actualizar con URL real
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="es_MX" />
      <meta property="og:site_name" content="Mundo PequeArte" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />

      {/* WhatsApp Preview */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Structured Data / Schema.org */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
