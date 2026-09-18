<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="page-shell about-page">
    <div class="card about-card" aria-label="About Chris Collie">
      <nav class="mini-nav about-nav" aria-label="Main navigation">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/about" class="nav-link">About</RouterLink>
      </nav>

      <div class="avatar small-avatar" aria-label="Profile picture placeholder">CC</div>

      <header class="intro">
        <h1>About</h1>
      </header>

      <p class="about-copy">
        I’m a multidisciplinary designer and developer focused on crafting intuitive digital products,
        polished brand experiences, and thoughtful interactions that make people feel something.
      </p>

      <p class="about-copy">
        My work blends design thinking, storytelling, and technical execution to turn ideas into experiences
        people remember.
      </p>
    </div>
  </main>
</template>
