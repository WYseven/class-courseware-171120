const express = require('express');
const app = express();

app.use(function (req,res,next){
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   next();
})

/*
	请求方式：
		get
		post

	request  请求对象，保存的请求相关的信息
	response 响应对象，保存相应的方法

	拿到get数据，request有一个属性，query
		request.query就拿到get请求的数据
*/

app.get('/user',function (req,res){
	console.log(req.query);
	// 取数据库查询
	setTimeout(function (){
		res.send({
			name:'leo'
		})	
	},1000)
})
app.post('/adress',function (req,res){
	setTimeout(function (){
		res.send({
			adress:'北京'
		})	
	},2000)
})

app.get('/shop',function (req,res){
	res.send({
		shop:'一件商品'
	})
})

app.listen(3001,'192.168.2.75',function (){
	console.log('应用启动成功');	
})