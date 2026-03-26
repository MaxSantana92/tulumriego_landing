import { defineConfig } from 'astro/config'
import icon from 'astro-icon'

const site = 'https://tulumriego.com'
const base = '/'

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
