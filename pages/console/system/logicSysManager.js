/**
 * @create
 * @description
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
          dataUrl: backend.ocaService + '/api/adminsmcrelstra/getall',
          baseParams: {},
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
            { label: '策略详情', prop: 'crelDetail', resizable: true, hidden: true },
            { label: '详情保存',
              prop: 'orgTel',
              resizable: true,
              template: function () {
                return '<template scope="scope">\
                <yu-button type="text" @click="_$event(\'custom-row-click\',scope)">保存</yu-button>\
              </template>';
              } }
          ]
        };
      },
      mounted: function () {
      },
      methods: {
        saveFn (row) {
          console.log(row, 'rowwwwwthisis.row');
          this.$message.success('保存成功');
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
