import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/1',
      name: 'login',
      component: resolve => require(['../views/login'], resolve)
    },
    {
      path: '/2',
      name: 'myAssess',
      component: resolve => require(['../views/myAssess'], resolve)
    },
    {
      path: '/',
      name: 'staticFourth',
      component: resolve => require(['../views/staticFourth'], resolve)
    }
  ]
})
