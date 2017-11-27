<template>
  <div class="hello">
    {{helloNum}}
  </div>
</template>

<script>
export default {
  /* data () {
    return {
      helloNum: this.$store.state.n
    }
  } */
  computed: {
    helloNum () {
      return this.$store.state.n
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
