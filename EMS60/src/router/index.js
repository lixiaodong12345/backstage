import Vue from 'vue'
import Router from 'vue-router'
import UserElem from '@/components/common/useElem.vue'
import Login from '@/components/login/Login.vue'
import Home from '@/components/page/home.vue'
import User from '@/components/page/user/user.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'userElem',
      path: '/ele',
      component: UserElem
    },
    {
      name: 'login',
      path: '/login',
      component:Login
    },
    {
      name:'home',
      path:'/home',
      component:Home,
      children:[
        {path: '/user', component: User}
      ]
    }
  ]
})
