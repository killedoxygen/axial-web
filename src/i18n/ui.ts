export const locales = ['en', 'es'] as const;

export type Locale = (typeof locales)[number];

export const ui = {
  en: {
    languageName: 'English',
    meta: {
      title: 'Axial, the calm Minecraft launcher',
      description:
        'Axial is the Minecraft launcher that does the technical homework for you: Java, memory, loaders, and repairs. One clean home for every instance, mod, and world. Free downloads for macOS, Linux, and Windows.',
      ogLocale: 'en_US',
      ogImageAlt:
        'Axial wordmark above five axolotl mascots in green, cyan, lavender, pink, and yellow; tagline: "A Minecraft launcher for vanilla and modded instances."',
    },
    nav: {
      ariaLabel: 'Main navigation',
      homeAriaLabel: 'Axial home',
      downloads: 'Downloads',
      download: 'Download',
      languageAriaLabel: 'Choose language',
    },
    hero: {
      title: ['A calm home', 'for your Minecraft.'],
      description:
        'Every instance, mod, and world in its place. The Java errands, memory tuning, and loader setup handled for you. All that is left is to play.',
      download: 'Download Axial',
      allPlatforms: 'All platforms',
    },
    screenshot: {
      ariaLabel: 'Axial Launcher home screen',
      alt: 'Axial home screen with a featured instance ready to play and the instance library below',
      mobileArt: {
        greeting: 'Good evening, MockPlayer.',
        tally: '5 instances in your library',
        kicker: 'Jump back in',
        instanceName: 'Survival Ridge',
        instanceDetail: 'Vanilla 1.21.6',
        play: 'Play',
        library: 'Library',
        cards: [
          { image: 'fabric-lab', name: 'Fabric Lab', detail: 'Fabric 1.21.5' },
          { image: 'forge-works', name: 'Forge Works', detail: 'Forge 1.21.1' },
        ],
      },
    },
    ethos: {
      ariaLabel: 'What Axial does',
      parts: [
        ['Launching should be ', false],
        ['the easy part', true],
        ['. Axial keeps every instance ', false],
        ['sealed in its own box', true],
        [', does the ', false],
        ['Java and loader homework', true],
        [' for you, and when something it installed breaks, ', false],
        ['Axial repairs it and tells you what changed', true],
        ['.', false],
      ],
    },
    features: {
      ariaLabel: 'Why Axial',
      versions: {
        title: 'Every Minecraft, one library',
        body: 'Modern Fabric, mid-era Forge, snapshots, and alphas the official launcher does not even list. Every version, every loader, side by side.',
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
      modded: {
        title: 'Modded without the tutorials',
        body: 'Pick a version, pick a loader, press play. Axial installs Java, the loader, and everything in between, showing each step while it works.',
        art: {
          heading: 'Installing Fabric Lab',
          stageJava: 'Java 21 ready',
          stageLibraries: 'Libraries verified (312)',
          stageAssets: 'Assets 1,904 of 2,113',
        },
      },
      guardian: {
        title: 'Launches that fix themselves',
        body: 'When a launch breaks, Guardian repairs what Axial manages, retries, and keeps a journal of every change. Anything yours, it asks first.',
        art: {
          failed: 'Launch failed (exit code 1)',
          repaired: 'Guardian repaired 3 libraries',
          relaunched: 'Relaunched, in the game',
        },
      },
      performance: {
        title: 'No more googling "how to fix lag"',
        body: 'Axial sets the game up for your machine and your mods before the first launch, so it runs the way it should. If you like to tinker, every setting stays yours.',
        art: {
          picked: 'Balanced (4 GB)',
          pickedTag: 'Sized for 31 mods',
          rejected: 'Custom JVM flags',
          rejectedTag: 'Yours if you want',
        },
      },
    },
    downloads: {
      heading: 'Download Axial',
      notice:
        'Axial is pre-release software. The Windows build is an early alpha, the steadiest of the three. The macOS and Linux builds are in active development, so they move fast and break more often. Expect bugs and frequent updates everywhere.',
      activeDev: 'Active development',
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
    },
  },
  es: {
    languageName: 'Español',
    meta: {
      title: 'Axial, el launcher de Minecraft sin complicaciones',
      description:
        'Axial es el launcher de Minecraft que se ocupa de la parte técnica: Java, memoria, loaders y reparaciones. Cada instancia, mod y mundo en su sitio. Descargas gratis para macOS, Linux y Windows.',
      ogLocale: 'es_ES',
      ogImageAlt:
        'Logotipo de Axial sobre cinco ajolotes en verde, cian, lavanda, rosa y amarillo, con el lema en inglés: "A Minecraft launcher for vanilla and modded instances."',
    },
    nav: {
      ariaLabel: 'Navegación principal',
      homeAriaLabel: 'Inicio de Axial',
      downloads: 'Descargas',
      download: 'Descargar',
      languageAriaLabel: 'Elegir idioma',
    },
    hero: {
      title: ['Tu Minecraft,', 'por fin en orden.'],
      description:
        'Cada instancia, cada mod y cada mundo en su sitio. Axial se encarga de Java, de la memoria y de los loaders. A ti solo te queda jugar.',
      download: 'Descargar Axial',
      allPlatforms: 'Todas las plataformas',
    },
    screenshot: {
      ariaLabel: 'Pantalla de inicio de Axial Launcher',
      alt: 'Pantalla de inicio de Axial con una instancia destacada lista para jugar y la biblioteca de instancias debajo',
      mobileArt: {
        greeting: 'Buenas tardes, MockPlayer.',
        tally: '5 instancias en tu biblioteca',
        kicker: 'Sigue donde lo dejaste',
        instanceName: 'Survival Ridge',
        instanceDetail: 'Vanilla 1.21.6',
        play: 'Jugar',
        library: 'Biblioteca',
        cards: [
          { image: 'fabric-lab', name: 'Fabric Lab', detail: 'Fabric 1.21.5' },
          { image: 'forge-works', name: 'Forge Works', detail: 'Forge 1.21.1' },
        ],
      },
    },
    ethos: {
      ariaLabel: 'Qué hace Axial',
      parts: [
        ['Lanzar el juego debería ser ', false],
        ['la parte fácil', true],
        ['. Axial mantiene cada instancia ', false],
        ['aislada en su propia burbuja', true],
        [', se ocupa por ti de ', false],
        ['Java y de los loaders', true],
        [' y, si algo de lo que instaló se rompe, ', false],
        ['lo repara y te explica qué ha cambiado', true],
        ['.', false],
      ],
    },
    features: {
      ariaLabel: 'Por qué Axial',
      versions: {
        title: 'Todos los Minecraft, una sola biblioteca',
        body: 'Fabric moderno, Forge de la vieja escuela, snapshots e incluso alfas que el launcher oficial ni siquiera enseña. Todas las versiones y todos los loaders, juntos en tu biblioteca.',
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
      modded: {
        title: 'Con mods, sin tutoriales',
        body: 'Elige versión, elige loader y dale al play. Axial instala Java, el loader y todo lo que hay en medio, enseñándote cada paso mientras trabaja.',
        art: {
          heading: 'Instalando Fabric Lab',
          stageJava: 'Java 21 listo',
          stageLibraries: 'Bibliotecas verificadas (312)',
          stageAssets: 'Recursos: 1.904 de 2.113',
        },
      },
      guardian: {
        title: 'Lanzamientos que se reparan solos',
        body: 'Si un lanzamiento falla, Guardian repara lo que gestiona Axial, vuelve a intentarlo y deja constancia de cada cambio en un registro. Lo que es tuyo no lo toca sin preguntarte.',
        art: {
          failed: 'Lanzamiento fallido (código 1)',
          repaired: 'Guardian reparó 3 bibliotecas',
          relaunched: 'Relanzado y dentro del juego',
        },
      },
      performance: {
        title: 'Se acabó buscar "cómo quitar el lag"',
        body: 'Axial deja el juego a punto para tu equipo y tus mods antes del primer arranque, para que funcione como debería. Y si te gusta trastear, cada ajuste sigue siendo tuyo.',
        art: {
          picked: 'Equilibrado (4 GB)',
          pickedTag: 'Pensado para 31 mods',
          rejected: 'Flags de JVM propios',
          rejectedTag: 'Solo si tú quieres',
        },
      },
    },
    downloads: {
      heading: 'Descargar Axial',
      notice:
        'Axial aún no ha llegado a una versión estable. La de Windows está en alfa temprana y es la más fiable de las tres. Las de macOS y Linux están en pleno desarrollo, así que avanzan rápido y fallan más a menudo. En cualquier caso, espera errores y actualizaciones frecuentes.',
      activeDev: 'En desarrollo activo',
      earlyAlpha: 'Alfa temprana',
      fineprintBefore:
        'Cada botón descarga la última versión directamente desde GitHub. Los checksums y las versiones anteriores están en ',
      releasesArchive: 'el historial de versiones',
      fineprintAfter: '.',
      platformLabels: {
        mac: 'Descargar para macOS',
        win: 'Descargar para Windows',
        linux: 'Descargar para Linux',
      },
    },
    footer: {
      releases: 'Versiones',
    },
  },
} as const;
