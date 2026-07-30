export const SITE = {
  name: 'SEK Construction',
  shortName: 'SEK',
  // Production Vercel alias (WhatsApp/OG crawlers need a real absolute URL)
  url: 'https://sek-iota.vercel.app',
  locale: 'en_FR',
  language: 'en',
  tagline: "L'art de construire et de rénover",
  title: "SEK Construction · L'art de construire et de rénover",
  description:
    'SEK Construction, luxury construction and renovation on the French Riviera. Private villas, historic restorations, and specialty structures from Èze-sur-Mer across the Côte d\'Azur.',
  email: 'contact@sek-construction.com',
  phone: '+33629761142',
  phoneDisplay: '06 29 76 11 42',
  address: {
    street: '585 Route de la Revère',
    locality: 'Èze',
    postalCode: '06360',
    region: 'Provence-Alpes-Côte d\'Azur',
    country: 'FR',
  },
  ogImage: '/og.jpg',
  ogImageAlt:
    'Luxury Mediterranean villa interior by SEK Construction, with a stone archway framing a French Riviera sea view',
  twitter: '@sekconstruction',
};

export function absoluteUrl(path = '/') {
  if (!path) return SITE.url;
  if (path.startsWith('http')) return path;
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
}
