<template>
  <li class="place-list__item">
    <h3>{{ place.title }}</h3>

    <PlaceItemBadges
      :badges="place.status_tags"
    />
  </li>
</template>

<script setup lang="ts">
import type { Place } from '@/types'
import PlaceItemBadges from './PlaceItemBadges.vue'

defineProps<{
  place: Place
}>()
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
  }
</style>