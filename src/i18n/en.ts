/** English copy. Its shape is the contract every other locale must satisfy. */
export const en = {
  languageName: 'English',
  meta: {
    title: 'Axial | Free open source Minecraft launcher',
    description:
      'A free, open source Minecraft launcher with no ads that tunes the game to your PC, from old laptops to gaming rigs. For Windows, macOS and Linux.',
    ogTagline: 'Free open source Minecraft launcher',
    ogImageAlt:
      'The Axial launcher home screen under the headline "A launcher that just launches", with five axolotl mascots peeking over it',
  },
  notFound: {
    title: 'Page not found | Axial',
    heading: 'Nothing to launch here',
    body: 'This page does not exist. The launcher does.',
    home: 'Back to Axial',
  },
  nav: {
    ariaLabel: 'Main navigation',
    homeAriaLabel: 'Axial home',
    downloads: 'Downloads',
    download: 'Download',
    languageAriaLabel: 'Choose language',
  },
  hero: {
    title: ['A launcher that', 'just launches'] as [string, string],
    description:
      'Free, open source and tuned to whatever PC you play on, from an old laptop to a gaming rig. No ads, no bundled extras. Made by players for players, and yes, it is cute.',
    download: 'Download Axial',
    allPlatforms: 'All platforms',
  },
  screenshot: {
    ariaLabel: 'Axial Launcher home screen',
    alt: 'Axial home screen with a featured instance ready to play and the instance library below',
  },
  ethos: {
    ariaLabel: 'Why Axial exists',
    parts: [
      ['Axial started for players ', false],
      ['with modest PCs', true],
      [' and grew for the ones who ', false],
      ['want to tweak everything', true],
    ] as [string, boolean][],
  },
  features: {
    lowEnd: {
      title: 'Playable on the laptop you have',
      body: 'Axial goes further than dropping in a few performance mods. It tunes how the game itself runs on your machine, so even an old laptop keeps up.',
      art: {
        heading: 'Old laptop',
        items: ['Runs smoother', 'Uses less memory', 'Rests when you tab out'],
      },
    },
    highEnd: {
      title: 'And a gaming rig that finally gets used',
      body: 'Minecraft barely touches a powerful PC. Axial puts every core and your graphics card to work, so you see further with fewer stutters.',
      art: {
        heading: 'Gaming PC',
        items: ['Every core at work', 'Longer view distance', 'Fewer stutters'],
      },
    },
    versions: {
      title: 'Every instance in its own box',
      body: 'Pick a version and a loader, from old alphas to the latest Fabric, Quilt, Forge or NeoForge, and press play. Each instance keeps its own mods, worlds and settings, so trying a new pack never touches the world you have had for years.',
      art: {
        cards: [
          {
            image: 'fabric-lab',
            name: 'Fabric Lab',
            detail: 'Fabric 1.21.5',
          },
          {
            image: 'forge-works',
            name: 'Forge Works',
            detail: 'Forge 1.16.5',
          },
          {
            image: 'time-capsule',
            name: 'Time Capsule',
            detail: 'Alpha 1.2.6',
          },
        ],
      },
    },
    ux: {
      title: 'Everything where you expect it',
      body: 'No digging through menus and no manual to read. Playing is one click and everything else is one step away. It looks good too, and the axolotls are, scientifically speaking, adorable.',
      art: {
        heading: 'Getting back to your world',
        items: ['Open Axial', 'Press Play', 'That is it'],
      },
    },
    open: {
      title: 'Nobody is selling you anything',
      body: 'Axial has no business model and no hidden agenda. It is free, MIT licensed and built in the open, and what comes next is whatever players ask for.',
      art: {
        heading: 'What you install',
        items: ['No ads', 'Nothing bundled', 'MIT licensed', "It's cute"],
      },
    },
  },
  downloads: {
    heading: 'Download Axial',
    lead: 'Free on every platform. Missing something? Tell us on GitHub. That is how the roadmap gets written.',
    notice:
      'Fair warning: Axial is still pre-release. Windows is an early alpha and the steadiest of the three. macOS and Linux are moving fast and break more often. Expect bugs and frequent updates.',
    activeDev: 'Active development',
    yourDevice: 'Your device',
    holdup: {
      title: 'One more step before you play',
      close: 'Got it',
      mac: {
        lead: "Your download has started. Axial is a community project with no budget for Apple's signing certificate yet, so macOS will block it the first time. Sorry for the hassle. Here is how to open it:",
        steps: [
          'Open the downloaded file and drag Axial into Applications.',
          'Open Axial once. macOS will say it cannot be opened. Close the warning.',
          'Go to System Settings, then Privacy & Security, and scroll down to Security.',
          'Click "Open Anyway" next to Axial and confirm. You only do this once.',
        ],
        note: 'On macOS 14 or earlier, right-click Axial and choose Open instead.',
      },
      win: {
        lead: "Your download has started. Axial is a community project with no budget for Microsoft's signing certificate yet, so Windows will show a blue warning the first time. Sorry for the hassle. Here is how to get past it:",
        steps: [
          'Run the downloaded file.',
          'When "Windows protected your PC" appears, click "More info".',
          'Click "Run anyway". You only do this once.',
        ],
        note: '',
      },
    },
    earlyAlpha: 'Early alpha',
    fineprintBefore:
      'Every button grabs the latest build straight from GitHub. Checksums and older builds live in ',
    releasesArchive: 'the releases archive',
    fineprintAfter: '.',
    platformLabels: {
      mac: 'Download for macOS',
      win: 'Download for Windows',
      linux: 'Download for Linux',
    },
  },
  footer: {
    releases: 'Releases',
    tagline:
      'An open source Minecraft launcher made by the community for the community',
  },
};

export type Copy = typeof en;
