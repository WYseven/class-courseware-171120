<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.fade-enter {
    opacity: 0
  }
  .fade-enter-to {
    opacity: 1
  }
  .fade-enter-active,.fade-leave-active {
    transition: 1s;
  }
  .fade-leave {
    opacity: 1
  }
  .fade-leave-to {
    opacity: 0
  }
</style>
