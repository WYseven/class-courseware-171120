<template>
  <div id="app">
    <button @click="changeStateValue">修改状态的值</button>
    {{num}}
    <hr>
    <p>子组件</p>
    <Hello></Hello>
  </div>
</template>

<script>
// 组件中要用到vuex中的state中的值
import Hello from './components/HelloWorld'
export default {
  /* data () {
    return {
      num: this.$store.state.n // 定义的key值的初始值是从vuex中拿到
    }
  }, */
  data(){
    return {
      val: 0
    }
  },
  computed : {
    num () {
      return this.$store.state.n
    }
  },
  components: {
    Hello
  },
  methods: {
    changeStateValue () {
      // this.num = 10000; 只是改变了本组件的data中的值
      // this.$store.state.n = 10000;

      /* this.$store.commit('changeN',{
        k: ++this.val
      }) */

      // 派发一个action
      this.$store.dispatch('changeNAction',{
        k: ++this.val
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
