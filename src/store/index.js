import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showSearch: true,
    renderAdmin: {
      show: false,
      type: null
    },
  },
  getters: {
    showSearch(state) {
      return state.showSearch
    },
    renderAdmin(state) {
      return state.renderAdmin
    },
  },
  mutations: {
    changeShowSearch(state, payload) {
      state.showSearch = payload
    },
    changeRenderAdmin(state, payload) {
      state.renderAdmin = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
