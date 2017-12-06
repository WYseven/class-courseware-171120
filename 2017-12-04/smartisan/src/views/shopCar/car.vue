<template>
  <div id="main" class="hander-car">
			<div class="store-content">
				<div class="cart-box">
					<div class="title">
						<h2>购物清单</h2>
					</div>
					<div class="cart-inner">
						<div :class="{hide: carShops.length}" class="empty-label">
							<h3>您的购物车中还没有商品</h3>
              <router-link  class="link" to='/shop/list'>现在选购</router-link>
						</div>
						<div v-show="carShops.length">
							<div class="cart-table-title">
								<span class="name">商品信息</span>
								<span class="operation">操作</span>
								<span class="subtotal">小计</span>
								<span class="num">数量</span>
								<span class="price">单价</span>
							</div>
							<div class="cart-table">
								<div class="cart-group">
									<!--购物列表-->
									<car-item 
                    :key="item.id"
                    v-for="item in carShops"
                    :shop="item"
                  ></car-item>
								</div>
							</div>
						</div>
					</div>
					<div class="cart-bottom-bg fix-bottom" v-show="carShops.length">
						<div class="cart-bar-operation">
							<div>
								<div class="choose-all js-choose-all">
									<span 
                    class="blue-checkbox-new"
                    :class="{'checkbox-on': isCheckedAll}"
                    @mousedown.prevent
                    @click="checkedAllHandle"
                  >
                  </span>
									全选
								</div>
								<div class="delete-choose-goods">删除选中的商品</div>
							</div>
						</div>
						<div class="shipping">
							<div class="shipping-box">
								<div class="shipping-total shipping-num">
									<h4 class="">
										已选择 <i>0</i> 件商品
									</h4>
									<h5>
										共计 <i >3</i> 件商品
									</h5>
								</div>
								<div class="shipping-total shipping-price">
									<h4 class="">
										应付总额：<span>￥</span><i >0</i> 
									</h4>
									<h5 class="shipping-tips">
										应付总额不含运费
									</h5>
									
								</div>
							</div>
							<span class="jianguo-blue-main-btn big-main-btn js-checkout disabled-btn"><a>现在结算</a></span>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>
<script>
import CarItem from './carItem'
  export default {
    data () {
      return {
        // isCheckedAll:true
      }
    },
    components: {
      CarItem
    },
    methods: {
      checkedAllHandle () {

        // 给计算属性赋值
        this.isCheckedAll = !this.isCheckedAll
      }
    },
    computed : {
      // 从vuex中取出carShops
      carShops () {

        // 在每一个数据上加一个标示，用来标示这个商品是选中的还是不选中
        let shops = this.$store.state.carShops

        shops.forEach((item) => {
          //item.checked = true;
          // 新添加的属性，要使用这种方式
          this.$set(item,"checked",true)
        })

        console.log(this)

        console.log(shops)

        return shops
      },
      isCheckedAll : {
        get () {
          // 只要有一个没被选中，返回就是false
          console.log('取isCheckedAll值的')
          let findItem = this.carShops.find(item => !item.checked)
          return !findItem
        },
        set (newValue) {  // 设置的值作为参数传过来
          this.carShops.forEach((item) => {
            // 一旦重新赋值，那么模板会重新渲染，就重新取isCheckedAll的值
            item.checked = newValue
          })
        }
      }
    }
  }
</script>