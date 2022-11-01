define(function(e,a){a.ready=function(e,a,s){yufp.lookup.reg("CRUD_TYPE,STD_ZB_REG_TYPE_REVENUE,APRV_STATUS"),yufp.custom.vue({el:s.el,data:function(){var s=this;return{dataUrl:backend.consoleService+"/api/coeff/cfg/apps",baseParams:{},queryFields:[{placeholder:"单位注册类型",field:"typeId",type:"select",dataCode:"STD_ZB_REG_TYPE_REVENUE"},{placeholder:"审批状态",field:"aprvStatus",type:"select",dataCode:"APRV_STATUS"}],queryButtons:[{label:"查询",op:"submit",type:"primary",icon:"search",click:function(e,a){a&&s.$refs.reftable.remoteData(e)}},{label:"重置",op:"reset",type:"primary",icon:"yx-loop2"}],tableColumns:[{label:"申请流水号",prop:"bizSerno",sortable:!0,resizable:!0},{label:"单位注册类型",prop:"typeId",sortable:!0,resizable:!0,dataCode:"STD_ZB_REG_TYPE_REVENUE"},{label:"当前/调整前系数",prop:"coefficient",sortable:!0,resizable:!0},{label:"调整后系数",prop:"newCoefficient",sortable:!0,resizable:!0},{label:"审批状态",prop:"aprvStatus",sortable:!0,resizable:!0,dataCode:"APRV_STATUS"},{label:"法人机构代码",prop:"legalOrgCode",sortable:!0,resizable:!0},{label:"创建人",prop:"createUser",sortable:!0,resizable:!0},{label:"创建日期",prop:"createTime",sortable:!0,resizable:!0},{label:"最后修改人",prop:"lastUpdateUser",sortable:!0,resizable:!0},{label:"最后修改日期",prop:"lastUpdateTime",sortable:!0,resizable:!0}],height:yufp.custom.viewSize().height-120,mainGrid:{data:null,loading:!1},paramType:null,dialogVisible:!1}},methods:{checkPermission:function(e){return!yufp.session.checkCtrl(e,s.menuId)},modifyFn:function(){var i=this;i.dialogVisible=!0;var e=backend.consoleService+"/api/prd/coeff/cfgs";i.mainGrid.loading=!0,yufp.lookup.bind("STD_ZB_REG_TYPE_REVENUE",function(e){i.paramType=yufp.lookup.find("STD_ZB_REG_TYPE_REVENUE",!1)}),this.$nextTick(function(){yufp.service.request({method:"POST",url:e,data:{flag:"disPlay"},callback:function(e,a,s){if(i.mainGrid.loading=!1,0==e){var l=s.data;i.mainGrid.data=l,i.coeffLoading=!1}else i.$message(s.message)}})})},commitFn:function(){var i=this,e={list:i.mainGrid.data},a=backend.consoleService+"/api/coeff/cfg/app/commit";null!=e?yufp.service.request({method:"POST",url:a,data:e,callback:function(e,a,s){if(0==e){var l=s.code;s&&-3==l?(i.$refs.reftable.remoteData(),i.$message({message:s.message,type:"warning"})):"-1"==l?i.$message(s.message):"-2"==l?i.$message(s.message):("-4"==l?i.$message(s.message):i.$message({message:"提交成功!",type:"success"}),i.dialogVisible=!1)}else i.$message({message:"提交失败!",type:"warning"})}}):i.$message("操作失败！")}}})},a.onmessage=function(e,a){},a.destroy=function(e,a){}});