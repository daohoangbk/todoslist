<template>
<div>
  <ol>
    <li v-for="(item, index) in listItem">
      <span
        :class="{text-decoration: {item.done? line-through : none}}"
        @click="changeDoneItem(index)">
        {{item.text}}
      </span>
    </li>
  </ol>
</div>
</template>

<script>
import {
  changeDoneItem,
  removeItem
} from '../vuex/actions'
export default {
  vuex: {
    getters: {
      listItem: (state) => state.todoslist
    },
    action: {
      changeDoneItem,
      removeItem
    }
  }
}
</script>
