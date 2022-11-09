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
      html: 'pages/ctr/mainCtrAppli/ContractAppli.html',
      js: 'pages/ctr/mainCtrAppli/ContractAppli.js'
    },
    // 授信合同申请历史
    CredContHis: {
      html: 'pages/ctr/mainCtrAppli/ContractAppli.html',
      js: 'pages/ctr/mainCtrAppli/ContractAppli.js'
    },
    // 借款合同申请
    LoanContAppl: {
      html: 'pages/ctr/mainCtrAppli/ContractAppli.html',
      js: 'pages/ctr/mainCtrAppli/ContractAppli.js'
    },
    // 借款合同申请历史
    LoanContHis: {
      html: 'pages/ctr/mainCtrAppli/ContractAppli.html',
      js: 'pages/ctr/mainCtrAppli/ContractAppli.js'
    },
    // CredContAppl: {
    //   html: 'pages/ctr/mainCtrAppli/CredContAppl.html',
    //   js: 'pages/ctr/mainCtrAppli/CredContAppl.js'
    // },
    // // 授信合同申请历史
    // CredContHis: {
    //   html: 'pages/ctr/mainCtrAppli/CredContAppl.html',
    //   js: 'pages/ctr/mainCtrAppli/CredContAppl.js'
    // },
    // // 借款合同申请
    // LoanContAppl: {
    //   html: 'pages/ctr/mainCtrAppli/LoanContAppl.html',
    //   js: 'pages/ctr/mainCtrAppli/LoanContAppl.js'
    // },
    // // 借款合同申请历史
    // LoanContHis: {
    //   html: 'pages/ctr/mainCtrAppli/LoanContAppl.html',
    //   js: 'pages/ctr/mainCtrAppli/LoanContAppl.js'
    // },
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
    },
    // 借款合同申请详情（对公）
    LoanContDetailC: {
      html: 'pages/ctr/mainCtrAppli/loan/index.html',
      js: 'pages/ctr/mainCtrAppli/loan/index.js'
    },
    // 借款合同申请基本信息（对公）
    LoanBaseInfoC: {
      html: 'pages/ctr/mainCtrAppli/loan/company/BaseInfo.html',
      js: 'pages/ctr/mainCtrAppli/loan/company/BaseInfo.js'
    },
    // 借款合同申请担保合同信息（对公）
    LoanGuaranteeCtrC: {
      html: 'pages/ctr/mainCtrAppli/loan/company/GuaranteeCtr.html',
      js: 'pages/ctr/mainCtrAppli/loan/company/GuaranteeCtr.js'
    },
    // 借款合同申请第三方担保合同信息（对公）
    LoanThirdGuarCtrC: {
      html: 'pages/ctr/mainCtrAppli/loan/company/ThirdGuarCtr.html',
      js: 'pages/ctr/mainCtrAppli/loan/company/ThirdGuarCtr.js'
    },
    // 借款合同申请关联授信合同（对公）
    LoanRelCredCtrC: {
      html: 'pages/ctr/mainCtrAppli/common/RelCredCtr.html',
      js: 'pages/ctr/mainCtrAppli/common/RelCredCtr.js'
    },
    // 借款合同申请共同借款人信息（对公）
    LoanBorrowerCtrC: {
      html: 'pages/ctr/mainCtrAppli/loan/company/JointBorrowerCtr.html',
      js: 'pages/ctr/mainCtrAppli/loan/company/JointBorrowerCtr.js'
    },
    // 借款合同申请合同预览（对公）
    LoanContractPreviewC: {
      html: 'pages/ctr/mainCtrAppli/common/ContractPreview.html',
      js: 'pages/ctr/mainCtrAppli/common/ContractPreview.js'
    },
    // 借款合同申请审批历史（对公）
    LoanApprovalHisC: {
      html: 'pages/ctr/mainCtrAppli/common/ApprovalHis.html',
      js: 'pages/ctr/mainCtrAppli/common/ApprovalHis.js'
    },
    // 借款合同申请详情（个人）
    LoanContDetailC: {
      html: 'pages/ctr/mainCtrAppli/loan/index.html',
      js: 'pages/ctr/mainCtrAppli/loan/index.js'
    },
    // 借款合同申请基本信息（个人）
    LoanBaseInfoP: {
      html: 'pages/ctr/mainCtrAppli/loan/person/BaseInfo.html',
      js: 'pages/ctr/mainCtrAppli/loan/person/BaseInfo.js'
    },
    // 借款合同申请担保合同信息（个人）
    LoanGuaranteeCtrP: {
      html: 'pages/ctr/mainCtrAppli/loan/person/GuaranteeCtr.html',
      js: 'pages/ctr/mainCtrAppli/loan/person/GuaranteeCtr.js'
    },
    // 借款合同申请第三方担保合同信息（个人）
    LoanThirdGuarCtrP: {
      html: 'pages/ctr/mainCtrAppli/loan/person/ThirdGuarCtr.html',
      js: 'pages/ctr/mainCtrAppli/loan/person/ThirdGuarCtr.js'
    },
    // 借款合同申请关联授信合同（个人）
    LoanRelCredCtrP: {
      html: 'pages/ctr/mainCtrAppli/common/RelCredCtr.html',
      js: 'pages/ctr/mainCtrAppli/common/RelCredCtr.js'
    },
    // 借款合同申请共同借款人信息（个人）
    LoanJointBorrowerCtrP: {
      html: 'pages/ctr/mainCtrAppli/loan/person/JointBorrowerCtr.html',
      js: 'pages/ctr/mainCtrAppli/loan/person/JointBorrowerCtr.js'
    },
    // 借款合同申请合同预览（个人）
    LoanContractPreviewP: {
      html: 'pages/ctr/mainCtrAppli/common/ContractPreview.html',
      js: 'pages/ctr/mainCtrAppli/common/ContractPreview.js'
    },
    // 借款合同申请审批历史（个人）
    LoanApprovalHisP: {
      html: 'pages/ctr/mainCtrAppli/common/ApprovalHis.html',
      js: 'pages/ctr/mainCtrAppli/common/ApprovalHis.js'
    },
    // 一般担保合同详情
    LoanGeneralGuar: {
      html: 'pages/ctr/mainCtrAppli/common/GuarCtrDetail.html',
      js: 'pages/ctr/mainCtrAppli/common/GuarCtrDetail.js'
    },
    // Approval information
    // Imaging data
  };
  // 注册路由表
  yufp.router.addRouteTable(routeTable);
});
