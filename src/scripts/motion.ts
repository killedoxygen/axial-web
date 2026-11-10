/** Small helpers shared by the page's client scripts. */

export const prefersReducedMotion = () =>
  matchMedia('(prefers-reduced-motion: reduce)').matches;

export const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

/**
 * Run `update` now, and at most once per frame while the page scrolls or
 * resizes.
 */
export function onViewportChange(update: () => void) {
  let ticking = false;
  const schedule = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      update();
    });
  };
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  update();
}
