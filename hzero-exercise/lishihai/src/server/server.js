// 引入express 
const express= require('express')

const Router = express.Router()
const eric = express()

Router.post('/login', function(req,res){
	//const {user, pwd} = req.body
	
	return res.json({code:0})
	
	
/* 	User.findOne({user,pwd:md5Pwd(pwd)},_filter,function(err,doc){
		if (!doc) {
			return res.json({code:1,msg:'用户名或者密码错误'})
		}
		res.cookie('userid', doc._id)
		return res.json({code:0,data:doc})
	}) */
})

eric.listen(9093,function(){
	console.log('启动了node express 监听端口是9090')
})






/* // 定义eric对象
const eric = express()

eric.get('/',function(require,response){
	
	response.send('<h1>你发如雪 凄美了 离别 我焚香感动了谁</h1>')
})

eric.get('/jsonData',function(require,response){
	response.json({name:'eric',age:'哦 拉扣 哦 拉扣 哦哦'})
})

eric.listen(9093,function(){
	console.log('启动了node express 监听端口是9090')
}) */











