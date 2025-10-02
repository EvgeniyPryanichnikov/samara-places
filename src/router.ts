import type { RouteRecordRaw } from 'vue-router'
import MainPage from './pages/MainPage/MainPage.vue'
import PlaceDetails from './pages/PlaceDetails/PlaceDetails.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/place/:title',
    name: 'PlaceDetails',
    component: PlaceDetails,
  },
]

export default routes