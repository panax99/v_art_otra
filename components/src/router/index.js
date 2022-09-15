import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pana',
    name: 'pana',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PanaView.vue')
  },
  {
    path: '/sanda',
    name: 'sanda',
    component: () => import(/* webpackChunkName: "about" */ '../views/SandaView.vue')
  },
  {
    path: '/samy',
    name: 'samy',
    component: () => import(/* webpackChunkName: "about" */ '../views/SamyView.vue')
  },
  {
    path: '/cedi',
    name: 'cedi',
    component: () => import(/* webpackChunkName: "about" */ '../views/CediView.vue')
  },
  {
    path: '/tsiky',
    name: 'tsiky',
    component: () => import(/* webpackChunkName: "about" */ '../views/TsikyView.vue')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
