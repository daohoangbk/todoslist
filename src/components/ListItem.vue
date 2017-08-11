<template>
<div>
  <table class="table" v-if="filterListItem().length > 0">
    <thead>
      <tr class="row">
        <th class="col-md-4 col-xs-4">Task</th>
        <th class="col-md-3 col-xs-3">User</th>
        <th class="col-md-2 col-xs-2">Toggle done!</th>
        <th v-if="userId === undefined" class="col-md-2 col-xs-2">Actions</th>
        <th v-if="userId === undefined" class="col-md-2 col-xs-2">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in filterListItem()" class="row form-group">
        <td v-if="!item.flagEdit" v-bind:class="item.done ? 'done' : ''" class="col-md-4 col-xs-4">{{item.text}}</td>
        <td v-else class="col-md-4 col-xs-4"><input type="text" :value="item.text" @input="changeInputText($event, item.id)" class="form-control"/></td>

        <td v-if="!item.flagEdit" class="col-md-3 col-xs-3">{{getUserNameById(item.userId)}}</td>
        <td v-else class="col-md-3 col-xs-3">
          <select class="form-control" @change="changeInputId($event, item.id)" value="item.userId">
            <option>empty</option>
            <option v-for="user in listUsers" :value="user.id" v-if="item.userId === user.id" selected="selected">{{user.name}}</option>
            <option :value="user.id" v-else>{{user.name}}</option>
          </select>
        </td>

        <td v-if="!item.done" class="col-md-2 col-xs-2"><button class="btn btn-success btn-sm" @click="changeDoneItem($event, item.id)"><i class="glyphicon glyphicon-ok"></i></button></td>
        <td v-else class="col-md-2 col-xs-2"><button class="btn btn-warning btn-sm" @click="changeDoneItem($event, item.id)"><i class="glyphicon glyphicon-remove"></i></button></td>

        <td v-if="userId === undefined" class="col-md-2 col-xs-2">
          <button v-if="!item.flagEdit" class="btn btn-info btn-sm" @click="changeFlagEditItem($event, item)"><i class="icons glyphicon glyphicon-edit"></i></button>
          <span v-else>
            <button class="btn btn-success btn-sm" @click="changeFlagSaveItem($event, item.id)"><i class="icons glyphicon glyphicon-saved"></i></button>
            <button class="btn btn-warning btn-sm" @click="cancelChangeItem($event, item)"><i class="icons glyphicon glyphicon-repeat"></i></button>
          </span>
        </td>
        <td v-if="userId === undefined" class="col-md-2 col-xs-2">
          <button class="btn btn-danger btn-sm" @click="removeItem($event, item.id)"><i class="icons glyphicon glyphicon-trash"></i></button>
        </td>
      </tr>
    </tbody>

  </table>
  <h3 v-else>The Todo List is empty!!</h3>
  <ViewOptions :view="view" @changeView="changeView"></ViewOptions>
</div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ViewOptions from './ViewOptions'

  var lodash = require('lodash')

  export default {
    data: function () {
      return {
        view: 'all'
      }
    },
    props: [
      'userId'
    ],
    computed: {
      ...mapGetters([
        'todosList',
        'listUsers'
      ])
    },
    methods: {
      changeView: function (view) {
        this.view = view
      },
      cancelChangeItem: function (event, item) {
        this.$store.dispatch('changeFlagSaveItem', {
          id: item.id
        })
        this.$store.dispatch('editTextItem', {
          id: item.id,
          text: item.text
        })
        this.$store.dispatch('editUserDoItem', {
          id: item.id,
          userId: item.userId
        })
      },
      changeInputId: function (event, id) {
        this.$store.dispatch('editUserDoItem', {
          id,
          userId: event.target.value
        })
      },
      changeInputText: function (event, id) {
        this.$store.dispatch('editTextItem', {
          id,
          text: event.target.value
        })
      },
      changeFlagEditItem: function (event, item) {
        this.$store.dispatch('changeFlagEditItem', {
          id: item.id
        })
        this.$store.dispatch('editTextItem', {
          id: item.id,
          text: item.text
        })
        this.$store.dispatch('editUserDoItem', {
          id: item.id,
          userId: item.userId
        })
      },
      changeFlagSaveItem: function (event, id) {
        this.$store.dispatch('changeFlagSaveItem', {
          id
        })
        this.$store.dispatch('saveTextItem', {
          id
        })
        this.$store.dispatch('saveUserDoItem', {
          id
        })
      },
      getUserNameById: function (id) {
        let list = this.listUsers
        let name = ''
        list.forEach((user) => {
          if (user.id === id) {
            name = user.name
          }
        })
        return name
      },
      changeDoneItem: function (event, id) {
        event.preventDefault()
        this.$store.dispatch('changeDoneItem', {
          id
        })
      },
      removeItem: function (event, id) {
        event.preventDefault()
        this.$store.dispatch('removeItem', {
          id
        })
      },
      filterListItem: function () {
        let list = this.todosList.slice()
        let returnValue = []
        if (this.userId === undefined) {
          if (this.view === 'all') {
            returnValue = list
          } else {
            returnValue = lodash.filter(list, {done: (this.view === 'done')})
          }
        } else {
          if (this.view === 'all') {
            returnValue = lodash.filter(list, {userId: this.userId})
          } else {
            returnValue = lodash.filter(list, {done: this.view === 'done', userId: this.userId})
          }
        }
        return returnValue
      }
    },
    components: {
      ViewOptions
    }
  }
</script>
