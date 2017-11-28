import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/home'
import About from '../components/about'

// 在这写配置
let router = new VueRouter({
  mode:'history',
  routes: [   // 配置路由
    { // 每一对象都是路由信息
      path: '/',
      component: Home
    },
    { 
      path: '/about',
      component: About
    }
  ]
})

export default router