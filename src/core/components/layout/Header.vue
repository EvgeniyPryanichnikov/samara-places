<template>
  <header class="header">
    хэдер на всю ширину
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/base/_typography.scss';

  .header {
    width: 100%;
    padding: 20px 10px;
    border: 1px solid rgb(113, 173, 230);
    @include fw-500;
  }
</style>