<template>
  <div>
    <input :value="inputText" @input="changeText"  placeholder="tada" />
    <button class="btn btn-primary btn-sm" @click="addItem">Add</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['inputText'])
    },
    methods: {
      ...mapActions([
        'addItem'
      ]),
      changeText: function (e) {
        this.$store.dispatch('changeText', {
          text: e.target.value
        })
      }
    }
  }
</script>
