export const addItem = ({dispatch}) => {
  dispatch('ADD_ITEM')
}

export const changeText = ({dispatch}, e) => {
  dispatch('CHANGE_TEXT', e.target.value)
}

export const changeDoneItem = ({dispatch}, index) => {
  dispatch('CHANGE_DONE_ITEM', index)
}

export const removeItem = ({dispatch}, index) => {
  dispatch('REMOVE_ITEM', index)
}

export const changeView = ({dispatch}, e) => {
  dispatch('CHANGE_VIEW', e.target.value)
}
