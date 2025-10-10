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
        :width="40" 
        :height="40"
      />
    </YandexMapMarker>
  </YandexMap>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { YandexMap, YandexMapDefaultFeaturesLayer, YandexMapDefaultSchemeLayer, YandexMapMarker } from 'vue-yandex-maps'
import NatureMarker from '@/assets/icons/map-icons/nature-pin.svg'
import CityMarker from '@/assets/icons/map-icons/city-pin.svg'
import type { Place } from '@/types'


const props = defineProps<{
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

watch(() => props.places, (newPlaces) => {
   if (newPlaces.length === 1) {
    updateMapForPlace(newPlaces[0])
  } else {
    mapCenter.value = [50.100202, 53.195878]
    mapZoom.value = 10
  }
})

const getMarkerComponent = (place: Place) => {
  return place.type === 'nature' ? NatureMarker : CityMarker
}

const getMarkerSettings = (place: Place) => ({
  coordinates: place.coords,
  popup: { content: `
    <div style="border: 2px solid red; padding: 5px;">
      ${place.title}<br/>
      Координаты: ${place.coords}
    </div>
  `, position: 'right'}
})

const updateMapForPlace = (place: Place) => {
  console.log('Обновляем карту для места:', place.title)
  mapCenter.value = place.coords
  mapZoom.value = 13
}

const onPlaceClick = (place: Place) => {
  updateMapForPlace(place)
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