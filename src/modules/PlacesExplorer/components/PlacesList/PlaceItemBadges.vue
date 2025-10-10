<template>
  <div class="badges">
    <span 
      v-for="(badge, id) in badges" 
      :key="id"
      class="badge"
      :class="getBadgeColor(badge)"
    >
      {{ badge }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  badges: string[]
}>()

const getBadgeColor = (badge: string) => {
  const colors: Record<string, string> = {
    'За Волгой': 'blue',
    'Волга рядом': 'blue', 
    'За городом': 'green',
    'В городе': 'red',
    'Погулять': 'orange',
    'Катать на велике': 'green',
    'Пъём вкусное пиво': 'brown',
    'Cмотровая площадка': 'pink',
    'Красивый вид': 'purple',
    'Достопримечательность': 'violet'
  }
  
  return colors[badge] || 'gray'
}
</script>

<style lang="scss" scoped>
  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    .badge {
      font-size: 12px;
      padding: 6px;
      border-radius: 10px;

      &.blue { 
        background: #a3d1ff; 
        color: #1e40af;
      }
      &.green { 
        background: #a8f5cb; 
        color: #166534;
      }
      &.red { 
        background: #fdcaca; 
        color: #991b1b;
      }
      &.orange { 
        background: #fef2c7; 
        color: #92400e;
      }
      &.brown { 
        background: #fbc9a9; 
        color: #451a03;
      }
      &.pink { 
        background: #fbcfe8; 
        color: #9d174d;
      }
      &.purple { 
        background: #d9d6f7; 
        color: #5b21b6;
      }
      &.violet { 
        background: #dad3f9; 
        color: #5b21b6;
      }
      &.gray { 
        background: #e5e7eb; 
        color: #374151;
      }
    }
  }
</style>