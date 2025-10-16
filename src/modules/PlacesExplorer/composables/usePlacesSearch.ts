import { ref, computed, type ComputedRef } from 'vue'
import type { Place } from '@/types'

export function usePlacesSearch (places: ComputedRef<Place[]>) {
  const searchQuery = ref('')

  const filteredPlaces = computed(() => {
    const placesArray = places.value
    if (!searchQuery.value.trim()) {
      return placesArray
    }

    const query = searchQuery.value.toLowerCase().trim()

    // Разбиваем запрос на отдельные слова
    const searchWords = query.split(' ').filter(word => word.length > 2) // игнорируем слова короче 3 символов

    // Если запрос состоит из одного слова - ищем как раньше
    if (searchWords.length === 1) {
      const singleWord = searchWords[0]
      return placesArray.filter((place: Place) => {
        return (
          place.title.toLowerCase().includes(singleWord) ||
          place.search_tags.some(tag => tag.toLowerCase().includes(singleWord))
        )
      })
    }

    // Если несколько слов - ищем места, где есть хотя бы одно слово
    return placesArray.filter((place: Place) => {
      // Создаем большую строку для поиска из всех полей
      const searchableText = `
        ${place.title}
        ${place.search_tags.join(' ')}
      `.toLowerCase()

      // Проверяем, есть ли хотя бы одно слово из запроса
      return searchWords.some(word => searchableText.includes(word))
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
