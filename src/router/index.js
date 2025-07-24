import { createRouter, createWebHistory } from 'vue-router'
import Lesson1 from '../lessons/Lesson1.vue'
import Lesson2 from '../lessons/Lesson2.vue'
import Lesson3 from '../lessons/Lesson3.vue'
import Lesson4 from '../lessons/Lesson4.vue'
import Lesson5 from '../lessons/Lesson5.vue'
import Lesson6 from '../lessons/Lesson6.vue'
import Lesson7 from '../lessons/Lesson7.vue'

const routes = [
  { path: '/lesson1', component: Lesson1 },
  { path: '/lesson2', component: Lesson2 },
  { path: '/lesson3', component: Lesson3 },
  { path: '/lesson4', component: Lesson4 },
  { path: '/lesson5', component: Lesson5 },
  { path: '/lesson6', component: Lesson6 },
  { path: '/lesson7', component: Lesson7 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
