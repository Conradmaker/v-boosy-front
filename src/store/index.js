import Vue from 'vue'
import Vuex from 'vuex'
import book from './book'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    book
  },
  // Data
  state: {},
  // Computed
  getters: {},
  // Methods 실제값을 변경할때 (비동기 X)
  mutations: {},
  // Methods 비동기를 포함하는 일반로직
  actions: {}
})
