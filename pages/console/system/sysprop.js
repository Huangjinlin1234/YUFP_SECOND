/**
 * @create by fuzm on 2018-05-04
 * @description 系统机构表
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
        var _self = this;
        return {
          dataUrl: backend.ocaService + '/api/adminsmcrelstra/getall',
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
            { label: '重置', op: 'reset', type: 'primary', icon: 'yx-loop2' }
          ],
          tableColumns: [
            { label: '参数名', prop: 'propName' },
            { label: '参数值', prop: 'propValue', sortable: true, resizable: true, width: 300 },
            { label: '参数描述', prop: 'propDesc', sortable: true, resizable: true, dataCode: 'ORG_LEVEL', width: 100 },
            { label: '最近更新', prop: 'lastChgDt', sortable: true, resizable: true, dataCode: 'ORG_LEVEL', width: 100 },
            { label: '操作',
              prop: 'crelDetail',
              resizable: true,
              template: function () {
                return '<template scope="scope">\
              <yu-button type="text">修改</yu-button>\
              <yu-button  type="text">删除</yu-button>\
            </template>';
              } }
          ]
        };
      },

      methods: {

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
