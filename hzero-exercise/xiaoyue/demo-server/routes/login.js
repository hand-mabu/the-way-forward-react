var express = require('express');
var router = express.Router();
var db = require("./db.js");

// 登录接口
router.post('/', function (req, res, next) {
  // 获取请求传递过来的数据
  let userId = req.body.userId;
  let userPwd = req.body.password;
  let sql = `SELECT * FROM user_infos WHERE user_id='${userId}' AND user_psw='${userPwd}'`;
  db.query(sql, function (err, rows) {
    if (err) throw err;
    let userId = !!rows[0] && !!rows[0].user_id ? rows[0].user_id : '';
    let result = {};
    if (err) {
      result = {
        code: -1,
        data: null,
        isSuccess: false,
        msg: err
      }
    } else {
      if (!userId) {
        result = {
          code: 0,
          data: {
            isLogin: false,
          },
          isSuccess: true,
          msg: "用户名或密码错误"
        }
      } else {
        result = {
          code: 0,
          data: {
            isLogin: true,
            userId: rows[0].user_id,
            userName: rows[0].user_name,
          },
          isSuccess: true,
          msg: "登录成功"
        }
      }
    }
    res.json(result)  //返回查询结果
  });
});
module.exports = router;