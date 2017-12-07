<template>
  <div id="main">
			<div class="store-content item">
				<div class="item-box">
					<div class="gallery-wrapper">
						<div class="gallery">
							<div class="thumbnail">
								<!-- <ul>
									<li class="on"><img src="./img/goods/ss1.jpg"></li>
									<li><img src="./img/goods/ss2.jpg"></li>
									<li><img src="./img/goods/ss3.jpg"></li>
									<li><img src="./img/goods/ss4.jpg"></li>
									<li><img src="./img/goods/ss5.jpg"></li>
								</ul> -->
							</div>
							<div class="thumb">
								<!-- <ul>
									<li class="on"><img src="./img/goods/b1.png"></li>
									<li><img src="./img/goods/b1.png"></li>
									<li><img src="./img/goods/b1.png"></li>
									<li><img src="./img/goods/b1.png"></li>
									<li><img src="./img/goods/b1.png"></li>
								</ul> -->
							</div>
						</div>
					</div>
					<div class="banner">
						<div class="sku-custom-title">
							<div class="params-price">
								<span><em>¥</em><i>199</i></span>
							</div>
							<div class="params-info">
								<h4>Smartisan 快充移动电源 10000mAh</h4>
								<h6>10000mAh 双向快充、轻盈便携、高标准安全保护</h6>
							</div>
						</div>
						<div class="sku-dynamic-params-panel">
							<div class="sku-dynamic-params clear">
								<span class="params-name">颜色</span>
								<ul class="params-colors">
									<li class="cur">
										<a><img src="http://img01.smartisanos.cn/attr/v2/1000299/B37F37544921114CEF1EC01ED4DF44E4/20X20.jpg"></a>
									</li>
								</ul>
							</div>
							<div class="sku-dynamic-params clear">
								<div class="params-name">数量</div>
								<div class="params-detail clear">
									<div class="item-num js-select-quantity">
										<span class="down down-disabled">-</span>
										<span class="num">1</span>
										<span class="up up-disabled">+</span>
									</div>
								</div>
							</div>
						</div>
						<div class="sku-status">
							<div class="cart-operation-wrapper clearfix">
								<span class="blue-title-btn js-add-cart">
                  <a>加入购物车</a>
                </span>
								<span class="gray-title-btn"><a>现在购买</a></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>
<script>
import {getShopDetailsById} from '@/getData/method'
  export default {
    created () {
      let id = this.$route.query.id;
      getShopDetailsById({id}).then((params) => {
        console.log(params.data)
      })
    }
  }
</script>
