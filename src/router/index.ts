import { createRouter, createWebHistory } from 'vue-router'
import TOP from '../components/TOP.vue'

const routes = [
  {
    path: '/',
    name: 'TOP',
    component: TOP
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router