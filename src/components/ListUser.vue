<template>
  <div class="row">
    <div>
      <table class="table">
        <thead>
          <tr class="row">
            <th class="col-md-1 col-xs-1">#</th>
            <th class="col-md-3 col-xs-3" @click="changeReverseSort('name')">Name
              <span>
                <i v-if="!reverseSort" class="glyphicon glyphicon-sort-by-alphabet"></i>
                <i v-else class="glyphicon glyphicon-sort-by-alphabet-alt"></i>
              </span>
            </th>
            <th class="col-md-2 col-xs-2" @click="changeReverseSort('address')">Address
              <span>
                <i v-if="!reverseSort" class="glyphicon glyphicon-sort-by-alphabet"></i>
                <i v-else class="glyphicon glyphicon-sort-by-alphabet-alt"></i>
              </span>
            </th>
            <th class="col-md-2 col-xs-2" @click="changeReverseSort('phone')">Phone
              <span>
                <i v-if="!reverseSort" class="glyphicon glyphicon-sort-by-order"></i>
                <i v-else class="glyphicon glyphicon-sort-by-order-alt"></i>
              </span>
            </th>
            <th class="col-md-4 col-xs-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="row">
            <th class="col-md-1 col-xs-1"></th>
            <th class="col-md-3 col-xs-3"><input v-model="nameSearch" type="text" class="form-control" placeholder="search..."></th>
            <th class="col-md-2 col-xs-2"><input v-model="addressSearch" type="text" class="form-control" placeholder="search..."></th>
            <th class="col-md-2 col-xs-2"><input v-model="phoneSearch" type="" class="form-control" placeholder="search..."></th>
            <th class="col-md-4 col-xs-4">
              <router-link to="/form-add-user">
                <button class="btn btn-primary">Add new user</button>
              </router-link>
            </th>
          </tr>
          <tr v-for="(user, index) in localListUser()" class="row" v-if="filterUser(user)">
            <th class="col-md-1 col-xs-1">{{index + 1}}</th>
            <td class="col-md-3 col-xs-3">{{user.name}}</td>
            <td class="col-md-2 col-xs-2">{{user.address}}</td>
            <td class="col-md-2 col-xs-2">{{user.phone}}</td>
            <td class="col-md-4 col-xs-4">
              <span v-if="!user.deleted">
                <router-link to="/form-edit-user">
                  <button class="btn btn-primary" @click="editUser($event, user)">Edit</button>
                </router-link>
                <button class="btn btn-danger" @click="beforeDeleteUser(user)">Delete</button>
              </span>
              <span v-else>
                <button class="btn btn-info" @click="toggleDeleteUser(user.id)">Undo</button>
              </span>
              <router-link :to="'/user/' + userId + '/task'">
                <button class="btn btn-info" @click="changeShowTaskUser($event, user.id)">Task</button>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Modal
      :showModal="showModal"
      :user="userDelete"
      @toggleDeleteUser="toggleDeleteUser"
      @cancelDeleteUser="cancelDeleteUser">
    </Modal>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ListItem from './ListItem'
  import Modal from './Modal'

  var lodash = require('lodash')

  export default {
    data: function () {
      return {
        userDelete: {},
        userId: -1,
        nameSearch: '',
        addressSearch: '',
        phoneSearch: '',
        sort: 'increate',
        reverseSort: false,
        keySort: 'name',
        showModal: false,
        agreeDelete: false
      }
    },
    computed: {
      ...mapGetters([
        'listUsers'
      ])
    },
    methods: {
      cancelDeleteUser: function () {
        this.showModal = false
        this.userDelete = {}
      },
      beforeDeleteUser: function (user) {
        this.showModal = true
        this.userDelete = user
      },
      changeReverseSort: function (keySort) {
        this.keySort = keySort
        this.reverseSort = !this.reverseSort
      },
      localListUser: function () {
        let list = this.listUsers.slice()
        let returnValue = []
        switch (this.keySort) {
          case 'name': {
            if (!this.reverseSort) {
              returnValue = lodash.sortBy(list, 'name')
            } else {
              returnValue = lodash.sortBy(list, 'name').reverse()
            }
            break
          }
          case 'address': {
            if (!this.reverseSort) {
              returnValue = lodash.sortBy(list, 'address')
            } else {
              returnValue = lodash.sortBy(list, 'address').reverse()
            }
            break
          }
          case 'phone': {
            if (!this.reverseSort) {
              returnValue = lodash.sortBy(list, 'phone')
            } else {
              returnValue = lodash.sortBy(list, 'phone').reverse()
            }
            break
          }
        }
        return returnValue
      },
      filterUser: function (user) {
        return user.name.toLowerCase().includes(this.nameSearch.toLowerCase()) && user.address.toLowerCase().includes(this.addressSearch.toLowerCase()) && user.phone.toLowerCase().includes(this.phoneSearch.toLowerCase())
      },
      changeShowTaskUser: function (event, id) {
        this.userId = id
      },
      toggleDeleteUser: function (id) {
        this.showModal = false
        this.$store.dispatch('toggleDeleteUser', {
          id
        })
      },
      editUser: function (event, user) {
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
          id: user.id
        })
      }
    },
    components: {
      ListItem,
      Modal
    }
  }
</script>
