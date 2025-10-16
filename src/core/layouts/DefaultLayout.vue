<template>
  <!-- <Header /> -->

  <main>
    <slot /> <!-- Здесь будет отображаться содержимое страницы -->
  </main>

  <Footer />
</template>

<script setup lang="ts">
import Footer from '../components/layout/Footer.vue'
</script>

