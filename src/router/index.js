import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// app.js

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/episodios/:id',
    name: 'Episodios',
    component: () => import(/* webpackChunkName: "user" */ '../views/Episodios.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'Error404',
    component: () => import(/*webpackChunkName: "error404" */ '../views/Error404.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
