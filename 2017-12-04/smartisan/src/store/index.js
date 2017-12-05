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
    changeCarShops (state,paylod) {  // {shop: {}}
      state.carShops.push(paylod.shop);
    }
  },
  actions: {
    // 添加到购物车的数量action

    // 当提交数据的时候，需要去判断一下，
    // 没有添加到购物车的，count为1，发送给后端,获取这个商品的数据
    // 已经存在购物中了，只需要给给当前的count+1并发给后端，不需要获取这个商品的数据

    addCarCountAction (store,payload) {  // {skuId,count}
      addCarCount(payload).then((params) => {
        store.dispatch('getAddCarDataAction', { skuId: payload.skuId})
      })
    },
    // 那指定skuId的数据
    getAddCarDataAction(store, payload) { // {skuId}
      getAddCarData(payload).then((params) => {
        let shop = params.data.data.list[0];
        store.commit('changeCarShops', {
          shop
        })
      })
    }
  }
})