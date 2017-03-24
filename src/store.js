import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

// initial state of the app
const state = {
  auth: false,
  isReg: false
}

// mutations are operations that actually mutates the state.
// never call this directly. these actions are only called by `actions` below.
const mutations = {
  login (state) {
    console.log('mutations login')
    state.auth = true
    router.push({ name: 'Rooms.index' })
  },
  logout (state) {
    console.log('mutations logout')
    state.auth = false
    router.push({ name: 'Users.sign_in' })
  },
  signup (state) {
    console.log('mutations signup')
    state.isReg = true
    router.push({ name: 'Register.sign_up' })
  }
}

// operations that can be dispatched from other components.
// example `store.dispatch('login')` will call `login` action and then mutate the state using `mutations.login`
const actions = {
  login: ({ commit }) => commit('login'),
  logout: ({ commit }) => commit('logout'),
  signup: ({ commit }) => commit('signup')
}

// just getter functions.
const getters = {
  loggedIn: state => state.auth
}

// singleton pattern for ES6
// https://k94n.com/es6-modules-single-instance-pattern
// importing @/store.js will always return the same instance
// identical to exporting
// exports.default = new _vuex2.default.Store({
//   state: state,
//   getters: getters,
//   actions: actions,
//   mutations: mutations
// });

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
