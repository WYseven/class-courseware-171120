import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/home'
import About from '../components/about'
import User from '../components/user'
import NotFound from '../components/404'

import Vip from '../components/vip'
import Money from '../components/money'
import Comm from '../components/comm'

// 在这写构造函数配置
let router = new VueRouter({
  linkActiveClass:'miaov-style',
  //linkExactActiveClass: 'custom-style',
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
      path: '/user',
      name: 'User',
      component: User,
      children: [   // 子路由
        {
          path: 'vip',   
          name: 'Vip',   
          component: Vip
        },
        {
          path: 'comm',
          name: 'Comm',
          component: Comm
        },
        {
          path: 'money',
          name: 'Money',
          component: Money
        },{
          path: '*',
          redirect: {
            name:'Vip'
          }
        }
      ]
    }
    /* {
      path: '*',
      redirect: function (to) {  
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
    } */
  ]
})

export default router