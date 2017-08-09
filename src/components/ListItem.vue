<template>
<div>
  <table class="table" v-if="todosList.length > 0">
    <thead>
      <tr class="row">
        <th class="col-md-4 col-xs-4">Task</th>
        <th class="col-md-3 col-xs-3">User</th>
        <th class="col-md-2 col-xs-2">Toggle done!</th>
        <th class="col-md-2 col-xs-2">Actions</th>
        <th class="col-md-2 col-xs-2">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in todosList" v-if="isShow(item.done)" class="row form-group">
        <td v-if="!item.flagEdit" v-bind:class="item.done ? 'done' : ''" class="col-md-4 col-xs-4">{{item.text}}</td>
        <td v-else class="col-md-4 col-xs-4"><input type="text" :value="item.text" @input="changeInputText($event, index)" class="form-control"/></td>

        <td v-if="!item.flagEdit" class="col-md-3 col-xs-3">{{getUserNameById(item.userId)}}</td>
        <td v-else class="col-md-3 col-xs-3">
          <select class="form-control" @change="changeInputId($event, index)">
            <option v-for="(user, index) in listUsers" :value="user.id" v-if="item.userId === user.id" selected="selected">{{user.name}}</option>
            <option :value="user.id" v-else>{{user.name}}</option>
          </select>
        </td>

        <td v-if="!item.done" class="col-md-2 col-xs-2"><button class="btn btn-success btn-sm" @click="changeDoneItem($event, index)"><i class="glyphicon glyphicon-ok"></i></button></td>
        <td v-else class="col-md-2 col-xs-2"><button class="btn btn-warning btn-sm" @click="changeDoneItem($event, index)"><i class="glyphicon glyphicon-remove"></i></button></td>

        <td class="col-md-2 col-xs-2">
          <button v-if="!item.flagEdit" class="btn btn-info btn-sm" @click="changeFlagEditItem($event, index)"><i class="icons glyphicon glyphicon-edit"></i></button>
          <span v-else>
            <button class="btn btn-success btn-sm" @click="changeFlagSaveItem($event, index)"><i class="icons glyphicon glyphicon-saved"></i></button>
            <button class="btn btn-warning btn-sm" @click="cancelChangeItem($event, index)"><i class="icons glyphicon glyphicon-repeat"></i></button>
          </span>
        </td>
        <td class="col-md-2 col-xs-2">
          <button class="btn btn-danger btn-sm" @click="removeItem($event, index)"><i class="icons glyphicon glyphicon-trash"></i></button>
        </td>
      </tr>
    </tbody>
  </table>
  <h3 v-else>The Todo List is empty!!</h3>
</div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'todosList',
        'view',
        'listUsers'
      ])

    },
    methods: {
      cancelChangeItem: function (event, index) {
        this.$store.dispatch('changeFlagSaveItem', {
          index
        })
        this.$store.dispatch('editTextItem', {
          index,
          text: this.todosList[index].text
        })
        this.$store.dispatch('editUserDoItem', {
          index,
          userId: this.todosList[index].userId
        })
      },
      changeInputId: function (event, index) {
        this.$store.dispatch('editUserDoItem', {
          index,
          userId: event.target.value
        })
      },
      changeInputText: function (event, index) {
        this.$store.dispatch('editTextItem', {
          index,
          text: event.target.value
        })
      },
      changeFlagEditItem: function (event, index) {
        this.$store.dispatch('changeFlagEditItem', {
          index
        })
        this.$store.dispatch('editTextItem', {
          index,
          text: this.todosList[index].text
        })
        this.$store.dispatch('editUserDoItem', {
          index,
          userId: event.target.value
        })
      },
      changeFlagSaveItem: function (event, index) {
        this.$store.dispatch('changeFlagSaveItem', {
          index
        })
        this.$store.dispatch('saveTextItem', {
          index
        })
        this.$store.dispatch('saveUserDoItem', {
          index
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
      changeDoneItem: function (event, index) {
        event.preventDefault()
        this.$store.dispatch('changeDoneItem', {
          index: index
        })
      },
      removeItem: function (event, index) {
        event.preventDefault()
        this.$store.dispatch('removeItem', {
          index
        })
      },
      isShow: function (isTrue) {
        switch (this.view) {
          case 'all': return true
          case 'done': {
            if (isTrue) return true
            else return false
          }
          case 'uncompleted': {
            if (isTrue) return false
            else return true
          }
          default: return true
        }
      }
    }
  }
</script>

<style>
.done {
  text-decoration: line-through;
}

.btn {
  margin: 2px;
}
</style>
