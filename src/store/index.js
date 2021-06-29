import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showSearch: true,
    renderAdmin: false,
    profileAdmin: null,
  },
  getters: {
    showSearch(state) {
      return state.showSearch
    },
    renderAdmin(state) {
      return state.renderAdmin
    },
    profileAdmin(state) {
      return state.profileAdmin
    }
  },
  mutations: {
    changeShowSearch(state, payload) {
      state.showSearch = payload
    },
    changeRenderAdmin(state, payload) {
      state.renderAdmin = payload
    },
    changeProfileAdmin(state, payload) {
      state.profileAdmin = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
