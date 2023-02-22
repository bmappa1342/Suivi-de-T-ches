import { createRouter, createWebHistory } from 'vue-router'
import HomeApp from '../views/HomeApp'
import AboutApp from '../views/AboutApp'

const routes = [
  {
    path: '/',
    name: 'HomeApp',
    component: HomeApp,
  },
  {
    path: '/about',
    name: 'AboutApp',
    component: AboutApp,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router