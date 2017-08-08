import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  todosList: [{text: 'first', done: false}, {text: 'second', done: true}],
  view: 'all',
  inputText: '',
  listUsers: [{
    name: 'Hoang',
    address: 'Ha Noi',
    phone: '0123',
    deleted: false
  },
  { name: 'Dao',
    address: 'Bac Ninh',
    phone: '0123',
    deleted: false
  },
  { name: 'Cong',
    address: 'Shanghai',
    phone: '0123',
    deleted: true
  }],
  inputUsername: 'name',
  inputAddress: 'addr',
  inputPhone: 'phone',
  flag: 'add',
  indexUser: -1
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
  },
  CHANGE_NAME (state, text) {
    state.inputUsername = text
  },
  CHANGE_ADDRESS (state, text) {
    state.inputAddress = text
  },
  CHANGE_PHONE (state, text) {
    state.inputPhone = text
  },
  ADD_USER (state, user) {
    state.listUsers.push(user)
  },
  RESET_INPUT (state) {
    state.inputUsername = ''
    state.inputAddress = ''
    state.inputPhone = ''
  },
  DELETE_USER (state, index) {
    state.listUsers[index].deleted = !state.listUsers[index].deleted
  },
  CHANGE_FLAG_EDIT (state, index) {
    if (state.flag !== 'edit') {
      state.flag = 'edit'
    }
    state.indexUser = index
  },
  CHANGE_FLAG_ADD (state) {
    if (state.flag !== 'add') {
      state.flag = 'add'
      state.indexUser = -1
    }
  },
  EDIT_USER (state, user) {
    // console.log(typeof (state.listUsers))
    // console.log(state.listUsers[state.indexUser - 1])
    state.listUsers[state.indexUser].name = user.name
    state.listUsers[state.indexUser].address = user.address
    state.listUsers[state.indexUser].phone = user.phone
    // console.log(state.listUsers[state.indexUser])
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
  },
  changeName ({commit}, {text}) {
    commit('CHANGE_NAME', text)
  },
  changeAddress ({commit}, {text}) {
    commit('CHANGE_ADDRESS', text)
  },
  changePhone ({commit}, {text}) {
    commit('CHANGE_PHONE', text)
  },
  addUser ({commit}, user) {
    commit('ADD_USER', user)
  },
  resetInput ({commit}) {
    commit('RESET_INPUT')
  },
  deleteUser ({commit}, {index}) {
    commit('DELETE_USER', index)
  },
  changeFlagEdit ({commit}, {index}) {
    commit('CHANGE_FLAG_EDIT', index)
  },
  changeFlagAdd ({commit}) {
    commit('CHANGE_FLAG_ADD')
  },
  editUser ({commit}, {user}) {
    // console.log(user)
    commit('EDIT_USER', user)
  }
}
const getters = {
  inputText: (state) => state.inputText,
  todosList: (state) => state.todosList,
  view: (state) => state.view,
  listUsers: (state) => state.listUsers,
  inputUsername: (state) => state.inputUsername,
  inputAddress: (state) => state.inputAddress,
  inputPhone: (state) => state.inputPhone,
  flag: (state) => state.flag
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
