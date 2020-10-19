import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    plants: [],
    favoritePlants: []
  },
  mutations: {
    SET_PLANTS (state, payload) {
      state.plants = payload
    },
    SET_FAVORITE_PLANTS (state, payload) {
      state.favoritePlants = payload
    }
  },
  actions: {
    login (context, payload) {
      return new Promise((resolve, reject) => {
        Axios({
          url: 'http://localhost:3000/login',
          method: 'post',
          data: payload
        })
          .then(data => {
            localStorage.setItem('access_token', data.data)
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    fetchPlants (context, payload) {
      return new Promise((resolve, reject) => {
        Axios({
          url: 'http://localhost:3000/plants',
          method: 'get',
          headers: { access_token: localStorage.getItem('access_token') }
        })
          .then(data => {
            context.commit('SET_PLANTS', data.data)
          })
          .catch(err => {
            console.log(err)
          })
      })
    },
    addFavorite (context, payload) {
      return new Promise((resolve, reject) => {
        Axios({
          url: `http://localhost:3000/favorites/${payload}`,
          method: 'post',
          headers: { access_token: localStorage.getItem('access_token') }
        })
          .then(data => {
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    fetchFavorite (context, payload) {
      return new Promise((resolve, reject) => {
        Axios({
          url: 'http://localhost:3000/favorites',
          method: 'get',
          headers: { access_token: localStorage.getItem('access_token') }
        })
          .then(data => {
            console.log(data.data)
            context.commit('SET_FAVORITE_PLANTS', data.data)
          })
          .catch(err => {
            console.log(err)
          })
      })
    },
    deletePlant (context, payload) {
      return new Promise((resolve, reject) => {
        Axios({
          url: `http://localhost:3000/favorites/${payload}`,
          method: 'delete',
          headers: { access_token: localStorage.getItem('access_token') }
        })
          .then(data => {
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    logout (context, payload) {
      return new Promise((resolve, reject) => {
        localStorage.clear()
        resolve()
      })
    }
  },
  modules: {
  }
})
