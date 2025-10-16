import { ref, onMounted, onUnmounted } from 'vue'

export function useMapResize (mapRef: any) {
  const isResizing = ref(false)

  // Переменные для хранения экземпляров
  let resizeObserver: ResizeObserver | null = null
  let resizeTimeout: number | null = null

  /**
   * Функция для обновления размера карты
   * Вызывает метод updateSize() API Яндекс.Карт
   */
  const updateMapSize = () => {
    // Проверяем, что карта существует и не находится в процессе ресайза
    if (mapRef.value?.ymap && !isResizing.value) {
      isResizing.value = true // Блокируем повторные вызовы

      // Дебаунс - откладываем выполнение на 150мс
      // Это предотвращает слишком частые обновления при непрерывном ресайзе
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
      }

      resizeTimeout = window.setTimeout(() => {
        // Вызываем нативный метод API Яндекс.Карт для перерисовки
        mapRef.value.ymap.updateSize()
        isResizing.value = false // Разблокируем
      }, 150)
    }
  }

  onMounted(() => {
    // Создаем ResizeObserver - нативный API для отслеживания изменений размера элементов
    resizeObserver = new ResizeObserver(updateMapSize)

    if (mapRef.value?.$el) {
      resizeObserver.observe(mapRef.value.$el)
    }
  })

  onUnmounted(() => {
    // Прекращаем наблюдение, чтобы избежать утечек памяти
    if (resizeObserver) {
      resizeObserver.disconnect()
    }

    if (resizeTimeout) {
      clearTimeout(resizeTimeout)
    }
  })

  return {
    updateMapSize
  }
}
