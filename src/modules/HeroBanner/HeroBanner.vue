<template>
  <section class="hero-bunner">
    <div class="hero-bunner__content">
      <h1 class="hero-bunner__title">
        Самара
      </h1>

      <h2 class="hero-bunner__subtitle">
        Самые красивые и интересные места рядом
      </h2>
    </div>

    <HeroButton />
  </section>
</template>

<script setup lang="ts">

import HeroButton from './HeroButton.vue'
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/base/_typography.scss';
  @import '@/assets/styles/abstracts/_mixins.scss';

  .hero-bunner {
    width: 100%;
    height: 100vh;
    @include flex-center;
    flex-direction: column;
    gap: 80px;
    background-image: url("/images/monument-slavy.webp");
    // background-image: url("/images/ladya.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &__content {
      color: white;
      @include fw-500;
      @include flex-column;
      @include flex-center;
      gap: 12px;
      margin-top: 40px;
    }

    &__title {
      font-size: 60px;
    }

    &__subtitle {
      text-align: center;
      font-size: 20px;
    }

    @include mq('768') {
      &__subtitle {
        font-size: 30px;
      }

      &__title {
        font-size: 100px;
      }
    }
  }
</style>
