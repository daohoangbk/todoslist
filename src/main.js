// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import Vuex from 'vuex'
// import('../node_modules/bootstrap/dist/js/bootstrap.min.js')
// import('../node_modules/jquery/dist/jquery.min.js')
Vue.config.productionTip = false

Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})
