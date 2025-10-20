<template>
  <div
    v-if="place"
    class="place-detail"
  >
    <!-- Карусель фотографий -->
    <div class="place-detail__gallery">
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
          <div class="place-detail__carousel-item">
            <BaseImage
              :src="image"
              :alt="`${place.title} - фото ${index + 1}`"
              class="place-detail__image"
            />
          </div>
        </Slide>

        <template #addons>
          <Navigation />

          <Pagination />
        </template>
      </Carousel>
    </div>

    <!-- Контент места -->
    <div class="place-detail__content">
      <h1 class="place-detail__title">
        {{ place.title }}
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import BaseImage from '@/core/components/UI/image/BaseImage.vue'
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

<style scoped lang="scss">
  @import '@/assets/styles/components/place-detail';
</style>
