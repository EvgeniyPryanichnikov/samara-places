<template>
  <article class="place-item">
    <BaseImage
      class="place-item__img"
      :src="placeData.preview_image"
      :alt="placeData.title"
    />

    <div class="place-item__content">
      <h3>{{ placeData.title }}</h3>

      <p class="place-item__description">
        {{ placeData.preview_description }}
      </p>
    </div>

    <PlaceItemStatuses
      :statuses="placeData.STATUSES"
    />

    <PlaceItemBtn
      :placeId="placeData.id"
      @navigate-to-place="navigateToPlace"
    />
  </article>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCurrentPlaceStore } from '@/stores/current-place'
import BaseImage from '@/core/components/UI/image/BaseImage.vue'
import PlaceItemBtn from './PlaceItemBtn.vue'
import PlaceItemStatuses from './PlaceItemStatuses.vue'
import type { Place } from '@/types'

const router = useRouter()

const props = defineProps<{
  placeData: Place;
}>()

const { setCurrentPlace } = useCurrentPlaceStore()

const navigateToPlace = (placeId: number) => {
  setCurrentPlace(props.placeData)
  
  router.push({
    name: 'PlaceDetails',
    params: {
      url_title: props.placeData.url_title
    },
    query: {
      id: props.placeData.id,
    }
  })
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/base/_typography.scss';
  @import '@/assets/styles/abstracts/_mixins.scss';

  .place-item {
    display: grid;
    gap: 12px;
    width: 100%;
    padding: 12px;
    border-radius: 25px;
    background-color: white;

    .place-item__img {
      width: 100%;
      height: 300px;
      object-fit: cover;
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