import './assets/main.css'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#0a0d17',
          surface: '#101827',
          primary: '#60a5fa',
          secondary: '#c084fc',
          'on-surface': '#f8fafc',
        },
      },
      light: {
        dark: false,
        colors: {
          background: '#edf6ff',
          surface: '#ffffff',
          primary: '#2563eb',
          secondary: '#7c3aed',
          'on-surface': '#111827',
        },
      },
    },
  },
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
