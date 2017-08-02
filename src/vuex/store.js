import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  todoslist: [],
  view: 'all',
  inputText: 'begin'
}

const mutations = {
  ADD_ITEM (state) {
    state.todoslist.push({
      text: state.inputText,
      done: false
    })
    state.inputText = ''
  },
  CHANGE_TEXT (state, text) {
    state.inputText = text
  },
  CHANGE_DONE_ITEM (state, index) {
    state.todoslist[index].done = !state.todoslist.done
  },
  REMOVE_ITEM (state, index) {
    state.todosList.split(index, 1)
  },
  CHANGE_VIEW (state, view) {
    state.view = view
  }
}

export default new Vuex.Store({
  state,
  mutations
})
