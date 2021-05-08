import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Racas from '../views/Racas.vue';

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
    component: Racas
  },
  {
    path: '/racas/:id',
    name: 'breed',
    component: () => import(/* webpackChunkName: "breed" */ '../views/Breed.vue')
  },
  {
    path: '/contactos',
    name: 'contactos',
    component: () => import(/* webpackChunkName: "contactos" */ '../views/Contactos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
