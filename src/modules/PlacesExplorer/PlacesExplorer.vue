<template>
  <section class="places-explorer">
    <PlacesSelector />

    <PlacesMap
      :places="places"
      :height="'560px'"
    />
  </section>
</template>

<script setup lang="ts">
import PlacesMap from './components/PlacesMap.vue'
import PlacesSelector from './components/PlacesSelector.vue'
import { usePlaces } from '@/core/composables/usePlaces'

const { places } = usePlaces()
</script>

<style scoped>
  .places-explorer {
    display: grid;
    grid-template-columns: 400px 1fr;
    height: 600px;
    padding: 20px;
    max-width: 1600px;
    margin: 0 auto;
  }
</style>