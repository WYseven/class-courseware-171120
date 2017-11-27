<template>
  <div id="app">
    <button @click="getDataMethod">请求数据</button>
    <ul>
      <li v-for="item in list">
        <p>id:{{item.id}}</p>
        <p>标题为:{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// 组件中要用到vuex中的state中的值
import Hello from './components/HelloWorld'
export default {
  computed: {
    list () {
      return this.$store.state.list
    }
  },
  methods: {
    getDataMethod () {
      this.$store.dispatch('getDataAction')
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
