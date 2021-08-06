import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/AddMemo.vue'
import Read from '../views/ReadMemo.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/',  component: Home },
  { path: '/add', name: 'Add', component: Add, meta:{requiresAuth:true} },
  { path: '/memos/:memoId', name: 'Read', component: Read, meta:{requiresAuth:true} },
  { path: '/signin', name: 'Signin', component: Signin },
  { path: '/signup', name: 'Signup', component: Signup },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  if(to.matched.some((record)=>record.meta.requiresAuth)){
    if(localStorage.getItem('accessToken')==null){
    alert('Signin please')
    next('/signin')
    }
  }else{
    next();
  }  
});

export default router
