/*
 * @Description: 
 * @Date: 2019-08-13 21:06:33
 * @Author: barret<ling.xiong@hand-china.com>
 * @Copyright: Copyright (c) 2019, Hand
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hi, barret' });
});

module.exports = router;
