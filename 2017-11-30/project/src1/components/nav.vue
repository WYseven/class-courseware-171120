<template>
  <div>
    <button @click="jumpLinkPush">跳转链接push</button>
    <button @click="jumpLinkReplace">跳转链接replace</button>
    <button @click="jumpLinkGo">跳转链接go</button>
  </div>
</template>
<script>
  export default {
    methods: {
      jumpLinkPush () {
        // 跳转链接
        console.log(this.$route)  // 路由信息对象
        console.log(this.$router)  // 路由的实例

        // push 就是在history记录中会记录一条访问的记录

        // this.$router.push('/')
        this.$router.push({
          // name:'HelloWorld'
          path: '/',
          query: {
            a:1
          }
        })

      },
      jumpLinkReplace () {
        // replace 替换当前访问的记录
        this.$router.replace({
          path: '/',
          query: {
            a:1
          }
        })
      },
      jumpLinkGo () {
        // go

        this.$router.go(-200)
      }
    }
  }
</script>
  