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
              { field: 'title', label: '申请流水号' },
              { field: 'yourField', label: '借据编号', type: 'custom', is: 'div-user-selector' },
              { field: 'author', label: '客户编号' },
              { field: 'auditor', label: '客户名称' },
              { field: 'type', label: '证件类型' },
              { field: '', label: '证件号码' },
              { field: '', label: '产品名称' },
              { field: '', label: '合同编号' },
              { field: '', label: '调整前五级分类' },
              { field: 'status', 
                label: '调整后五级分类', 
                type: 'select',
                dataCode: '',
                rules: [
                  { required: true, message: '必填项', trigger: 'blur' }
                ]
              },
              { field: '', label: '人工调整有效期至' }
            ]
          }, {
            columnCount: 1,
            fields: [
              { field: 'remark', 
                label: '申请调整理由', 
                type: 'textarea', 
                rows: 3,
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
        save () {
          console.log('dsadasd');
        },
        submit () {
          console.log('dsadasd');
        },
        back() {
          yufp.router.to('riskAdjust', {}, 'yu-idxTabBox');
        }
      }
    });
  };
});