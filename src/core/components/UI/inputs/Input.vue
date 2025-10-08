<template>
  <div class="input">
    <input
      type="text"
      v-model="model"
      :placeholder="animatedPlaceholder"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const model = defineModel<string>()

const props = withDefaults(defineProps<{
  placeholder?: string
  placeholderTexts?: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseBetween?: number
}>(), {
  placeholderTexts: () => ['Выпить жигулёвского пива!🍻', 'Хочу в Горы!😍', 'Поехали за Волгу!🌊', 'Гулять по городу...'],
  typingSpeed: 100,
  deletingSpeed: 50,
  pauseBetween: 2000
})

const animatedPlaceholder = ref('')
const currentTextIndex = ref(0)
const currentCharIndex = ref(0)
const isDeleting = ref(false)
let timeoutId: number | null = null

const typeText = () => {
  const currentText = props.placeholderTexts[currentTextIndex.value]
  
  if (!isDeleting.value) {
    // Печатаем текст
    animatedPlaceholder.value = currentText.substring(0, currentCharIndex.value + 1)
    currentCharIndex.value++
    
    if (currentCharIndex.value === currentText.length) {
      // Текст напечатан, ждем и начинаем удалять
      timeoutId = setTimeout(() => {
        isDeleting.value = true
        typeText()
      }, props.pauseBetween)
      return
    }
  } else {
    // Удаляем текст
    animatedPlaceholder.value = currentText.substring(0, currentCharIndex.value - 1)
    currentCharIndex.value--
    
    if (currentCharIndex.value === 0) {
      // Текст удален, переходим к следующему
      isDeleting.value = false
      currentTextIndex.value = (currentTextIndex.value + 1) % props.placeholderTexts.length
    }
  }
  
  // Продолжаем анимацию
  const speed = isDeleting.value ? props.deletingSpeed : props.typingSpeed
  timeoutId = setTimeout(typeText, speed)
}

const startAnimation = () => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  animatedPlaceholder.value = ''
  currentCharIndex.value = 0
  isDeleting.value = false
  typeText()
}

onMounted(() => {
  startAnimation()
})

onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
})

// Перезапускаем анимацию при изменении текстов
watch(() => props.placeholderTexts, () => {
  startAnimation()
})
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  padding: 8px 12px;
  background-color: rgba(59, 130, 246, 0.1);
  border-radius: 4px;
  
  input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    
    &::placeholder {
      // color: rgba(0, 0, 0, 0.5);
      // transition: opacity 0.3s ease;
    }
  }
}

.input:focus-within {
  background-color: rgba(59, 130, 246, 0.15);
}
</style>