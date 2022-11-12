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
              { field: 'yourField', label: '任务生成日期' },
              { field: 'author', label: '是否已下发' },
              { field: 'auditor', label: '任务下发日期' },
              { field: 'type', label: '任务派发人' },
              { field: '', label: '派发人所属机构' },
              { field: 'status', 
                label: '任务完成截止日期', 
                type: 'date',
                rules: [
                  { required: true, message: '必填项', trigger: 'blur' }
                ]
              }
            ]
          }],
          updateFields1: [{
            columnCount: 2,
            fields: [
              { field: 'title', label: '登记人' },
              { field: 'create_at', label: '登记机构' },
              { field: 'author', label: '管户人' },
              { field: 'auditor', label: '管户机构' },
              { field: 'type', label: '登记时间' }
            ]
          }]
        };
      },
      methods: {
        back() {
          yufp.router.to('IrregularCheckIssue', {}, 'yu-idxTabBox');
        }
      }
    });
  };
});