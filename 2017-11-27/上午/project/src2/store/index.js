import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    changeList (state, payload) { // {list:[]}

      state.list = payload.list;
    }
  },
  actions: {
    getDataAction (store) {
      Axios.get('http://192.168.2.75:3000/info')
      .then(function (params) {  // 当请求成功之后，会触发then的第一个函数
        console.log(params.data.data)
        store.commit('changeList', {
          list: params.data.data
        })
      })
     // store.commit('changeList')
    }
  }
})

export default store
