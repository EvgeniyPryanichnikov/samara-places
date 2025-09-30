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
]
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/base/_typography.scss';
  @import '@/assets/styles/abstracts/_mixins.scss';

  .header__nav {
    position: fixed;
    display: flex;
    width: 100%;
    padding: 20px;
    top: 10px;
    left: 10px;
  }
</style>