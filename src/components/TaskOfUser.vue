<template>
  <div>
    <h4>Task of {{this.getUserNameById(this.userId)}}</h4>
    <router-link to="/user-management" style="margin-left: 150px">
      <button class="btn btn-primary">Back</button>
    </router-link>
    <ListItem :userId="userId"></ListItem>
  </div>
</template>

<script>
    import ListItem from './ListItem'
    import { mapGetters } from 'vuex'
    export default {
      components: {
        ListItem
      },
      props: [
        'userId'
      ],
      computed: {
        ...mapGetters([
          'listUsers'
        ])
      },
      methods: {
        getUserNameById: function (id) {
          console.log(id)
          let list = this.listUsers
          let name = ''
          list.forEach((user) => {
            if (user.id === id) {
              name = user.name
            }
          })
          return name
        }
      }
    }
</script>
