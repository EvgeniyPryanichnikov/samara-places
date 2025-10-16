<template>
  <div class="map-container">
    <button
      v-if="showBackButton"
      type="button"
      class="back-to-all-button"
      @click="backToAllPlaces"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
      </svg>
      Ко всем местам
    </button>

    <YandexMap
      ref="mapRef"
      :settings="mapSettings"
      :width="mapWidth"
      :height="height"
    >
      <YandexMapDefaultSchemeLayer />

      <YandexMapDefaultFeaturesLayer />

      <YandexMapMarker
        v-for="place in places"
        :key="place.id"
        :settings="getMarkerSettings(place)"
        @click="onMarkerClick(place)"
      >
        <component
          :is="getMarkerComponent(place)"
          :width="40"
          :height="40"
        />
      </YandexMapMarker>
    </YandexMap>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useMapResize } from '../composables/useMapResize'
import { YandexMap, YandexMapDefaultFeaturesLayer, YandexMapDefaultSchemeLayer, YandexMapMarker } from 'vue-yandex-maps'
import NatureMarker from '@/assets/icons/map-icons/nature-pin.svg'
import CityMarker from '@/assets/icons/map-icons/city-pin.svg'
import { useCurrentPlaceStore } from '@/stores/current-place'
import type { Place } from '@/types'

const { places, height } = defineProps<{
  places: Place[];
  height: string;
}>()

const router = useRouter()
const currentPlaceStore = useCurrentPlaceStore()

const mapRef = ref()

const { updateMapSize } = useMapResize(mapRef)

const mapCenter = ref([ 50.100202, 53.195878 ])
const mapZoom = ref(10)
const mapWidth = ref('100%')

const showBackButton = computed(() => {
  return currentPlaceStore.currentPlace !== null
})

const mapSettings = computed(() => ({
  location: {
    center: mapCenter.value,
    zoom: mapZoom.value
  }
}))

watch(() => places, newPlaces => {
  if (newPlaces.length === 1) {
    updateMapForPlace(newPlaces[0])
  } else {
    backToAllPlaces()
  }
})

const getMarkerComponent = (place: Place) => {
  return place.type === 'nature' ? NatureMarker : CityMarker
}

const getMarkerSettings = (place: Place) => ({
  coordinates: place.coords
})

const updateMapForPlace = (place: Place) => {
  mapCenter.value = place.coords
  mapZoom.value = 13
}

const onMarkerClick = (place: Place) => {
  updateMapForPlace(place)

  router.push({
    name: 'PlaceDetails',
    params: {
      url_title: place.url_title
    },
    query: {
      id: place.id
    }
  })
}

const backToAllPlaces = () => {
  currentPlaceStore.clearCurrentPlace()
  mapCenter.value = [ 50.100202, 53.195878 ]
  mapZoom.value = 10
}

onMounted(() => {
  setTimeout(() => {
    updateMapSize()
  }, 300)
})
</script>

<style lang="scss" scoped>
  .map-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .back-to-all-button {
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 8px;
    background: white;
    border: none;
    border-radius: 8px;
    padding: 10px 16px;
    color: #1f2937;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease;

    &:hover {
      background: #f8fafc;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  :deep(.ymaps3x0--map-container) {
    border-radius: 0 20px 20px 0;
    width: 100% !important;
  }

  :deep(.ymaps3x0--map) {
    cursor: grab;
    width: 100% !important;
  }

  :deep(.ymaps3x0--map:active) {
    cursor: grabbing;
  }
</style>
