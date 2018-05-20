import Vue from 'vue'
import Vuex from 'vuex'
import question from './question'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    question: {
      namespaced: true,
      ...question
    }
  }
})

export default store
