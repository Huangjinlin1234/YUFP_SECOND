/**
 * @create by xxx on 2018-xx-xx
 * @description xx
 */
 define(function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    // yufp.lookup.reg('CRUD_TYPE,NATIONALITY,PUBLISH_STATUS');
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
          activeName: '1',
          formdata: {},
          fields: [
            { label: '预警信号编号', prop: '' },
            { label: '预警信息', prop: '' },
            { label: '处理情况', prop: '' },
            { label: '备注', prop: '' }
          ],
          fields1: [
            { label: '借据编号', prop: '' },
            { label: '支付日期', prop: '' },
            { label: '支付金额', prop: '' },
            { label: '收款账号', prop: '' },
            { label: '收款人', prop: '' },
            { label: '用途', prop: '' }
          ],
          fields2: [
            { label: '借据编号', prop: '' },
            { label: '支付日期', prop: '' },
            { label: '支付金额', prop: '' },
            { label: '用途', prop: '' },
            { label: '备注', prop: '' }
          ],
          updateFields: [
            {
              columnCount: 1,
              fields: [
                { 
                  field: 'remark',
                  label: '用途检查要求',
                  type: 'textarea',
                  rows: 3,
                  rules: [
                    { required: true, message: '必填项', trigger: 'blur' }
                  ]
                }
              ]
            },
            {
              columnCount: 2,
              fields: [
                { field: 'status', label: '是否落实', type: 'select', dataCode: '' }
              ]
            }, 
            {
              columnCount: 1,
              fields: [
                { 
                  field: 'remark',
                  label: '落实情况',
                  type: 'textarea',
                  rows: 3,
                  rules: [
                    { required: true, message: '必填项', trigger: 'blur' }
                  ]
                }
              ]
            }
          ],
          updateFields1: [
            {
              columnCount: 2,
              fields: [
                { 
                  field: 'status',
                  label: '贷款用途是否符合我行规定',
                  type: 'select',
                  dataCode: '',
                  rules: [
                    { required: true, message: '必填项', trigger: 'blur' }
                  ]
                }
              ]
            },
            {
              columnCount: 1,
              fields: [
                { 
                  field: 'remark',
                  label: '具体问题',
                  type: 'textarea',
                  rows: 3,
                  rules: [
                    { required: true, message: '必填项', trigger: 'blur' }
                  ]
                }
              ]
            },
            {
              columnCount: 1,
              fields: [
                { 
                  field: 'remark',
                  label: '具体措施',
                  type: 'textarea',
                  rows: 3,
                  rules: [
                    { required: true, message: '必填项', trigger: 'blur' }
                  ]
                }
              ]
            }
          ],
          updateFields2: [
            {
              columnCount: 1,
              fields: [
                { 
                  field: 'remark',
                  label: '经办客户经理意见',
                  type: 'textarea',
                  rows: 3,
                  rules: [
                    { required: true, message: '必填项', trigger: 'blur' }
                  ]
                }
              ]
            }
          ]
        };
      },
      methods: {
        addSign() {
          console.log('12121211212');
        },
        addFn() {
          console.log('asdadad');
        },
        modifyFn() {
          console.log('asdadad');
        },
        deleteFn() {
          console.log('asdadad');
        },
        view() {
          console.log('asdadad');
        }
      }
    });
  };
});