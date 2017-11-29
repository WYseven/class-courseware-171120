<template>
  <div>
    我是user页面，用来展示人物信息的
    <hr>
    <!-- <router-link to="/user/123">leo</router-link>
    <router-link to="/user/456">momo</router-link>
    <router-link to="/user/789">zhong</router-link>
    <router-link to="/user/11111111">duoduo</router-link>
    <router-link to="/user/5555555555">zhipeng</router-link> -->
    <router-link 
      :key='item.id'
      v-for="item in users" 
      :to="{path: '/user/'+item.id}"
    >{{item.name}}</router-link>
    <hr>
    <p>这里展示选中人的信息</p>
    <div>

    </div>
  </div>
</template>
<script>
  let data = [
      {
        id: 123,
        name: 'leo',
        age:30
      },
      {
        id: 456,
        name: 'momo',
        age:30
      },
      {
        id: 789,
        name: 'duoduo',
        age:30
      }
  ]
  export default {
    data () {
      return {
        users: data
      }
    },
    watch: {
      // 写上要监控的当前这个实例身上的属性
      '$route':function (){  // 当属性的值发生变化，就会执行后面的函数
        console.log(this.$route.params.abc)
      }
    },
    mounted () {
      console.log(this.$route.params.abc)
      console.log(this.users)
      console.log('挂载完成')
      let abc = this.$route.params.abc;
      if(abc){

      }else{
        
      }
    }
  }
</script>
  