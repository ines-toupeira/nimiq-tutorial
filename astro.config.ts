import vue from '@astrojs/vue'
import tutorialkit from '@tutorialkit/astro'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://nimiq-tutorial.maximogarciamtnez.workers.dev/',
  devToolbar: {
    enabled: false,
  },
  integrations: [
    tutorialkit({
      components: {
        TopBar: './src/components/CustomTopBar.astro',
        HeadTags: './src/components/CustomHeadLinks.astro',
      },
    }),
    vue(),
  ],
})
