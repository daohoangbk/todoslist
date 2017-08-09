const actions = {
  addItem ({commit}, {id}) {
    commit('ADD_ITEM', id)
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
    commit('EDIT_USER', user)
  },
  undoDelete ({commit}, {index}) {
    commit('UNDO_DELETE', index)
  },
  changeFlagEditItem ({commit}, {index}) {
    commit('CHANGE_FLAG_EDIT_ITEM', index)
  },
  changeFlagSaveItem ({commit}, {index}) {
    commit('CHANGE_FLAG_SAVE_ITEM', index)
  },
  editTextItem ({commit}, obj) {
    commit('EDIT_TEXT_ITEM', obj)
  },
  editUserDoItem ({commit}, obj) {
    commit('EDIT_USER_DO_ITEM', obj)
  },
  saveTextItem ({commit}, {index}) {
    commit('SAVE_TEXT_ITEM', index)
  },
  saveUserDoItem ({commit}, {index}) {
    commit('SAVE_USER_DO_ITEM', index)
  }
}

export default actions
