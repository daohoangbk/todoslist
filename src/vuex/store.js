import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  todosList: [{text: 'first', done: false}, {text: 'second', done: true}],
  view: 'all',
  inputText: ''
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
    state.todosList[index].done = !state.todosList[index].done
  },
  REMOVE_ITEM (state, index) {
    state.todosList.splice(index, 1)
  },
  CHANGE_VIEW (state, view) {
    state.view = view
  }
}

const actions = {
  addItem ({commit}) {
    commit('ADD_ITEM')
  },
  changeText ({commit}, {text}) {
    commit('CHANGE_TEXT', text)
  },
  changeDoneItem ({commit}, {index}) {
    commit('CHANGE_DONE_ITEM', index)
  },
  removeItem ({commit}, {index}) {
    commit('REMOVE_ITEM', index)
  },
  changeView ({commit}, {view}) {
    commit('CHANGE_VIEW', view)
  }
}
const getters = {
  inputText: (state) => state.inputText,
  todosList: (state) => state.todosList,
  view: (state) => state.view
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
