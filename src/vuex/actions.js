const actions = {
  addItem ({commit}, {id}) {
    commit('ADD_ITEM', id)
  },
  removeItem ({commit}, {id}) {
    commit('REMOVE_ITEM', id)
  },
  changeText ({commit}, {text}) {
    commit('CHANGE_TEXT', text)
  },
  changeDoneItem ({commit}, {id}) {
    commit('CHANGE_DONE_ITEM', id)
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
  toggleDeleteUser ({commit}, {id}) {
    commit('TOGGLE_DELETE_USER', id)
  },
  changeFlagEdit ({commit}, {id}) {
    commit('CHANGE_FLAG_EDIT', id)
  },
  changeFlagAdd ({commit}) {
    commit('CHANGE_FLAG_ADD')
  },
  editUser ({commit}, {user}) {
    commit('EDIT_USER', user)
  },
  changeFlagEditItem ({commit}, {id}) {
    commit('CHANGE_FLAG_EDIT_ITEM', id)
  },
  changeFlagSaveItem ({commit}, {id}) {
    commit('CHANGE_FLAG_SAVE_ITEM', id)
  },
  editTextItem ({commit}, obj) {
    commit('EDIT_TEXT_ITEM', obj)
  },
  editUserDoItem ({commit}, obj) {
    commit('EDIT_USER_DO_ITEM', obj)
  },
  saveTextItem ({commit}, {id}) {
    commit('SAVE_TEXT_ITEM', id)
  },
  saveUserDoItem ({commit}, {id}) {
    commit('SAVE_USER_DO_ITEM', id)
  }
}

export default actions
