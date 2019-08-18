/*
 * @Description: 
 * @Date: 2019-08-12 21:44:31
 * @Author: barret<ling.xiong@hand-china.com>
 * @Copyright: Copyright (c) 2019, Hand
 */
let express = require("express"); // 加载express狗构造函数
let app = express(); // 生成创建服务的实例
let bodyParser = require("body-parser"); // 获取post请求参数
let users = require("./src/assets/json/users.json"); // 引入登录用户信息
app.use(express.static("statics")); // 指定资源路径

app.use(bodyParser.json()); // 处理以json格式的提交
app.use(bodyParser.urlencoded({ // 处理以form表单的提交
  extended: true
}));

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


// 路由
app.get("/", function (req, res) {
  res.send(`<p>first express !</p>`);
});

app.post("/login", function (req, res) {
  // 请求的参数对象（登录信息）
  let user = req.body;
  console.log("当前登录用户信息：", user);
  console.log("所有用户信息：", users.users);
  if (users.users.find(item => {
    return item.username === user.username && item.password === user.password;
  }) !== undefined) {
    res.json({ // 给前端返回的json格式数据
      status: "200",
      msg: "login success",
      data: { isLogin: "success" }
    });
  } else {
    res.json({
      status: "200",
      msg: "login failure",
      data: { isLogin: "failure" }
    });
  }
});

// 配置服务端口，监听端口设置为5000
let server = app.listen(5000,'localhost', () => {
  let host = server.address().address; // 主机
  let port = server.address().port; // 端口号
  console.log("启动成功，监听地址为：http://%s:%s", host, port);
});