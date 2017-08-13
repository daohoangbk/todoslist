import VueRouter from 'vue-router'
import Vue from 'vue'
import ListItem from '../components/ListItem'
import App from '../App'

Vue.use(VueRouter)

const routes = [
  {path: '/test', component: ListItem},
  {path: '/', component: App}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
