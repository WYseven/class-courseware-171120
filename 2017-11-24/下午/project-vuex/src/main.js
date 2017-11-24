// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

// 把vuex作为vue的插件

Vue.use(Vuex)  // 在任何一个组件中都可以使用$store这个对象，在每一个组件的实例身上

// 先创建store

let store = new Vuex.Store({
  // 定义应用的状态
  state: {
    n: 0
  },
  mutations: {
    // 定义改变n的函数
    changeStateN (state,abc) {
      console.log(11111)
      state.n = abc;
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,  // 放vuex的实例
  template: '<App/>',
  components: { App }
})
