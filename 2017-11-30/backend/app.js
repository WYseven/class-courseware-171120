const request = require('request')

const express = require('express')
const app = express();

app.use(function (req,res,next){
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   next();
})

app.get('/list',function (req,res){
	let url = 'https://www.smartisan.com/product/spus?page_size=20&category_id=60&page=1&sort=sort'

	request({
		url: url,
		gzip:true
	},function (err,reponse,body){
		//err 错误信息
		// 	reponse 响应头
		// body响应的数据

		res.send(body);
	})	
})

app.listen(3000)


