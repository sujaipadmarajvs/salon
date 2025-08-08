import { siteConfig } from '@/config/site';

const StructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: siteConfig.siteName,
    description: siteConfig.description,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://babusalon.com',
    telephone: siteConfig.contact?.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'North Paravur',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
    openingHours: ['Mo-Sa 05:30-23:00'],
    priceRange: '₹₹',
    sameAs: [
      siteConfig.social?.instagram,
      siteConfig.social?.facebook,
      siteConfig.social?.youtube,
    ].filter(Boolean),
    makesOffer: (siteConfig.services || []).map((service: any) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
      },
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'INR',
        price: service.price?.replace(/[^0-9.]/g, '') || undefined,
      },
    })),
  } as const;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;

