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
          dataUrl: '',
          baseParams: {},
          queryFields: [
            { placeholder: '字典名称', field: 'orgCode', type: 'input' },
            { placeholder: '字典分类', field: 'orgName', type: 'input' }
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
          tableData: [
            {crelName: '多福多寿'}
          ],
          tableColumns: [
            { label: '字典名称', prop: 'crelName' },
            { label: '字典代码', prop: 'crelDescribe', sortable: true, resizable: true },
            { label: '字典分类', prop: 'actionType', sortable: true, resizable: true, dataCode: 'ORG_LEVEL' },
            { label: '操作',
              prop: 'crelDetail',
              resizable: true,
              template: function () {
                return '<template scope="scope">\
                <yu-button type="text">新增字典项</yu-button>\
                <yu-button  type="text">更多</yu-button>\
              </template>';
              } }
          ]
        };
      },

      methods: {
        deleteFn () {

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
