/*
 * @Description: 
 * @Date: 2019-08-12 21:44:31
 * @Author: barret<ling.xiong@hand-china.com>
 * @Copyright: Copyright (c) 2019, Hand
 */
var express = require("express"); // 加载express狗构造函数
var app = express(); // 生成创建服务的实例
var bodyParser = require("body-parser"); // 获取post请求参数

app.use(express.static("statics")); // 指定资源路径

app.use(bodyParser.json()); // 处理以json格式的提交
app.use(bodyParser.urlencoded({ // 处理以form表单的提交
  extended: true
}));

// 路由
app.get("/", function(req, res) {
  res.send(`<p>first express !</p>`);
});

app.post("/login", function(req, res) {
  console.log(req.body); // 请求的参数对象
  res.json({ // 给前端返回的json格式数据
    code: 200,
    msg: "success"
  });
  // next();
});

app.listen(3000, () => {
  console.log("启动成功");
});