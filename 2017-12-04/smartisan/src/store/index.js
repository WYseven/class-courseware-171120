import Vue from 'vue'
import Vuex from 'vuex'

import { 
  addCarCount, 
  getAddCarData,
  removeCounBySkuId
} from '@/getData/method'

Vue.use(Vuex)

// 创建store

export default new Vuex.Store({
  state: {
    carShops: []  // 存放的是加入购物车的数据
  },  
  // 对state中的数据进一步处理，需要写在getter中，类似于组件的computed
  getters: {
    // 进一步处理计算总数和总价值
    totalCountAndMoney (state) {

      /*state.carShops.reduce(function (total,item) {
        return {
          totalCount: total.totalCount + parseInt(item.count),
          totalMoney: parseInt(item.count) * parseInt(item.price)
        }
      },{
        totalCount: 0,
        totalMoney: 0
      })*/

      let total = {
        totalCount: 0,
        totalMoney: 0
      }
      // 计算总数和总价值
      state.carShops.forEach(function(item){
        total.totalCount += parseInt(item.count)
        total.totalMoney += parseInt(item.count) * parseInt(item.price)
      })

      return total
    }
  },
  mutations: {
    changeCarShops(state, paylod) {  // {shop: {}}
      paylod.shop.count = 1;  // 添加属性记录这个商品的数量
      state.carShops.push(paylod.shop);
    },
    replaceCarShops(state, paylod) {  // {shops: []}
      state.carShops = paylod.shops;
    },
    // 改变指定id的数据的count
    changeCarShopsCount(state, paylod) {  // {skuId,count}
      let shop = state.carShops.find(function (item) {
        return item.id == paylod.skuId
      })

      shop.count = paylod.count;
    },
    removeShopById(state,payload){  // {skuId}
      state.carShops = state.carShops.filter(item => item.id != payload.skuId)
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
        payload.count = payload.isMinus ? --count : ++count;
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
    // 一上来就要拿到加入购物车的商品的id以及数量
    getCarShopIds (store) {
      // 拿到加入购物车的商品的所有id
      addCarCount().then((params) => {
        let idsList = params.data.idsList
        // [{id,count}]
        let ids = params.data.idsList.map(function (item) {
          return item.skuId
        })
        
        getAddCarData({ skuId: ids.join(',')}).then((params) => {
          let list = params.data.data.list;
          // [{id,price,shop_info}]

          list.forEach(function (info) {
            let item = idsList.find(option => info.id == option.skuId)
            console.log(item)
            info.count = item.count;
          })

          store.commit('replaceCarShops', { shops: list})
        })

      })
    },
    // 删除指定id的商品
    removeCountAction (store, payload) {

      removeCounBySkuId(payload).then(function (params) {
        store.commit('removeShopById', payload)
      })
    }
  }
})