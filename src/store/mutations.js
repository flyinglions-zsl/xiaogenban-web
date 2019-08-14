// 公共数据请求
import {
  UPDATA_USER_NAME
} from './mutation-types.js';

export default {
  // 设置用户名
  [UPDATA_USER_NAME] (state, userName) {
    state.userName = userName;
  }
};
