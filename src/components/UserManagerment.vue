<template>
  <div class="row viewoptions">
    <FormAddUser></FormAddUser>
    <ListUser></ListUser>
  </div>
</template>

<script>
  import FormAddUser from './components/FormAddUser'
  import ListUser from './components/ListUser'

  export default {
    components: {
      FormAddUser,
      ListUser
    }
  }
</script>
