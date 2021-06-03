import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showSearch: true
  },
  getters: {
    showSearch(state){
      return state.showSearch
    }    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
