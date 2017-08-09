<template>
  <div>
    <div class="formadditem form-inline">
      <div class="form-group">
        <input class="form-control" :value="inputText" @input="changeText" placeholder="Insert task name..." />
        <select class="form-control" v-model="userId">
          <option v-for="(user, index) in listUsers" :value="user.id">{{user.name}}</option>
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
    ...mapActions([
    ]),
    changeText: function (e) {
      this.$store.dispatch('changeText', {
        text: e.target.value
      })
    },
    addItem: function () {
      this.$store.dispatch('addItem', {
        id: this.userId
      })
      this.userId = -1
    }
  }
}
</script>

<style>
input {
  margin-right: 10px;
  width: 100%;
}
.btn-add {
  width: 120px;
  margin: 10px 0px 20px 0px;
}

.formadditem {
  text-align: center;
  margin: 20px;
}
.form-group {
  width: 100%;
  padding: 0px;
}

</style>
