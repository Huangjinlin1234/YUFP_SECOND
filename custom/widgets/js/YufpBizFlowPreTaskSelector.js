/**
 * yufp-demo-selector
 * 注：自定义组件规范：
 * 1、对外默认提供v-model配置,raw-value
 * 2、对外提供readonly、disabled、size属性
 * 3、对外接口事件：select-fn,具体参数请自定义
 * Created by helin3 on 2017/12/15.
 */
(function (vue, $, name) {
    vue.component(name, {
        template: '<div>\
            <el-input v-model="selectedVal" readonly :placeholder="placeholder" :disabled="disabled"\
            :size="size" :name="name" :icon="icon" :on-icon-click="onIconClickFn" @click.native="clickFn">\
            </el-input>\
            <el-dialog-x title="节点前置任务选择器" :visible.sync="dialogVisible" >\
              <el-table-x ref="retable" :data-url="dataUrl" :baseParams="baseParams"  @row-click="rowClickFn"\
                :table-columns="tableColumns" :max-height="300" request-type="POST">\
              </el-table-x>\
              <div slot="footer" class="dialog-footer">\
                <el-button @click="dialogVisible = false">取 消</el-button>\
                <el-button type="primary" @click="confirmFn">确 定</el-button>\
              </div>\
            </el-dialog-x>\
          </div>',

        props: {
            // 下述字段为el-input组件中部分属性，配置文档参见element-ui
            name: {
                type: String
            },
            value: {
                required: true
            },
            rawValue: String,
            size: String,
            disabled: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: ''
            },
            icon: {
                type: String,
                default: 'search'
            },
            params: Object
        },
        data: function () {
            return {
                selectedVal: '',
                dialogVisible: false,

                baseParams: {
                	bizNodeId: (this.params && this.params.bizNodeId) || ''
                },
                dataUrl: backend.flowService + '/api/biz/flow/pertasks',
                tableColumns: [
                    { label: '任务编号', prop: 'taskId'},
                    { label: '任务名称', prop: 'taskName'},
                    { label: '前置任务编号', prop: 'previousTaskId'},
                    { label: '业务节点标识', prop: 'bizNodeId'},
                    { label: '业务节点名称', prop: 'bizNodeName'}
                ]
            }
        },
        methods: {
            clickFn: function () {
                this.$emit('click-fn', this);
            },
            onIconClickFn: function (val) {
                if (this.disabled){
                    return;
                }
                this.dialogVisible = true;
            },
            rowClickFn: function (row) {
                this.selections = this.$refs.retable.selections;
            },
            confirmFn: function () {
                if(this.selections.length<1){
                    this.$message('请先选择一条数据');
                }
                this.selectedVal = this.selections[0].taskId;
                this.$emit('input', this.selections[0].taskId);
                //这个是你自定义返回的接口事件
                this.$emit('select-fn', this.selections[0].taskId,this.selections[0]);
                this.dialogVisible = false;
            },
            // 对外提供选择器显示值
            getRawValue: function () {
                return this.selectedVal;
            },
            convertKey: function (val) {
                //将key转换为对应的value值
                return val;
            }

        },
        mounted: function () {
            this.selectedVal = this.rawValue ? this.rawValue: this.value;
        },
        watch: {
            value: function (val) {
                //将key转换为对应的value值
                this.selectedVal = this.selectedVal ? this.selectedVal : val;
            },
            rawValue: function (val) {
                this.selectedVal = val
            }
        }

    });
})(Vue, yufp.$, 'yufp-biz-flow-pre-task-selector');


