<template>
  <div>
    <a href="javascript:;">购物车</a>
    <!--根据class改变颜色-->
    <span class="cart-empty-num cart-num">
      <i>0</i>
    </span>
    <div class="nav-cart-wrapper">
      <div class="nav-cart-list">
        <div class="empty" v-show="!shops.length">
          <h3>购物车为空</h3>
          <p>您还没有选购任何商品，现在前往商城选购吧!</p>
        </div>
        <div class="full" v-show="shops.length">
          <div class="nav-cart-items">
            <ul>
              <li class="clear">
                <div class="cart-item js-cart-item cart-item-sell">
                  <div class="cart-item-inner">
                    <div class="item-thumb">
                      <img src="../assets/img/goods/1.png">
                    </div>
                    <div class="item-desc">
                      <div class="cart-cell">
                        <h4>
                          <a href="#/item/100027401">坚果 Pro 钢化玻璃保护膜（前屏用）</a>
                        </h4>
                        <p class="attrs">
                          <span>透明</span>
                        </p>
                        <h6>
                          <span class="price-icon">¥</span><span class="price-num">49</span><span class="item-num">x 1</span>
                        </h6>
                      </div>
                    </div>
                    <div class="del-btn">删除</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="nav-cart-total">
            <p>共 <strong class="ng-binding">1</strong> 件商品</p>
            <h5>合计：<span class="price-icon">¥</span><span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">49</span></h5>
            <h6>
              <a ng-href="http://www.smartisan.com/shop/#/cart" class="nav-cart-btn" href="http://www.smartisan.com/shop/#/cart">去购物车</a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      shops () {
        return this.$store.state.carShops
      }
    }
  }
</script>
