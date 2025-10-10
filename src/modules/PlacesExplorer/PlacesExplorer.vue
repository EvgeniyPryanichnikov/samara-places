<template>
  <section class="places-explorer">
    <PlacesSelector />

    <PlacesMap
      :places="displayedPlaces"
      :height="'560px'"
    />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import PlacesMap from './components/PlacesMap.vue'
import PlacesSelector from './components/PlacesSelector.vue'
import { usePlaces } from '@/core/composables/usePlaces'
import { useCurrentPlaceStore } from '@/stores/current-place' 

const { places } = usePlaces()

const currentPlaceStore = useCurrentPlaceStore()
const { currentPlace } = storeToRefs(currentPlaceStore)

const displayedPlaces = computed(() => {
  return currentPlace.value ? [currentPlace.value] : places.value
})
</script>

<style scoped>
  .places-explorer {
    display: grid;
    grid-template-columns: 450px 1fr;
    height: 600px;
    padding: 20px;
    max-width: 1600px;
    margin: 0 auto;
  }
</style>