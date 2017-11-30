<template>
  <div class="project">
    <div class="add-project-box">
      <i class='fa fa-plus-square'></i>
      <span>创建项目</span>
    </div>
    <div class="block-content">
      这是工作台页面
    </div>
  </div>
</template>
<script>
  export default {
    beforeRouteEnter: (to, from, next) => {
      // 判断有没有登录
      // isLogin: {login:true/false}
      let o = JSON.parse(localStorage.getItem('isLogin')) || {}
      if(o.login){
          next()
      }else{
        next('/login')
      }
    }
  }
</script>   
