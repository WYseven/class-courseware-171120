<template>
  <div class="cart-top-items">
    <div class="cart-items">
      <div class="items-choose">
        <span 
          class="blue-checkbox-new"
          :class="{'checkbox-on': checked}"
           @mousedown.prevent
           @click="checkedHandle"
        >
          
        </span>
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
        <a class="items-delete-btn" @click="remove" ></a>
      </div>
      <div class="subtotal">¥ {{shopItem.price}}.00</div>
      <div class="item-cols-num">
        <div class="select js-select-quantity">
          <span 
            class="down" 
            :class="{'down-disabled': isMinus}"
            @click="minusHandle"
          >-</span>
          <span class="num">{{shopItem.count}}</span>
          <span 
            class="up" 
            :class="{'down-disabled': isAdd}"
            @click="addHandle"
          >+</span>
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
        return parseInt(this.shopItem.price) * parseInt(this.shopItem.price)
      },
      // 是否可继续添加
      isAdd () {
        return this.shopItem.count == this.shopItem.shop_info.limit_num
      },
      isMinus () {
        return this.shopItem.count == 1
      },
      // 依赖于外界的checked
      checked : {
        get () {
          return this.shop.checked
        },
        set (newValue) {
          this.shop.checked = newValue;
        }
      }
    },
    methods: {
      remove () {
        // 派发一个action，告诉要删除的skuId
         this.$store.dispatch('removeCountAction', {skuId: this.shopItem.id})
      },
      // 减
      minusHandle () {
        if(this.isMinus){  // 如果已经减到1了，不能再减了
          return;
        }
        this.$store.dispatch('addCarCountAction', 
          {
            skuId:this.shopItem.id,
            isMinus: true
          }
        )
      },
       // 加
      addHandle () {
        if(this.isAdd){  // 已经超过了购买的最大数，就不能买了
          return;
        }
        this.$store.dispatch('addCarCountAction', {skuId:this.shopItem.id})
      },
      // 切换选中不选中
      checkedHandle () {
        // 设置值，会触发computed中checked的set函数
        this.checked  = !this.checked
      }
    }
  }
</script>
