<template>
  <li 
    class="place-list__item"
    @click="setCurrentPlace(place)"
  >
    <h3>{{ place.title }}</h3>

    <p class="description">{{ place.preview_description }}</p>

    <PlaceItemBadges
      :badges="place.status_tags"
    />
  </li>
</template>

<script setup lang="ts">
import type { Place } from '@/types'
import PlaceItemBadges from './PlaceItemBadges.vue'
import { useCurrentPlaceStore } from '@/stores/current-place' 

defineProps<{
  place: Place
}>()

const currentPlaceStore = useCurrentPlaceStore()
const { setCurrentPlace } = currentPlaceStore
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/abstracts/_mixins.scss';
 
  .place-list__item {
    @include flex-column;
    gap: 8px;
    padding: 12px 20px;
    background-color: rgba(59, 130, 246, 0.1);
    border-radius: 12px;
    cursor: pointer;

    &:hover {
      background-color: rgba(59, 130, 246, 0.2);
    }

    .description {
      font-size: 14px;
      line-height: 18px;
    }
  }
</style>