<template>
  <div class="place-item">
    <div class="place-item__img">
    </div>

    <div class="place-item__content">
      <h3>{{placeData.title}}</h3>

      <p class="place-item__description">
        {{ placeData.description }}
      </p>
    </div>

    <PlaceItemBtn />
  </div>
</template>

<script setup lang="ts">
import PlaceItemBtn from './PlaceItemBtn.vue';

defineProps<{
  placeData: {
    id: number;
    title: string;
    description: string;
    image: string;
  }
}>()
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/base/_typography.scss';
  @import '@/assets/styles/abstracts/_mixins.scss';

  .place-item {
    display: grid;
    gap: 12px;
    width: 100%;

    .place-item__img {
      width: 100%;
      height: 300px;
      background-color: #fff;
      border-radius: 18px
    }
    .place-item__content {
      @include flex-column;
      gap: 12px;
    }
    .place-item__description {
      line-height: 18px;
    }
  }
</style>