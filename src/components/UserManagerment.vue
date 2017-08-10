<template>
  <div class="row">
    <header>
      <h1>User Managament</h1>
    </header>
    <main>
      <div class="row">
        <div class="col-md-2 col-xs-2"></div>
        <FormAddUser class="col-md-8 col-xs-8"></FormAddUser>
        <div class="col-md-2 col-xs-2"></div>
      </div>
      <h2>User Infomation</h2>
      <div class="row">
        <div class="col-md-2 col-xs-2"></div>
        <ListUser class="col-md-8 col-xs-8"></ListUser>
        <div class="col-md-2 col-xs-2"></div>
      </div>
    </main>
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
