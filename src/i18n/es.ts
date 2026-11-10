import type { Copy } from './en.ts';

/** Spain Spanish copy, written natively rather than translated from English. */
export const es: Copy = {
  languageName: 'Español',
  meta: {
    title: 'Axial | Launcher de Minecraft gratis y de código abierto',
    description:
      'Launcher de Minecraft gratis, de código abierto y sin anuncios que ajusta el juego a tu PC, del portátil viejo al PC gaming. Para Windows, macOS y Linux.',
    ogTagline: 'Launcher de Minecraft gratis y de código abierto',
    ogImageAlt:
      'La pantalla de inicio del launcher Axial bajo el titular «Un launcher que va al grano», con cinco ajolotes asomándose por encima',
  },
  notFound: {
    title: 'Página no encontrada | Axial',
    heading: 'Aquí no hay nada que abrir',
    body: 'Esta página no existe. El launcher sí.',
    home: 'Volver a Axial',
  },
  nav: {
    ariaLabel: 'Navegación principal',
    homeAriaLabel: 'Inicio de Axial',
    downloads: 'Descargas',
    download: 'Descargar',
    languageAriaLabel: 'Elegir idioma',
  },
  hero: {
    title: ['Un launcher que', 'va al grano'] as [string, string],
    description:
      'Gratis, de código abierto y ajustado al PC que tengas, del portátil viejo al PC gaming. Sin anuncios ni programas que no has pedido. Hecho por jugadores para jugadores. Y sí, es monísimo.',
    download: 'Descargar Axial',
    allPlatforms: 'Todas las plataformas',
  },
  screenshot: {
    ariaLabel: 'Pantalla de inicio de Axial Launcher',
    alt: 'Pantalla de inicio de Axial con una instancia destacada lista para jugar y la biblioteca de instancias debajo',
  },
  ethos: {
    ariaLabel: 'Por qué existe Axial',
    parts: [
      ['Axial nació para quien ', false],
      ['juega en un PC modesto', true],
      [' y creció para quien ', false],
      ['quiere trastearlo todo', true],
    ] as [string, boolean][],
  },
  features: {
    lowEnd: {
      title: 'Jugable en el portátil que tienes',
      body: 'Axial va más allá de meter unos cuantos mods de rendimiento. Ajusta cómo funciona el propio juego en tu equipo, para que hasta un portátil viejo aguante el ritmo.',
      art: {
        heading: 'Portátil viejo',
        items: [
          'Va más fluido',
          'Gasta menos memoria',
          'Descansa en segundo plano',
        ],
      },
    },
    highEnd: {
      title: 'Y un PC gaming que por fin se aprovecha',
      body: 'Minecraft apenas usa un PC potente. Axial pone a trabajar todos los núcleos y la gráfica para que veas más lejos y con menos tirones.',
      art: {
        heading: 'PC gaming',
        items: [
          'Todos los núcleos trabajando',
          'Más distancia de visión',
          'Menos tirones',
        ],
      },
    },
    versions: {
      title: 'Cada instancia va por separado',
      body: 'Elige versión y loader, de alfas antiguas a lo último en Fabric, Quilt, Forge o NeoForge, y dale a Jugar. Cada instancia tiene sus propios mods, mundos y ajustes, así que probar un pack nuevo nunca toca ese mundo que llevas años cuidando.',
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
      title: 'Todo donde esperas que esté',
      body: 'Ni menús escondidos ni manuales. Jugar es un clic y todo lo demás está a un paso. Además es bonito, y los ajolotes son monísimos, está científicamente demostrado.',
      art: {
        heading: 'Volver a tu mundo',
        items: ['Abre Axial', 'Dale a Jugar', 'Ya está'],
      },
    },
    open: {
      title: 'Aquí nadie te vende nada',
      body: 'Axial no tiene modelo de negocio ni segundas intenciones. Es gratis, de código abierto con licencia MIT, y lo próximo que hagamos será lo que pida la comunidad.',
      art: {
        heading: 'Lo que te llevas',
        items: ['Sin anuncios', 'Sin bloatware', 'Licencia MIT', 'Es monísimo'],
      },
    },
  },
  downloads: {
    heading: 'Descargar Axial',
    lead: 'Gratis en todas las plataformas. ¿Echas algo en falta? Cuéntanoslo en GitHub, que así decidimos qué hacer después.',
    notice:
      'Ojo: Axial todavía no tiene versión estable. La de Windows es una alfa temprana y es la más estable de las tres. Las de macOS y Linux cambian muy rápido y fallan más. Habrá errores y actualizaciones frecuentes.',
    activeDev: 'En desarrollo activo',
    yourDevice: 'Tu equipo',
    holdup: {
      title: 'Un paso más antes de jugar',
      close: 'Entendido',
      mac: {
        lead: 'Tu descarga ya está en marcha. Axial es un proyecto de la comunidad y todavía no podemos permitirnos el certificado de firma de Apple, así que macOS lo bloqueará la primera vez. Perdona las molestias. Se abre así:',
        steps: [
          'Abre el archivo descargado y arrastra Axial a Aplicaciones.',
          'Abre Axial una vez. macOS dirá que no se puede abrir. Cierra el aviso.',
          'Ve a Ajustes del Sistema, entra en Privacidad y seguridad y baja hasta Seguridad.',
          'Pulsa «Abrir igualmente» junto a Axial y confirma. Solo hay que hacerlo una vez.',
        ],
        note: 'En macOS 14 o anterior, haz clic derecho sobre Axial y elige Abrir.',
      },
      win: {
        lead: 'Tu descarga ya está en marcha. Axial es un proyecto de la comunidad y todavía no podemos permitirnos el certificado de firma de Microsoft, así que Windows te sacará un aviso azul la primera vez. Perdona las molestias. Se salta así:',
        steps: [
          'Ejecuta el archivo descargado.',
          'Cuando aparezca «Windows protegió su PC», pulsa «Más información».',
          'Pulsa «Ejecutar de todas formas». Solo hay que hacerlo una vez.',
        ],
        note: '',
      },
    },
    earlyAlpha: 'Alfa temprana',
    fineprintBefore:
      'Cada botón descarga la última versión directamente de GitHub. Los checksums y las versiones anteriores están en ',
    releasesArchive: 'la página de versiones',
    fineprintAfter: '.',
    platformLabels: {
      mac: 'Descargar para macOS',
      win: 'Descargar para Windows',
      linux: 'Descargar para Linux',
    },
  },
  footer: {
    releases: 'Versiones',
    tagline:
      'Un launcher de Minecraft de código abierto hecho por y para la comunidad',
  },
};
