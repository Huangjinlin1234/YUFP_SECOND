/**
 * @create by xxx on 2018-xx-xx
 * @description xx
 */
 define([
  './custom/widgets/js/UserSelecter.js',
  './custom/widgets/js/panel.js'
], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    // yufp.lookup.reg('CRUD_TYPE,NATIONALITY,PUBLISH_STATUS');
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
          updateFields: [{
            columnCount: 2,
            fields: [
              { field: 'title', label: '任务编号' },
              { field: 'yourField', label: '检查类型' },
              { field: 'author', label: '客户编号', type: 'custom', is: 'div-user-selector',
                rules: [
                  { required: true, message: '必填项', trigger: 'blur' }
                ]
              },
              { field: 'auditor', label: '客户名称' },
              { field: 'type', label: '任务生成日期' },
              { field: '', label: '任务完成截止日期', type: 'date',
                rules: [
                  { required: true, message: '必填项', trigger: 'blur' }
                ]
              },
              { field: '', label: '任务执行人' },
              { field: '', label: '所属机构' },
              { field: '', label: '检查状态' }
            ]
          }],
        };
      },
      methods: {
        save() {
          console.log('21312dada');
        },
        back() {
          yufp.router.to('addTask', {}, 'yu-idxTabBox');
        }
      }
    });
  };
});