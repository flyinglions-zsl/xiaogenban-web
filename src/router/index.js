import Vue from 'vue';
import Router from 'vue-router';
import main from '@/views/main';
import error from '@/views/error';
import login from '@/views/login';
import page404 from '@/views/page404';
import test from '@/components/test';

const titles = {
  system: 'vue'
};
// 按需加载
const marketingAnalysis = () => import('@/views/system/page1');
// const authorityManagement = () => import('@/views/system/authorityManagement');
const homepage = () => import('@/views/layout/homepage');
// 用户管理
const userManagement = () => import('@/views/management/userManagement');
// 角色管理'
const roleManagement = () => import('@/views/management/roleManagement');
// 部门管理
const sectionManagement = () => import('@/views/management/sectionManagement');
// 菜单管理
const menuManagement = () => import('@/views/management/menuManagement');
// 岗位管理
const postManagement = () => import('@/views/management/postManagement');
// 租户管理
const lesseeManagement = () => import('@/views/management/lesseeManagement');
// const postManagement = () => import('@/views/management/postManagement');
// 社交账号管理
const socialContactManagement = () => import('@/views/management/socialContactManagement');
// 日志管理
const journalManagement = () => import('@/views/system/journalManagement');
// 字典管理
const dictionariesManagement = () => import('@/views/system/dictionariesManagement');
// 代码生成
const codeGeneration = () => import('@/views/system/codeGeneration');
// 异常日志
const abnormalLog = () => import('@/views/system/abnormalLog');
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
      name: 'main',
      component: marketingAnalysis,
      children: [
        {
          path: '/homepage',
          component: homepage,
          name: '主页'
        },
        {
          path: '/jurisdiction',
          component: main,
          name: '权限管理',
          children: [
            {
              path: '/userManagement',
              name: '用户管理',
              component: userManagement
            },
            {
              path: '/roleManagement',
              name: '角色管理',
              component: roleManagement
            },
            {
              path: '/sectionManagement',
              name: '部门管理',
              component: sectionManagement
            },
            {
              path: '/menuManagement',
              name: '菜单管理',
              component: menuManagement
            },
            {
              path: '/postManagement',
              name: '岗位管理',
              component: postManagement
            },
            {
              path: '/lesseeManagement',
              name: '租户管理',
              component: lesseeManagement
            },
            {
              path: '/socialContactManagement',
              name: '社交账号管理',
              component: socialContactManagement
            }
          ]
        },
        {
          path: '/system',
          component: main,
          name: '系统管理',
          // redirect: '/journalManagement',
          children: [
            {
              path: '/journalManagement',
              name: '日志管理',
              component: journalManagement
            },
            {
              path: '/dictionariesManagement',
              name: '字典管理',
              component: dictionariesManagement
            },
            {
              path: '/codeGeneration',
              name: '代码生成',
              component: codeGeneration
            },
            {
              path: '/abnormalLog',
              name: '异常日志',
              component: abnormalLog
            }
          ]
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
