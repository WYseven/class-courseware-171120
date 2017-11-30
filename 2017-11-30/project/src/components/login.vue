<template>
  <div class="login">
    <div class="login-box">
      <h2>登录</h2>
      <form @submit.prevent='sendLogin' autocomplete="off">
        <div><input placeholder="请输入用户名" type="text" name="user" ref="userInput" /></div>
        <div><input placeholder="请输入密码" type="password" name="password" /></div>
        <div class="login-btn">
          <input type="submit" value="一键登入" />
        </div>
      </form>
      <div class="back-index">
        <router-link  to="/">首页>>></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {}
    },
    methods: {
      sendLogin () {
        // 登录

       // localStorage.setItem('isLogin', JSON.stringify({login:true}))
        localStorage.setItem('isLogin', '{"login":true}')

        // 取出来query中的字段？

      let r = this.$route.query.r;
       if(r){
         this.$router.replace({
          path: '/backend/'+r
        })
       }else{
         this.$router.replace({
          path: '/'
        })
       }

        /* this.$router.replace({
          path: '/'
        }) */

      }
    }
  }
</script>
<style>

</style>
