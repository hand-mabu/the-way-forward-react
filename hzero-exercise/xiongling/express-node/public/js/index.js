/*
 * @Description: 
 * @Date: 2019-08-13 21:19:20
 * @Author: barret<ling.xiong@hand-china.com>
 * @Copyright: Copyright (c) 2019, Hand
 */
fetch("../json/index.json").then(function (res) {
  if (res.ok) {
    res.json().then(function (data) {
      console.log(data);
    });
  } else {
    console.log("Looks like the response wasn't prefect, got status ", res.status);
  }
}, function (error) {
  console.log("Fetch failed!", error);
});