import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/list2'
    },
    {
      path: '/list2',
      name: 'list2',
      component: resolve => require(['../components/pages/list2/'], resolve)
    },
    {
      path: '/list3',
      name: 'list3',
      component: resolve => require(['../components/pages/list3/'], resolve)
    },
    {
      path: '/my',
      name: 'my',
      component: resolve => require(['../components/pages/my/'], resolve)
    },
    {
      path: '*',
      name: 'error',
      component: resolve => require(['../components/pages/error/'], resolve)
    }

  ]
})
