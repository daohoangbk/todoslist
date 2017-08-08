<template>
  <div class="row viewoptions">
    <FormAddUser></FormAddUser>
    <ListUser></ListUser>
  </div>
</template>

<script>
  import FormAddUser from './FormAddUser'
  import ListUser from './ListUser'

  export default {
    components: {
      FormAddUser,
      ListUser
    }
  }
</script>
