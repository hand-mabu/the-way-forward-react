var express = require("express");
var router = express.Router();
var mysql = require('mysql');
var pageSize = 5;
//创建一个connection 
var connection = mysql.createConnection({
	host: 'localhost', //主机 
	user: 'root', //MySQL认证用户名 
	password: '', //MySQL认证用户密码 
	database: 'user_manager',
	port: '3306' //端口号 	
})
//连接数据库
connection.connect(function(err) {
	if(err) {
		console.error("连接数据库失败:" + err);
	} else {
		console.log("连接数据库成功！");
	}
})
//注册
router.get('/register', function(req, res) {
	var username = req.query.username;
	var psw = req.query.password;
	var count = -1;
	var sqlStr = 'select count(1) from u_user where name ="' + username + '"';
	connection.query(sqlStr, function(err, rs) {
		if(err) {
			console.log('insert err:', err.message);
			return;
		} else {
			console.log(rs[0]);
			for(var a in rs[0]) {
				count = rs[0][a];
				console.log(count);
			}
			if(count == 0) {
				var sqlStr2 = 'insert into u_user(name,pwd) values("' + username + '","' + psw + '") ';
				connection.query(sqlStr2, function(err, rs) {
					if(err) {
						console.log('insert err:', err.message);
						return;
					} else {
						res.json({
							falg: 1,
							msg:'注册成功！请登录'
						});
					}
				});
			} else {
				res.json({
					falg: 0,
					msg:'该用户名已占用！'
				});
			}

		}
	});

})

//login
router.get('/login', function(req, res) {

	var lname = req.query.username;
	var lpsw = req.query.password;
	console.log(lname, lpsw);
	var count = -1;
	var sqlStr = 'select count(1) from u_user where name ="' + lname + '" and pwd = "' + lpsw + '"';
	connection.query(sqlStr, function(err, rs) {
		if(err) {
			console.log('insert err:', err.message);
			return;
		} else {
			console.log(rs[0]);
			for(var a in rs[0]) {
				count = rs[0][a];
				console.log(count);
			}
			if(count == 1) {
				res.json({
					flag: 1,
					msg: '登录成功！'
				});
			} else {
				res.json({
					flag: 0,
					msg: '用户名或密码错误，请重试！'
				});
			}
		}
	});
})
//查找所有用户
router.get('/getAllUser', function(req, res) {

	var sqlStr = 'select * from u_user';
	connection.query(sqlStr, function(err, rs) {
		if(err) {
			console.log('insert err:', err.message);
			return;
		} else {
			res.json(rs);
		}
	});
})



//删除用户
router.get('/userDelete', function(req, res) {
	var id = req.query.id;
	var sqlStr = 'delete from u_user where id =' + id;
	console.log(sqlStr);
	connection.query(sqlStr, function(err, rs) {
		if(err) {
			console.log('insert err:', err.message);
			return;
		} else {
			res.json(rs);
		}
	});
})

//获取用户信息
router.get('/getUser', function(req, res) {
	var name = req.query.name;
	var sqlStr = 'select * from u_user where name="' + name + '"';
	connection.query(sqlStr, function(err, rs) {
		if(err) {
			console.log('select err:', err.message);
			return;
		} else {
			res.json(rs);
		}
	});
})
//修改用户信息
router.get('/modifyUser', function(req, res) {
	var user = JSON.parse(req.query.user);
	console.log(user);
	var sqlStr = 'update u_user set age = "' + user.age +
		'",phone = "' + user.phone +
		'", note ="' + user.note +
		'", sex ="' + user.sex +
		'", role ="' + user.role +
		'" where name ="' + user.name + '"';
		console.log(sqlStr);
	connection.query(sqlStr, function(err, rs) {
		if(err) {
			console.log('insert err:', err.message);
			return;
		} else {
			console.log(rs);
			res.json(rs);
		}
	});
})

module.exports = router;