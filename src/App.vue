<template>
<div class="page-app">
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
  <div id="app">
    <b><h1>TodosList Example</h1></b>
    <div class="row">
      <div class="col-md-3 col-xs-2"></div>
      <div class="col-md-6 col-xs-8">
        <FormAddItem></FormAddItem>
        <ListItemComponent></ListItemComponent>
      </div>
      <div class="col-md-3 col-xs-2"></div>
    </div>
  </div>

  <p style="text-align:center">------------------------------------------</p>
  <UserManagerment></UserManagerment>
  <ListItemComponent></ListItemComponent>
  <div class="footer navbar navbar-default navbar-static-bottom">
    <p>A miniproject make by <a href="https://www.facebook.com/daohoang134" target="_blank">Hoang Dao</a></p>
  </div>
</div>


</template>

<script>
import FormAddItem from './components/FormAddItem'
import ListItemComponent from './components/ListItemComponent'
import UserManagerment from './components/UserManagerment'

export default {
  name: 'app',
  components: {
    FormAddItem,
    ListItemComponent,
    UserManagerment
  }
}
</script>

<style>
.page-app {
}

#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
  min-height: 600px;
}

h2 {
  text-align: center;
  color: #2E8B57;
  margin-left: -100px;
}

h1 {
  text-align: center;
  color: #8B4726;
}

.title {
  background-color: darkgray;
  display: flex;
}

.title-text {
  width: 100%;
}

.image {
  width: 100px
}

input {
  padding: 10px;
}

img {
  width: 50px;
  height: 50px;
  margin: 8px 8px 8px 25px;
}

.footer {
  margin-top: 20px;
  padding: 8px;
  width: 100%;
  height: 20px;
  text-align: center;
  background-color: #B5B5B5;
}
.row {
  margin-left: 0px;
  margin-right: 0px;
}

</style>
