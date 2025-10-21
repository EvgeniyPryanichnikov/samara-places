<template>
  <div class="place-selector">
    <h2>Исследуй Самару на карте</h2>

    <WeatherWidget />

    <Input
      v-model="searchQuery"
      placeholder="Поиск мест..."
    />

    <PlacesList
      :places="displayedPlaces"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import PlacesList from './PlacesList/PlacesList.vue'
import Input from '@/core/components/UI/inputs/Input.vue'
import WeatherWidget from '@/modules/WeatherWidget/WeatherWidget.vue'
import { usePlaces } from '@/core/composables/usePlaces'
import { usePlacesSearch } from '../composables/usePlacesSearch'

const { places } = usePlaces()
const { searchQuery, filteredPlaces } = usePlacesSearch(places)

const displayedPlaces = computed(() => {
  return searchQuery.value ? filteredPlaces.value : places.value
})
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/abstracts/_mixins.scss';

  .place-selector {
    @include flex-column;
    gap: 12px;
    padding: 20px;
    height: 560px;
    border-radius: 20px 0 0 20px;
    background-color: white;
  }
</style>
