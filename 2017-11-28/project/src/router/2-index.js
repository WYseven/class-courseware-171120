import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/home'
import About from '../components/about'
import User from '../components/user'
import NotFound from '../components/404'

// 在这写构造函数配置
let router = new VueRouter({
  linkActiveClass:'miaov-style',
  mode:'history',
  routes: [
    {
      path: '/home',
      name:'Home',  // 当前路由信息对象的名字
      component: Home
    },
    {
      path: '/about',
      name:'About',
      component: About
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '*',
      // component: NotFound  显示404
      // 重定向
      // redirect: '/home'
      /* redirect: {
        path: '/home',
        query: {
          a:1
        }
      } */
      /* redirect: {
        name: 'About'
      } */
      redirect: function (to) {  // 动态返回重定向目标
        // 路径是abc  => home
        // 路径是miaov => about
        // 其他的 => user
        console.log(to); // 访问一个路径的时候，产生的路由信息对象

        if (to.path === '/abc'){
          return '/home'
        }else if(to.path === '/miaov'){
          return {
            name:'About'
          }
        }else{
          return '/user'
        }
        
        
      }
    }
  ]
})

export default router