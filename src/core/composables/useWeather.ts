import { ref, onMounted, computed } from 'vue'
import { useFetch } from '@vueuse/core'
import type { WeatherData } from '@/types/weather'

export const useWeather = () => {
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

  const { data, error, isFetching, execute } = useFetch<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=Samara&units=metric&appid=${API_KEY}&lang=ru`)
    .get()
    .json()
  
  const weatherDetails = computed(() => {
    if (!data.value) return []
    
    return [
      {
        label: 'Ощущается как',
        value: `${Math.round(data.value.main.feels_like)}°C`
      },
      {
        label: 'Влажность',
        value: `${data.value.main.humidity}%`
      },
      {
        label: 'Ветер',
        value: `${data.value.wind.speed} м/с`
      },
      {
        label: 'Давление',
        value: `${data.value.main.pressure} hPa`
      }
    ]
  })

  return {
    weather: data,
    weatherDetails,
    loading: isFetching,
    error,
    refetch: execute
  }
}