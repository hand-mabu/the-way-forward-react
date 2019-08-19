// 连接MYSQL
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'demo_app'
});
// 查询
function query(sql, callback) {
  pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, rows) {
      callback(err, rows);
      connection.release(); // 释放连接
    });
  });
}

// 删除
function deleteInfo(sql, callback) {
  pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, rows) {
      callback(err, rows);
      connection.release(); // 释放连接
    });
  });
}

exports.query = query;
exports.deleteInfo = deleteInfo;