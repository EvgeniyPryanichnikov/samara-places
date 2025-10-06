<template>
  <section class="map-container">
    <PlacesMap
      :places="places"
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
    /* max-width: 1600px;
    margin: 0 auto; */
  }
</style>