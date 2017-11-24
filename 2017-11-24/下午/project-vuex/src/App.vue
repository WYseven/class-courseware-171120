<template>
  <div id="app">
   <p>data中的值 {{num}}</p><br>
    <p>computed中的值{{miaovN}}</p>
    <button @click="changeN">改变n</button>
    <hr>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/HelloWorld'
export default {
  data () {
    // data一上来会取值，如果不通过key值来改变，那么页面不会重新渲染
    // 即便是通过别的途径拿到的值，这个值发生变化，页面也不会渲染
    return {
      num: this.$store.state.n // 初始值是vuex中的n
    }
  },
  computed : {
    miaovN () {
      return this.$store.state.n
    }
  },
  methods: {
    changeN () {
      // 提交一个changeStateN这个mutation
      console.log(123)
      this.$store.state.n = 3000;
      //this.$store.commit('changeStateN',30)
    }
  },
  components: {
    Hello 
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
