<template>
  <section class="main-page">
    <PlacesSlider />

    <PlacesMapContainer />
  </section>
</template>

<script setup lang="ts">
import PlacesSlider from '@/modules/PlacesSlider/PlacesSlider.vue'
import PlacesMapContainer from '@/modules/PlacesMapContainer/PlacesMapContainer.vue';
</script>

<style lang="scss" scoped>
  .main-page {
    background-color:#e5edfc;
  }
</style>