/*
 * @description: 合作项目与合作方路由表
 * @author: ljl
 * @date: 2022-11-15
 */
define(function (require) {
  // 定义路由表
  var routeTable = {
    // 合作项目管理 start

    // 合作项目准入
    CoopPrjAccess: {
      html: 'pages/prj/coopPrjManage/index.html',
      js: 'pages/prj/coopPrjManage/index.js',
    },
    // 合作项目准入详情
    AccessDetail: {
      html: 'pages/prj/coopPrjManage/AccessDetail.html',
      js: 'pages/prj/coopPrjManage/AccessDetail.js',
    },


    // 合作项目维护
    CoopPrjMaintain: {
      html: 'pages/prj/coopPrjManage/index.html',
      js: 'pages/prj/coopPrjManage/index.js',
    },
    // 合作项目维护详情
    MaintainDetail: {
      html: 'pages/prj/coopPrjManage/MaintainDetail.html',
      js: 'pages/prj/coopPrjManage/MaintainDetail.js',
    },
    // 合作项目台账
    CoopPrjAccount: {
      html: 'pages/prj/coopPrjManage/index.html',
      js: 'pages/prj/coopPrjManage/index.js',
    },
    // 合作项目台账详情
    AccountDetail: {
      html: 'pages/prj/coopPrjManage/AccountDetail.html',
      js: 'pages/prj/coopPrjManage/AccountDetail.js',
    },
    // 合作方名单管理
    PartnerList: {
      html: 'pages/prj/partnerManage/partnerList/index.html',
      js: 'pages/prj/partnerManage/partnerList/index.js',
    },
    // 合作方名单新增
    partnerListAdd: {
      html: 'pages/prj/partnerManage/partnerList/partnerListAdd.html',
      js: 'pages/prj/partnerManage/partnerList/partnerListAdd.js',
    },
    // 合作方协议管理
    PartnerAgr: {
      html: 'pages/prj/partnerManage/partnerAgr/index.html',
      js: 'pages/prj/partnerManage/partnerAgr/index.js',
    },
    // 合作方协议详情（新增、变更、续签）
    partnerAgrDetail: {
      html: 'pages/prj/partnerManage/partnerAgr/partnerAgrDetail.html',
      js: 'pages/prj/partnerManage/partnerAgr/partnerAgrDetail.js',
    },

    // 合作项目营运视图
    coopPrjView: {
      html: 'pages/prj/coopPrjView/index.html',
      js: 'pages/prj/coopPrjView/index.js',
    },
    // 合作项目营运视图详情
    PrjViewDetail: {
      html: 'pages/prj/coopPrjView/PrjViewDetail.html',
      js: 'pages/prj/coopPrjView/PrjViewDetail.js',
    },
    // // 合作项目维护
    // CoopPrjAccess:{
    //   html:'ttttt.html',
    //   js:'tttt.js',
    // },
    // // 合作项目维护
    // CoopPrjAccess:{
    //   html:'ttttt.html',
    //   js:'tttt.js',
    // },
  };
  // 注册路由表
  yufp.router.addRouteTable(routeTable);
});
