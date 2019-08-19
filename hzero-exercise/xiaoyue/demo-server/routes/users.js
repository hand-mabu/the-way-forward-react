var express = require('express');
var router = express.Router();
var db = require("./db.js");

router.get('/', function (req, res) {
  res.send('用户首页');
});

router.get('/query', function (req, res, next) {
  let user_id = !!req.query.userId ? req.query.userId : '';
  let user_name = !!req.query.userName ? req.query.userName : '';
  let sql = `select id,user_id,user_name from user_infos `;
  if (!!user_id && !!user_name) {
    sql += `where id LIKE '%${user_id}%' and user_name LIKE '%${user_name}%'`
  } else if (!!user_id && !user_name) {
    sql += `where id LIKE '%${user_id}%'`
  } else if (!user_id && !!user_name) {
    sql += `where id LIKE '%${user_name}%'`
  }
  db.query(sql, function (err, rows) {
    if (err) {
      var data = {
        code: -1,
        data: null,
        isSuccess: false,
        msg: err
      }
    } else {
      var data = {
        code: 0,
        data: rows,
        isSuccess: true,
        msg: "请求成功"
      }
    }
    res.json(data)  //返回查询结果
  });
});

router.delete('/deleteInfo', function (req, res, next) {
  let id = req.query.id;
  let sql = `delete from user_infos where id='${id}'`;
  db.deleteInfo(sql, function (err, rows) {
    if (err) {
      var data = {
        code: -1,
        data: null,
        isSuccess: false,
        msg: err
      }
    } else {
      var data = {
        code: 0,
        data: rows,
        isSuccess: true,
        msg: "删除成功"
      }
    }
    res.json(data)  //返回查询结果
  });
});

module.exports = router;
