<template>
  <div id="main" v-if='shopDetailList.shop_info' >
			<div class="store-content item">
				<div class="item-box">
					<div class="gallery-wrapper">
						<tab-img 
              :imgs="shopDetailList.shop_info.ali_images">
            </tab-img>
					</div>
					<div class="banner">
						<div class="sku-custom-title">
							<div class="params-price">
								<span><em>¥</em><i>{{shopDetailList.price}}</i></span>
							</div>
							<div class="params-info">
								<h4>{{shopDetailList.shop_info.title}}</h4>
								<h6>{{shopDetailList.shop_info.sub_title}}</h6>
							</div>
						</div>
						<div class="sku-dynamic-params-panel">
							<div 
                :key="spec.spec_id"
                v-for="spec in shopDetailList.spec_v2" 
                class="sku-dynamic-params clear"
              >
								<span class="params-name">{{spec.spec_name}}</span>
								<ul 
                  :class="{'params-colors': spec.spec_id == 1,'params-normal': spec.spec_id != 1}"
                >
									<li 
                    :class="{'cur': shopDetailList.attr_info[spec.spec_id].spec_value_id == values.id}" 
                    :key="values.id"
                    v-for="values in spec.spec_values"
                  >
										<a v-if="spec.spec_id == 1"><img :src="values.image"></a>
                    <a v-if="spec.spec_id != 1">
                      <span>{{values.show_name}}</span>
                    </a>
									</li>
								</ul>
							</div>
							<div class="sku-dynamic-params clear">
								<div class="params-name">数量</div>
								<div class="params-detail clear">
									<div class="item-num js-select-quantity">
										<span @click="minusHandle" class="down" :class='{"down-disabled": num == 1}'>-</span>
										<span class="num">{{num}}</span>
										<span @click="addHandle" class="up" :class='{"down-disabled": num == 5}'>+</span>
									</div>
								</div>
							</div>
						</div>
						<div class="sku-status">
							<div class="cart-operation-wrapper clearfix">
								<span @click="addCar" class="blue-title-btn js-add-cart">
                  <a>加入购物车</a>
                </span>
								<span class="gray-title-btn"><a>现在购买</a></span>
							</div>
						</div>
					</div>
				</div>
			</div>
      <Modal v-model='visble'>
        <div class="confirm-msg">商品已达到最大可购买数量，无法继续添加</div>
      </Modal>
		</div>
</template>
<script>
import {getShopDetailsById} from '@/getData/method'
import TabImg from './tabImg'
import Modal from '@/components/modal'
  export default {
    data () {
      return {
        //没问题：shopDetailList.shop_info
        // 有问题：shopDetailList.shop_info.ali_imgs
        shopDetailList: {},  // 一上来数据是空的，所以找两层会报错
        num: 1,
        visble: false
      }
    },
    components: {
      TabImg,
      Modal
    },
    created () {
      let id = this.$route.query.id;
      getShopDetailsById({id}).then((params) => {
        // 从后端拿数据
        this.shopDetailList = params.data.data
      })
    },
    methods: {
      minusHandle () {
        if(this.num == 1) return;
        this.num--
      },
      addHandle(){
        if(this.num == 5) return;
        this.num++
      },
      addCar () {
        let skuId = this.shopDetailList.id;

        // 如果购物车中没有这个商品，就发送的count为this.num
        // 购物车中已经存在了，加减的商品数量和购物车中数量的和是否超过了购买的最大数
        // 超过：提提醒不能购买；没有超过，count就为加减的数量和购物车的和

        let carShops = this.$store.state.carShops;

         let item = carShops.find(item => item.id == skuId)
        let count = this.num
         if(item){  // 已经存在购物车
         console.log(item.count + count)
            if(parseInt(item.count) + parseInt(count) > 5){
               this.visble = true;
              return
            }else{
              count = parseInt(item.count) + parseInt(count)
            }
         }

        this.$store.dispatch('addCarCountAction', {skuId,count:count})
      }
    }
  }
</script>

<style lang="css">
.params-normal {
    float: left;
    line-height: 36px;
    margin: -10px 0 0 -10px;
    width: 402px;
}
.params-normal>li {
    float: left;
    margin: 10px 0 0 10px;
}
.params-normal>li.cur a {
    border: 1px solid #999;
    border: 0 solid rgba(226,226,226,1);
    box-shadow: inset 0 0 0 2px #B2B2B2;
}
.params-normal>li a {
    display: block;
    min-width: 16px;
    padding: 0 10px;
    text-align: center;
    color: #757575;
    border: 1px solid #dbdbdb;
    border: 0 solid rgba(226,226,226,1);
    border-radius: 3px;
    box-shadow: inset 0 0 0 1px #dbdbdb;
}
.params-normal>li.disable a {
	cursor: not-allowed;
  opacity: .6;
}
</style>
