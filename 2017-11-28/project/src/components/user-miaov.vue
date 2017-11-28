<template>
  <div>
    我是user页面
    <div>
      <router-link to="/user/123">leo</router-link>
      <router-link to="/user/456">momo</router-link>
    </div>
    <hr>

    <div>
      <p>用户名：{{u.name}}</p>
      <p>年龄：{{u.age}}</p>
    </div>

  </div>
</template>
<script>
// 组件的内部可以拿到路由信息对象
// 组件实例this.$route 路由信息对象
let  users = [
  {
    id:123,
    name:'leo',
    age:30
  },
  {
    id:456,
    name:'momo',
    age:28
  }
]
//生命周期
  export default {
    data () {
      return {
        u: {
          name: 'XXXX',
          age: 'XXXXX'
        }
      }
    },
    watch: {
      // 监控路由信息对象，为什么要监控？
      // 因为当在组件内修改path，组件不会重新渲染，目的是达到复用的效果
      // 在切换path实际上path已经变了，需要重新拿数据渲染页面
      // 监控一下$route的变化，再去拿数据
      '$route':function(){
         let id = this.$route.params.id;
        this.u = users.filter(item => item.id == id)[0]
      }
    },
    mounted () {
      console.log('挂在完成')
      // 动态路径的参数
     let id = this.$route.params.id;
     this.u = users.filter(item => item.id == id)[0]
    }
  }
</script>
