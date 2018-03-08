import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      meta: {
        title: '季度考核登录'
      },
      component: resolve => require(['../views/login'], resolve)
    },
    {
      path: '/1',
      name: 'myAssess',
      meta: {
        title: '填写个人工作总结(60分)'
      },
      component: resolve => require(['../views/myAssess'], resolve)
    },
    {
      path: '/2',
      name: 'staticFourth',
      meta: {
        title: '对自己工作进行评估(40分)'
      },
      component: resolve => require(['../views/staticFourth'], resolve)
    }
  ]
})
