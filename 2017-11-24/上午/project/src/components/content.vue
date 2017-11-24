<template>
  <section class="main">
    <input class="toggle-all" type="checkbox" />
    <ul class="todo-list">
        <li v-for="item in list">
            <div class="view">
                <input class="toggle" type="checkbox" />
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
    props: ['list']
  }
</script>
