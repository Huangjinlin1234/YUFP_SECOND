/*
 * @description: 合同管理路由表
 * @author: ljl
 * @date: 2022-11-07
 */
define(function (require) {
  // 定义路由表
  var routeTable = {
    // 授信合同申请
    CtrCredContAppl: {
      html: 'pages/ctr/CtrCredContAppl.html',
      js: 'pages/ctr/CtrCredContAppl.js'
    },
    // 授信合同申请历史
    CtrCredContHis: {
      html: 'pages/ctr/CtrCredContAppl.html',
      js: 'pages/ctr/CtrCredContAppl.js'
    },
    // 借款合同申请
    CtrLoanContAppl: {
      html: 'pages/ctr/CtrLoanContAppl.html',
      js: 'pages/ctr/CtrLoanCredContAppl.js'
    },
    // 借款合同申请历史
    CtrLoanContHis: {
      html: 'pages/ctr/CtrLoanContHis.html',
      js: 'pages/ctr/CtrLoanCredContAppl.js'
    },
    // 授信合同申请详情
    CtrCredContDetail: {
      html: 'pages/ctr/CtrCredContDetail/index.html',
      js: 'pages/ctr/CtrCredContDetail/index.js'
    },
    // 授信合同申请基本信息
    CredBaseInfo: {
      html: 'pages/ctr/CtrCredContDetail/BaseInfo.html',
      js: 'pages/ctr/CtrCredContDetail/BaseInfo.js'
    },
    // 授信合同申请担保合同信息
    CredGuaranteeCtr: {
      html: 'pages/ctr/CtrCredContDetail/GuaranteeCtr.html',
      js: 'pages/ctr/CtrCredContDetail/GuaranteeCtr.js'
    },
    // 授信合同申请第三方担保合同信息
    CredThirdGuarCtr: {
      html: 'pages/ctr/CtrCredContDetail/ThirdGuarCtr.html',
      js: 'pages/ctr/CtrCredContDetail/ThirdGuarCtr.js'
    },
    // 授信合同申请借款人信息
    CredBorrowerCtr: {
      html: 'pages/ctr/CtrCredContDetail/BorrowerCtr.html',
      js: 'pages/ctr/CtrCredContDetail/BorrowerCtr.js'
    },
    // 授信合同申请共同授信人信息
    CredJointCreditorCtr: {
      html: 'pages/ctr/CtrCredContDetail/JointCreditorCtr.html',
      js: 'pages/ctr/CtrCredContDetail/JointCreditorCtr.js'
    },
    // 授信合同申请共同授信人信息
    CredContractPreview: {
      html: 'pages/ctr/CtrCredContDetail/ContractPreview.html',
      js: 'pages/ctr/CtrCredContDetail/ContractPreview.js'
    },
    // 授信合同申请合同预览
    CredContractPreview: {
      html: 'pages/ctr/ContractPreview.html',
      js: 'pages/ctr/ContractPreview.js'
    },
    // 授信合同申请审批历史
    CredApprovalHis: {
      html: 'pages/ctr/ApprovalHis.html',
      js: 'pages/ctr/ApprovalHis.js'
    },
    // 最高额担保合同详情
    CredMaxAmountGuar: {
      html: 'pages/ctr/CtrCredContDetail/MaxAmountGuar.html',
      js: 'pages/ctr/CtrCredContDetail/MaxAmountGuar.js'
    }
    // Approval information
    // Imaging data
  };
  // 注册路由表
  yufp.router.addRouteTable(routeTable);
});
