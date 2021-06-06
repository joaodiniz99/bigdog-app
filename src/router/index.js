import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Breeds from '../views/Breeds.vue'

import Notify from '../configs/nofiflix.config'// configurações do pacote de notificações

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
    component: () => import(/* webpackChunkName: "breed" */ '../views/Breed.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/contactos',
    name: 'contacts',
    component: () => import(/* webpackChunkName: "contacts" */ '../views/Contacts.vue')
  },
  {
    path: '/favoritos',
    name: 'favorites',
    component: () => import(/* webpackChunkName: "favorites" */ '../views/Favorites.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Login.vue'),
    meta: { isLog: true }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Signup.vue'),
    meta: { isLog: true }
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

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user');

  if((to.matched.some(record => record.meta.requiresAuth) && !loggedIn)) {
    next('/login');
    Notify.Failure("É necessário ter a sessão iniciada para aceder à página anterior.");
  } else if(to.matched.some(record => record.meta.isLog && loggedIn)) {
    next('/');
  } else {
    next();
  }
});

export default router
