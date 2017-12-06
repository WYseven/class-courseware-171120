<template>
  <div class="cart-top-items">
    <div class="cart-items">
      <div class="items-choose">
        <span class="blue-checkbox-new checkbox-on"><a></a></span>
      </div>
      <div class="items-thumb">
        <img :src="shopItem.shop_info.ali_image">
      </div>
      <div class="name hide-row" >
        <div class="name-table">
          <a href="javascript:;" target="_blank">{{shopItem.shop_info.title}}</a>
          <ul class="attribute">
            <li 
              :key="option.spec_value_id"
              v-for="option in shopItem.shop_info.spec_json">
              {{option.show_name}}
            </li>
          </ul>
        </div>
      </div>
      <div class="operation">
        <a class="items-delete-btn" ></a>
      </div>
      <div class="subtotal">¥ {{totalMoney}}.00</div>
      <div class="item-cols-num">
        <div class="select js-select-quantity">
          <span class="down down-disabled">-</span>
          <span class="num">{{shopItem.count}}</span>
          <span class="up">+</span>
          
        </div>
      </div>
      <div class="price">¥ {{shopItem.price}}.00</div>
    </div>
  </div>
</template>
<script>
// 尽量不要使用props去渲染在模板中
  export default {
    props: {
      shop: {
        type: Object
      }
    },
    computed: {
      shopItem () {
        return this.shop
      },
      //计算每一个商品自己的小计
      totalMoney () {
        return parseInt(this.shopItem.price) * parseInt(this.shopItem.count)
      }
    }
  }
</script>
