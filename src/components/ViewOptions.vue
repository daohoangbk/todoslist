<template>
  <div>
    <button class="btn" @click="changeView($event, 'all')">All</button>
    <button class="btn" @click="changeView($event, 'done')">Done</button>
    <button class="btn" @click="changeView($event, 'uncompleted')">Uncompleted</button>
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
