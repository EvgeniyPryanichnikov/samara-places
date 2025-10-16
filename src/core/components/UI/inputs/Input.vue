<template>
  <div class="input">
    <input
      v-model="model"
      type="text"
      :placeholder="animatedPlaceholder"
    >

    <button
      v-if="showClearButton"
      class="input__clear"
      type="button"
      @click="handleClear"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'

const props = withDefaults(defineProps<{
  placeholder?: string;
  placeholderTexts?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseBetween?: number;
}>(), {
  placeholderTexts: () => [
    'Выпить жигулёвского пива!🍻',
    'Хочу в Горы!😍',
    'Поехали за Волгу!🌊',
    'Гулять по городу...'
  ],
  typingSpeed: 100,
  deletingSpeed: 50,
  pauseBetween: 2000
})

const model = defineModel<string>()

const animatedPlaceholder = ref('')
const currentTextIndex = ref(0)
const currentCharIndex = ref(0)
const isDeleting = ref(false)
let timeoutId: number | null = null

const showClearButton = computed(() => model.value && model.value.length > 0)

const handleClear = () => {
  model.value = ''
}

const typeText = () => {
  const currentText = props.placeholderTexts[currentTextIndex.value]

  if (!isDeleting.value) {
    animatedPlaceholder.value = currentText.substring(0, currentCharIndex.value + 1)
    currentCharIndex.value++

    if (currentCharIndex.value === currentText.length) {
      timeoutId = setTimeout(() => {
        isDeleting.value = true
        typeText()
      }, props.pauseBetween)
      return
    }
  } else {
    animatedPlaceholder.value = currentText.substring(0, currentCharIndex.value - 1)
    currentCharIndex.value--

    if (currentCharIndex.value === 0) {
      isDeleting.value = false
      currentTextIndex.value = (currentTextIndex.value + 1) % props.placeholderTexts.length
    }
  }

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

watch(() => props.placeholderTexts, () => {
  startAnimation()
})
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  width: 100%;
  padding: 8px 20px;
  background-color: rgba(59, 130, 246, 0.1);
  border-radius: 4px;

  input {
    width: 100%;
  }

  &__clear {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: rgba(0, 0, 0, 0.7);
    background: rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }
}
}
</style>
