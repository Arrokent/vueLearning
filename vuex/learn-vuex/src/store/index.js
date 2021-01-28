import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    increase(state) {
      state.counter++
    },
    decrease(state) {
      state.counter--
    },
    increaseMoreThan1(state, count){
      state.counter+=count
    }
  },
  action: {

  },
  getters: {
    power(state) {
      return state.counter * state.counter
    }
  },
  modules: {

  },
})

export default store
