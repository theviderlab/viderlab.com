import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://viderlab.com',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
});
