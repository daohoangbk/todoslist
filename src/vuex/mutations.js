const mutations = {
  ADD_ITEM (state, id) {
    let temp = state.inputText
    let item = {
      text: temp,
      userId: id,
      done: false,
      flagEdit: false
    }
    state.inputText = ''
    state.todosList.push(item)
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
  TOGGLE_DELETE_USER (state, id) {
    for (let i = 0; i < state.listUsers.length; i++) {
      if (state.listUsers[i].id === id) {
        state.listUsers[i].deleted = !state.listUsers[i].deleted
        break
      }
    }
  },
  CHANGE_FLAG_EDIT (state, id) {
    if (state.flag !== 'edit') {
      state.flag = 'edit'
    }
    state.indexUser = id
  },
  CHANGE_FLAG_ADD (state) {
    if (state.flag !== 'add') {
      state.flag = 'add'
      state.indexUser = -1
    }
  },
  EDIT_USER (state, user) {
    state.listUsers[state.indexUser].name = user.name
    state.listUsers[state.indexUser].address = user.address
    state.listUsers[state.indexUser].phone = user.phone
  },
  CHANGE_FLAG_EDIT_ITEM (state, index) {
    if (state.todosList[index].flagEdit === false) {
      state.todosList[index].flagEdit = true
    }
  },
  CHANGE_FLAG_SAVE_ITEM (state, index) {
    if (state.todosList[index].flagEdit === true) {
      state.todosList[index].flagEdit = false
    }
  },
  EDIT_TEXT_ITEM (state, obj) {
    state.todosList[obj.index].inputTextChange = obj.text
  },
  EDIT_USER_DO_ITEM (state, obj) {
    state.todosList[obj.index].inputIdChange = obj.userId
  },
  SAVE_TEXT_ITEM (state, index) {
    state.todosList[index].text = state.todosList[index].inputTextChange
  },
  SAVE_USER_DO_ITEM (state, index) {
    state.todosList[index].userId = state.todosList[index].inputIdChange
  }
}

export default mutations
