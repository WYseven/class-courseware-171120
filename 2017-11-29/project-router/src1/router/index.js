import Vue from 'vue'
import Router from 'vue-router'

// @就是src目录，详细见/build/webpack.base.conf.js

import HelloWorld from '@/components/HelloWorld'
import User from '@/components/user'
import Nav from '@/components/nav'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user/:abc',  // 动态路径 id随着访问的不同路径不同而不同
      name: 'User',
      component: User
    },
    {
      path: '/nav',  // 动态路径 id随着访问的不同路径不同而不同
      name: 'Nav',
      component: Nav
    }
  ]
})

console.log(router)

export default router
