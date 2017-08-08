<template>
  <div class="row">
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
          <td class="col-md-3 col-xs-3">
            <div v-if="!user.deleted">
              <button type="submit" class="btn btn-primary">Edit</button>
              <button type="submit" class="btn btn-danger">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  <div class="row viewoptions">
    <div class="col-md-3 col-xs-3"></div>
    <div class="col-md-6 col-xs-6">
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
            <td class="col-md-3 col-xs-3"><button class="btn btn-danger btn-sm" @click=""><i class="glyphicon glyphicon-trash"></i></button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-3 col-xs-3"></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'listUsers'
      ])
    }
  }
</script>
