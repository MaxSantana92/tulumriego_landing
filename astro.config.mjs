import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

const site = process.env.SITE_URL ?? 'https://example.com';

export default defineConfig({
  site,
  integrations: [icon()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
