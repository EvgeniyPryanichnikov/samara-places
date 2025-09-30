<template>
  <header class="header">
    <div class="header__content">
      <h1 class="header__title">
        Самара
      </h1>

      <h2 class="header__subtitle">
        От Волжских просторов до Жигулёвских вершин.
      </h2>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/base/_typography.scss';
   @import '@/assets/styles/abstracts/_mixins.scss';

  .header {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: end;
    background-image: url("/src/assets/images/monument-slavy.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .header__content {
      color: white;
      @include fw-500;
      @include flex-column;
      gap: 12px;
      margin: auto 82px;
    }

    .header__subtitle {
      font-size: 30px;
    }
  }
</style>