<template>
  <div class='doc-right'>
    <h2>
    <a href="#base" id='base'>基础 </a>
    </h2>
    <hr/>
    <h3>
      <a  id="start" href="#start">开始</a>
    </h3>
    <div>
      开始相关的内容
    </div>
    <h3>
      <a id="dongtai" href="#dongtai">动态路由</a>
    </h3>
    <div>
      动态路由相关的内容
    </div>
    <h3>
      <a id="qiantaoluyou" href="#qiantaoluyou">嵌套路由</a>
    </h3>
    <div>
      嵌套路由相关的内容
    </div>
    <h2>
      <a href="#jinjie"  id='jinjie'>进阶</a>
    </h2>
    <hr/>
    <h3>
      <a  id="jinjie1" href="#jinjie1">导航钩子</a>
    </h3>
    <div>
     导航钩子相关的内容
    </div>
    <h3>
      <a  id="jinjie2" href="#jinjie2">路由元信息</a>
    </h3>
    <div>
      路由元信息相关的内容
    </div>
    <h3>
      <a  id="jinjie3" href="#jinjie3">过渡动效</a>
    </h3>
    <div>
     过渡动效相关的内容
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search',
    data () {
      return {}
    }
  }
</script>
<style>
.doc-right div{
  height: 500px;
}
h3 {
  margin-top: 20px;  
}
h2 a,h3 a {
  padding-top: 10px;
  position: relative;
}
</style>
