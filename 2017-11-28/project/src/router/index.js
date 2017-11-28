import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/home'
import About from '../components/about'
import User from '../components/user-miaov'
import NotFound from '../components/404'

// 在这写构造函数配置
let router = new VueRouter({
  linkActiveClass:'miaov-style',
  mode:'history',
  routes: [
    {
      path: '/',
      name:'Home',  // 当前路由信息对象的名字
      component: Home
    },
    {
      path: '/about',
      name:'About',
      component: About
    },
    {
      path: '/user/:id?',  // :就是动态路径 id就类似是变量一样，存访问路径的值 /user/123
      name: 'User',
      component: User
    }
  ]
})

export default router