import Vue from 'vue';
import Router from 'vue-router';
import main from '@/views/main';
import error from '@/views/error';
import login from '@/views/login';
import page404 from '@/views/page404';
import test from '@/components/test';

const titles = {
  marketingAnalysis: 'vue'
};
// 按需加载
const marketingAnalysis = () => import('@/views/marketing/page1');

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',
      name: 'page404',
      component: page404
    }, {
      path: '/',
      name: 'login',
      component: login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/error',
      name: 'error',
      component: error
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/main',
      component: main,
      redirect: '/main/marketingAnalysis',
      children: [
        {
          path: '/main/marketingAnalysis',
          name: 'vue',
          component: marketingAnalysis
        }
      ]
    }

  ]
});

router.afterEach((to, from) => {
  /* 路由发生变化修改页面 title */
  let fullRoute = to.path;
  if (fullRoute === '/') {
    document.title = '登录页';
    return;
  }
  let routerArr = fullRoute.split('/');
  if (routerArr.length < 3) return;
  let lastRoute = routerArr[2].replace(/\d+/g, '');
  let titleText = titles[lastRoute];
  if (titleText) {
    document.title = titleText;
  }
  // next();
});

export default router;
