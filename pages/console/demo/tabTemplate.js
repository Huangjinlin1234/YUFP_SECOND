/**
 * @create by fuzm on 2018-05-04
 * @description 模板二
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
          activeName: 'first',
          dataUrl: backend.ocaService + '/api/adminsmcrelstra/getall',
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
          ],
          formdata: {}
        };
      },
      mounted: function () {

      },
      methods: {
        viewFn () {
          this.$refs.reform.formdata = yufp.util.clone({ oprType: '正常', prpId: '9999' });
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
