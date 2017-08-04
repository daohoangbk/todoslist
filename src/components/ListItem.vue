<template>
<div>
  <ul>
    <li v-for="(item, index) in listItem">
      <span
        v-bind:class="item.done ? 'done' : ''"
        @click="changeDoneItem($event, index)">
        {{item.text}}
      </span>
    </li>
  </ul>
</div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    // data: function () {
    //   return {listItem: this.$store.getters.todosList}
    // },
    computed: {
      ...mapGetters({listItem: 'todosList'})
    },
    methods: {
      changeDoneItem: function (event, index) {
        this.$store.dispatch('changeDoneItem', {
          index: index
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
