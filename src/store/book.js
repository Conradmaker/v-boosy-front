import axios from 'axios'

export default {
  namespaced: true,
  state: () => ({
    lists: [],
    item: {},
    error: {},
    isRank: false
  }),
  getters: {

  },
  mutations: {
    assignList (state, data) {
      state.lists = data
    },
    assignItem (state, data) {
      state.item = data
    },
    assignError (state, data) {
      state.error = data
    },
    assignRank (state, isRank) {
      state.isRank = isRank
    }
  },
  actions: {
    async loadMain ({ commit }) {
      try {
        const res = await axios.get(
          `/api/bestSeller.api?key=${process.env.VUE_APP_API_KEY}&categoryId=100&output=json`
        )
        commit('assignList', res.data.item)
        commit('assignRank', true)
      } catch (e) {
        commit('assignError', e)
      }
    },
    async loadDetail ({ commit }, isbn) {
      try {
        const res = await axios.get(
            `/api/search.api?key=${process.env.VUE_APP_API_KEY}&query=${isbn}&output=json&queryType=isbn`
        )
        commit('assignItem', res.data.item[0])
        commit('assignRank', false)
      } catch (e) {
        commit('assignError', e)
      }
    },
    async loadSearch ({ commit }, keyword) {
      try {
        const res = await axios.get(`/api/search.api?key=${process.env.VUE_APP_API_KEY}&query=${keyword}&output=json`)
        commit('assignList', res.data.item)
        commit('assignRank', false)
      } catch (e) {
        commit('assignError', e)
      }
    },
    async loadCategory ({ commit }, id) {
      try {
        const res = await axios.get(`/api/bestSeller.api?key=${process.env.VUE_APP_API_KEY}&categoryId=${id}&output=json`)
        commit('assignList', res.data.item)
        commit('assignRank', true)
      } catch (e) {
        commit('assignError', e)
      }
    }
  }
}
