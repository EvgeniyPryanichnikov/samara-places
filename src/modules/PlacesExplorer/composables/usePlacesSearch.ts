import { ref, computed, type ComputedRef } from 'vue'
import type { Place } from '@/types'

export function usePlacesSearch(places: ComputedRef<Place[]>) {
  const searchQuery = ref('')
  
  const filteredPlaces = computed(() => {
    // Используем places.value для доступа к актуальному значению
    const placesArray = places.value
    if (!searchQuery.value.trim()) {
      return placesArray
    }
    
    const query = searchQuery.value.toLowerCase().trim()
    
    return placesArray.filter((place: Place) => {
      return (
        place.title.toLowerCase().includes(query) ||
        place.main_description?.toLowerCase().includes(query) ||
        place.preview_description?.toLowerCase().includes(query) ||
        place.type.toLowerCase().includes(query) ||
        place.search_tags.some(tag => 
          tag.toLowerCase().includes(query)
        )
      )
    })
  })
  
  const clearSearch = () => {
    searchQuery.value = ''
  }
  
  return {
    searchQuery,
    filteredPlaces,
    clearSearch
  }
}