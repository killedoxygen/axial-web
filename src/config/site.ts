/** Facts about the project that pages, metadata and scripts all share. */
export const site = {
  name: 'Axial',
  /** What people type when the bare name is ambiguous. */
  alternateName: 'Axial Launcher',
  themeColor: '#0B0F0A',
  author: {
    name: 'mateoltd',
    url: 'https://github.com/mateoltd',
  },
  license: 'https://opensource.org/license/mit',
  operatingSystems: ['Windows', 'macOS', 'Linux'],
} as const;

const repo = 'mateoltd/axial';

export const links = {
  github: `https://github.com/${repo}`,
  releases: `https://github.com/${repo}/releases`,
  /** Newest release, pre-releases included. The page upgrades its links from this. */
  latestReleaseApi: `https://api.github.com/repos/${repo}/releases?per_page=1`,
} as const;
