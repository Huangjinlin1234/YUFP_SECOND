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
          options: [
            { key: '01', value: '不愿还款' },
            { key: '02', value: '答应还款' },
            { key: '03', value: '风险客户' },
            { key: '04', value: '未能联系' },
            { key: '05', value: '未确定还款' },
            { key: '06', value: '其他' }
          ],
          tableTitle: [
            { label: '任务编号', prop: '' },
            { label: '借据编号', prop: '' },
            { label: '合同编号', prop: '' },
            { label: '客户编号', prop: '' },
            { label: '客户名称', prop: '' },
            { label: '所属机构', prop: '' },
            { label: '逾期天数', prop: '' },
            { label: '电催日期', prop: '' },
            { label: '电催时逾期天数', prop: '' },
            { label: '催收代码分类', prop: '' },
            { label: '是否无效电话', prop: '' }
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