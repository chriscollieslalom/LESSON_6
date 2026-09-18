<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'

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
</script>

<template>
  <v-app class="brand-app">
    <v-main class="brand-shell">
      <v-container class="fill-height d-flex align-center justify-center px-4">
        <v-row justify="center">
          <v-col cols="12" sm="8" md="5" lg="4">
            <v-card class="brand-card about-card mx-auto" elevation="0" rounded="xl" color="surface">
              <div class="brand-header d-flex align-center justify-space-between">
                <div class="brand-nav d-flex ga-2">
                  <v-btn variant="text" size="small" class="brand-nav-btn text-none" to="/">Home</v-btn>
                  <v-btn variant="text" size="small" class="brand-nav-btn text-none" to="/about" exact>About</v-btn>
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

              <div class="about-content">
                <p class="about-eyebrow">ABOUT CHRIS COLLIE</p>
                <h1 class="brand-name text-h3 font-weight-bold">Designing with intent.</h1>

                <div class="about-copy-stack">
                  <p class="about-copy">
                    I’m a multidisciplinary designer and developer focused on crafting intuitive digital products,
                    polished brand experiences, and thoughtful interactions that make people feel something.
                  </p>

                  <p class="about-copy">
                    My work blends design thinking, storytelling, and technical execution to turn ideas into experiences
                    people remember.
                  </p>
                </div>
              </div>

              <div class="brand-footer">MADE WITH FLAIR</div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
