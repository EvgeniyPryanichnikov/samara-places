<template>
  <ul class="places-list">
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
  .places-list {
    padding: 20px;
    border-radius: 20px 0 0 20px;
    background-color: white;
  }
</style>