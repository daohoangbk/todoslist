<template>
  <div class="formadduser">
    <form class="form-horizontal" @submit.prevent="">
      <div class="form-group">
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
          <button type="submit" class="btn btn-success" @click="saveEditUser">Save</button>
        </div>
        <div class="col-sm-offset-2 col-sm-1" v-else>
          <button type="submit" class="btn btn-primary" @click="addUser">Add</button>
        </div>
        <div class="col-sm-4" v-if="flag === 'edit'">
          <button class="btn btn-warning" @click="cancelEdit">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

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
      ...mapActions([
        'resetInput',
        'changeFlagAdd',
        'resetInput'
      ]),
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
      },
      addUser: function () {
        this.$store.dispatch('addUser', {
          name: this.inputUsername,
          address: this.inputAddress,
          phone: this.inputPhone,
          deleted: false
        })
        this.resetInput()
      },
      cancelEdit: function () {
        this.changeFlagAdd()
        this.resetInput()
      },
      saveEditUser: function () {
        this.$store.dispatch('editUser', {
          user: {
            name: this.inputUsername,
            address: this.inputAddress,
            phone: this.inputPhone,
            deleted: false
          }
        })
        this.changeFlagAdd()
        this.resetInput()
      }
    }
  }
</script>
<style>
form {
  margin: 20px;
}
.formadduser {
  padding: 300px;
}
</style>
