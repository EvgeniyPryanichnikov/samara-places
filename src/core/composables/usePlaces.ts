import { useFetch } from '@vueuse/core'
import { computed } from 'vue'
import type { Place, PlaceStatuses } from '@/types'

export const usePlaces = () => {
  const basePath = window.location.hostname === 'evgeniypryanichnikov.github.io'
    ? '/samara-places'
    : ''

  const { data, error, isFetching, execute } = useFetch<Place[]>(`${basePath}/data/places.json`).
    get().
    json()

  // свойства для фильтрации
  const places = computed(() => data.value || [])

  const naturePlaces = computed(() => places.value.filter((place: Place) => place.type === 'nature'))

  const cityPlaces = computed(() => places.value.filter((place: Place) => place.type === 'city'))

  // Фильтрация по статусам
  // const getPlacesByStatus = (statusKey: keyof PlaceStatuses, value: boolean = true): Place[] =>
  //   places.value.filter(place => place.STATUSES[statusKey] === value)

  return {
    places,
    loading: isFetching,
    error,

    naturePlaces,
    cityPlaces

    // getPlacesByStatus
  }
}
