<template>
  <div>
    <input :value="inputText" @input="changeText" />
    <button @click="addItem">Add</button>
  </div>
</template>

<script>
  // import { changeText } from '../vuex/actions.js'
  export default {
    data: function () {
      return {inputText: this.$store.getters.inputText}
    },
    methods: {
      addItem: function () {
        this.$store.dispatch('addItem')
      },
      changeText: function (e) {
        this.$store.dispatch('changeText', {
          text: e.target.value
        })
      }
    }
  }
</script>
