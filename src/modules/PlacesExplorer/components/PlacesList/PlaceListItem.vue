<template>
  <li
    :class="['place-list__item', { 'place-list__item--selected': isSelected }]"
    @click="setCurrentPlace(place)"
  >
    <h3>{{ place.title }}</h3>

    <p class="description">
      {{ place.preview_description }}
    </p>

    <PlaceItemBadges
      :badges="place.status_tags"
    />
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import type { Place } from '@/types'
import PlaceItemBadges from './PlaceItemBadges.vue'
import { useCurrentPlaceStore } from '@/stores/current-place'

const { place } = defineProps<{
  place: Place;
}>()

const currentPlaceStore = useCurrentPlaceStore()

const { currentPlace } = storeToRefs(currentPlaceStore)
const { setCurrentPlace } = currentPlaceStore

const isSelected = computed(() => {
  return currentPlace.value?.id === place.id
})
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

    &--selected {
      border: 2px solid rgb(59, 130, 246);
      background-color: rgba(59, 130, 246, 0.15);
    }

    .description {
      font-size: 14px;
      line-height: 18px;
    }
  }
</style>
