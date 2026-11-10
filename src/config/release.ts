import { links } from './site.ts';

/**
 * The release the download buttons point at before JavaScript runs.
 *
 * In the browser the buttons are upgraded to the newest GitHub release, so
 * this is only the fallback (and what crawlers see). Bump it when you can.
 */
export const release = {
  version: '0.4.0-dev.5',
} as const;

const asset = (file: string) =>
  `${links.releases}/download/v${release.version}/${file}`;

export type PlatformId = 'macos' | 'linux' | 'windows';
export type Maturity = 'activeDev' | 'earlyAlpha';

export interface Build {
  /** Stable key the release script matches assets against. */
  id: string;
  label: string;
  url: string;
}

export interface Platform {
  id: PlatformId;
  name: string;
  maturity: Maturity;
  builds: Build[];
}

export const platforms: Platform[] = [
  {
    id: 'macos',
    name: 'macOS',
    maturity: 'activeDev',
    builds: [
      {
        id: 'macos-arm64',
        label: 'Apple Silicon',
        url: asset(`axial-macos-arm64-${release.version}.dmg`),
      },
      {
        id: 'macos-amd64',
        label: 'Intel',
        url: asset(`axial-macos-amd64-${release.version}.dmg`),
      },
    ],
  },
  {
    id: 'linux',
    name: 'Linux',
    maturity: 'activeDev',
    builds: [
      {
        id: 'linux-amd64',
        label: 'x64',
        url: asset(`axial-linux-amd64-${release.version}`),
      },
    ],
  },
  {
    id: 'windows',
    name: 'Windows',
    maturity: 'earlyAlpha',
    builds: [
      {
        id: 'windows-amd64',
        label: 'x64',
        url: asset(`axial-windows-amd64-${release.version}.exe`),
      },
    ],
  },
];

/** Recognizes each build's file among a GitHub release's assets. */
export const assetMatchers: Record<string, (name: string) => boolean> = {
  'macos-arm64': (name) => /^axial-macos-arm64-.+\.dmg$/.test(name),
  'macos-amd64': (name) => /^axial-macos-amd64-.+\.dmg$/.test(name),
  'linux-amd64': (name) =>
    name.startsWith('axial-linux-amd64-') &&
    !/\.(sha256|tar\.gz|zip)$/.test(name),
  'windows-amd64': (name) => /^axial-windows-amd64-.+\.exe$/.test(name),
};
