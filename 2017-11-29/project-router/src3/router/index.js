import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


import Home from '@/components/home'
import Backend from '@/views/backend'
import workbench from '@/views/backend/work'
import project from '@/views/backend/project'
import doc from '@/views/backend/doc'

import Login from '@/components/login'

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter (to,from,next) {
        console.log('路由配置中的beforeEnter')
        next()
      }
    },
    {
      path: '/backend',
      name: 'Backend',
      component: Backend,
      /* meta:{
        login: true
      }, */
      children: [
        {
          path: 'workbench',
          name: 'workbench',
          component: workbench,
          meta: {
            login: true
          }
        },
        {
          path: 'project',
          name: 'project',
          component: project,
          meta: {
            login: true
          }
        },
        {
          path: 'doc',
          name: 'doc',
          component: doc,
          meta: {
            login: false
          }
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})


router.beforeEach((to, from, next) => {
  /* 
    to.matched
      保存的是访问这个路径的所有的嵌套父级的路由信息对象
  */
  // 所有访问的组件都会执行这个钩子函数
  // 那些组件是需要登陆，那些不需要呢？

  // 访问的路径，是否需要登陆？
  
  if (to.matched.some(item => item.meta.login)){
    // 是否登录了

    let o = JSON.parse(localStorage.getItem('isLogin')) || {}

    if (o.login) {
      next()
    }else{
      next('/login')
    }
  }else{
    next();
  }


 
})

/* router.beforeResolve(() => {

}) */

router.afterEach((to, from) => {
  console.log('已经渲染完了')
})

export default router
