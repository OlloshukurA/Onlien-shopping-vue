import { createRouter, createWebHistory, RouterLink } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/bag',
    name: 'Bag',
    component: () => import('../views/Bag.vue')
  },

  {
    path: '/save',
    name: 'Save',
    component: () => import('../views/Save.vue')
  },

  {
    path: '/bell',
    name: 'Bell',
    component: () => import('../views/Bell.vue')
  },

  {
    path: '/lifestyle',
    name: 'Lifestyle',
    component: () => import('../views/Lifestyle.vue')
  },

  {
    path: "/lifestyle/:id",
    name: 'post',
    component: () => import('../views/Post.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass:'active'
})

export default router
