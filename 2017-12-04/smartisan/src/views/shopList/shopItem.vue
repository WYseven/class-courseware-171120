<template>
  <div class="item">
    <div>
      <div class="item-img">
          <!-- 
            :src="itemInfo.ali_image" 
            src="../../assets/1.jpg"
          -->
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
import {addCarCount,getAddCarData} from '@/getData/method'
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
      // 已经购买了商品，告诉后端数量了，第二次在发送的时候，
      // 只需要发送购买的数量，就没必要再获取商品的数据了
        /* addCarCount({skuId,count:1})
        .then( (params) => {
            getAddCarData({skuId}).then((params2) => {
              let shop = params2.data.data.list[0];
            console.log(shop)
              this.$store.commit('changeCarShops', {
                shop
              })

            })
            // console.log(params.data)
        }) */

        this.$store.dispatch('addCarCountAction', {skuId})

      }
    }
  }
</script>
