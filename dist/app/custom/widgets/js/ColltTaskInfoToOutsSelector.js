var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,a,l){yufp.lookup.reg("STD_RISK_LEVEL,STD_COLLT_WAY,IDENT_WAY,COLLT_TASK_STATUS"),e.component("div-colltTaskInfoToOuts-selector",{template:'<div>            <el-input v-model="selectedVal" readonly :placeholder="placeholderInner" :disabled="disabled"            :size="size" :name="name" :icon="icon" :on-icon-click="onIconClickFn" @click.native="clickFn">            </el-input>            <el-dialog title="催收任务" :visible.sync="dialogVisible" size="large">               <el-form-q ref="queryForm" v-if="queryFlag" @search-click="queryClick" :field-data="queryFields"></el-form-q>              <el-table-x ref="mytable" :data-url="dataUrl" @row-click="rowClickFn" :default-load="false"                :table-columns="tableColumns" v-loading="myLoading" @loaded="tableLoaded" request-type="POST">              </el-table-x>              <div slot="footer" class="dialog-footer">                <el-button type="primary" @click="confirmFn">确 定</el-button>                <el-button @click="dialogVisible = false">取 消</el-button>              </div>            </el-dialog>          </div>',props:{name:{type:String},value:{required:!0},rawValue:String,size:String,disabled:{type:Boolean,default:!1},placeholder:{type:String,default:"催收任务编号"},icon:{type:String,default:"search"},params:Object},data:function(){return{selections:[],fixedParams:{},queryFlag:!0,myLoading:!0,colltWay:this.params&&this.params.colltWay||"",colltBatchNo:this.params&&this.params.colltBatchNo||"",outsHdleType:this.params&&this.params.outsHdleType||"",outsOrgCode:this.params&&this.params.outsOrgCode||"",myBaseParams:{},placeholderInner:null!=this.params&&null!=this.params.placeholder?this.params.placeholder:this.placeholder,queryFields:[{placeholder:"催收任务编号",field:"colltTaskNo",type:"input"},{placeholder:"借据编号",field:"loanNo",type:"input"},{placeholder:"风险等级",field:"riskLevel",type:"select",dataCode:"STD_RISK_LEVEL",hidden:!0},{placeholder:"任务状态",field:"taskSts",type:"select",dataCode:"COLLT_TASK_STATUS",hidden:!0}],selectedVal:"",dialogVisible:!1,dataUrl:backend.riskmService+"/api/qry/collt/task/infos/outs",tableColumns:[{label:"催收任务编号",prop:"colltTaskNo",sortable:!0,resizable:!0,hidden:!1},{label:"分配批次",prop:"colltBatchNo",sortable:!0,resizable:!0,hidden:!1},{label:"委外机构编号",prop:"outsOrgCode",sortable:!0,resizable:!0,hidden:!1},{label:"委外机构名称",prop:"outsOrgName",sortable:!0,resizable:!0,hidden:!1},{label:"客户编号",prop:"cusId",sortable:!0,resizable:!0,hidden:!1},{label:"客户名称",prop:"cusName",sortable:!0,resizable:!0,hidden:!1},{label:"借据编号",prop:"loanNo",sortable:!0,resizable:!0,hidden:!1},{label:"逾期金额",prop:"overLmt",sortable:!0,resizable:!0,hidden:!1},{label:"逾期天数",prop:"overDays",sortable:!0,resizable:!0,hidden:!0},{label:"逾期期数",prop:"overNper",sortable:!0,resizable:!0,hidden:!0},{label:"风险等级",prop:"riskLevel",sortable:!0,resizable:!0,hidden:!0,dataCode:"STD_RISK_LEVEL"},{label:"风险类型",prop:"riskType",sortable:!0,resizable:!0,hidden:!0,dataCode:""},{label:"催收方式",prop:"colltWay",sortable:!0,resizable:!0,hidden:!0,dataCode:"STD_COLLT_WAY"},{label:"委外经手类型",prop:"outsHdleType",sortable:!0,resizable:!0,hidden:!0},{label:"识别方式",prop:"identWay",sortable:!0,resizable:!0,hidden:!0,dataCode:"IDENT_WAY"},{label:"任务状态",prop:"taskSts",sortable:!0,resizable:!0,hidden:!0,dataCode:"COLLT_TASK_STATUS"},{label:"入催时间",prop:"createTime",sortable:!0,resizable:!0,hidden:!0},{label:"操作员",prop:"opUserCode",sortable:!0,resizable:!0,hidden:!1},{label:"操作员所属机构",prop:"opOrgCode",sortable:!0,resizable:!0,hidden:!1}]}},methods:{tableLoaded:function(){this.$nextTick(function(){this.myLoading=!1})},clickFn:function(){this.$emit("click-fn",this)},onIconClickFn:function(e){this.disabled||this.params&&"function"==typeof this.params.baseParams&&(this.fixedParams=this.params.baseParams(),!1===this.fixedParams)||(this.queryFlag=!1,this.dialogVisible=!0,this.$nextTick(function(){this.queryFlag=!0,this.myLoading=!0,this.selections=[],this.$refs.mytable.remoteData(this.fixedParams)}))},queryClick:function(e,a){if(a){var l={};null!=this.myBaseParams&&"object"==_typeof(this.myBaseParams)&&yufp.extend(l,this.myBaseParams),yufp.extend(l,e),null!=this.fixedParams&&"object"==_typeof(this.fixedParams)&&yufp.extend(l,this.fixedParams),this.myLoading=!0,this.selections=[],this.$refs.mytable.remoteData(l)}},rowClickFn:function(e){this.selections=this.$refs.mytable.selections},confirmFn:function(){this.selections.length<1?this.$message("请先选择一条数据"):(this.selectedVal=this.selections[0].colltTaskNo,this.$emit("input",this.selections[0].colltTaskNo),this.params&&"function"==typeof this.params.valid&&0==this.params.valid()?this.selectedVal="":(this.$emit("select-fn",this.selections[0].colltTaskNo,this.selections[0]),this.dialogVisible=!1))},getRawValue:function(){return this.selectedVal},convertKey:function(e){return e}},mounted:function(){if(this.selectedVal=this.rawValue?this.rawValue:this.value,void 0!==this.params&&null!=this.params){var e=this.params.dataUrl;void 0!==e&&null!=e&&""!=e&&(this.dataUrl=e)}},watch:{value:function(e){this.params&&"CNNAME"==this.params.showType||(this.selectedVal=e)},rawValue:function(e){this.selectedVal=e},params:function(e){this.params=e,this.myBaseParams={colltWay:this.params.colltWay,colltBatchNo:this.params.colltBatchNo,outsHdleType:this.params.outsHdleType,outsOrgCode:this.params.outsOrgCode},this.$refs.mytable.remoteData(this.myBaseParams)}}})}(Vue,yufp.$);