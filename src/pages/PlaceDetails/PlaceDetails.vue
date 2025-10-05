<template>
  <div class="place-detail">
    <h1>{{ placeData.title }}</h1>
    <!-- Детальная информация о месте -->
  </div>
</template>

<script setup lang="ts">
import type { Place } from '@/types'

defineProps<{
  placeData: Place;
}>()
</script>

<style>
  /* .place-detail {
    height: 100px;
  } */
</style>