<template>
  <YandexMap
    :settings="mapSettings"
    :width="width"
    :height="height"
  >
    <YandexMapDefaultSchemeLayer />
    <YandexMapDefaultFeaturesLayer />
    
    <YandexMapMarker
      v-for="place in places"
      :key="place.id"
      :settings="getMarkerSettings(place)"
      @click="onPlaceClick(place)"
    >
      <component 
        :is="getMarkerComponent(place)"
        :width="60" 
        :height="60"
      />
    </YandexMapMarker>
  </YandexMap>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { YandexMap, YandexMapDefaultFeaturesLayer, YandexMapDefaultSchemeLayer, YandexMapMarker } from 'vue-yandex-maps'
import NatureMarker from '@/assets/icons/map-icons/nature-pin.svg'
import CityMarker from '@/assets/icons/map-icons/city-pin.svg'
import type { Place } from '@/types'

defineProps<{
  places: Place[];
  height?: string;
  width?: string;
}>()

const mapCenter = ref([50.100202, 53.195878]); // Стартовые координаты Самары
const mapZoom = ref(10);

const mapSettings = computed(() => ({
  location: {
    center: mapCenter.value,
    zoom: mapZoom.value
  }
}))

const getMarkerComponent = (place: Place) => {
    return place.type === 'nature' ? NatureMarker : CityMarker
}

const getMarkerSettings = (place: Place) => ({
  coordinates: place.coords,
  popup: {content: place.preview_description, position: 'right'}
})

const onPlaceClick = (place: Place) => {
  console.log('Выбрано место:', place.title)
  mapCenter.value = place.coords
  mapZoom.value = 13;
}
</script>

<style lang="scss" scoped>
  :deep(.ymaps3x0--map-container) {
    border-radius: 0 20px 20px 0;
  }
  :deep(.ymaps3x0--map) {
    cursor: grab;
  }
  :deep(.ymaps3x0--map:active) {
    cursor: grabbing;
  }
</style>