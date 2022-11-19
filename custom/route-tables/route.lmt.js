/*
 * @description: 额度管理
 * @author: ljl
 * @date: 2022-11-17
*/
define(function (require) {
  // 定义路由表
  var routeTable = {
    // 额度台账
    lmtAccount: {
      html: 'pages/lmt/lmtAccount/index.html',
      js: 'pages/lmt/lmtAccount/index.js',
    },
    // 台账查看
    lmtAcctDetail: {
      html: 'pages/lmt/lmtAccount/AccountDetail.html',
      js: 'pages/lmt/lmtAccount/AccountDetail.js',
    },
    // 额度冻结/解冻
    lmtFrzOrUn: {
      html: 'pages/lmt/lmtFreezingOrUn/index.html',
      js: 'pages/lmt/lmtFreezingOrUn/index.js',
    },
    // 额度冻结/解冻申请详情
    lmtAppliDetail: {
      html: 'pages/lmt/lmtFreezingOrUn/AppliDetail.html',
      js: 'pages/lmt/lmtFreezingOrUn/AppliDetail.js',
    },
  };
  // 注册路由表
  yufp.router.addRouteTable(routeTable);
});
