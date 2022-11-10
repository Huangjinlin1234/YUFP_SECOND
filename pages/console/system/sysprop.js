/**
 * @create
 * @description 系统机构表
 */
define([
  './custom/widgets/js/OrgCtrlSelector.js',
  './custom/widgets/js/panel.js'

], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        var _self = this;
        return {
          dataUrl: backend.ocaService + '/api/adminSmProp/queryAll',
          baseParams: {},
          queryFields: [
            { placeholder: '参数名', field: 'orgCode', type: 'input' },
            { placeholder: '参数描述', field: 'orgName', type: 'input' }
          ],
          queryButtons: [
            { label: '查询',
              op: 'submit',
              type: 'primary',
              icon: 'search',
              click: function (model, valid) {
                if (valid) {
                  _self.$refs.reftable.remoteData(model);
                }
              } },
            { label: '重置', op: 'reset', icon: 'yx-loop2' }
          ],
          updateFields: [{
            columnCount: 1,
            fields: [
              { field: 'propName',
                label: '参数名',
                rules: [
                  { required: true, message: '必填项', trigger: 'blur' }
                ]}

            ]
          }, {
            columnCount: 1,
            fields: [
              { field: 'propValue',
                label: '参数值',
                rules: [
                  { required: true, message: '必填项', trigger: 'blur' }
                ]
              }
            ]
          },
          {
            columnCount: 1,
            fields: [ { field: 'remark',
              label: '参数描述',
              rules: [
                { required: false, trigger: 'blur' }
              ] } ]
          } ],

          tableColumns: [
            { label: '参数名', prop: 'propName' },
            { label: '参数值', prop: 'propValue', sortable: true, resizable: true, width: 300 },
            { label: '参数描述', prop: 'propDesc', sortable: true, resizable: true, width: 100 },
            { label: '最近更新', prop: 'lastChgDt', sortable: true, resizable: true, width: 100 }
          ],
          sysPropFormdata: {}, // 查询系统参数table的过滤条件表单数据
          editSysPropFormData: {}, // 编辑(新增/修改)系统参数表单数据
          isShowEditSysPropDialog: false, // 是否显示编辑(即新增或修改)系统参数的弹窗
          viewType: 'DETAIL', // 表单操作状态
          viewTitle: {
            'ADD': '新增',
            'EDIT': '修改',
            'DETAIL': '详情'
          }
        };
      },

      methods: {
        addFn () {
          this.viewType = 'ADD';
          this.isShowEditSysPropDialog = true;
        },
        editFn (row) {
          console.log(row, 'rr');
          this.viewType = 'EDIT';
          this.isShowEditSysPropDialog = true;
          this.$nextTick(()=>{
            console.log(this.$refs.reform, 'this.$refs.reform');
            this.$refs.reform.formModel = row;
          });
        },
        deleteFn () {
          this.$confirm('确定删除该数据吗？', '提示', {
            type: 'warning'
          }).then(()=>{
            yufp.service.request({
              method: 'POST',
              url: '',
              callback: function (code, message, response) {
                if (code === '0') {
                  console.log(response, 'response');
                }
              }
            });
          });
        },
        close () {
          this.$refs.reform.resetFn();
        },
        closeFn () {
          this.isShowEditSysPropDialog = false;
        },
        saveSysProp () {
          this.$refs.reform.validate(valid=>{
            if (valid) {
              this.isShowEditSysPropDialog = false;
            }
          });
        }
      }
    });
  };
  // 消息处理
  exports.onmessage = function (type, message) {

  };
  // page销毁时触发destroy方法
  exports.destroy = function (id, cite) {

  };
});
