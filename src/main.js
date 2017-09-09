// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import components from 'components'
Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase())
  Vue.component(`v${name}`, components[key])
})
require('./static/jquery-2.2.3.min.js')
import 'common/css/base.css'
import 'common/css/reset.css'
import 'common/js/config.js'

// 初始化axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
