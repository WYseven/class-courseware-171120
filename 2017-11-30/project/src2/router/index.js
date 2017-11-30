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
      children: [
        {
          path: 'workbench',
          name: 'workbench',
          component: workbench
        },
        {
          path: 'project',
          name: 'project',
          component: project
        },
        {
          path: 'doc',
          name: 'doc',
          component: doc
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

// 类似中间件，等这里处理完事之后，把主动权再交到下一个
router.beforeEach((to, from, next) => {
  console.log(to)  //  到哪里去
  console.log(from) // 从哪里来
  console.log('走这里了beforeEach')
  next();  // 如果想要继续往下走，必须调用next
})

/* router.beforeResolve(() => {

}) */

router.afterEach((to, from) => {
  console.log('已经渲染完了')
})

export default router
