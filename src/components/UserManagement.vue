<template>
  <div class="row">
    <header>
      <h1>User Management</h1>
    </header>
    <main class="main">
      <div class="row">
        <div class="col-md-2 col-xs-2"></div>
        <ListUser class="col-md-8 col-xs-8"></ListUser>
        <div class="col-md-2 col-xs-2"></div>
      </div>
    </main>
  </div>
</template>

<script>
  import ListUser from './ListUser'

  export default {
    components: {
      ListUser
    }
  }
</script>
