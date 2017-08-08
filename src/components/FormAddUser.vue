<template>
  <div>
    <form class="form-horizontal">
      <div class="form-group" @submit.prevent="">
        <label class="col-md-2 col-xs-2 control-label">Name</label>
        <div class="col-md-10 col-xs-10">
          <input type="text" class="form-control" placeholder="Name"
            :value="inputUsername" @input="changeName">
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-2 col-xs-2 control-label">Address</label>
        <div class="col-md-10 col-xs-10">
          <input type="text" class="form-control" placeholder="Address"
            :value="inputAddress" @input="changeAddress">
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-2 col-xs-2 control-label">Phone</label>
        <div class="col-md-10 col-xs-10">
          <input type="text" class="form-control" placeholder="Phone"
            :value="inputPhone" @input="changePhone">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-1" v-if="flag === 'edit'">
          <button type="submit" class="btn btn-success">Add</button>
        </div>
        <div class="col-sm-offset-2 col-sm-1">
          <button type="submit" class="btn btn-primary">Add</button>
        </div>
        <div class="col-sm-4" v-if="flag === 'edit'">
          <button class="btn btn-warning">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'inputUsername',
        'inputAddress',
        'inputPhone',
        'flag'
      ])
    },
    methods: {
      changeName: function (e) {
        this.$store.dispatch('changeName', {
          text: e.target.value
        })
      },
      changeAddress: function (e) {
        this.$store.dispatch('changeAddress', {
          text: e.target.value
        })
      },
      changePhone: function (e) {
        this.$store.dispatch('changePhone', {
          text: e.target.value
        })
      }
    }
  }
</script>
