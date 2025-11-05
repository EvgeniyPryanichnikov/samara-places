<template>
  <section class="main-page">
    <HeroBanner />

    <PlacesSlider />

    <PlacesExplorer />
  </section>
</template>

<script setup lang="ts">
import HeroBanner from '@/modules/HeroBanner/HeroBanner.vue'
import PlacesSlider from '@/modules/PlacesSlider/PlacesSlider.vue'
import PlacesExplorer from '@/modules/PlacesExplorer/PlacesExplorer.vue'
</script>

<style lang="scss" scoped>
  .main-page {
    background-color:#e5edfc;
  }
</style>
