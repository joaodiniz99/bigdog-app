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
    name: 'contactos',
    component: () => import(/* webpackChunkName: "contactos" */ '../views/Contacts.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
