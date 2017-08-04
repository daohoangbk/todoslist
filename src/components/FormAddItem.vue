<template>
  <div>
    <form @submit="addItem">
      <input :value="inputText" @input="changeText" placeholder="tada" />
      <button type="submit ">Add</button>
    </form>
  </div>
</template>

<script>
  // import { changeText } from '../vuex/actions.js'
  import { mapGetters } from 'vuex'

  export default {
    // data: function () {
    //   return {inputText: this.$store.getters.inputText}
    // },
    computed: {
      ...mapGetters(['inputText'])
    },
    methods: {
      addItem: function (e) {
        e.preventDefault()
        this.$store.dispatch('addItem')
      },
      changeText: function (e) {
        this.$store.dispatch('changeText', {
          text: e.target.value
        })
      }
    }
    // mounted: function () {
    //   inputText = ''
    // }
  }
</script>
