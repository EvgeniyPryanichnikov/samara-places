<template>
  <div
    class="weather-widget"
    @click="openModal"
  >
    <div class="weather-widget__content">
      <img
        :src="`https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`"
        :alt="weather?.weather?.[0]?.description"
        class="weather-icon"
      >

      <div class="weather-info">
        <div class="temperature">
          {{ Math.round(weather?.main?.temp) }}°C
        </div>

        <div class="location">
          Самара
        </div>
      </div>
    </div>

    <Modal
      :open="showModal"
      @close="closeModal"
    >
      <div class="weather-modal">
        <div class="weather-modal__header">
          <h2>Погода в Самаре</h2>

          <div class="current-time">
            {{ currentTime }}
          </div>
        </div>

        <div class="weather-main">
          <BaseImage
            :src="`https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@4x.png`"
            :alt="weather?.weather?.[0]?.description"
            class="weather-modal-icon"
          />

          <div class="weather-temp">
            <div class="temp-large">
              {{ Math.round(weather?.main?.temp) }}°C
            </div>

            <div class="weather-description">
              {{ capitalizedDescription }}
            </div>
          </div>
        </div>

        <div class="weather-details">
          <div
            v-for="detail in weatherDetails"
            :key="detail.label"
            class="detail-item"
          >
            <div class="detail-label">
              {{ detail.label }}
            </div>

            <div class="detail-value">
              {{ detail.value }}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useWeather } from '@/core/composables/useWeather'
import BaseImage from '@/core/components/UI/image/BaseImage.vue'
import Modal from '@/core/components/UI/modal/Modal.vue'

const { weather, weatherDetails, capitalizedDescription, currentTime } =
  useWeather()

const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}
const closeModal = () => {
  showModal.value = false
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/abstracts/_mixins.scss";

.weather-widget {
  background: rgb(59, 130, 246);
  border-radius: 16px;
  padding: 4px 16px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    background-color: darken(rgb(59, 130, 246), 10%);
  }

  &__content {
    @include flex-vertical-center;
    gap: 12px;
  }
}

.weather-icon {
  width: 48px;
  height: 48px;
}

.weather-info {
  @include flex-column;
}

.temperature {
  font-size: 1.5rem;
  font-weight: 600;
}

.location {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* Модалка */
.weather-modal {
  padding: 20px 0;

  &__header {
    text-align: center;
    margin-bottom: 30px;

    h2 {
      margin: 0 0 8px 0;
      color: #1e293b;
      font-size: 22px;
    }
  }
}

.current-time {
  color: #64748b;
}

.weather-main {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
}

.weather-modal-icon {
  width: 100px;
  height: 100px;
}

.temp-large {
  font-size: 36px;
  font-weight: 300;
  color: #1e293b;
  line-height: 1;
}

.weather-description {
  color: #64748b;
  margin-top: 8px;
}

.weather-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.detail-item {
  background: #f8fafc;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
}

.detail-label {
  font-size: 0.8rem;
  color: #64748b;
  margin-bottom: 4px;
}

.detail-value {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e293b;
}

/* Десктоп */
@include mq("768") {
  .weather-widget {
    max-width: 160px;
  }

  .weather-details {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
