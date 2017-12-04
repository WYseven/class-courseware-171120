<template>
  <div class="item">
    <div>
      <div class="item-img">
        <img 
          :alt="itemInfo.title" 
          :src="itemInfo.ali_image"
          style="opacity: 1;"
        >
      </div>
      <h6>{{itemInfo.title}}</h6>
      <h3 >{{itemInfo.sub_title}}</h3>
      <div class="params-colors">
        <ul class="colors-list">
          <li v-for="skuItem,i in sku_list">
            <a href="javascript:;" :class="{active: i === index}">
              <img :src="skuItem.image">
            </a>
            </li>
        </ul>
      </div>
      <div class="item-btns clearfix">
        <span class="item-gray-btn"><a href="javascript:;" target="_blank">查看详情</a> </span><span class="item-blue-btn">加入购物车 </span>
      </div>
      <div class="item-price clearfix">
        <i>¥</i><span>199.00</span>
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
    }
  }
</script>
