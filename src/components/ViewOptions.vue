<template>
  <div class="row">
    <button class="btn-view btn col-md-3 col-xs-3" @click="changeView('all')">All</button>
    <div class="col-md-1 col-xs-1"></div>
    <button class="btn-view btn btn-success col-md-3 col-xs-3" @click="changeView('done')">Done</button>
    <div class="col-md-1 col-xs-1"></div>
    <button class="btn-view btn btn-warning col-md-3 col-xs-3" @click="changeView('uncompleted')">Uncompleted</button>
  </div>
</template>

<script>
  export default {
    props: [
      'view'
    ],
    methods: {
      changeView: function (view) {
        this.$emit('changeView', view)
      }
    }
  }
</script>
