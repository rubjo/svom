import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'

export default defineConfig({
  // GitHub Pages serves the repo rubjo/svom at rubjo.github.io/svom/. Code
  // that builds a public/ URL itself must prefix import.meta.env.BASE_URL.
  base: '/svom/',
  plugins: [
    vue(),
    ui({
      // One page, in-page anchors only — no vue-router needed.
      router: false,
      ui: {
        // Palettes are the app's own (src/style/main.css, @theme static).
        colors: {
          primary: 'lane',
          secondary: 'blue',
          neutral: 'abyss',
          success: 'emerald',
          warning: 'amber',
          error: 'rose',
          info: 'sky',
        },
        // Same component looks as the app (svom/vite.config.js).
        button: { slots: { base: 'rounded-full' } },
        badge: { slots: { base: 'rounded-full' } },
        card: {
          slots: { root: 'rounded-3xl shadow-(--card-shadow)' },
          variants: { variant: { outline: { root: 'bg-elevated ring-default' } } },
        },
        tabs: {
          variants: {
            variant: {
              pill: {
                list: 'rounded-full bg-muted',
                trigger: 'rounded-full',
                indicator: 'rounded-full',
              },
            },
          },
        },
      },
    }),
  ],
})
