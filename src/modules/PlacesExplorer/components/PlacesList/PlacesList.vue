<template>
  <ul 
    v-if="places"
    class="places-list"
  >
    <PlaceListItem
      v-for="(place, id) in places"
      :key="id"
      :place="place"
    />
  </ul>
</template>

<script setup lang="ts">
import PlaceListItem from './PlaceListItem.vue'
import type { Place } from '@/types'

const props = defineProps<{
  places: Place[]
}>()
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/abstracts/_mixins.scss';
  
  .places-list {
    @include flex-column;
    overflow-y: scroll;
    height: 516px;
    gap: 8px;
  }
</style>