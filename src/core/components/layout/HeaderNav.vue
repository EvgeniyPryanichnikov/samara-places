<template>
  <nav class="header__nav">
    <ul 
      v-for="item in navItems"
      :key="item.id"
    >
      <li>
        {{ item.title }}
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const navItems = [
  {id: 1, title: 'Места'},
  {id: 2, title: 'Карта'},
  {id: 3, title: 'Галлерея'},
  {id: 4, title: 'Погода'},
]
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/base/_typography.scss';
  @import '@/assets/styles/abstracts/_mixins.scss';

  .header__nav {
    box-sizing: border-box;
    position: fixed;
    display: flex;
    gap: 16px;
    width: calc(100% - 24px);
    padding: 20px;
    top: 10px;
    left: 0;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    border-radius: 18px;
    margin-left: 12px;
    margin-right: 12px;
  }
</style>