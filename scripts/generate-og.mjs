// Renders the localized 1200 × 630 sharing cards into public/brand/.
// Run with `pnpm og` after changing the hero headline, the card tagline or the
// launcher screenshot. The output is committed, so builds do not depend on it.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import opentype from 'opentype.js';
import sharp from 'sharp';
import { locales, ui } from '../src/i18n/index.ts';
import { mark, markCrops, crewPalette } from '../src/config/brand.ts';

const path = (rel) => fileURLToPath(new URL(rel, import.meta.url));

const W = 1200;
const H = 630;
const GUTTER = 72;
const INK = '#0b0f0a';
const PAPER = '#f0f3ef';
const GRAY = '#a8aca6';
const CREW = Object.values(crewPalette);

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

/** The mark drawn `width` wide with its 500-unit box's top-left at x, y. */
function axolotl(x, y, width, color, hole = INK) {
  const s = width / 500;
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <path fill="${color}" d="${mark.paths.left_gills}${mark.paths.right_gills}"/><path fill="${color}" d="${mark.paths.body}"/>
    <g fill="${hole}">${mark.eyes.map(({ x, y, width, height, rx }) => `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}"/>`).join('')}<path d="${mark.paths.mouth}"/></g>
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
  const eyeLine = ((markCrops.eyes[1] + markCrops.eyes[3]) / 500) * peekW; // Matches the page's `eyes` crop.
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
