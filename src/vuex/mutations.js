const mutations = {
  ADD_ITEM (state, id) {
    let temp = state.inputText
    let item = {
      id: state.countItem.toString(),
      text: temp,
      userId: id,
      done: false,
      flagEdit: false
    }
    state.inputText = ''
    state.todosList.push(item)
    state.countItem++
  },
  REMOVE_ITEM (state, id) {
    for (let i = 0; i < state.todosList.length; i++) {
      if (state.todosList[i].id === id) {
        state.todosList.splice(i, 1)
        state.countItem--
        break
      }
    }
  },
  CHANGE_TEXT (state, text) {
    state.inputText = text
  },
  CHANGE_DONE_ITEM (state, id) {
    for (let i = 0; i < state.todosList.length; i++) {
      if (state.todosList[i].id === id) {
        state.todosList[i].done = !state.todosList[i].done
        break
      }
    }
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
    state.countUser++
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
  CHANGE_FLAG_EDIT_ITEM (state, id) {
    for (let i = 0; i < state.todosList.length; i++) {
      if (state.todosList[i].id === id) {
        if (state.todosList[i].flagEdit === false) {
          state.todosList[i].flagEdit = true
        }
        break
      }
    }
  },
  CHANGE_FLAG_SAVE_ITEM (state, id) {
    for (let i = 0; i < state.todosList.length; i++) {
      if (state.todosList[i].id === id) {
        if (state.todosList[i].flagEdit === true) {
          state.todosList[i].flagEdit = false
        }
        break
      }
    }
  },
  EDIT_TEXT_ITEM (state, obj) {
    for (let i = 0; i < state.todosList.length; i++) {
      if (state.todosList[i].id === obj.id) {
        state.todosList[i].inputTextChange = obj.text
        break
      }
    }
  },
  EDIT_USER_DO_ITEM (state, obj) {
    for (let i = 0; i < state.todosList.length; i++) {
      if (state.todosList[i].id === obj.id) {
        state.todosList[i].inputIdChange = obj.userId
        break
      }
    }
  },
  SAVE_TEXT_ITEM (state, id) {
    for (let i = 0; i < state.todosList.length; i++) {
      if (state.todosList[i].id === id) {
        state.todosList[i].text = state.todosList[i].inputTextChange
        break
      }
    }
  },
  SAVE_USER_DO_ITEM (state, id) {
    for (let i = 0; i < state.todosList.length; i++) {
      if (state.todosList[i].id === id) {
        state.todosList[i].userId = state.todosList[i].inputIdChange
        break
      }
    }
  }
}

export default mutations
