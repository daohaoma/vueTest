// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  VueResource  from 'vue-resource'
import ElementUI from 'element-ui'
import '../theme/index.css'
import '../src/assets/icon/iconfont.css'
import $ from 'jquery'
import axios from 'axios'
Vue.prototype.$http = axios

Vue.use(VueResource)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
