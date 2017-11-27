import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    n: 0
  },
  mutations: {
    // payload的类型是一个对象，传参一般传的是对象，便于扩展
    changeN(state,payload){
      // 可以在这里对提交过来的值做一些过滤判断
      if (typeof payload.k !== 'number'){
        return;
      }
      state.n = payload.k
      // 只要提交一个mutation，就会有一条记录，记录记的时候，state值还没有改变
      /* setTimeout(() => {

        state.n = payload.k
      }, 1000); */
    }
  },
  actions: {
    changeNAction(store,payload){
      // 写关于改变状态n的异步操作
      setTimeout(() => {
        let o = {
          k: payload.k +1000
        }
        store.commit('changeN', o)
      }, 1000);
    }
  }
})

export default store
