import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  todosList: [{text: 'first', done: false}, {text: 'second', done: true}],
  view: 'all',
  inputText: 'beginfd'
}

const mutations = {
  ADD_ITEM (state) {
    let temp = state.inputText
    state.inputText = ''
    state.todosList.push({
      text: temp,
      done: false
    })
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

const actions = {
  addItem ({commit}) {
    commit('ADD_ITEM')
  },
  changeText ({commit}, text) {
    commit('CHANGE_TEXT', text)
  },
  changeDoneItem ({commit}) {
    commit('CHANGE_DONE_ITEM')
  },
  removeItem ({commit}) {
    commit('REMOVE_ITEM')
  },
  changeView ({commit}) {
    commit('CHANGE_VIEW')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters: {
    inputText: (state) => state.inputText,
    todosList: (state) => state.todosList
  }
})
