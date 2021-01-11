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
          '/api/bestSeller.api?key=1BF59F57030886E0B9D3463D8697C390B5C9791830F090998C72A200E5322CD1&categoryId=100&output=json'
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
            `/api/search.api?key=1BF59F57030886E0B9D3463D8697C390B5C9791830F090998C72A200E5322CD1&query=${isbn}&output=json&queryType=isbn`
        )
        commit('assignItem', res.data.item[0])
        commit('assignRank', false)
      } catch (e) {
        commit('assignError', e)
      }
    },
    async loadSearch ({ commit }, keyword) {
      try {
        const res = await axios.get(`/api/search.api?key=1BF59F57030886E0B9D3463D8697C390B5C9791830F090998C72A200E5322CD1&query=${keyword}&output=json`)
        commit('assignList', res.data.item)
        commit('assignRank', false)
      } catch (e) {
        commit('assignError', e)
      }
    },
    async loadCategory ({ commit }, id) {
      try {
        const res = await axios.get(`/api/bestSeller.api?key=1BF59F57030886E0B9D3463D8697C390B5C9791830F090998C72A200E5322CD1&categoryId=${id}&output=json`)
        commit('assignList', res.data.item)
        commit('assignRank', true)
      } catch (e) {
        commit('assignError', e)
      }
    }
  }
}
