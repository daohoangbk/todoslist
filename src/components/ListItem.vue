<template>
<div>
  <ul>
    <li v-for="(item, index) in listItem">
      <span
        v-bind:class="item.done ? 'done' : ''"
        @click="changeDoneItem($event, index)">
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
      ...mapGetters({listItem: 'todosList'})
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
      }
    }
  }
</script>
<style>
  .done {
    text-decoration: line-through;
  }
</style>
