import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Breeds from '../views/Breeds.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/racas',
    name: 'racas',
    component: Breeds
  },
  {
    path: '/racas/:id',
    name: 'breed',
    component: () => import(/* webpackChunkName: "breed" */ '../views/Breed.vue')
  },
  {
    path: '/contactos',
    name: 'contacts',
    component: () => import(/* webpackChunkName: "contacts" */ '../views/Contacts.vue')
  },
  {
    path: '/favoritos',
    name: 'favorites',
    component: () => import(/* webpackChunkName: "favorites" */ '../views/Favorites.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '*',
    name: 'Not Found',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
