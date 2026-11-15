/**
 * Settles the stacked feature sheets after scrolling stops.
 *
 * Scrolling is never intercepted. Once the page comes to rest with a sheet
 * most of the way to its place under the nav, this finishes the move with
 * the browser's own smooth scroll. It only ever continues in the direction
 * the visitor was already going, so it cannot pull the page back or hold it
 * in place.
 *
 * (CSS `scroll-snap-type: proximity` does the same on paper, but Chromium
 * snaps back after short scrolls, which traps a mouse wheel on each sheet.)
 */
import { prefersReducedMotion } from './motion.ts';

/** Matches the breakpoint where the feature sheets stack (sheets.css). */
const desktop = matchMedia('(min-width: 900px) and (min-height: 680px)');
const root = document.documentElement;
const nav = document.querySelector<HTMLElement>('.nav');
const sheets = Array.from(
  document.querySelectorAll<HTMLElement>('[data-settle]'),
);

/** How much of the way a sheet may still have to go, as a share of the screen. */
const REACH = 0.4;

/** Scroll positions that rest each sheet under the nav, top to bottom. */
function restingPlaces(top: number): number[] {
  // Sticky positioning is switched off while reading, so stuck sheets report
  // where they sit in the document rather than where they are pinned.
  root.classList.add('is-measuring');
  const places = sheets.map((sheet) =>
    Math.round(sheet.getBoundingClientRect().top + scrollY - top),
  );
  root.classList.remove('is-measuring');
  return places;
}

let lastY = scrollY;
let direction = 0;

function settle() {
  if (!direction || !desktop.matches || prefersReducedMotion()) return;
  const top = nav?.offsetHeight ?? 0;
  const places = restingPlaces(top);
  const y = scrollY;
  const next =
    direction > 0
      ? places.find((place) => place > y + 1)
      : places.reverse().find((place) => place < y - 1);
  if (next === undefined) return;
  if (Math.abs(next - y) > (innerHeight - top) * REACH) return;
  scrollTo({ top: next, behavior: 'smooth' });
}

if (sheets.length) {
  const hasScrollEnd = 'onscrollend' in window;
  let idle: ReturnType<typeof setTimeout> | undefined;
  addEventListener(
    'scroll',
    () => {
      const y = scrollY;
      if (y !== lastY) direction = Math.sign(y - lastY);
      lastY = y;
      // Browsers without `scrollend` get a short pause instead.
      if (!hasScrollEnd) {
        clearTimeout(idle);
        idle = setTimeout(settle, 150);
      }
    },
    { passive: true },
  );
  addEventListener('scrollend', settle, { passive: true });
}
