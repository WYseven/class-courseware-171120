<template>
  <div id="main">
			<div class="sku-box store-content">
				<div class="sort-option">
					<ul class="line clear">
						<li><a href="javascript:;" class="active">综合排序</a></li>
						<li><a href="javascript:;" class="">销量排序</a></li>
						<li><a href="javascript:;" class="">价格低到高</a></li>
						<li><a href="javascript:;" class="">价格高到低</a></li>
					</ul>
				</div>
				<div class="gray-box">
					<div class="item-box">
            <shop-item 
              :key="item.id" 
              v-for="item in list" 
              :shop-item="item"
              @count="countHandle"
            ></shop-item>
					</div>
				</div>
			</div>
      <Modal v-model='visble' title="提示">
        <div class="confirm-msg">商品已达到最大可购买数量，无法继续添加</div>
        <Radio v-model="single">Radio</Radio>
        <DatePicker 
          type="daterange" 
          placement="bottom-end" placeholder="Select date" 
        style="width: 200px"></DatePicker>
      </Modal>
		</div>
</template>
<script>
  import {getShopListMethod} from '@/getData/method'
  import ShopItem from './shopItem.vue'

  export default {
    data () {
     return {
        list: [],
        visble:false,
        single: false
     }
    },
    components: {
      ShopItem
    },
    created () {
      getShopListMethod().then( (params) => {
       this.list = params.data.data.list
      })
    },
    methods: {
      countHandle () {
        this.visble = true;
      }
    }
  }
</script>
