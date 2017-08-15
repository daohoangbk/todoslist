<template>
  <div class="todolist-component">
    <b><h1>TodosList Example</h1></b>
    <div class="row">
      <div class="col-md-3 col-xs-2"></div>
      <div class="col-md-6 col-xs-8">
        <FormAddItem></FormAddItem>    
      </div>
      <div class="col-md-3 col-xs-2"></div>
      <ListItem></ListItem>
    </div>
  </div>
</template>

<script>
  import FormAddItem from './FormAddItem'
  import ListItem from './ListItem'
  export default {
    components: {
      FormAddItem,
      ListItem
    }
  }
</script>
