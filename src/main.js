// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import Vuex from 'vuex'
import Router from 'vue-router'
import router from './vue-router/router'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(Vuex)
/* eslint-disable no-new */

new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: {App}
}).$mount('#app')
