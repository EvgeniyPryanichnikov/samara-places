<template>
  <div class="input">
    <input
      type="text"
      v-model="model"
      :placeholder="placeholder"
    />
  </div>
  
</template>

<script setup lang="ts">
const model = defineModel()

defineProps<{
  placeholder?: string
}>()
</script>

<style lang="scss" scoped>
  .input {
    width: 100%;
    padding: 8px 12px;
    background-color: rgba(59, 130, 246, 0.1);
    border-radius: 4px;
  }
</style>