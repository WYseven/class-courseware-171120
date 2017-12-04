import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建store

export default new Vuex.Store({
  state: {
    carShops: []  // 存放的是加入购物车的数据
  }
})