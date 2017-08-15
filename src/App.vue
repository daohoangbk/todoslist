<template>
  <div class="page-app" id="app">
    <header>
      <div class="title row">
        <router-link to="/">
          <div class="col-md-2 col-xs-2 image">
            <img src="https://vuejs.org/images/logo.png">
          </div>
        </router-link>
        <div class="col-md-10 col-xs-10 title-text">
          <h2>VueJS & Vuex Tutorial</h2>
        </div>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer class="footer navbar navbar-default navbar-static-bottom">
      <p>A miniproject make by <a href="https://www.facebook.com/daohoang134" target="_blank">Hoang Dao</a></p>
    </footer>
  </div>
</template>

<script>
  import FormAddItem from './components/FormAddItem'
  import ListItem from './components/ListItem'

  export default {
    name: 'app',
    components: {
      FormAddItem,
      ListItem
    }
  }
</script>

<style src="./css/app.css">
</style>
