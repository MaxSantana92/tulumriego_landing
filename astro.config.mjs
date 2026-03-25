import { defineConfig } from 'astro/config'
import icon from 'astro-icon'

const site = process.env.SITE_URL ?? 'https://tulumriego.com'
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isUserOrOrgPage = repoName.endsWith('.github.io')
const base = process.env.BASE_PATH ?? (repoName && !isUserOrOrgPage ? `/${repoName}` : '/')

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
