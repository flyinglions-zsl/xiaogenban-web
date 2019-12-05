/**
 * 本地开发用代理转发
 * 线上版本用 baseUrl
 * routerMode: 路由模式
 *
 */
let productionUrl;
if (process.env.NODE_ENV === 'production') {
  productionUrl = '';
} else {
  // 本地
  productionUrl = 'http://127.0.0.1:9090';
}
export default productionUrl;
