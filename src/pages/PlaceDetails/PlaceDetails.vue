<template>
  <div
    v-if="place"
    class="place-detail"
  >
    <!-- Карусель фотографий -->
    <div class="place-gallery">
      <Carousel
        v-if="place.main_images && place.main_images.length > 0"
        :items-to-show="1"
        :wrap-around="true"
        :autoplay="10000"
        :transition="500"
      >
        <Slide
          v-for="(image, index) in place.main_images"
          :key="index"
        >
          <div class="carousel__item">
            <img
              :src="image"
              :alt="`${place.title} - фото ${index + 1}`"
              class="carousel__image"
            >
          </div>
        </Slide>

        <template #addons>
          <Navigation />

          <Pagination />
        </template>
      </Carousel>
    </div>

    <!-- Контент места -->
    <div class="place-content">
      <h1 class="place-title">
        {{ place.title }}
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { usePlaces } from '@/core/composables/usePlaces'
import type { Place } from '@/types'

import 'vue3-carousel/dist/carousel.css'

const route = useRoute()
const { places, loading, error } = usePlaces()

const place = computed(() => {
  const placeId = route.query.id

  if (!placeId || places.value.length === 0) return null

  return places.value.find((p: Place) => p.id === Number(placeId)) || null
})
</script>

<style scoped>
.place-detail {
  /* background-color: rgba(59, 130, 246, 0.1); */
  max-width: 1200px;
  margin: 0 auto;
  /* padding: 40px; */
  min-height: 100vh;
}

.place-gallery {
  width: 100%;
  height: 70vh;
  position: relative;
}

.carousel__item {
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.place-content {
  padding: 40px 0;
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(59, 130, 246, 0.1);
}

.place-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
}

/* Кастомные стили для карусели */
:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

:deep(.carousel__pagination) {
  position: absolute;
  bottom: 20px;
}

:deep(.carousel__pagination-button) {
  background-color: rgba(255, 255, 255, 0.5);
  width: 12px;
  height: 12px;
  margin: 0 4px;
  border-radius: 50%;
}

:deep(.carousel__pagination-button--active) {
  background-color: white;
}
</style>
