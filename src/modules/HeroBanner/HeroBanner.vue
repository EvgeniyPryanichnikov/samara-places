<template>
  <header class="header">
    <!-- <HeaderNav /> -->

    <div class="header__content">
      <h1 class="header__title">
        Самара
      </h1>

      <h2 class="header__subtitle">
        От Волжских просторов до Жигулёвских вершин.
      </h2>
    </div>

    <HeroButton />
  </header>
</template>

<script setup lang="ts">

import HeroButton from './HeroButton.vue'
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/base/_typography.scss';
  @import '@/assets/styles/abstracts/_mixins.scss';

  .header {
    width: 100%;
    height: 100vh;
    @include flex-center;
    flex-direction: column;
    gap: 80px;
    background-image: url("/images/monument-slavy.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .header__content {
      color: white;
      @include fw-500;
      @include flex-column;
      @include flex-center;
      gap: 12px;
      margin-top: 40px;
    }

    .header__title {
      font-size: 60px;
    }

    .header__subtitle {
      text-align: center;
      font-size: 20px;
    }

    @include mq('768') {
      .header__subtitle {
        font-size: 30px;
      }

      .header__title {
        font-size: 100px;
      }
    }
  }
</style>
