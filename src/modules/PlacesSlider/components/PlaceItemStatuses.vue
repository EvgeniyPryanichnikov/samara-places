<template>
  <div class="place-item__statuses">
      <BeachIcon
        width='24'
        height='24'
        :class="{ 'pulse-animation': !hasBeenHovered }"
        @mouseenter="stopPulsing"
      />

      <BikeIcon width='24' height='24' />

      <HamburgerIcon width='24' height='24' />

      <NaturalIcon  width='24' height='24' />

      <OutdoorIcon width='24' height='24' />
      
      <TentIcon width='24' height='24' />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BeachIcon from '@/assets/icons/place-statuses/beach-umbrella.svg'
import BikeIcon from '@/assets/icons/place-statuses/bike.svg'
import HamburgerIcon from '@/assets/icons/place-statuses/hamburger.svg'
import NaturalIcon from '@/assets/icons/place-statuses/pure-natural.svg'
import OutdoorIcon from '@/assets/icons/place-statuses/outdoor.svg'
import TentIcon from '@/assets/icons/place-statuses/tent.svg'

const hasBeenHovered = ref(false)

const stopPulsing = () => {
  hasBeenHovered.value = true
}
</script>

<style lang="scss" scoped>
  .place-item__statuses {
    display: flex;
    gap: 8px;
  }

  .pulse-animation {
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>