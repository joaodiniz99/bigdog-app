import Vue from 'vue'
import Vuex from 'vuex'
import DogService from '../services/DogService';
import Notify from '../configs/nofiflix.config';// configurações do pacote de notificações
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dogs: [],
    favorites: [],
    user: null
  },
  mutations: {
    SET_DOGS(state, payload) {
      state.dogs = payload.dogs;
    },
    SET_FAVORITE(state, favorite) {
      state.favorites.unshift(favorite);
      // localStorage.setItem('favsInfo', JSON.stringify(state.favorites));
      Notify.Success("Cão adicionado aos favoritos!");
    },
    SET_FAVORITES(state, favorites) {
      state.favorites = favorites;
    },
    REMOVE_FAVORITE(state, index) {
      state.favorites.splice(index, 1);
      // localStorage.setItem('favsInfo', JSON.stringify(state.favorites));
      Notify.Success("Cão removido dos favoritos!");
    },
    // START_FAVORITES(state, favorites) {
    //   state.favorites = favorites;
    // },
    SET_USER(state, userData) {
      state.user = userData;
    },
    CLEAR_USER(/*state*/) {
      // state.user = null;
      localStorage.removeItem('user');
      location.reload();// serve para limpar o header do axios(se usar token no header) e para limpar a store(por exemplo o user e os favoritos)
    }
  },
  actions: {
    login({ commit, dispatch }, credentials) {
      return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCqzbIw1no8yqShY7YErnWuBeaQzvElGS8', credentials)
        .then(({ data }) => {
          commit('SET_USER', data);
          localStorage.setItem('user', JSON.stringify(data));
          dispatch('fetchFavorites');
        });
    },
    register({ commit }, credentials) {
      return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCqzbIw1no8yqShY7YErnWuBeaQzvElGS8', credentials)
        .then(({ data }) => {
          commit('SET_USER', data);
          localStorage.setItem('user', JSON.stringify(data));
        });
    },
    logout({ commit }) {
      commit('CLEAR_USER');
    },
    fetchFavorites({ commit, state }) {
      axios.get('https://bigdog-app-default-rtdb.europe-west1.firebasedatabase.app/favorites/.json')
        .then(({ data }) => {
          // console.log(data);
          commit('SET_FAVORITES', data);
        });
    },
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
    // setFavorites({ commit }) {
    //   const favoritesLocalStorage = localStorage.getItem('favsInfo');
    //   if(!favoritesLocalStorage) {
    //     localStorage.setItem('favsInfo', '[]');
    //   } else {
    //     commit('START_FAVORITES', {
    //       favorites: JSON.parse(favoritesLocalStorage)
    //     });
    //   }
    // },
    updateFavorites({ state }) {
      axios.put('https://bigdog-app-default-rtdb.europe-west1.firebasedatabase.app/favorites.json?auth='+state.user.idToken, [...state.favorites]);
    },
    toggleFavorite({ commit, dispatch, state }, img) {
      if(!state.favorites.some(favorite => favorite.img == img)) {
        commit('SET_FAVORITE', {
          email: state.user.email,
          img: img
        });
        dispatch('updateFavorites');
      } else {
        let i = 0;
        state.favorites.forEach((fav, index) => {
          if(fav && fav.img == img) 
            i = index;
        });
        commit('REMOVE_FAVORITE', i);
        dispatch('updateFavorites');
          /*
        axios.delete('https://bigdog-app-default-rtdb.europe-west1.firebasedatabase.app/favorites/'+i+'.json?auth='+state.user.idToken)
          .then((res) => {
            dispatch('fetchFavorites');
            Notify.Success("Cão removido dos favoritos!");
          })
          .catch(err => {
            Notify.Failure("Ocorreu um erro ao remover o cão dos favoritos. Tente mais tarde.");
            console.log("Erro", err);
          });*/
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
      return state.favorites.filter(favorite => {
        if(favorite && state.user.email == favorite.email) {
          return favorite;
        }
      });
    },
    getFavorite: state => img => {
      return state.favorites.some(favorite => (favorite && favorite.img == img && favorite.email == state.user.email));
    },
    isLoggedIn: state => {
      return !!state.user;
    }
  }
})
