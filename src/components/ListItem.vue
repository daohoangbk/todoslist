<template>
<div>
  <ul>
    <li v-for="(item, index) in todosList">
      <span
        v-bind:class="item.done ? 'done' : ''"
        @click="changeDoneItem($event, index)"
        v-if="isShow($event, item.done)">
        {{item.text}}
      </span>
      <button @click="removeItem($event, index)"><i class="glyphicon glyphicon-remove"></i></button>
    </li>
  </ul>
</div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        todosList: 'todosList',
        view: 'view'
      })

    },
    methods: {
      changeDoneItem: function (event, index) {
        this.$store.dispatch('changeDoneItem', {
          index: index
        })
      },
      removeItem: function (event, index) {
        // console.log(index)
        this.$store.dispatch('removeItem', {
          index
        })
      },
      isShow: function (event, isTrue) {
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
