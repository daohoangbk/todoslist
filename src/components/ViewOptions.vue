<template>
  <div class="row viewoptions">
    <button class="btn-view btn col-md-3 col-xs-3" @click="changeView($event, 'all')">All</button>
    <div class="col-md-1 col-xs-1"></div>
    <button class="btn-view btn btn-success col-md-3 col-xs-3" @click="changeView($event, 'done')">Done</button>
    <div class="col-md-1 col-xs-1"></div>
    <button class="btn-view btn btn-warning col-md-3 col-xs-3" @click="changeView($event, 'uncompleted')">Uncompleted</button>
  </div>
</template>

<script>
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
