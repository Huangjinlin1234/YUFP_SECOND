/**
 * @create by xxx on 2018-xx-xx
 * @description xx
 */
define([
  './custom/widgets/js/panel.js'

], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    // yufp.lookup.reg('CRUD_TYPE,NATIONALITY,PUBLISH_STATUS');
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
          formdata1: {},
          tableTitle: [
            { label: '借据编号', prop: '' },
            { label: '合同编号', prop: '' },
            { label: '客户编号', prop: '' },
            { label: '客户名称', prop: '' },
            { label: '产品名称', prop: '' },
            { label: '发放日期', prop: '' },
            { label: '放款金额', prop: '' },
            { label: '贷款余额', prop: '' },
            { label: '贷款形态', prop: '' },
            { label: '五级分类', prop: '' },
            { label: '分类时间', prop: '' },
            { label: '所属机构', prop: '' }
          ]
        };
      },
      methods: {
        exportFn () {
          console.log('123121313');
        }
      }
    });
  };
});