define(function(e,l){l.ready=function(e,l,a){yufp.lookup.reg("CRUD_TYPE,STD_ZB_APPR_STATUS,STD_ZB_CHAGEOFF,YESNO"),yufp.custom.vue({el:a.el,data:function(){var i=this;return{dataUrl:"/api//console/api/s/users",baseParams:{},queryFields:[{placeholder:"用户名称",field:"bizSerno",type:"input"},{placeholder:"账号",field:"contNo",type:"input"},{placeholder:"工号",field:"cusName",type:"input"},{placeholder:"状态",field:"cusId",type:"input"},{placeholder:"所属机构",field:"cusManager",type:"input"}],queryButtons:[{label:"查询",op:"submit",type:"primary",click:function(e,l){l&&i.$refs.reftable.remoteData(e)}},{label:"重置",op:"reset"}],tableColumns:[{label:"用户代码",prop:"userCode",sortable:!0,resizable:!0},{label:"用户姓名",prop:"userName",sortable:!0,resizable:!0},{label:"机构名称",prop:"orgName",sortable:!0,resizable:!0},{label:"联系电话",prop:"telPhone",sortable:!0,resizable:!0},{label:"性别",prop:"sex",sortable:!0,resizable:!0},{label:"状态",prop:"prdCode",sortable:!0,resizable:!0},{label:"是否柜员",prop:"contNo",sortable:!0,resizable:!0}],updateFields:[{columnCount:3,fields:[{field:"bizSerno",label:"业务流水号"},{field:"prdId",label:"产品主键"},{field:"prdName",label:"产品名称"},{field:"prdCode",label:"产品代码"},{field:"contNo",label:"合同编号"},{field:"billNo",label:"借据编号"},{field:"fundsSrc",label:"资金来源"},{field:"accountClass",label:"科目号"},{field:"cusName",label:"客户名称"},{field:"curType",label:"币种"},{field:"conAmount",label:"合同金额"},{field:"availAmt",label:"合同可用金额"},{field:"loanAmount",label:"出账金额"},{field:"loanStartDate",label:"贷款起始日"},{field:"loanEndDate",label:"贷款到期日"},{field:"rulingIr",label:"基准利率(月)"},{field:"floatingRate",label:"利率浮动值"},{field:"realityIrY",label:"执行年利率"},{field:"overdueRate",label:"逾期加罚率"},{field:"overdueIr",label:"逾期加罚月利率"},{field:"defaultRate",label:"违约加罚率"},{field:"defaultIr",label:"违约月利率"},{field:"ciRate",label:"复利加罚率"},{field:"ciIr",label:"复利月利率"},{field:"enterAccount",label:"入账账号"},{field:"enterAccountName",label:"入账账户名称"},{field:"repaymentAccount",label:"还款账号"},{field:"repaymentAccName",label:"还款账户名称"},{field:"interestAccMode",label:"结息周期"},{field:"irAdjustMode",label:"利率调整方式"},{field:"loanDirection",label:"贷款投向"},{field:"directionName",label:"投向名称"},{field:"bizTypeSub",label:"业务品种"},{field:"delayDays",label:"宽限天数"},{field:"approveStatus",label:"审批状态",dataCode:"STD_ZB_APPR_STATUS"},{field:"examinantId",label:"审查人"},{field:"investigatorId",label:"调查人"},{field:"applyDate",label:"申请日期"},{field:"createTime",label:"创建时间"},{field:"createUser",label:"创建人"},{field:"investigatorBrId",label:"调查机构"},{field:"ownSystem",label:"所属系统"},{field:"bizTypeDetail",label:"业务品种名称"},{field:"irExeType",label:"利率执行方式"},{field:"intRateType",label:"利率类型"},{field:"intRateIncOpt",label:"利率增量选项"},{field:"intRateInc",label:"利率增量"},{field:"fixedRate",label:"固定利率"},{field:"prinIntRateIncOpt",label:"罚息利率增量选项（拖欠本金的罚息）"},{field:"prinIntRateInc",label:"罚息利率增量（拖欠本金的罚息）"},{field:"prinFixedRate",label:"固定的罚息率（拖欠本金的罚息）"},{field:"unpdIntRateIncOpt",label:"罚息利率增量选项（应收利息的罚息）"},{field:"unpdIntRateInc",label:"罚息利率增量（应收利息的罚息）"},{field:"unpdFixedRate",label:"固定的罚息率（应收利息的罚息）"},{field:"compIntRateIncOpt",label:"罚息利率增量选项（复利）"},{field:"compIntRateInc",label:"罚息利率增量（复利）"},{field:"compFixedRate",label:"固定的罚息率（复利）"},{field:"apprIntRateInc",label:"罚息利率增量（挪用利率）"},{field:"prdUserdfName",label:"产品自定义名称"},{field:"prdUserdfType",label:"产品自定义类别"},{field:"returnDate",label:"还款日"},{field:"chargeoffManage",label:"出帐负责人"},{field:"ispaf",label:"是否住房公积金贷款"},{field:"firstDisbInd",label:"首次还款日标识"},{field:"finalExeUser",label:"出账流程最终核查人"},{field:"finalTaskRoleCd",label:"出账流程最终核查人角色"},{field:"chargeoffAuthorizer",label:"出账授权负责人"},{field:"lendType",label:"贷款种类（信贷）"},{field:"legalOrgCode",label:"机构法人代码"},{field:"prdType",label:"产品类型"},{field:"payWay",label:"支付方式"},{field:"assureMeansMain",label:"担保方式"},{field:"assureMeans2",label:"担保方式2"},{field:"assureMeans3",label:"担保方式3"},{field:"limitInd",label:"授信额度使用标志"},{field:"chargeoffInd",label:"出帐方式"},{field:"chargeoffStatus",label:"出账状态",type:"select",dataCode:"STD_ZB_CHAGEOFF"},{field:"legalOrgName",label:"机构法人名称"},{field:"finaBrName",label:"账务机构名称"},{field:"mainBrId",label:"主管机构"},{field:"finaBrId",label:"账务机构"},{field:"cusManager",label:"客户经理"},{field:"cusId",label:"客户号"},{field:"mortgageFlg",label:"按揭标识"},{field:"repaymentMode",label:"还款方式"},{field:"loanForm",label:"贷款形式"},{field:"loanNature",label:"贷款性质"},{field:"loanKindCa",label:"贷款种类(征信)"},{field:"loanUseType",label:"贷款用途种类"},{field:"subDelayDeductType",label:"子台账扣款方式"},{field:"loanTypeExt",label:"关联交易类型"},{field:"inputBrId",label:"登记机构"},{field:"delayDeductType",label:"扣款方式"}]}],updateButtons:[{label:"取消",type:"primary",icon:"yx-undo2",hidden:!1,click:function(e){i.dialogVisible=!1}},{label:"保存",type:"primary",icon:"check",hidden:!1,click:function(e){var l=!1;if(i.$refs.reform.validate(function(e){l=e}),l){var a="";"EDIT"==i.viewType?a="PUT":"ADD"==i.viewType&&(a="POST"),yufp.service.request({method:a,url:"/api/pvp/loan/app",data:e,callback:function(e,l,a){0==e?(i.$refs.reftable.remoteData(),i.$message("操作成功"),i.dialogVisible=!1):i.$message("操作失败")}})}}}],height:yufp.frame.size().height-103,dialogVisible:!1,formDisabled:!1,pageType:"DETAIL",viewTitle:yufp.lookup.find("CRUD_TYPE",!1),formdata:{},userInfo:{},showSearchform:!1}},computed:{dialogTitle:function(){var e=void 0;return"ADD"==this.pageType?e="新增":"EDIT"==this.pageType?e="修改":"DETAIL"==this.pageType&&(e="详情"),e}},methods:{initData:function(){var e=this;this.$nextTick(function(){e.$refs.refForm.formdata=e.userInfo,console.log(e.$refs.refForm),console.log(e.userInfo,"uuu")})},rowClick:function(e,l,a,i){console.log(e,"rrrr"),this.userInfo=e},handleClick:function(e){this.pageType=e,this.dialogVisible=!this.dialogVisible},closeFn:function(){this.dialogVisible=!1},comfirmFn:function(){}}})}});