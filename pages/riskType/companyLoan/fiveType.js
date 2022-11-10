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
                ]},
              // { field: 'pageviews',
              //   label: '阅读数',
              //   rules: [
              //     { validator: yufp.validator.number, message: '数字', trigger: 'blur' }
              //   ]
              // },
              // { field: 'yourField', label: '自定义', type: 'custom', is: 'yufp-demo-selector' }
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
            { label: '上次五级分类时间', prop: 'crelName' },
            // { label: '策略描述', prop: 'crelDescribe', sortable: true, resizable: true },
            // { label: '策略分类', prop: 'actionType', sortable: true, resizable: true, dataCode: 'ORG_LEVEL' },
            // { label: '是否启用',
            //   prop: 'enableFlag',
            //   resizable: true,
            //   hidden: false,
            //   template: function () {
            //     return '<template scope="scope">\
            //     <yu-switch   v-model="scope.row.enableFlag" ></yu-switch>\
            //   </template>';
            //   } },
            // { label: '策略详情', prop: 'crelDetail', resizable: true, hidden: true }
          ]
        };
      },
      mounted: function () {

      },
      methods: {
        view () {
          this.$refs.refForm.formdata = {title: '111'};
        },
        nodeClick (node) {
          console.log(node, 'ddd');
          this.current = node.id;
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
