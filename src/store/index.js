import Vue from 'vue'
import Vuex from 'vuex'
import DogService from '../services/DogService';
import Notify from '../configs/nofiflix.config';// configurações do pacote de notificações

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dogs: [],
    favorites: []
  },
  mutations: {
    SET_DOGS(state, payload) {
      state.dogs = payload.dogs;
    },
    SET_FAVORITE(state, payload) {
      state.favorites.unshift(payload.img);
      Notify.Success("Cão adicionado aos favoritos!");
    },
    REMOVE_FAVORITE(state, payload) {
      state.favorites.splice(payload.index, 1);
      Notify.Success("Cão removido dos favoritos!");
    }
  },
  actions: {
    setDogs({ commit }) {
      const dogsLocalStorage = localStorage.getItem('dogsInfo');
      if (!dogsLocalStorage) {
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
        commit('SET_DOGS', {
          dogs: JSON.parse(dogsLocalStorage)
        });
      }
    },
    toggleFavorite({ commit, state }, img) {
      if(!state.favorites.includes(img)) {// se a imagem n existir dentro dos favoritos, ele acrescenta
        commit('SET_FAVORITE', {
          img: img
        });
      } else {// se a imagem existir dentro dos favoritos, ele remove
        const index = state.favorites.indexOf(img);
        commit('REMOVE_FAVORITE', {
          index: index
        });
      }
    }
  },
  modules: {
  },
  getters: {
    getDogs: state => {
      return state.dogs;
    },
    getFavorites: state => {
      return state.favorites;
    },
    getFavorite: state => img => {
      return state.favorites.includes(img) ? true : false;
    }
  }
})
