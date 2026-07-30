import { useEffect } from 'react';
import { SITE, absoluteUrl } from './site.js';

function ensureMeta(attr, key, content) {
  if (content == null || content === '') return;
  let selector;
  if (attr === 'property') selector = `meta[property="${key}"]`;
  else if (attr === 'itemprop') selector = `meta[itemprop="${key}"]`;
  else selector = `meta[name="${key}"]`;

  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function ensureLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function ensureJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!data) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Updates document title, description, Open Graph, Twitter, canonical, and JSON-LD.
 * Call once per page with route-specific overrides.
 */
export function useSeo({
  title,
  description = SITE.description,
  path = '/',
  image = SITE.ogImage,
  imageAlt = SITE.ogImageAlt,
  type = 'website',
  noIndex = false,
  jsonLd,
} = {}) {
  const jsonLdSerialized = JSON.stringify(jsonLd ?? null);

  useEffect(() => {
    const fullTitle = title
      ? (title.includes('SEK') ? title : `${title} · ${SITE.shortName}`)
      : `${SITE.name} · ${SITE.tagline}`;
    const url = absoluteUrl(path);
    const imageUrl = absoluteUrl(image);
    const robots = noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large';
    const parsedJsonLd = jsonLdSerialized ? JSON.parse(jsonLdSerialized) : null;

    document.title = fullTitle;

    ensureMeta('name', 'description', description);
    ensureMeta('name', 'robots', robots);
    ensureMeta('name', 'author', SITE.name);
    ensureMeta('name', 'theme-color', '#0a0a0a');

    ensureLink('canonical', url);

    ensureMeta('property', 'og:type', type);
    ensureMeta('property', 'og:site_name', SITE.name);
    ensureMeta('property', 'og:locale', SITE.locale);
    ensureMeta('property', 'og:title', fullTitle);
    ensureMeta('property', 'og:description', description);
    ensureMeta('property', 'og:url', url);
    ensureMeta('property', 'og:image', imageUrl);
    ensureMeta('property', 'og:image:secure_url', imageUrl);
    ensureMeta('property', 'og:image:type', 'image/jpeg');
    ensureMeta('property', 'og:image:alt', imageAlt);
    ensureMeta('property', 'og:image:width', '1200');
    ensureMeta('property', 'og:image:height', '636');

    ensureMeta('name', 'twitter:card', 'summary_large_image');
    ensureMeta('name', 'twitter:title', fullTitle);
    ensureMeta('name', 'twitter:description', description);
    ensureMeta('name', 'twitter:image', imageUrl);
    ensureMeta('name', 'twitter:image:alt', imageAlt);

    ensureMeta('itemprop', 'name', fullTitle);
    ensureMeta('itemprop', 'description', description);
    ensureMeta('itemprop', 'image', imageUrl);

    ensureJsonLd('seo-jsonld-page', parsedJsonLd);
  }, [title, description, path, image, imageAlt, type, noIndex, jsonLdSerialized]);
}

export function organizationJsonLd() {
  const { address } = SITE;
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: absoluteUrl('/favicon.svg'),
    image: absoluteUrl(SITE.ogImage),
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phone,
    slogan: SITE.tagline,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.locality,
      postalCode: address.postalCode,
      addressRegion: address.region,
      addressCountry: address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.7275,
      longitude: 7.3618,
    },
    areaServed: [
      'French Riviera',
      'Côte d\'Azur',
      'Èze',
      'Nice',
      'Monaco',
      'Cap d\'Ail',
      'Roquebrune-Cap-Martin',
      'Mougins',
    ],
    sameAs: [
      'https://www.instagram.com/sek.build/',
    ],
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: SITE.language,
    publisher: { '@id': `${SITE.url}/#organization` },
  };
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function projectJsonLd(project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: Array.isArray(project.description)
      ? project.description.join(' ')
      : project.description,
    url: absoluteUrl(`/projects/${project.slug}`),
    image: absoluteUrl(project.img),
    dateCreated: project.year,
    locationCreated: {
      '@type': 'Place',
      name: project.location,
    },
    creator: { '@id': `${SITE.url}/#organization` },
  };
}
