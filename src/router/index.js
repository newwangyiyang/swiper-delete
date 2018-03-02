import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/1',
      name: 'login',
      component: resolve => require(['../views/login'], resolve)
    },
    {
      path: '/',
      name: 'myAssess',
      component: resolve => require(['../views/myAssess'], resolve)
    }
  ]
})
