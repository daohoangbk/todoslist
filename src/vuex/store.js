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
    // Vue.set(state, 'inputText', '')
    console.log('1')
    state.todosList.push({
      text: temp,
      done: false
    })
    console.log('2')
  },
  CHANGE_TEXT (state, text) {
    state.inputText = text
  },
  CHANGE_DONE_ITEM (state, index) {
    // console.log(index)
    state.todosList[index].done = !state.todosList[index].done
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
  changeText ({commit}, {text}) {
    console.log(text)
    commit('CHANGE_TEXT', text)
  },
  changeDoneItem ({commit}, {index}) {
    // console.log(index)
    commit('CHANGE_DONE_ITEM', index)
  },
  removeItem ({commit}) {
    commit('REMOVE_ITEM')
  },
  changeView ({commit}) {
    commit('CHANGE_VIEW')
  }
}
const getters = {
  inputText: (state) => state.inputText,
  todosList: (state) => state.todosList
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
