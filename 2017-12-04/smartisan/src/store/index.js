import Vue from 'vue'
import Vuex from 'vuex'

import { 
  addCarCount, 
  getAddCarData 
} from '@/getData/method'

Vue.use(Vuex)

// 创建store

export default new Vuex.Store({
  state: {
    carShops: []  // 存放的是加入购物车的数据
  },
  mutations: {
    changeCarShops(state, paylod) {  // {shop: {}}
      paylod.shop.count = 1;  // 添加属性记录这个商品的数量
      state.carShops.push(paylod.shop);
    },
    replaceCarShops(state, paylod) {  // {shops: []}
      paylod.shops.forEach(function (item) {
        item.count = 1;
      })
      state.carShops = paylod.shops;
    },
    // 改变指定id的数据的count
    changeCarShopsCount(state, paylod) {  // {skuId,count}
      let shop = state.carShops.find(function (item) {
        return item.id == paylod.skuId
      })

      shop.count = paylod.count;
    }
  },
  actions: {
    // 添加到购物车的数量action

    // 当提交数据的时候，需要去判断一下，
    // 没有添加到购物车的，count为1，发送给后端,获取这个商品的数据
    // 已经存在购物中了，只需要给给当前的count+1并发给后端，不需要获取这个商品的数据

    addCarCountAction (store,payload) {  // {skuId,count}

      // 是否已经存在购物车的数据中
      let shop = store.state.carShops.find(function (item) {
        return item.id == payload.skuId
      })

      if (shop){
        let count = shop.count;
        
        payload.count = ++count;
      }else{
        payload.count  = 1;
      }

      addCarCount(payload).then((params) => {
        if(!shop){
          store.dispatch('getAddCarDataAction', { skuId: payload.skuId })
        }else{
          // 只需要改变count值
          store.commit('changeCarShopsCount', {
            skuId: payload.skuId,
            count: payload.count,
          })
        }
        
      })
    },
    // 那指定skuId的数据,可能有多个id
    getAddCarDataAction(store, payload) {
      getAddCarData(payload).then((params) => {
        let shop = params.data.data.list[0];
        store.commit('changeCarShops', {
          shop
        })
      })
    },
    // 一上来就要拿到加入购物车的商品的id
    getCarShopIds (store) {
      // 拿到加入购物车的商品的所有id
      addCarCount().then((params) => {
        let ids = params.data.idsList.map(function (item) {
          return item.skuId
        })
        
        getAddCarData({ skuId: ids.join(',')}).then((params) => {
          let list = params.data.data.list;
          store.commit('replaceCarShops', { shops: list})
        })

      })
    }
  }
})