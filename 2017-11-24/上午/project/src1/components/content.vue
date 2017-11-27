<template>
  <section class="main">
    <input class="toggle-all" type="checkbox" v-model="isAllChecked" />
    <ul class="todo-list">
        <li v-for="item in list">
            <div class="view">
                <input class="toggle" type="checkbox" v-model="item.checked" />
                <label>{{item.title}}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" />
        </li>
    </ul>
</section>
</template>
<script>
  export default {
    props: ['list'],
    computed: {
      len () {
        return this.list.length;
      },
      filterChecked () {
        return this.list.filter((item) => item.checked)
      },
      isAllChecked: {
        get() {
          return this.filterChecked.length === this.len;
        },
        set (newValue) {
          this.$emit('change-all-checked', newValue)
        }
      }
    }
  }
</script>
