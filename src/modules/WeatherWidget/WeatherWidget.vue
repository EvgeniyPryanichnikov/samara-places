<template>
  <div
    class="weather-widget"
    @click="openModal"
  >
    <div class="weather-widget__content">
      <img
        :src="`https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`"
        :alt="weather?.weather?.[0]?.description"
        class="weather-widget__icon"
      >

      <div class="weather-widget__info">
        <div class="weather-widget__temperature">
          {{ Math.round(weather?.main?.temp) }}°C
        </div>

        <div class="weather-widget__location">
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
          <h2 class="weather-modal__title">
            Погода в Самаре
          </h2>

          <div class="weather-modal__time">
            {{ currentTime }}
          </div>
        </div>

        <div class="weather-modal__main">
          <BaseImage
            :src="`https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@4x.png`"
            :alt="weather?.weather?.[0]?.description"
            class="weather-modal__icon"
          />

          <div class="weather-modal__temp">
            <div class="weather-modal__temp-large">
              {{ Math.round(weather?.main?.temp) }}°C
            </div>

            <div class="weather-modal__description">
              {{ capitalizedDescription }}
            </div>
          </div>
        </div>

        <div class="weather-modal__details">
          <div
            v-for="detail in weatherDetails"
            :key="detail.label"
            class="weather-modal__detail-item"
          >
            <div class="weather-modal__detail-label">
              {{ detail.label }}
            </div>

            <div class="weather-modal__detail-value">
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
  @import '@/assets/styles/components/weather-widget';
</style>
