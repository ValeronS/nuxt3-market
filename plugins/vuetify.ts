import '@mdi/font/css/materialdesignicons.css'
import '~/assets/styles/main.scss'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#0F0F0F',
            surface: '#E8E8E8',
            'on-background': '#0F0F0F',
          },
        },
      },
    },
  })

  app.vueApp.use(vuetify)
})
