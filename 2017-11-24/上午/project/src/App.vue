<template>
  <div id="app">
     <section class="todoapp">
       <header-input @add="addTodoHandle"></header-input>
       <content-list :list="list" @change-all-checked="changeAll"></content-list>
       <footer-num></footer-num>
     </section>
  </div>
</template>

<script>
import HeaderInput from './components/header-input'
import ContentList from './components/content'
import footerNum from './components/footer-num'

// 数据
let data = [
  {
    id: Date.now() + Math.random(),
    title: '这是假数据1',
    checked: false
  },
  {
    id: Date.now() + Math.random(),
    title: '这是假数据2',
    checked: true
  }
]

export default {
  data () {
    return {
      list: data
    }
  },
  components: {
    HeaderInput,
    ContentList,
    footerNum
  },
  methods: {
    addTodoHandle (message) {
      console.log('父级',message)
      this.list.push({
        id: Math.random(),
        title: message,
        checked:false
      })
    },
    changeAll (bl) {
      this.list.forEach((item) => {
        item.checked = bl;
      })
    }
  }
}
</script>

<style>

</style>
