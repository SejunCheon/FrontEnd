import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Books from '@/components/Books.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Home
  },
  {
    path: '/books',
    component: Books
  },
  {
    path: '/books/:bookId',
    component: Books,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
