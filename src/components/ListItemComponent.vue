<template>
  <div>
    <ListItem></ListItem>
    <ViewOptions></ViewOptions>
  </div>
</template>

<script>
  import ViewOptions from './ViewOptions'
  import ListItem from './ListItem'
  export default {
    components: {
      ViewOptions,
      ListItem
    }
  }
</script>
