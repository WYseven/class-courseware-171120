let express = require('express')
let app = express();

/*app.use(function (req,res,next){
	console.log('我执行了2');
	next();
})
app.use(function (req,res,next){
	console.log('我执行了3');
	next();
})*/

app.use(function (req,res,next){
	
	let query = req.query;

	if(req.path === '/login' || req.path==="/"){
		next()
		return;
	}

	if(query.userType === 'vip'){
		next();
	}else{
		res.redirect('/login')
	}

	
})

app.get('/',function (req,res){
	res.send('ok')
})

app.get('/about',function (req,res){
	res.send('about')
})
app.get('/miaov',function (req,res){
	res.send('miaov')
})

app.get('/login',function (req,res){
	res.send('login')
})

app.listen(8080)