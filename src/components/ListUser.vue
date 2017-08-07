<template>
  <div class="row viewoptions">
    <table class="table">
      <thead>
        <tr class="row">
          <th class="col-md-3 col-xs-3">Name</th>
          <th class="col-md-3 col-xs-3">Address</th>
          <th class="col-md-3 col-xs-3">Phone</th>
          <th class="col-md-3 col-xs-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in listUsers" class="row">
          <td class="col-md-3 col-xs-3">{{user.name}}</td>
          <td class="col-md-3 col-xs-3">{{user.address}}</td>
          <td class="col-md-3 col-xs-3">{{user.phone}}</td>
          <td class="col-md-3 col-xs-3"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import FormAddUser from './components/FormAddUser'
  import ListUser from './components/ListUser'
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'listUsers'
      ])
    }
  }
</script>
