<template>
  <Teleport to="body">
    <div class="modal" v-if="open">
      <div class="modal-overlay" @click="$emit('close')"></div>
      
      <div class="modal-content">
        <button class="modal-close" @click="$emit('close')">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
        
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  open: boolean
}>()

defineEmits<{
  close: []
}>()
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
}

.modal-content {
  position: relative;
  background: white;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: #f1f5f9;
  border: none;
  border-radius: 8px;
  padding: 8px;
  color: #64748b;
  cursor: pointer;
  z-index: 10;
}

/* Десктоп */
@media (min-width: 768px) {
  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  
  .modal-content {
    width: auto;
    height: auto;
    max-width: 400px;
    max-height: 80vh;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
}
</style>