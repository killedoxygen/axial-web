import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { defaultLocale, locales } from './src/config/locales.ts';
import { fileURLToPath } from 'node:url';

const iconSubset = fileURLToPath(
  new URL('./src/vendor/openai-icons-subset.js', import.meta.url),
);

export default defineConfig({
  site: 'https://axial.run',
  integrations: [react()],
  // Keep index routes as directories and locale error pages as /es/404.html.
  build: { format: 'preserve' },
  i18n: {
    defaultLocale,
    locales: [...locales],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    server: {
      allowedHosts: ['zenith.local'],
    },
    resolve: {
      alias: {
        '@openai/apps-sdk-ui/components/Icon': iconSubset,
      },
    },
  },
});
