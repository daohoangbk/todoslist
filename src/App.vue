<template>
<div class="page-app">
  <router-link to="/test">go to /test</router-link>
  <router-link to="/">go to /</router-link>
  <router-view></router-view>
  <div class="header">
    <div class="title row">
      <div class="col-md-2 col-xs-2 image">
        <img src="https://vuejs.org/images/logo.png">
      </div>
      <div class="col-md-10 col-xs-10 title-text">
        <h2>VueJS & Vuex Tutorial</h2>
      </div>
    </div>

  </div>
  <div id="">
    <b><h1>TodosList Example</h1></b>
    <div class="row">
      <div class="col-md-3 col-xs-2"></div>
      <div class="col-md-6 col-xs-8">
        <FormAddItem></FormAddItem>
        <ListItem></ListItem>
      </div>
      <div class="col-md-3 col-xs-2"></div>
    </div>
  </div>

  <p style="text-align:center">------------------------------------------</p>
  <UserManagerment></UserManagerment>
  <div class="footer navbar navbar-default navbar-static-bottom">
    <p>A miniproject make by <a href="https://www.facebook.com/daohoang134" target="_blank">Hoang Dao</a></p>
  </div>
</div>


</template>

<script>
import FormAddItem from './components/FormAddItem'
import ListItem from './components/ListItem'
import UserManagerment from './components/UserManagerment'

export default {
  name: 'app',
  components: {
    FormAddItem,
    ListItem,
    UserManagerment
  }
}
</script>

<style src="./css/app.css">
</style>
