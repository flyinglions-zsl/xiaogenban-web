// import Vue from 'vue'
import axios from 'axios';
// import { baseUrl } from '../config/env';
// import qs from 'qs';
axios.defaults.baseURL = '/intfin';

// request拦截器
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
//   if (config.method === 'post' && config.headers['Content-Type'] !== 'application/json') {
//     config.transformRequest = [function (data) {
//       return qs.stringify(data);
//     }];
//   }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default axios;
