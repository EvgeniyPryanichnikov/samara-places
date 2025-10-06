import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Place } from '@/types'

export const useCurrentPlaceStore = defineStore('currentPlace', () => {
  const currentPlace = ref<Place | null>(null)

  const setCurrentPlace = (place: Place) => {
    currentPlace.value = place
  }

  const clearCurrentPlace = () => {
    currentPlace.value = null
  }

  const hasCurrentPlace = () => {
    return currentPlace.value !== null
  }

  return {
    currentPlace,
    setCurrentPlace,
    clearCurrentPlace,
    hasCurrentPlace
  }
})