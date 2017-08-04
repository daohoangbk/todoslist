<template>
  <div id="app">
    <FormAddItem></FormAddItem>
    <ListItem></ListItem>
    <ViewOptions></ViewOptions>
  </div>
</template>

<script>
import FormAddItem from './components/FormAddItem'
import ListItem from './components/ListItem'
import ViewOptions from './components/ViewOptions'

export default {
  name: 'app',
  components: {
    FormAddItem,
    ListItem,
    ViewOptions
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
