let express = require('express');
let app = express();
//设置静态文件
app.use(express.static('static'));
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
 
let user = require("./router/user");
app.use('/user',user);

app.listen('8080',function(){
	console.log("监听成功，地址为http://127.0.0.1:8080")
});
