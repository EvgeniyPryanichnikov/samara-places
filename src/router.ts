import type { RouteRecordRaw } from 'vue-router'
import MainPage from './modules/MainPage/MainPage.vue'
import AboutCompany from './modules/AboutCompany/AboutCompany.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: MainPage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutCompany,
  },
]

export default routes