let Axios = require('axios');
// 获取数据的方法和url地址配置
let base = 'http://www.localhost:5000/api/'

let urlMap = {
  'shop_list': '/shop_list'
}

export function getShopListMethod () {
  return Axios.get(base + urlMap.shop_list)
}



