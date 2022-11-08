/*
 * @description: 合同管理路由表
 * @author: ljl
 * @date: 2022-11-07
 */
define(function (require) {
  // 定义路由表
  var routeTable = {
    // 授信合同申请
    CredContAppl: {
      html: 'pages/ctr/mainCtrAppli/CredContAppl.html',
      js: 'pages/ctr/mainCtrAppli/CredContAppl.js'
    },
    // 授信合同申请历史
    CredContHis: {
      html: 'pages/ctr/mainCtrAppli/CredContAppl.html',
      js: 'pages/ctr/mainCtrAppli/CredContAppl.js'
    },
    // 借款合同申请
    LoanContAppl: {
      html: 'pages/ctr/mainCtrAppli/LoanContAppl.html',
      js: 'pages/ctr/mainCtrAppli/LoanContAppl.js'
    },
    // 借款合同申请历史
    LoanContHis: {
      html: 'pages/ctr/mainCtrAppli/LoanContAppl.html',
      js: 'pages/ctr/mainCtrAppli/LoanContAppl.js'
    },
    // 授信合同申请详情
    CredContDetail: {
      html: 'pages/ctr/mainCtrAppli/credit/index.html',
      js: 'pages/ctr/mainCtrAppli/credit/index.js'
    },
    // 授信合同申请基本信息
    CredBaseInfo: {
      html: 'pages/ctr/mainCtrAppli/credit/BaseInfo.html',
      js: 'pages/ctr/mainCtrAppli/credit/BaseInfo.js'
    },
    // 授信合同申请担保合同信息
    CredGuaranteeCtr: {
      html: 'pages/ctr/mainCtrAppli/credit/GuaranteeCtr.html',
      js: 'pages/ctr/mainCtrAppli/credit/GuaranteeCtr.js'
    },
    // 授信合同申请第三方担保合同信息
    CredThirdGuarCtr: {
      html: 'pages/ctr/mainCtrAppli/credit/ThirdGuarCtr.html',
      js: 'pages/ctr/mainCtrAppli/credit/ThirdGuarCtr.js'
    },
    // 授信合同申请借款人信息
    CredBorrowerCtr: {
      html: 'pages/ctr/mainCtrAppli/credit/BorrowerCtr.html',
      js: 'pages/ctr/mainCtrAppli/credit/BorrowerCtr.js'
    },
    // 授信合同申请共同授信人信息
    CredJointCreditorCtr: {
      html: 'pages/ctr/mainCtrAppli/credit/JointCreditorCtr.html',
      js: 'pages/ctr/mainCtrAppli/credit/JointCreditorCtr.js'
    },
    // 授信合同申请共同授信人信息
    CredContractPreview: {
      html: 'pages/ctr/mainCtrAppli/common/ContractPreview.html',
      js: 'pages/ctr/mainCtrAppli/common/ContractPreview.js'
    },
    // 授信合同申请合同预览
    CredContractPreview: {
      html: 'pages/ctr/mainCtrAppli/common/ContractPreview.html',
      js: 'pages/ctr/mainCtrAppli/common/ContractPreview.js'
    },
    // 授信合同申请审批历史
    CredApprovalHis: {
      html: 'pages/ctr/mainCtrAppli/common/ApprovalHis.html',
      js: 'pages/ctr/mainCtrAppli/common/ApprovalHis.js'
    },
    // 最高额担保合同详情
    CredMaxAmountGuar: {
      html: 'pages/ctr/mainCtrAppli/common/GuarCtrDetail.html',
      js: 'pages/ctr/mainCtrAppli/common/GuarCtrDetail.js'
    }
    // Approval information
    // Imaging data
  };
  // 注册路由表
  yufp.router.addRouteTable(routeTable);
});
