<template>
<div>
  <ul>
    <li v-for="(item, index) in listItem">
      <span
        v-bind:class="item.done ? 'done' : ''"
        @click="">
        {{item.text}}
      </span>
    </li>
  </ul>
</div>
</template>

<script>
  export default {
    data: function () {
      return {listItem: this.$store.getters.todosList}
    },
    methods: {

    }
  }
</script>
<style>
  .done {
    text-decoration: line-through;
  }
</style>
