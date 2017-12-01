let express = require('express')
let app = express();

let ejs = require('ejs')

//数据和模板放在后端结合

// 设置模板渲染的函数
app.engine('html',ejs.renderFile)

// 设置模板文件的目录
app.set('views', './views')

app.set('view engine', 'html')

app.get('/',function (req,res){
	// 会查询数据库，拿数据
	let data = {
		title: '人物',
		list: [
			{
				name:'leo',
				age:30
			},
			{
				name:'momo',
				age:30
			}
		]
	}
	res.render('index',data)	
})



app.listen(8000)