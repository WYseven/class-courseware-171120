const express = require('express');
const app = express();

app.use(function (req,res,next){
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   next();
})

let data = []
for( var i = 0; i < 1000; i++ ){
	data.push({
		id:Math.random(),
		title: (i+1)+'伪造数据'+Math.random()
	})
}

app.get('/info',function (req,res){
	data.sort(function (){
		return Math.random() - 0.5
	})
	res.send({
		code: 0,
		data: data.slice(0,50)
	})
})

app.listen(3000,function (){
	console.log('应用启动成功');
})