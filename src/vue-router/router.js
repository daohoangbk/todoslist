import VueRouter from 'vue-router'
import Vue from 'vue'
import ListItem from '../components/ListItem'
import TodoListComponent from '../components/TodoListComponent'
import UserManagement from '../components/UserManagement'
import Home from '../components/Home'
import FormAddUser from '../components/FormAddUser'
import TaskOfUser from '../components/TaskOfUser'

Vue.use(VueRouter)

const routes = [
  {path: '/test', component: ListItem},
  {path: '/', component: Home},
  {path: '/to-do-list', component: TodoListComponent},
  {path: '/user-management', component: UserManagement},
  {path: '/form-add-user', component: FormAddUser},
  {path: '/form-edit-user', component: FormAddUser},
  {path: '/user/:userId/task', component: TaskOfUser, props: true}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
