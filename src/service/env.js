/**
 * 本地开发用代理转发
 * 线上版本用 baseUrl
 * routerMode: 路由模式
 *
 */
let baseUrl;
if (process.env.NODE_ENV === 'production') {
  baseUrl = '';
} else {
  // 本地
  baseUrl = 'http://127.0.0.1:9090';
}
export default baseUrl;
