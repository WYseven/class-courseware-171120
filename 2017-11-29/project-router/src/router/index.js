import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


import Home from '@/components/home'
import Backend from '@/views/backend'
import workbench from '@/views/backend/work'
import project from '@/views/backend/project'
import doc from '@/views/backend/doc'

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    }
  ]
})

export default router
