<template>
  <div class="row">
    <div>
      <table class="table">
        <thead>
          <tr class="row">
            <th class="col-md-1 col-xs-3">#</th>
            <th class="col-md-3 col-xs-3">Name</th>
            <th class="col-md-3 col-xs-3">Address</th>
            <th class="col-md-2 col-xs-3">Phone</th>
            <th class="col-md-3 col-xs-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in listUsers" class="row">
            <th class="col-md-1 col-xs-1">{{index + 1}}</th>
            <td class="col-md-3 col-xs-3">{{user.name}}</td>
            <td class="col-md-3 col-xs-3">{{user.address}}</td>
            <td class="col-md-2 col-xs-2">{{user.phone}}</td>
            <td class="col-md-3 col-xs-3">
              <div v-if="!user.deleted">
                <button type="submit" class="btn btn-primary" @click="editUser($event, index, user)">Edit</button>
                <button type="submit" class="btn btn-danger" @click="deleteUser($event, index)">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'listUsers'
      ])
    },
    methods: {
      ...mapActions([
        'changeFlagEdit'
      ]),
      deleteUser: function (event, index) {
        this.$store.dispatch('deleteUser', {
          index
        })
      },
      editUser: function (event, index, user) {
        this.$store.dispatch('changeName', {
          text: user.name
        })
        this.$store.dispatch('changeAddress', {
          text: user.address
        })
        this.$store.dispatch('changePhone', {
          text: user.phone
        })
        this.$store.dispatch('changeFlagEdit', {
          index
        })
      }
    }
  }
</script>
<style>
.form-horizontal .form-group {
  margin-right: 0px;
  margin-left: 0px;
}
.table {
  margin: 20px;
}
</style>
