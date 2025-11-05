import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createYmaps } from 'vue-yandex-maps'
import App from './App.vue'
import '@/assets/styles/main.scss'

import routes from './router.ts'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(createYmaps({
  apikey: 'b76836b0-84d2-4ef3-ba91-9320bb884642'
}))

app.config.errorHandler = (err, instance, info) => {
  console.error('Ошибка Vue:', err)
  console.error('Информация:', info)
  console.error('Компонент:', instance)
}

router.isReady().then(() => {
  app.mount('#app')
})
