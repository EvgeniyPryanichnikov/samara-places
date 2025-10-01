<template>
  <button class="place-item__button">
    Вперёд
  </button>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/abstracts/_mixins.scss';

  .place-item__button {
    @include flex-center;
    padding: 12px;
    background-color: rgba(59, 130, 246);
    color: white;
    border-radius: 20px;
    width: 100%;
    transition: all 0.2s ease-in-out;

    @include mq('768') {
      width: 80px;
    }

    &:hover {
      background-color: rgba(59, 130, 246, .5);
    }
    &:active {
      transform: scale(0.95);
      background-color: rgba(59, 130, 246, 1);
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
</style>