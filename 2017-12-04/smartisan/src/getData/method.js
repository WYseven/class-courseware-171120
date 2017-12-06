let Axios = require('axios');
// 获取数据的方法和url地址配置
let base = 'http://www.localhost:5000/api'

let urlMap = {
  'shop_list': '/shop_list',
  'count': '/count',
  'add_car': '/add_car',
  'remove_count': '/remove_count'
}

export function getShopListMethod() {
  return Axios.get(base + urlMap.shop_list)
}
export function addCarCount(obj={}) {
  return Axios.get(base + urlMap.count, {
    params: {
      skuId: obj.skuId,
      count: obj.count
    }
  })
}

export function getAddCarData(obj) {
  return Axios.get(base + urlMap.add_car, {
    params: {
      skuId: obj.skuId
    }
  })
}


export function removeCounBySkuId(obj) {  // {skuId}
  return Axios.get(base + urlMap.remove_count, {
    params: {
      skuId: obj.skuId
    }
  })
}





