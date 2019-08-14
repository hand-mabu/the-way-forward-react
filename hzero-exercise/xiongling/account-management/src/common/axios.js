/*
 * @Description: Axios二次封装
 * @Date: 2019-08-12 22:01:30
 * @Author: barret<ling.xiong@hand-china.com>
 * @Copyright: Copyright (c) 2019, Hand
 */
import Axios from 'axios';
import qs from 'qs'; // 包装data数据

const axios = Axios.create(); // 创建一个拥有拥有配置的axios实例
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }

  return config;
});

// 响应拦截器
axios.interceptors.response.use((response) => {
  let data = response.data;
  response.data = data.data;

  return response;
}, (error) => {
  if (error.response.status === 504 || error.response.status === 404) {
    console.log("服务器被吃了⊙﹏⊙∥");
  } else if (error.response.status === 401) {
    console.log("登录信息失效⊙﹏⊙∥");
  } else if (error.response.status === 500) {
    console.log("服务器开小差了⊙﹏⊙∥");
  }
  return Promise.reject(error);
});

export default axios;
