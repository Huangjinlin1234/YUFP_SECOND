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
            { placeholder: '信息码', field: 'orgCode', type: 'input' },
            { placeholder: '提示内容', field: 'orgName', type: 'input' }
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
            { label: '信息码', prop: 'code' },
            { label: '提示内容', prop: 'message', resizable: true },
            { label: '信息级别', prop: 'messageLevel', resizable: true, dataCode: 'ORG_LEVEL' },
            { label: '消息类别', prop: 'messageType', resizable: true, dataCode: 'ORG_LEVEL' },
            { label: '所属模块名称', prop: 'funcName', resizable: true, dataCode: 'ORG_LEVEL' },
            { label: '操作',
              prop: 'crelDetail',
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
