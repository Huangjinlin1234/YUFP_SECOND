/**
 * Created by 江成 on 2017/03/05.
 */
define(function (require) {
  // 定义路由表
  var routeTable = {

    login: {
      html: 'pages/common/login/login.html',
      css: 'pages/common/login/login.css',
      js: 'pages/common/login/login.js'
    },

    frame: {
      html: 'pages/common/frame/frame.html',
      js: 'pages/common/frame/frame.js'
    },

    frameRight: {
      html: 'pages/common/frame/frameRight.html',
      js: 'pages/common/frame/frameRight.js'
    },

    frameTop: {
      html: 'pages/common/frame/frameTop.html',
      js: 'pages/common/frame/frameTop.js'
    },

    dashboard: {
      html: 'pages/common/dashboard/dashboard.html',
      js: 'pages/common/dashboard/dashboard.js'
    },

    modifyUserPassword: {
      html: 'pages/common/login/modifyUserPassword.html',
      css: 'pages/common/login/modifyUserPassword.css',
      js: 'pages/common/login/modifyUserPassword.js'
    },

    editListTemplate: {
      html: 'pages/common/template/editListTemplate.html',
      css: 'pages/common/template/editListTemplate.css',
      js: 'pages/common/template/editListTemplate.js'
    },
    creditManage: {
      html: 'pages/common/template/hjlTemplate/creditManage.html',
      js: 'pages/common/template/hjlTemplate/creditManage.js'
    },
    allCtedit: {
      html: 'pages/common/template/hjlTemplate/allCtedit.html',
      js: 'pages/common/template/hjlTemplate/allCtedit.js'
    },
    oprFinance: {
      html: 'pages/common/template/hjlTemplate/oprFinance.html',
      js: 'pages/common/template/hjlTemplate/oprFinance.js'
    },
    methodInfo: {
      html: 'pages/common/template/hjlTemplate/methodInfo.html',
      js: 'pages/common/template/hjlTemplate/methodInfo.js'
    },
    qualiafyInfo: {
      html: 'pages/common/template/hjlTemplate/qualiafyInfo.html',
      js: 'pages/common/template/hjlTemplate/qualiafyInfo.js'
    },
    moreQuestions: {
      html: 'pages/common/dashboard/WbPrbCommAdd.html',
      js: 'pages/common/dashboard/WbPrbCommAdd.js'
    }
  };
    // 注册路由表
  yufp.router.addRouteTable(routeTable);
});