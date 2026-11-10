import mark from '../../assets/brand-mark.json' with { type: 'json' };

export { mark };

export const crewPalette = {
  green: mark.colors.interface.toLowerCase(),
  cyan: '#0ed4f6',
  peri: '#a2bcff',
  pink: '#fe9fa6',
  yellow: '#d5bf36',
} as const;
export type CrewColor = keyof typeof crewPalette;
export const crewColors = Object.keys(crewPalette) as CrewColor[];

export const markCrops = {
  full: [0, 60, 500, 330],
  eyes: [0, 70, 500, 226],
  smile: [0, 70, 500, 262],
} as const;
