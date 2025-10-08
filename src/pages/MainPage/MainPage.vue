<template>
  <section class="main-page">
    <PlacesSlider />

    <PlacesExplorer />
  </section>
</template>

<script setup lang="ts">
import PlacesSlider from '@/modules/PlacesSlider/PlacesSlider.vue'
import PlacesExplorer from '@/modules/PlacesExplorer/PlacesExplorer.vue'
</script>

<style lang="scss" scoped>
  .main-page {
    background-color:#e5edfc;
  }
</style>