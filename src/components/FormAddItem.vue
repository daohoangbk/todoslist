<template>
<div>
  <div class="form-add-item form-inline">
    <div class="form-group">
      <input class="form-control" :value="inputText" @input="changeText" placeholder="Insert task name..." />
      <select class="form-control" v-model="userId">
        <option>Select user</option>
        <option v-for="user in listUsers" :value="user.id">{{user.name}}</option>
      </select>
    </div><br>
    <button class="btn btn-primary btn-lg btn-add" @click="addItem">Add</button>
  </div>
</div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  data: function () {
    return {
      userId: -1
    }
  },
  computed: {
    ...mapGetters([
      'inputText',
      'listUsers'
    ])
  },
  methods: {
    ...mapActions([]),
    changeText: function (e) {
      this.$store.dispatch('changeText', {
        text: e.target.value
      })
    },
    addItem: function () {
      if (this.inputText !== '') {
        this.$store.dispatch('addItem', {
          id: this.userId
        })
        this.userId = -1
      } else {
        alert('Empty input!!')
      }
    }
  }
}
</script>
