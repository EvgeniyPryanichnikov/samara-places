<template>
  <button
    class="header__button pulse-simple"
  >
    Смотреть
  </button>
</template>

<style lang="scss" scoped>
  @import '@/assets/styles/abstracts/_mixins.scss';

  .header__button {
    color: white;
    padding: 12px;
    border: 2px solid white;
    border-radius: 16px;
    font-size: 16px;

    @include mq('768') {
      padding: 20px;
      font-size: 24px;
    }
  }

  @keyframes pulse-simple {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  .pulse-simple {
    animation: pulse-simple 1.5s ease-in-out infinite;
  }
</style>
