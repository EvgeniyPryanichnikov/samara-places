<template>
  <li>
    {{ place.title }}
  </li>
</template>

<script setup lang="ts">
import type { Place } from '@/types'

defineProps<{
  place: Place
}>()
</script>

<style scoped>

</style>