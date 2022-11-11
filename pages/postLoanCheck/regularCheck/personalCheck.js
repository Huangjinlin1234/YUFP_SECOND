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
          options: [
            { key: '1', value: '现场检查' },
            { key: '2', value: '非现场检查' },
          ],
          fields: [
            { label: '借据编号', prop: '' },
            { label: '借据起始日', prop: '' },
            { label: '借据到期日', prop: '' },
            { label: '放款金额', prop: '' },
            { label: '贷款金额', prop: '' },
            { label: '是否逾期', prop: '' },
            { label: '贷款首次逾期时间', prop: '' },
            { label: '逾期天数', prop: '' }
          ],
          fields1: [
            { label: '预警信号编号', prop: '' },
            { label: '预警信息', prop: '' },
            { label: '处理情况', prop: '' },
            { label: '备注', prop: '' }
          ],
          updateFields: [
            {
              columnCount: 1,
              fields: [
                { 
                  field: 'remark',
                  label: '批复要求',
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
                  label: '贷后检查情况',
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
              columnCount: 1,
              fields: [
                { 
                  field: 'remark',
                  label: '其他贷后检查情况',
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
              columnCount: 2,
              fields: [
                { 
                  field: 'status',
                  label: '是否存在其他异常情况',
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
                  label: '产生异常情况原因',
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
                  label: '采取的风控措施',
                  type: 'textarea',
                  rows: 3,
                  rules: [
                    { required: true, message: '必填项', trigger: 'blur' }
                  ]
                }
              ]
            }
          ],
          updateFields3: [
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
                },
                { 
                  field: 'remark',
                  label: '贷后管理监督等级',
                  type: 'checkbox',
                  dataCode: '',
                  dataUrl:'trade/example/checkbox',
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