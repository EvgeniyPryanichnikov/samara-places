<template>
  <img
    :src="src"
    :alt="alt"
    loading="lazy"
  >
</template>

<script setup lang="ts">
interface Props {
  src: string;
  alt: string;
}

defineProps<Props>()
</script>

