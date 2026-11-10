import { en } from './en.ts';
import { es } from './es.ts';

export type { Copy } from './en.ts';

export const defaultLocale = 'en';
export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const ui = { en, es } satisfies Record<Locale, unknown>;

/** Open Graph locale tags, which use a territory where hreflang does not. */
export const ogLocales = {
  en: 'en_US',
  es: 'es_ES',
} as const satisfies Record<Locale, string>;

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

/** Narrow `Astro.currentLocale` to a known locale. */
export function resolveLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}

/** The copy for `Astro.currentLocale`. */
export function useCopy(currentLocale: string | undefined) {
  return ui[resolveLocale(currentLocale)];
}

/**
 * The same page in another locale. The default locale has no prefix, so
 * `/es/` maps to `/` and back.
 */
export function localizePath(pathname: string, locale: Locale): string {
  const [, first, ...rest] = pathname.split('/');
  const base = isLocale(first) ? `/${rest.join('/')}` : pathname;
  return locale === defaultLocale ? base : `/${locale}${base}`;
}
