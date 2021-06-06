import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'// Pacote de UI
import axios from 'axios';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created() {
    this.$store.dispatch('setDogs');
    const userString = localStorage.getItem('user');
    if(userString) {
      const userData = JSON.parse(userString);
      this.$store.commit('SET_USER', userData);
      this.$store.dispatch('fetchFavorites');
    }
    /*
    axios.interceptors.response.use(
      response => {
        return response
      },
      error => {
        if(error.response.status === 401) {
          this.$store.dispatch('logout');
        }
        return Promise.reject(error);
      }
    )
    */
  },
  render: h => h(App)
}).$mount('#app')
