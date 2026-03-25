import { defineConfig } from 'astro/config'
import icon from 'astro-icon'

const site = process.env.SITE_URL ?? 'https://maxsantana92.github.io'
const base = process.env.BASE_PATH ?? '/tulumriego_landing'

export default defineConfig({
  site,
  base,
  integrations: [icon()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
})
