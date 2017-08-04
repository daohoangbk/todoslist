<template>
  <div>
    <button @click="changeView($event, 'all')">All</button>
    <button @click="changeView($event, 'done')">Done</button>
    <button @click="changeView($event, 'uncompleted')">Uncompleted</button>
  </div>
</template>

<script>
  // import { mapActions } from 'vuex'

  export default {
    methods: {
      changeView: function (event, view) {
        this.$store.dispatch('changeView', {
          view
        })
      }
    }
  }
</script>
