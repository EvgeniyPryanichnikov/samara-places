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
      <!-- <img
        alt=""
        class="pin"
        :src="getMarkerIcon(place)"
      > -->
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
import { 
  YandexMap, 
  YandexMapDefaultFeaturesLayer, 
  YandexMapDefaultSchemeLayer, 
  YandexMapMarker 
} from 'vue-yandex-maps'
import NatureMarker from '@/assets/icons/map-icons/nature-pin.svg'
import CityMarker from '@/assets/icons/map-icons/city-pin.svg'
import type { Place } from '@/types'

const props = defineProps<{
  places: Place[];
  height?: string;
  width?: string;
}>()

// Реактивные переменные для центра карты и зума
const mapCenter = ref([50.100202, 53.195878]); // Стартовые координаты Самары
const mapZoom = ref(10);

// Вычисляемые настройки карты
const mapSettings = computed(() => ({
  location: {
    center: mapCenter.value,
    zoom: mapZoom.value
  },
  // ⚡ НАСТРОЙКИ АНИМАЦИИ ДЛЯ ПЛАВНОСТИ
  smoothZoom: true,        // Плавное масштабирование
  smoothMove: true,        // Плавное перемещение
  duration: 1200,           // Длительность анимации (мс)
  timingFunction: 'ease-in-out' // Кривая плавности
}))

const getMarkerComponent = (place: Place) => {
    return place.type === 'nature' ? NatureMarker : CityMarker
}

const getMarkerSettings = (place: Place) => ({
  coordinates: place.coords, // [широта, долгота]
  popup: {content: place.preview_description, position: 'right'}
})

const onPlaceClick = (place: Place) => {
  console.log('Выбрано место:', place.title)
  // Центрируем карту на координатах места и увеличиваем масштаб
  mapCenter.value = place.coords
  mapZoom.value = 13; // Увеличьте или уменьшите значение для нужного уровня приближения
}
</script>

<style lang="scss" scoped>
  :deep(.ymaps3x0--map-container) {
    border-radius: 20px;
  }
</style>