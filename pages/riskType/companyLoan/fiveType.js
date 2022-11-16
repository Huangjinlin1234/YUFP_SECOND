/**
 * @create by fuzm on 2018-05-04
 * @description 策略管理
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
        return {
          formdata: { },
          dataUrl: backend.ocaService + '/api/adminsmcrelstra/getall',
          current: '1',
          currentKey: '1',
          treeData: [
            { id: '0', label: '五级分类认定', pid: '-1' },
            { id: '1', label: '任务基本信息', pid: '0' },
            { id: '2', label: '五级分类认定', pid: '0' },
            { id: '3', label: '影像资料', pid: '0' }
          ],
          updateFields: [{
            columnCount: 2,
            fields: [
              { field: 'author', label: '机评分类结果' },
              { field: 'title',
                label: '人工分类结果',
                type: 'select',
                dataCode: 'NATIONALITY',
                rules: [
                  { required: true, message: '必填项', trigger: 'blur' }
                ]
              }
            ]
          }, {
            columnCount: 1,
            fields: [
              { field: 'remark', 
                label: '人工分类理由', 
                type: 'textarea', 
                rows: 3,
                rules: [
                  { required: true, message: '必填项', trigger: 'blur' }
                ]
              }
            ]
          }],
          tableColumns: [
            { label: '借据编号', prop: 'crelName' },
            { label: '合同编号', prop: 'crelName' },
            { label: '产品名称', prop: 'crelName' },
            { label: '贷款金额', prop: 'crelName' },
            { label: '贷款余额', prop: 'crelName' },
            { label: '贷款起始日', prop: 'crelName' },
            { label: '贷款到期日', prop: 'crelName' },
            { label: '逾期天数', prop: 'crelName' },
            { label: '担保方式', prop: 'crelName' },
            { label: '五级分类', prop: 'crelName' },
            { label: '上次五级分类', prop: 'crelName' },
            { label: '上次五级分类时间', prop: 'crelName' }
          ]
        };
      },
      mounted: function () {

      },
      methods: {
        nodeClick (node) {
          console.log(node, 'ddd');
          this.current = node.id;
        },
        save () {
          console.log('dsadasd');
        },
        submit () {
          console.log('dsadasd');
        },
        back () {
          yufp.router.to('companyLoan', {}, 'yu-idxTabBox');
        },
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
