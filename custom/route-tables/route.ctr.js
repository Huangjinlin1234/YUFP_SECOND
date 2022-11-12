/*
 * @description: 合同管理路由表
 * @author: ljl
 * @date: 2022-11-07
 */
define(function (require) {
  // 定义路由表
  var routeTable = {
    //  主合同申请 start
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
      html: 'pages/ctr/mainCtrAppli/loan/common/GuaranteeCtr.html',
      js: 'pages/ctr/mainCtrAppli/loan/common/GuaranteeCtr.js'
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
      html: 'pages/ctr/mainCtrAppli/loan/common/GuaranteeCtr.html',
      js: 'pages/ctr/mainCtrAppli/loan/common/GuaranteeCtr.js'
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
    // 最高额担保合同详情和一般担保合同详情
    GuarCtrDetail: {
      html: 'pages/ctr/mainCtrAppli/common/GuarCtrDetail.html',
      js: 'pages/ctr/mainCtrAppli/common/GuarCtrDetail.js'
    },
    //  主合同申请 end


    // 合同审批 start
    // 合同审批
    ContractApprv: {
      html: 'pages/ctr/contractApprv/index.html',
      js: 'pages/ctr/contractApprv/index.js'
    },
    //  合同审批 end


    //  主合同管理 start
    // 授信合同管理待签授信合同
    UnsignCredCtr: {
      html: 'pages/ctr/mainCtrManage/index.html',
      js: 'pages/ctr/mainCtrManage/index.js'
    },
    // 授信合同管理历史授信合同
    HisCredCtr: {
      html: 'pages/ctr/mainCtrManage/index.html',
      js: 'pages/ctr/mainCtrManage/index.js'
    },
    // 借款合同管理待签授信合同
    UnsignLoanCtr: {
      html: 'pages/ctr/mainCtrManage/index.html',
      js: 'pages/ctr/mainCtrManage/index.js'
    },
    // 借款合同管理历史授信合同
    HisLoanCtr: {
      html: 'pages/ctr/mainCtrManage/index.html',
      js: 'pages/ctr/mainCtrManage/index.js'
    },
    // 授信合同签订页面 借款合同签订页面
    ContratSign: {
      html: 'pages/ctr/mainCtrManage/common/ContratSign.html',
      js: 'pages/ctr/mainCtrManage/common/ContratSign.js'
    },
    // 借款合同项下业务信息
    BusiInfo: {
      html: 'pages/ctr/mainCtrAppli/loan/common/BusiInfo.html',
      js: 'pages/ctr/mainCtrAppli/loan/common/BusiInfo.js'
    },
    //  主合同管理 end


    //  担保合同管理 start
    // 担保合同管理列表页
    GuarCtrManage: {
      html: 'pages/ctr/guarCtrManage/index.html',
      js: 'pages/ctr/guarCtrManage/index.js'
    },
    //  担保合同管理 end
  };
  // 注册路由表
  yufp.router.addRouteTable(routeTable);
});
