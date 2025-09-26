import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import '@/assets/styles/main.scss'

import routes from './router.ts'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

// Дожидаюсь готовности роутера перед монтированием
router.isReady().then(() => {
  app.mount('#app')
})