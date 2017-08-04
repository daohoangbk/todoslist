<template>
<div>
  <ul>
    <li v-for="(item, index) in todosList" v-if="isShow( item.done)">
      <span
        v-bind:class="item.done ? 'done' : ''"
        @click="changeDoneItem($event, index)">
        {{item.text}}
      </span>
      <button class="btn btn-danger btn-sm" @click="removeItem($event, index)"><i class="glyphicon glyphicon-remove"></i></button>
    </li>
  </ul>
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
<style>
  .done {
    text-decoration: line-through;
  }
</style>
