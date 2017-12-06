import Vue from 'vue'
import Router from 'vue-router'

import Shop from '@/views/shop'

import ShopList from '@/views/shopList/shopList'
import Car from '@/views/shopCar/car'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      children: [
        {
          path: 'list',
          name: 'List',
          component: ShopList
        },
        {
          path: 'car',
          name: 'Car',
          component: Car
        }
      ]
    }
  ]
})
