import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userMsg:{

    }
  },
  mutations: {
    setUserMsg(state,data){
      state.userMsg = Object.assign({},data)
    }
  },
  actions: {
  },
})
