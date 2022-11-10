/**
 * @create
 * @description
 */
define([
  './custom/widgets/js/sympleAdd.js'
], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    yufp.lookup.reg('CRUD_TYPE,ORG_LEVEL,STD_ORG_STATUS,STD_YES_NO');
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
          title: '标题',
          formFields: [
            {label: '客户分类', ctype: 'select', name: 'custType', options: [{key: '1', value: '一类'}, {key: '12', value: '二类'}] },
            {label: '证件类型', ctype: 'select', name: 'cerType', options: [{key: '1', value: '一类'}, {key: '12', value: '二类'}] },
            {label: '证件号码', ctype: 'input', name: 'cerNo' },
            {label: '客户名称', ctype: 'input', name: 'custName' },
            {label: '业务类型', ctype: 'select', name: 'bizType', options: [{key: '1', value: '一类'}, {key: '12', value: '二类'}] }
          ],
          rules: {
            'custType': [{required: true, message: '必填项'}],
            'cerType': [{required: true, message: '必填项'}],
            'cerNo': [{required: true, message: '必填项'}],
            'custName': [{required: true, message: '必填项'}]
          }
        };
      },
      mounted: function () {

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
