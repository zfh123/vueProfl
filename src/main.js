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



// 权限过滤
router.beforeEach(({ meta, path, title }, from, next) => {
  var { auth = true } = meta
  if (title) {
    document.title = title
  }
  var user = JSON.parse(localStorage.getItem('user') || '{}')
  // 没有登录 和绑定手机号的用户 前往绑定手机界面
  var isLogin = Boolean(user.userName && user.bundingMobile)
  if (auth && !isLogin && path !== '/login') {
    next({ path: '/login' })
    // next()
  } else {
    next()
  }
})
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
