<template>
  <div class="gallery">
    <div class="thumbnail">
      <ul>
        <li 
          @click="index = i"
          :class="{on: i === index}" 
          :key="i" 
          v-for="(item,i) in imgs">
            <img :src="item+'?x-oss-process=image/resize,w_54/quality,Q_90/format,webp'">
        </li>
      </ul>
    </div>
    <div class="thumb">
      <ul>
        <li class="on"><img :src="imgs[index]+'?x-oss-process=image/resize,w_440/quality,Q_90/format,webp'"></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        index: 0
      }
    },
    props: {
      imgs: {
        type: Array
      }
    }
  }
</script>