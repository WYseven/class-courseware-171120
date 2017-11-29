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
    },
    beforeRouteEnter (to,from,next) {
      console.log('组件内的钩子：beforeRouteEnter')
      console.log(this)
      /* 
        // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      */
      next(function(vm){  // 通过next的回调函数拿到当前组件的实例
        console.log(vm)
      });
    },
    beforeRouteLeave (to,from,next) {
      console.log('我要离开这个组件了')
      if(true){
        next()
      }
    },
    beforeCreate(){
      console.log('beforeCreate')
    }
  }
</script>
<style>

</style>
