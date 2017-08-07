<template>
<div class="formadditem">
  <div class="form-group">
    <input class="form-control" :value="inputText" @input="changeText" placeholder="Insert task-name..." />
  </div>
  <button class="btn btn-primary btn-lg btn-add" @click="addItem">Add</button>
</div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

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

<style>
input {
  margin-right: 10px;
}
.btn-add {
  width: 120px;
  margin: 10px 0px 20px 0px;
}

.formadditem {
  text-align: center;
  margin: 20px;
}

</style>
