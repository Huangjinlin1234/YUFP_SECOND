define(function(e,o){o.ready=function(e,o,l){yufp.lookup.reg("CRUD_TYPE,STD_ZB_APPR_STATUS,STD_ZB_CHAGEOFF"),yufp.custom.vue({el:l.el,data:function(){var l=this;return{dataUrl:"/api//console/api/s/users",showXform:!1,baseParams:{},queryFields:[{placeholder:"业务流水号",field:"bizSerno",type:"input"},{placeholder:"合同编号",field:"contNo",type:"input"},{placeholder:"客户名称",field:"cusName",type:"input"},{placeholder:"客户号",field:"cusId",type:"input"},{placeholder:"客户经理",field:"cusManager",type:"input"},{placeholder:"审批状态",field:"approveStatus",type:"select",dataCode:"STD_ZB_APPR_STATUS"}],queryButtons:[{label:"查询",op:"submit",type:"primary",click:function(e,o){o&&l.$refs.reftable.remoteData(e)}},{label:"重置",op:"reset"}],tableColumns:[{label:"机构代码",prop:"userCode",sortable:!0,resizable:!0},{label:"机构名称",prop:"userName",sortable:!0,resizable:!0},{label:"机构层级",prop:"orgName",sortable:!0,resizable:!0},{label:"上级机构代码",prop:"telPhone",sortable:!0,resizable:!0},{label:"机构联系电话",prop:"sex",sortable:!0,resizable:!0},{label:"机构地址",prop:"prdCode",sortable:!0,resizable:!0}],dialogVisible:!1,formDisabled:!1,pageType:"DETAIL",viewTitle:yufp.lookup.find("CRUD_TYPE",!1),formdata:{},orgInfo:{},input:""}},computed:{dialogTitle:function(){var e=void 0;return"ADD"==this.pageType?e="新增":"EDIT"==this.pageType?e="修改":"DETAIL"==this.pageType&&(e="详情"),e}},methods:{initData:function(){var e=this;this.$nextTick(function(){console.log(e.orgInfo),e.$refs.refForm.formdata=e.orgInfo})},rowClick:function(e,o,l,i){this.orgInfo=e},handleClick:function(e){this.pageType=e,this.dialogVisible=!this.dialogVisible},closeFn:function(){this.dialogVisible=!1},comfirmFn:function(){}}})}});