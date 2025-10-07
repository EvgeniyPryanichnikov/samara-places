<template>
  <section class="map-container">
    <PlacesMap
      :places="places"
      :width="'100%'"
      :height="'650px'"
    />
  </section>
</template>

<script setup lang="ts">
import PlacesMap from './components/PlacesMap.vue'
import { usePlaces } from '@/core/composables/usePlaces'

const { places } = usePlaces()
</script>

<style scoped>
  .map-container {
    max-width: 1500px;
    margin: 0 auto;
  }
</style>