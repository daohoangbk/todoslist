<template>
  <div id="app">
    <FormAddItem></FormAddItem>
  </div>
</template>

<script>
import FormAddItem from './components/FormAddItem'

export default {
  name: 'app',
  components: {
    FormAddItem
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
