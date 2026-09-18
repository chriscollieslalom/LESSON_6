<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import LinkButton from '../components/LinkButton.vue'

const theme = useTheme()

const isDark = computed({
  get: () => theme.global.current.value.dark,
  set: (value: boolean) => {
    theme.global.name.value = value ? 'dark' : 'light'
  },
})

const toggleTheme = () => {
  isDark.value = !isDark.value
}

const links = [
  { label: 'Portfolio', href: 'https://www.safdiearchitects.com/projects', icon: 'mdi-briefcase-outline' },
  { label: 'Dribbble', href: 'https://dribbble.com', icon: 'mdi-basketball' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'mdi-linkedin' },
  { label: 'Email', href: 'mailto:hello@chriscollie.com', icon: 'mdi-email-outline' },
]
</script>

<template>
  <v-app class="brand-app">
    <v-main class="brand-shell">
      <v-container class="fill-height d-flex align-center justify-center px-4">
        <v-row justify="center">
          <v-col cols="12" sm="8" md="5" lg="4">
            <v-card class="brand-card mx-auto" elevation="0" rounded="xl" color="surface">
              <div class="brand-header d-flex align-center justify-space-between">
                <div class="brand-nav d-flex ga-2">
                  <v-btn variant="text" size="small" class="brand-nav-btn text-none" to="/" exact>Home</v-btn>
                  <v-btn variant="text" size="small" class="brand-nav-btn text-none" to="/about">About</v-btn>
                </div>

                <v-btn
                  :prepend-icon="isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
                  variant="outlined"
                  size="small"
                  class="brand-theme-btn text-none"
                  @click="toggleTheme"
                >
                  {{ isDark ? 'Light' : 'Dark' }}
                </v-btn>
              </div>

              <div class="brand-avatar-wrap">
                <v-avatar size="118" class="brand-avatar" color="primary" rounded="circle">
                  <span class="text-h4 font-weight-bold">CC</span>
                </v-avatar>
              </div>

              <div class="text-center">
                <h1 class="brand-name text-h4 font-weight-bold">Chris Collie</h1>
                <p class="brand-tagline text-body-1 text-medium-emphasis mb-0">
                  Designing thoughtful digital experiences and building ideas that move.
                </p>
              </div>

              <div class="brand-link-stack mt-6">
                <LinkButton
                  v-for="link in links"
                  :key="link.label"
                  :label="link.label"
                  :url="link.href"
                  :icon="link.icon"
                />
              </div>

              <div class="brand-footer">MADE WITH FLAIR</div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
