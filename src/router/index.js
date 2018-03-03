import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['../views/login'], resolve)
    },
    {
      path: '/1',
      name: 'myAssess',
      component: resolve => require(['../views/myAssess'], resolve)
    },
    {
      path: '/2',
      name: 'staticFourth',
      component: resolve => require(['../views/staticFourth'], resolve)
    }
  ]
})
