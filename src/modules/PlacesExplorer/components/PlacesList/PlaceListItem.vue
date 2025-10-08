<template>
  <li class="place-list__item">
    {{ place.title }}
  </li>
</template>

<script setup lang="ts">
import type { Place } from '@/types'

defineProps<{
  place: Place
}>()
</script>

<style lang="scss" scoped>
  .place-list__item {
    padding: 40px;
    background-color: rgba(59, 130, 246, 0.1);
    border-radius: 12px;
    cursor: pointer;

    &:hover {
      background-color: rgba(59, 130, 246, 0.2);
    }
  }
</style>