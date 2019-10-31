import Vue from 'vue'
import Router from 'vue-router'
import UserElem from '@/components/common/useElem.vue'
import Login from '@/components/login/Login.vue'

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
    }
  ]
})
