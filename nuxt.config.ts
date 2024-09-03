import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true,
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'vue-yandex-maps/nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Noto Serif': {
            wght: [300, 400, 500, 600, 700],
            ital: [300],
          },
          Inter: {
            wght: [300, 400, 500, 600, 700],
            ital: [300],
          },
        },
      },
    ],
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) =>
        // eslint-disable-next-line
        // @ts-expect-error
        config.plugins.push(
          vuetify({
            autoImport: true,
            styles: {
              configFile: 'assets/styles/settings.scss',
            },
          }),
        ),
      )
    },
  ],
  yandexMaps: {
    apikey: process.env.YANDEX_API_KEY,
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
