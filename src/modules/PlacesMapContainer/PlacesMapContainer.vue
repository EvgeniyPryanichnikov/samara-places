<template>
  <section class="map-container">
    <PlacesList 
      :places="places"
    />

    <PlacesMap
      :places="places"
      :height="'650px'"
    />
  </section>
</template>

<script setup lang="ts">
import PlacesList from './components/PlacesList.vue'
import PlacesMap from './components/PlacesMap.vue'
import { usePlaces } from '@/core/composables/usePlaces'

const { places } = usePlaces()
</script>

<style scoped>
  .map-container {
    display: grid;
    grid-template-columns: 400px 1fr;
    padding: 20px;
    max-width: 1600px;
    margin: 0 auto;
  }
</style>