import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://emmanuelmartindavid.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
