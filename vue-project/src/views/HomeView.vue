<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'

const isDark = ref(true)

const pageClass = computed(() => ({ 'theme-light': !isDark.value, 'theme-dark': isDark.value }))

const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>

<template>
  <main class="page-shell" :class="pageClass">
    <div class="card" aria-label="Chris Collie profile card">
      <div class="top-row">
        <nav class="mini-nav" aria-label="Main navigation">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/about" class="nav-link">About</RouterLink>
        </nav>

        <button class="theme-toggle" type="button" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'" @click="toggleTheme">
          <span class="theme-icon">{{ isDark ? '☀️' : '🌙' }}</span>
          <span>{{ isDark ? 'Light mode' : 'Dark mode' }}</span>
        </button>
      </div>

      <div class="avatar" aria-label="Profile picture placeholder">CC</div>

      <header class="intro">
        <h1>Chris Collie</h1>
        <p>Designing thoughtful digital experiences and building ideas that move.</p>
      </header>

      <nav class="link-stack" aria-label="Social links">
        <a class="link-button" href="https://www.safdiearchitects.com/projects" target="_blank" rel="noreferrer">Portfolio</a>
        <a class="link-button" href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a>
        <a class="link-button" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        <a class="link-button" href="mailto:hello@chriscollie.com">Email</a>
      </nav>
    </div>
  </main>
</template>
