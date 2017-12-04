<template>
  <div class="item">
    <div>
      <div class="item-img">
          <!-- :src="itemInfo.ali_image" -->
        <img 
          :alt="itemInfo.title" 
          src="../../assets/1.jpg"
          style="opacity: 1;"
        >
      </div>
      <h6>{{itemInfo.title}}</h6>
      <h3 >{{itemInfo.sub_title}}</h3>
      <div class="params-colors">
        <ul class="colors-list">
          <li v-for="skuItem,i in sku_list" @mouseenter="index=i">
            <a href="javascript:;" :class="{active: i === index}">
              <img :src="skuItem.image">
            </a>
          </li>
        </ul>
      </div>
      <div class="item-btns clearfix">
        <span class="item-gray-btn">
          <a href="javascript:;" target="_blank">查看详情</a> 
        </span>
        <span 
          class="item-blue-btn" 
          v-if="itemInfo.direct_to_cart"
          @click="addCar"
        >加入购物车 </span>
      </div>
      <div class="item-price clearfix">
        <i>¥</i><span>{{itemInfo.price}}</span>
      </div>
      <div class="discount-icon">false</div>
      <div class="item-cover">
        <a href="javascript:;" target="_blank"></a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return  {
        index: 0
      }
    },
    computed : {
      itemInfo () {
        // 拿到分类中指定下标的商品数据，默认是第一个
        return this.shopItem.sku_list[this.index]
      },
      sku_list () {
        return this.shopItem.sku_list
      }
    },
    props: {
      shopItem : {
        type: Object
      }
    },
    methods: {
      addCar () {  // 添加购物车
        // 拿到要添加到购物车的id
        let skuId = this.itemInfo.sku_id
        // 发请求？？？？今天的任务是这个发请求

      }
    }
  }
</script>
