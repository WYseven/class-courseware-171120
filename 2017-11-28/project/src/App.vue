<template>
  <div id="app">
    <ul>
      <li>
        <router-link exact to="/">home</router-link>
      </li>
      <li>
        <router-link to="/about">about</router-link>
      </li>
      <li>
        <router-link to="/user">user</router-link>
        <!-- <ul>
          <li>
            <router-link to="/user/vip">vip</router-link>
            <router-link :to="{name:'Vip'}">vip</router-link>
          </li>
           <li>
            <router-link :to="{path:'/user/comm'}">普通用户</router-link>
          </li>
          <li>
            <router-link to="/user/money">付费用户</router-link>
          </li>
        </ul> -->
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.router-link-active {
  background: red;
}
.miaov-style {
  background: green;
}

.router-link-exact-active {
  background: blue;
}

</style>
