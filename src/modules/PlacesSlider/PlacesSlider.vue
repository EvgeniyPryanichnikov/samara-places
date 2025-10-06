<template>
  <div class="places-slider">
    <h2 class="places-slider__title">Места</h2>

    <Carousel :items-to-show="3.2" :wrap-around="true" :breakpoints="breakpoints" :gap="20">
      <Slide v-for="place in places" :key="place.id">
        <PlaceItem :place-data="place" />
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import PlaceItem from './components/PlaceItem.vue'
import { usePlaces } from '@/core/composables/usePlaces'

const { places, loading, error } = usePlaces()


// Адаптивность
const breakpoints = ref({
  300: { itemsToShow: 1 },
  768: { itemsToShow: 2 },
  1024: { itemsToShow: 3 },
  1200: { itemsToShow: 3.07 }
})
</script>

<style lang="scss">
  @import '@/assets/styles/abstracts/_mixins.scss';

  .places-slider {
    max-width: 1600px;
    margin: 0 auto;
    padding: 20px 0;

    @include mq('768') {  
      padding: 20px;
    }

    .places-slider__title {
      font-size: 30px;
      text-align: center;
      margin-bottom: 18px;
    }
    .places-slider__container {
      display: flex;
      gap: 18px;
    }
    .carousel__prev,
    .carousel__next {
      display: none;

      @include mq('1024') {
        color: rgba(59, 130, 246);
        right: 0;
        top: 35%;
        display: block;
      }
    }
    .carousel__pagination-button {
      background-color: rgba(59, 130, 246, .5);
    }
    .carousel__pagination-button--active {
      background-color:  rgba(59, 130, 246);
    }
  }
</style>