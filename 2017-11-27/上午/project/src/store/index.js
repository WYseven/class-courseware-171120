import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    changeList(state,payload) {  // {list:[]}
      state.list = payload.list
    }
  },
  actions: {
    getDataAction(store){
        // 发送请求
      Axios.get('http://localhost:3000/info').then((params) => {
        console.log(params.data.data)
        store.commit('changeList',{
          list: params.data.data
        })
      })
    }
  }
})

export default store