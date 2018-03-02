// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//样式初始化和iconfont字体图标
import '../static/css/reset.css';
import '../static/css/iconfont.css';
import '../static/css/animate.css';
//引入axios请求
import axios from './axios/http';
Vue.prototype.$http = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})