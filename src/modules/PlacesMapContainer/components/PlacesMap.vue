<template>
  <YandexMap
    :settings="mapSettings"
    :width="'100%'"
    :height="'500px'"
  >
    <YandexMapDefaultSchemeLayer />
    <YandexMapDefaultFeaturesLayer />
    
    <YandexMapMarker
      v-for="place in places"
      :key="place.id"
      :settings="getMarkerSettings(place)"
      @click="onPlaceClick(place)"
    >
      <!-- Кастомная иконка метки -->
      <div class="custom-marker">
        {{ place.title }}
      </div>
    </YandexMapMarker>
  </YandexMap>
</template>

<script setup lang="ts">
import { 
  YandexMap, 
  YandexMapDefaultFeaturesLayer, 
  YandexMapDefaultSchemeLayer, 
  YandexMapMarker 
} from 'vue-yandex-maps'
import type { Place } from '@/types'

const props = defineProps<{
  places: Place[]
}>()

const mapSettings = {
  location: {
    center: [53.414661, 50.019138], // Координаты Ширяево
    zoom: 10
  }
}

const getMarkerSettings = (place: Place) => ({
  coordinates: place.coords // [широта, долгота]
})

const onPlaceClick = (place: Place) => {
  console.log('Выбрано место:', place.title)
}
</script>

<style lang="scss" scoped>
.explore-map {
  position: relative;
  width: 100%;
  height: 500px;
  
  &__container {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    overflow: hidden;
  }
  
  &__info {
    position: absolute;
    top: 20px;
    right: 20px;
    background: white;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    max-width: 300px;
    z-index: 1000;
  }
}
</style>