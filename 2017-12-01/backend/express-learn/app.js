let express = require('express')
let app = express();

// __dirname

//console.log(__dirname);  // 当前运行的文件所处在的绝对路径

// 配置模板的路径

app.set('views', __dirname+'/views/')

app.get('/',function (req,res){
	res.sendFile('index.html')	
})
app.get('/list',function (req,res){
	res.send('list')	
})
app.get('/about',function (req,res){
	res.sendFile(__dirname+'/views/about.html')	
})
app.get('*',function (req,res){
	res.send('404不存在')	
})

app.listen(3000)
