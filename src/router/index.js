import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/errs',
      components: {

      }
    },
    {
      path: '/',
      redirect: '/list2'
    },
    {
      path: '/list2',
      name: 'list2',
      meta: {
        auth: false
      },
      component: resolve => require(['../components/pages/list2/'], resolve),
      children: [
        {
          path: 'base1',
          meta: {auth: false},
          component: resolve => require(['../components/base/base1'], resolve)
        },
        {
          path: 'base2',
          meta: {auth: false},
          component: resolve => require(['../components/base/base2'], resolve)
        }
      ]

    },
    {
      path: '/list3',
      name: 'list3',
      meta: {
        auth: false
      },
      component: resolve => require(['../components/pages/list3/'], resolve)
    },
    {
      path: '/my',
      name: 'my',
      meta: {
        auth: false
      },
      component: resolve => require(['../components/pages/my/'], resolve),
      children: [{
        path: ':id',
        meta: {
          auth: false
        },
        component: resolve => require(['../components/top-list/'], resolve),
      }]
    },
    {
      path: '/',
      name: 'error',
      meta: {
        auth: false
      },
      component: resolve => require(['../components/pages/error/'], resolve)
    }

  ]
})
