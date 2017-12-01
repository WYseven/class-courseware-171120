let express = require('express')
let app = express();

var bodyParser = require('body-parser')

app.use(function (req,res,next){
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   next();
})

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))


/*
	get请求的数据
		req.query
	post数据
		用到一个模块
		body-parser
			npm i body-parser --save
*/

app.get('/api/ok',function (req,res){
	console.log(req.query);
	res.send('ok')
})


app.post('/api/list',function (req,res){
	console.log(req.body);
	res.send('list')
})

app.listen(8080)