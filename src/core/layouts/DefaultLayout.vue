<template>
  <Header/>

  <main>
    <slot /> <!-- Здесь будет отображаться содержимое страницы -->
  </main>

  <footer>Футер</footer>
</template>


<script setup lang="ts">
import Header from '../components/layout/Header.vue';
</script>

<style scoped>
</style>