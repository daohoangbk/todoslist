<template>
<div>
  <table class="table">
    <thead>
      <tr class="row">
        <th class="col-md-8 col-xs-8">Task</th>
        <th class="col-md-2 col-xs-2">Toggle done!</th>
        <th class="col-md-2 col-xs-2">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in todosList" v-if="isShow( item.done)" class="row">
        <td v-bind:class="item.done ? 'done' : ''" class="col-md-8 col-xs-8">{{item.text}}</td>
        <td v-if="!item.done" class="col-md-2 col-xs-2"><button class="btn btn-success btn-sm" @click="changeDoneItem($event, index)"><i class="glyphicon glyphicon-ok"></i></button></td>
        <td v-else class="col-md-2 col-xs-2"><button class="btn btn-warning btn-sm" @click="changeDoneItem($event, index)"><i class="glyphicon glyphicon-remove"></i></button></td>
        <td class="col-md-2 col-xs-2"><button class="btn btn-danger btn-sm" @click="removeItem($event, index)"><i class="glyphicon glyphicon-trash"></i></button></td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'todosList',
        'view'
      ])

    },
    methods: {
      changeDoneItem: function (event, index) {
        event.preventDefault()
        this.$store.dispatch('changeDoneItem', {
          index: index
        })
      },
      removeItem: function (event, index) {
        // console.log(index)
        event.preventDefault()
        this.$store.dispatch('removeItem', {
          index
        })
      },
      isShow: function (isTrue) {
        // event.preventDefault()
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
