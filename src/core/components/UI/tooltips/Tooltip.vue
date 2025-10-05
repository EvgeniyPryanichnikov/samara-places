<template>
  <div class="tooltip-wrapper">
    <div 
      class="tooltip-trigger"
      @mouseenter="show = true"
      @mouseleave="show = false"
    >
      <slot />
    </div>
    
    <transition name="tooltip">
      <div 
        v-if="show && text" 
        class="tooltip"
        role="tooltip"
      >
        {{ text }}
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  text: string
}>()

const show = ref(false)
</script>

<style lang="scss" scoped>
  .tooltip-wrapper {
    position: relative;
    display: inline-block;
  }

  .tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 8px 12px;
    border-radius: 6px;
    white-space: nowrap;
    margin-bottom: 8px;
    font-size: 14px;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);
    
    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border: 4px solid transparent;
      border-top-color: rgba(0, 0, 0, 0.9);
    }
  }

  .tooltip-enter-active {
    transition: all 0.2s ease-out;
  }

  .tooltip-leave-active {
    transition: all 0.1s ease-in;
  }

  .tooltip-enter-from {
    opacity: 0;
    transform: translateX(-50%) translateY(-8px);
  }

  .tooltip-leave-to {
    opacity: 0;
    transform: translateX(-50%) translateY(-8px);
  }
</style>