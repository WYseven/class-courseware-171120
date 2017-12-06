<template>
  <div id="main" class="hander-car">
			<div class="store-content">
				<div class="cart-box">
					<div class="title">
						<h2>购物清单</h2>
					</div>
					<div class="cart-inner">
						<div class="empty-label hide">
							<h3>您的购物车中还没有商品</h3>
							<a class="link" href="javascript:;">现在选购</a>
						</div>
						<div>
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
					<div class="cart-bottom-bg fix-bottom">
						<div class="cart-bar-operation">
							<div>
								<div class="choose-all js-choose-all">
									<span class="blue-checkbox-new checkbox-on"><a></a></span>
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
    components: {
      CarItem
    },
    computed : {
      // 从vuex中取出carShops
      carShops () {
        console.log(1235555555)
        console.log(this.$store.state.carShops)
        return this.$store.state.carShops
      }
    }
  }
</script>