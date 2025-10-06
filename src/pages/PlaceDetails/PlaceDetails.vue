<template>
  <div 
    v-if="place"
    class="place-detail"
  >
    <h1>{{ place.title }}</h1>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePlaces } from '@/core/composables/usePlaces'
import BaseImage from '@/core/components/UI/image/BaseImage.vue'

const route = useRoute()
const { places, loading, error } = usePlaces()

const place = computed(() => {
  const placeId = route.query.id
  
  if (!placeId || places.value.length === 0) return null

  console.log(placeId)
  
  // Ищем место по ID или url_title
  return places.value.find(p => p.id === Number(placeId)) || null
})
</script>

<style>
  /* .place-detail {
    height: 100px;
  } */
</style>