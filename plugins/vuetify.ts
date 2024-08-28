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
            surface: '#E8E8E8',
          },
        },
      },
    },
  })

  app.vueApp.use(vuetify)
})
