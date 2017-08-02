<template>
  <div>
    <input v-bind:inputText="inputText" @input="changeText()" />
    <button @click="addItem()">Add</button>
  </div>
</template>

<script>
  import { addItem, changeText } from '../vuex/actions.js'
  export default {
    vuex: {
      getters: {
        inputText: '(state) => state.inputText'
      },
      actions: {
        addItem,
        changeText
      }
    }
  }
</script>
