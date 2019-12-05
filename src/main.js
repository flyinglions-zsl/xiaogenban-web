// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import './styles/common.less';
import store from './store/index';
import fetch from '@/service/interface';
import echarts from 'echarts';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/elementUI.less';
import $axios from 'axios';

// 关键步骤–填写后台请求统一的地址
// axios.defaults.baseURL = 'http://localhost:9090';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// Vue.config.productionTip = false;
// Vue.prototype.$addr = axios;

Object.defineProperty(Vue.prototype, '$echarts', { value: echarts });
Object.defineProperty(Vue.prototype, '$axios', { value: fetch });
Vue.prototype.instance = $axios;
Vue.use(Element);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
