import type { APIRoute } from 'astro';
import { defaultLocale, locales, localizePath } from '../i18n/index.ts';

/**
 * Indexable pages, as default-locale paths. Each is listed once per locale
 * with hreflang links between the translations. Add new pages here.
 */
const pages = ['/'];

export const GET: APIRoute = ({ site }) => {
  const absolute = (path: string) => new URL(path, site).href;

  const urls = pages.flatMap((page) => {
    const alternates = [
      ...locales.map(
        (locale) =>
          `<xhtml:link rel="alternate" hreflang="${locale}" href="${absolute(localizePath(page, locale))}"/>`,
      ),
      `<xhtml:link rel="alternate" hreflang="x-default" href="${absolute(localizePath(page, defaultLocale))}"/>`,
    ].join('');
    return locales.map(
      (locale) =>
        `<url><loc>${absolute(localizePath(page, locale))}</loc>${alternates}</url>`,
    );
  });

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
