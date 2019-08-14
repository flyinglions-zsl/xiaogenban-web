/**
 * 本地开发用代理转发
 * 线上版本用 baseUrl
 * routerMode: 路由模式
 *
 */
let baseUrl;
if (process.env.NODE_ENV === 'development') {
  baseUrl = '';
} else {
  // 本地
  // baseUrl = 'http://localhost:8080';
  baseUrl = 'http://192.168.8.114:8080';
  // baseUrl = 'http://10.6.18.159'; // 门口电脑IP
  // baseUrl = 'http://fabis.paic.com.cn'; // 门口电脑IP
  // triggerEvent
}
export default baseUrl;
