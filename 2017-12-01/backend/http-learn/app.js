let http = require('http')
let fs = require('fs')

// http模块的作用：启动服务

// 创建服务
// 当有客户端访问，就会立马执行这个回调函数
let app = http.createServer(function (req,res){
	console.log('有人访问了');	
	// 要回应客户端
	// res.write('hello')
	//res.end('hello');

	// 发送页面过去，本质上就是读取指定的页面，读取的数据发送给客户端

	fs.readFile('./views/index.html',function (err,data){
		// 错误是第一个参数	error first
		if(err){
			console.log(err);
		}
		// 是一个buffer数据里面存的是二进制的形式，转成我们认识的字符
		res.end(data.toString())
	})
})

app.listen(3000)


