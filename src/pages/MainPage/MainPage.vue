<template>
  <section class="main-page">
    <HeroBanner />

    <WelcomeText />

    <PlacesSlider />

    <PlacesExplorer />
  </section>
</template>

<script setup lang="ts">
import WelcomeText from '@/modules/WelcomeText/WelcomeText.vue'
import HeroBanner from '@/modules/HeroBanner/HeroBanner.vue'
import PlacesSlider from '@/modules/PlacesSlider/PlacesSlider.vue'
import PlacesExplorer from '@/modules/PlacesExplorer/PlacesExplorer.vue'
</script>

<style lang="scss" scoped>
  .main-page {
    background-color:#e5edfc;
  }
</style>
