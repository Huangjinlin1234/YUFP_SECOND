/**
 * @create by fuzm on 2018-05-04
 * @description 策略管理
 */
define([
  './custom/widgets/js/panel.js',
  './custom/widgets/js/UserSelecter.js'

], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
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
              { field: 'yourField',
                label: '自定义',
                type: 'custom',
                is: 'div-user-selector' }
            ]
          }, {
            columnCount: 1,
            fields: [
              { field: 'remark', label: '点评', type: 'textarea', rows: 3 }
            ]
          }]
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
