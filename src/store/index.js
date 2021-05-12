import Vue from 'vue'
import Vuex from 'vuex'
import DogService from '../services/DogService';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dogs: []
  },
  mutations: {
    SET_DOGS(state, dogs) {
      state.dogs = dogs;
    }
  },
  actions: {
    setDogs({ commit }) {
      const dogsLocalStorage = localStorage.getItem('dogsInfo');
      if(!dogsLocalStorage) {
        DogService.getBreeds()
        .then(res => {
          commit('SET_DOGS', res.data);
          localStorage.setItem('dogsInfo', JSON.stringify(res.data));
        })
        .catch(err => {
          alert('Ocorreu um erro! Verificar consola.');
          console.log(err);
        });
      } else {
        commit('SET_DOGS', JSON.parse(dogsLocalStorage));
      }
    }
  },
  modules: {
  },
  getters: {
    getDogs: state => {
      return state.dogs;
    }
  }
})
