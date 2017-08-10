<template>
  <div>
    <ListItem :userId="userId"></ListItem>
    <ViewOptions></ViewOptions>
  </div>
</template>

<script>
  import ViewOptions from './ViewOptions'
  import ListItem from './ListItem'
  export default {
    props: [
      'userId'
    ],
    components: {
      ViewOptions,
      ListItem
    }
  }
</script>
