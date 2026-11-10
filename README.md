![Axial — a Minecraft launcher for vanilla and modded instances](public/brand/banner.svg)

# Axial Web

The landing page for Axial Launcher, built with Astro and pnpm.

## Development

```sh
pnpm install
pnpm dev
```

## Production build

```sh
pnpm build
```

## Cloudflare deployment

Cloudflare Workers Builds runs `pnpm run build`, then `npx wrangler deploy`.
`wrangler.jsonc` explicitly deploys the static files in `dist/`, so Wrangler does
not auto-install an Astro adapter or rebuild the site during deployment.
Wrangler is pinned in the lockfile to keep deployments reproducible.

To build and deploy locally with an authenticated Cloudflare account:

```sh
pnpm run deploy
```

## Branding

The axolotl mark and promotional artwork come from the Axial app's approved
branding (design revision 2). `assets/brand-mark.json` preserves the source geometry
and colours; `public/logo.svg` is the transparent mark, `public/logo.png` is the
app icon, and `public/favicon.svg` and `.png` are the browser icons.

`public/brand/banner.svg` is the original outlined Manrope banner. Sharing cards
are localized 1200 × 630 PNGs at `public/brand/og-en.png` and `og-es.png`.
Run `pnpm og` after changing their copy or design; the generator uses font
outlines for consistent rendering and keeps its source fonts in `assets/og/`.

The product screenshot predates the rebrand. A positioned logo overlay hides its
retired sidebar mark; remove `.screenshot-brand` when replacing the capture with
a new screenshot from the app.

## Code organization and checks

- `src/pages/`: thin route entrypoints, plus sitemap and robots endpoints.
- `src/components/home/`: landing-page sections; shared components live one level up.
- `src/i18n/`: English copy defines the translation shape; Spanish must match it.
- `src/config/`: project facts, links, and fallback release downloads.
- `src/components/Seo.astro` and `src/seo/`: metadata and structured data.
- `src/assets/images/`: source images optimized by Astro at build time.
- `src/styles/`: ordered stylesheets imported by `global.css`.

`pnpm check` runs Astro and TypeScript diagnostics; `pnpm build` runs those
checks before generating the site. Use `pnpm format` and `pnpm format:check`
for formatting. Keep the fallback version in `src/config/release.ts` current
when publishing launcher releases.

## Languages and SEO

English lives at `/` and Spanish at `/es/`. Each page has localized titles,
descriptions, Open Graph and Twitter metadata, a self-referencing canonical,
and reciprocal `en`, `es`, and `x-default` alternates. The XML sitemap lists
only indexable pages; add new default-language paths to its `pages` list when
adding translated content.

The initial content focus is Minecraft launcher discovery in both languages:
English copy addresses “Minecraft launcher” and Spanish copy addresses
“launcher de Minecraft”, with supporting content about instances, mod loaders,
and platform downloads. Keep claims tied to features the launcher actually
supports. Future installation and mod-loader guides should answer distinct
user questions and have full translations before linking them as alternates.

After deployment, submit `/sitemap.xml` to Google Search Console, inspect `/`
and `/es/`, and check that the intended canonicals are selected. Track search
queries, impressions, clicks and click-through rate by page and country before
expanding content. Verify both sharing cards using social platform debuggers;
they may retain cached images after an update.

### Localized errors

`NotFoundPage.astro` renders one language using the route locale. Astro's
`build.format: 'preserve'` emits `dist/404.html` and `dist/es/404.html` while
keeping the homepages at `index.html` and `es/index.html`. Cloudflare serves
the nearest error document with HTTP 404: Spanish under `/es/`, English for
all other missing paths. Error pages have `noindex` and no canonical,
hreflang links, or application structured data.

To check production routing locally, run `pnpm build`, then
`pnpm exec wrangler dev`. Test `/missing`, `/es/missing`,
`/es/nested/missing`, and `/fr/missing`. Astro's dev and preview servers do
not reproduce Cloudflare's directory-based error routing; use `/404` and
`/es/404` to work on the individual templates in Astro dev.

Routing reference: [Cloudflare custom 404 pages](https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/).
