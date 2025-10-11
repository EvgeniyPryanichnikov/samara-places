<template>
  <div class="weather-widget">
    <h4 class="weather-widget__title">
      Погода в Самаре
    </h4>

    <div class="weather-widget__content">
      <img 
        :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" 
        :alt="weather.weather[0].description"
        class="weather-icon"
      />

      <div class="temperature">{{ Math.round(weather.main.temp) }}°C</div>
    </div>
  </div>
    <!-- <div class="weather-info">
      <h3>Погода в Самаре</h3>
      
      <div class="weather-main">
        <img 
          :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" 
          :alt="weather.weather[0].description"
          class="weather-icon"
        />
        <div class="temperature">{{ Math.round(weather.main.temp) }}°C</div>
      </div>
      
      <div class="weather-description">{{ weatherDescription }}</div>
      
      <div class="weather-details">
        <div class="detail-item">
          <span>Ощущается как:</span>
          <span>{{ Math.round(weather.main.feels_like) }}°C</span>
        </div>
        <div class="detail-item">
          <span>Влажность:</span>
          <span>{{ weather.main.humidity }}%</span>
        </div>
        <div class="detail-item">
          <span>Ветер:</span>
          <span>{{ weather.wind.speed }} м/с</span>
        </div>
      </div>
    </div>
    
    <div v-if="loading" class="loading">Загрузка...</div>
    <div v-if="error" class="error">{{ error }}</div> -->
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

interface WeatherData {
  main: {
    temp: number
    feels_like: number
    humidity: number
  }
  weather: Array<{
    description: string
    icon: string
  }>
  wind: {
    speed: number
  }
}

const weather = ref<WeatherData>(null)
const loading = ref(true)
const error = ref('')

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

const weatherDescription = computed(() => {
  if (!weather.value) return ''
  const description = weather.value.weather[0].description
  return description.charAt(0).toUpperCase() + description.slice(1)
})

const fetchWeather = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Samara&units=metric&appid=${API_KEY}&lang=ru`
    )
    
    if (!response.ok) throw new Error('Ошибка загрузки данных')
    
    weather.value = await response.json()
  } catch (err) {
    error.value = 'Не удалось загрузить данные о погоде'
  } finally {
    loading.value = false
  }
}

onMounted(fetchWeather)
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/abstracts/_mixins.scss';
  @import '@/assets/styles/base/_typography.scss';

  .weather-widget {
    @include flex-vertical-center;
    gap: 4px;
    color: white;
    background-color: rgb(59, 130, 246);
    width: max-content;
    padding: 0 20px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: rgba(59, 130, 246, 0.5);
      transform: scale(1.05);
    }

    &__content {
      @include flex-vertical-center;

      .weather-icon {
        width: 40px;
        transition: transform 0.3s ease;
      }
      
      .temperature {
        @include fw-500;
        font-size: 18px;
      }
    }
    
    // Дополнительная анимация для иконки при наведении
    &:hover .weather-icon {
      transform: scale(1.1);
    }
  }
</style>