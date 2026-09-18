<script setup lang="ts">
defineProps<{
  label: string
  url: string
  icon: string
}>()
</script>

<template>
  <v-btn
    :href="url"
    :prepend-icon="icon"
    block
    rounded="lg"
    size="large"
    variant="flat"
    class="brand-link-btn text-subtitle-1 font-weight-medium"
    target="_blank"
    rel="noreferrer"
  >
    {{ label }}
  </v-btn>
</template>
