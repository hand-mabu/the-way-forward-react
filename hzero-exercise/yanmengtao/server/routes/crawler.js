var express = require('express');
var router = express.Router();
const puppeteer = require('puppeteer');

async function getContent(res, url, select) {
  const browser = await puppeteer.launch({
    // 关闭无头模式，方便我们看到这个无头浏览器执行的过程
    // headless: false,
  });

  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: 'networkidle2'  // 网络空闲说明已加载完毕
  }); // 访问题库页面

  // await page.waitFor(10000);
  const content = await page.evaluate((select) => {
    const res = [];
    document.querySelectorAll(select).forEach(e => {
      if (e.innerHTML) {
        res.push(e.innerHTML);
      }
    })
    return res;
  }, select);

  res.send(content);
  await browser.close();
}


/* GET home page. */
router.get('/', function (req, res) {
  console.log('error');
  res.send('异常');
});

// http://localhost:3001/crawler/content?select=.reactable-data&url=https://leetcode-cn.com/problemset/all/
router.get('/content', function (req, res, next) {
  const { url, select } = req.query;
  if (url === undefined || select === undefined) {
    res.status(500)
    res.send('参数缺失');
    return;
  }

  getContent(res, url, select)
    // 异常处理
    .catch((err) => {
      res.status(500)
      res.send({
        message: err,
      });
    });
});

module.exports = router;
