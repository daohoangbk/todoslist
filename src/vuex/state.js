const state = {
  flag: 'add',
  countItem: 2,
  countUser: 3,
  todosList: [
    {
      id: '0',
      text: 'first',
      userId: '0',
      done: false,
      flagEdit: false,
      inputTextChange: '',
      inputIdChange: ''
    },
    {
      id: '1',
      text: 'second',
      userId: '1',
      done: true,
      flagEdit: false,
      inputTextChange: '',
      inputIdChange: ''
    }
  ],
  view: 'all',
  inputText: '',
  listUsers: [{
    id: '0',
    name: 'Hoang',
    address: 'Ha Noi',
    phone: '0123',
    deleted: false
  },
  {
    id: '1',
    name: 'Dao',
    address: 'Bac Ninh',
    phone: '0123',
    deleted: false
  },
  {
    id: '2',
    name: 'Cong',
    address: 'Shanghai',
    phone: '0123',
    deleted: true
  }],
  inputUsername: '',
  inputAddress: '',
  inputPhone: '',
  indexUser: -1
}

export default state
