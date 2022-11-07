/**
 * @create by fuzm on 2018-05-04
 * @description 策略管理
 */
define([
  './custom/widgets/js/OrgCtrlSelector.js',
  './custom/widgets/js/panel.js'
], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    yufp.lookup.reg('CRUD_TYPE,ORG_LEVEL,STD_ORG_STATUS,STD_YES_NO');
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
          formdata: { },
          dataUrl: backend.ocaService + '/api/adminsmcrelstra/getall',
          current: '1',
          currentKey: '1',
          treeData: [
            { id: '0', label: '同业机构准入申报', pid: '-1' },
            { id: '1', label: '1-1', pid: '0' },
            { id: '2', label: '1-2', pid: '0' },
            { id: '3', label: '1-3', pid: '0' }

          ],
          updateFields: [{
            columnCount: 2,
            fields: [
              { field: 'title',
                label: '名称',
                rules: [
                  { required: true, message: '必填项', trigger: 'blur' }
                ]},
              { field: 'create_at', label: '时间', type: 'date' },
              { field: 'author', label: '作者' },
              { field: 'auditor', label: '审核人' },
              { field: 'type', label: '类型', type: 'select', dataCode: 'NATIONALITY' },
              { field: 'status', label: '状态', type: 'select', dataCode: 'PUBLISH_STATUS' },
              { field: 'pageviews',
                label: '阅读数',
                rules: [
                  { validator: yufp.validator.number, message: '数字', trigger: 'blur' }
                ]
              },
              { field: 'yourField', label: '自定义', type: 'custom', is: 'yufp-demo-selector' }
            ]
          }, {
            columnCount: 1,
            fields: [
              { field: 'remark', label: '点评', type: 'textarea', rows: 3 }
            ]
          }],
          tableColumns: [
            { label: '策略名称', prop: 'crelName' },
            { label: '策略描述', prop: 'crelDescribe', sortable: true, resizable: true },
            { label: '策略分类', prop: 'actionType', sortable: true, resizable: true, dataCode: 'ORG_LEVEL' },
            { label: '是否启用',
              prop: 'enableFlag',
              resizable: true,
              hidden: false,
              template: function () {
                return '<template scope="scope">\
                <yu-switch   v-model="scope.row.enableFlag" ></yu-switch>\
              </template>';
              } },
            { label: '策略详情', prop: 'crelDetail', resizable: true, hidden: true }
          ]
        };
      },
      mounted: function () {

      },
      methods: {
        view () {
          this.$refs.refForm.formdata = {title: '111'};
        },
        nodeClick (node) {
          console.log(node, 'ddd');
          this.current = node.id;
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
