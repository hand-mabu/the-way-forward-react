var express = require('express');
var sql = require('../lowdb/sql');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/account', function (req, res, next) {
  res.send(sql.getAccount());
});

router.post('/account', function (req, res, next) {
  sql.batchAddAccounts(req.body)
  res.send(sql.getAccount());
});

module.exports = router;
