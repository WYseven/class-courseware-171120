<template>
  <div class="main">
    <div class="home-header">
      <img src="../assets/miaov.png" alt="">
      <div class="portrait" :class={portraitLogin:isLogin}>
        <router-link to="/login" tag="span">登录</router-link>
        <img  src="../assets/portrait.png" alt="">
      </div>

    </div>
    <div class="phrase">
      一起学习Vue-router
    </div>
    <div class="btns">
      <router-link to="/backend/project" tag="div" class=" trans">我的项目</router-link>
      <router-link to="/backend/doc" tag="div" class=" trans">我的文档</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        isLogin: false
      }
    }
  }
</script>
<style>

</style>
