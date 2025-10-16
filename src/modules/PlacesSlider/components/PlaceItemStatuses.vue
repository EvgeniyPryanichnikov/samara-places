<template>
  <div class="place-item__statuses">
    <Tooltip
      v-for="(icon, index) in activeIcons"
      :key="icon.key"
      :text="icon.tooltip"
    >
      <component
        :is="icon.component"
        width="24"
        height="24"
        :class="[
          'place-item__status-icon',
          { 'place-item__status-icon--pulsing': !hasBeenHovered && index === 0 }
        ]"
        @mouseenter="index === 0 ? stopPulsing() : null"
      />
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Tooltip from '@/core/components/UI/tooltips/Tooltip.vue'
import BeachIcon from '@/assets/icons/place-statuses/beach-umbrella.svg'
import BikeIcon from '@/assets/icons/place-statuses/bike.svg'
import HamburgerIcon from '@/assets/icons/place-statuses/hamburger.svg'
import NaturalIcon from '@/assets/icons/place-statuses/pure-natural.svg'
import OutdoorIcon from '@/assets/icons/place-statuses/outdoor.svg'
import TentIcon from '@/assets/icons/place-statuses/tent.svg'
import type { Statuses, StatusIcon } from '@/types'

const props = defineProps<{
  statuses: Statuses;
}>()

const statusIcons: StatusIcon[] = [
  {
    component: BeachIcon,
    key: 'has_beach',
    name: 'Пляж',
    tooltip: 'Есть пляж'
  },
  {
    component: BikeIcon,
    key: 'has_bike',
    name: 'Велосипед',
    tooltip: 'Катаем на велике!'
  },
  {
    component: HamburgerIcon,
    key: 'has_eat',
    name: 'Еда',
    tooltip: 'Есть где поесть'
  },
  {
    component: NaturalIcon,
    key: 'has_nature',
    name: 'Природа',
    tooltip: 'Красивая природа'
  },
  {
    component: OutdoorIcon,
    key: 'has_mountain',
    name: 'Горы',
    tooltip: 'Горные пейзажи'
  },
  {
    component: TentIcon,
    key: 'has_camp',
    name: 'Кемпинг',
    tooltip: 'Можно ставить палатку'
  }
]

const activeIcons = computed(() => {
  return statusIcons.filter(icon => props.statuses[icon.key])
})

const hasBeenHovered = ref(false)

const stopPulsing = () => {
  hasBeenHovered.value = true
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/abstracts/_mixins.scss';

  .place-item__statuses {
    display: flex;
    justify-content: center;
    gap: 8px;

    @include mq('768') {
      justify-content: start;
    }
  }

  .place-item__status-icon--pulsing {
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
