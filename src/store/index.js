import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

// import axios from '../utils/fetch'
// import {
//   getCookie,
//   setCookie
// } from '../utils/storage'
Vue.use(Vuex);
// 公共变量声明
const state = {
  userName: '123',
  localdebt_ym: '201811'

};

export default new Vuex.Store({
  strict: false,
  state,
  mutations,
  actions: {

  },
  getters: {

  },
  modules: {
  }
});
