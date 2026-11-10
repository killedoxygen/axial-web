// Renders the localized 1200 × 630 sharing cards into public/brand/.
// Run with `pnpm og` after changing the hero headline, the card tagline or the
// launcher screenshot. The output is committed, so builds do not depend on it.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import opentype from 'opentype.js';
import sharp from 'sharp';
import { locales, ui } from '../src/i18n/index.ts';

const path = (rel) => fileURLToPath(new URL(rel, import.meta.url));

const W = 1200;
const H = 630;
const GUTTER = 72;
const INK = '#0b0f0a';
const PAPER = '#f0f3ef';
const GRAY = '#a8aca6';
const CREW = ['#87d576', '#0ed4f6', '#a2bcff', '#fe9fa6', '#d5bf36'];

// Static instances of the site's Manrope. Text is drawn as outlines so the
// cards render the same on every machine, whatever fonts it has installed.
const FONTS = {
  500: opentype.parse(
    readFileSync(path('../assets/og/Manrope-500.ttf')).buffer,
  ),
  800: opentype.parse(
    readFileSync(path('../assets/og/Manrope-800.ttf')).buffer,
  ),
};

const GILLS =
  'M140.78 229.7A212.62 212.62 0 0 1 102.99 103.62A24 24 0 0 1 150.96 101.94A156.62 156.62 0 0 0 191.22 190.3ZM119.74 274.19A235.22 235.22 0 0 1 29.18 204.92A23 23 0 0 1 63.37 174.14A182.22 182.22 0 0 0 140.26 217.81ZM129.82 319.39A254.18 254.18 0 0 1 32.73 315.19A22 22 0 0 1 40.37 271.86A204.18 204.18 0 0 0 118.18 264.61ZM359.22 229.7A212.62 212.62 0 0 0 397.01 103.62A24 24 0 0 0 349.04 101.94A156.62 156.62 0 0 1 308.78 190.3ZM380.26 274.19A235.22 235.22 0 0 0 470.82 204.92A23 23 0 0 0 436.63 174.14A182.22 182.22 0 0 1 359.74 217.81ZM370.18 319.39A254.18 254.18 0 0 0 467.27 315.19A22 22 0 0 0 459.63 271.86A204.18 204.18 0 0 1 381.82 264.61Z';
const FACE =
  'M250 170C356.08 170 406 201.36 406 268C406 348.56 368.56 374 250 374C131.44 374 94 348.56 94 268C94 201.36 143.92 170 250 170Z';
const MOUTH =
  'M284.14 295.34A49.5 49.5 0 0 1 215.86 295.34A6 6 0 0 1 224.14 286.66A37.5 37.5 0 0 0 275.86 286.66A6 6 0 0 1 284.14 295.34Z';

/** The mark drawn `width` wide with its 500-unit box's top-left at x, y. */
function axolotl(x, y, width, color, hole = INK) {
  const s = width / 500;
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <path fill="${color}" d="${GILLS}"/><path fill="${color}" d="${FACE}"/>
    <g fill="${hole}"><rect x="144" y="248" width="32" height="32" rx="10"/><rect x="324" y="248" width="32" height="32" rx="10"/><path d="${MOUTH}"/></g>
  </g>`;
}

/** Outlined text with its left edge at x and its baseline at y. */
function text(string, x, y, { weight, size, color, align = 'left' }) {
  const font = FONTS[weight];
  const width = font.getAdvanceWidth(string, size);
  const left = align === 'right' ? x - width : x;
  // Serialized by hand: opentype.js 2.0 emits NaN for some rounded values.
  const n = (value) => +value.toFixed(2);
  const d = font
    .getPath(string, left, y, size)
    .commands.map((c) => {
      if (c.type === 'Z') return 'Z';
      const points = [];
      if ('x1' in c) points.push(n(c.x1), n(c.y1));
      if ('x2' in c) points.push(n(c.x2), n(c.y2));
      points.push(n(c.x), n(c.y));
      return c.type + points.join(' ');
    })
    .join('');
  return { width, svg: `<path fill="${color}" d="${d}"/>` };
}

async function card(locale) {
  const copy = ui[locale];

  // Screenshot: full content width, bleeding off the bottom edge.
  const shotW = W - GUTTER * 2;
  const shotTop = 286;
  const shotH = H - shotTop;
  const radius = 18;
  const brand = shotW * 0.03; // Covers the capture's retired sidebar mark.
  const shot = await sharp(path('../src/assets/images/launcher-home.jpg'))
    .resize({ width: shotW })
    .extract({ left: 0, top: 0, width: shotW, height: shotH })
    .composite([
      {
        input: Buffer.from(
          `<svg xmlns="http://www.w3.org/2000/svg" width="${shotW}" height="${shotH}">
            <rect x="${shotW * 0.012}" y="${shotW * 0.0125}" width="${brand}" height="${brand}" fill="#080b06"/>
            ${axolotl(shotW * 0.012, shotW * 0.0125 - brand * 0.06, brand, CREW[0], '#080b06')}
          </svg>`,
        ),
      },
      {
        input: Buffer.from(
          `<svg xmlns="http://www.w3.org/2000/svg" width="${shotW}" height="${shotH}">
            <rect width="${shotW}" height="${shotH + radius}" rx="${radius}" fill="#fff"/>
          </svg>`,
        ),
        blend: 'dest-in',
      },
    ])
    .png()
    .toBuffer();

  // The crew peeks over the screenshot's top edge, as it does on the page.
  const peekW = 104;
  const peekGap = 14;
  const crewW = CREW.length * peekW + (CREW.length - 1) * peekGap;
  const crewLeft = W - GUTTER - 28 - crewW;
  const eyeLine = (296 / 500) * peekW; // Matches the page's `eyes` crop.
  const markW = 64;
  const vector = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
      ${axolotl(GUTTER - markW * 0.058, 48 - markW * 0.2, markW, CREW[0])}
      <clipPath id="above"><rect width="${W}" height="${shotTop + 1}"/></clipPath>
      <g clip-path="url(#above)">
        ${CREW.map((color, i) =>
          axolotl(
            crewLeft + i * (peekW + peekGap),
            shotTop - eyeLine,
            peekW,
            color,
          ),
        ).join('')}
      </g>
    </svg>`,
  );

  const headline = text(copy.hero.title.join(' '), GUTTER - 3, 196, {
    weight: 800,
    size: 70,
    color: PAPER,
  });
  if (headline.width > W - GUTTER * 2) {
    throw new Error(`${locale}: headline is too wide for the card`);
  }
  const type = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
      ${text('Axial', GUTTER + 70, 88, { weight: 800, size: 36, color: PAPER }).svg}
      ${text(copy.meta.ogTagline, W - GUTTER, 86, { weight: 500, size: 25, color: GRAY, align: 'right' }).svg}
      ${headline.svg}
    </svg>`,
  );

  const out = path(`../public/brand/og-${locale}.png`);
  await sharp({
    create: { width: W, height: H, channels: 3, background: INK },
  })
    .composite([
      { input: shot, left: GUTTER, top: shotTop },
      { input: vector, left: 0, top: 0 },
      { input: type, left: 0, top: 0 },
    ])
    .png({ compressionLevel: 9, palette: true, quality: 92, colors: 256 })
    .toFile(out);
  console.log(`wrote ${out}`);
}

for (const locale of locales) await card(locale);
