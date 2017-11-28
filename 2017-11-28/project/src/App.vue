<template>
  <div id="app">
    <ul>
      <li>
        <a href="/">home</a>
        <router-link tag='p' to="/">home</router-link>
      </li>
      <li>
        <a href="/about">about</a>
        <router-link to="/about">about</router-link>
      </li>
    </ul>
    <p>下面这个标签是vue-router提供的，告诉匹配到的路径，把组件应该渲染在这位置</p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
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
