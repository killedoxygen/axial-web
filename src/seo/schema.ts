import { release } from '../config/release.ts';
import { links, site } from '../config/site.ts';
import type { Locale } from '../i18n/index.ts';

interface SchemaInput {
  locale: Locale;
  /** Absolute URL of the page being described. */
  url: string;
  /** Absolute URL of the site root. */
  origin: string;
  description: string;
  image: string;
}

/**
 * Structured data for the landing page: the site, and the launcher as a free
 * downloadable application. Returned as a JSON string ready to inline.
 */
export function landingSchema({
  locale,
  url,
  origin,
  description,
  image,
}: SchemaInput): string {
  const websiteId = `${origin}#website`;
  const appId = `${origin}#app`;

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: site.name,
        alternateName: site.alternateName,
        url: origin,
        inLanguage: ['en', 'es'],
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#page`,
        url,
        name: site.alternateName,
        description,
        inLanguage: locale,
        isPartOf: { '@id': websiteId },
        about: { '@id': appId },
        primaryImageOfPage: image,
      },
      {
        '@type': 'SoftwareApplication',
        '@id': appId,
        name: site.name,
        alternateName: site.alternateName,
        description,
        url: origin,
        image,
        screenshot: image,
        applicationCategory: 'GameApplication',
        applicationSubCategory: 'Minecraft launcher',
        operatingSystem: site.operatingSystems.join(', '),
        softwareVersion: release.version,
        downloadUrl: links.releases,
        releaseNotes: links.releases,
        license: site.license,
        isAccessibleForFree: true,
        sameAs: [links.github],
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
        author: {
          '@type': 'Person',
          name: site.author.name,
          url: site.author.url,
        },
      },
    ],
  });
}
