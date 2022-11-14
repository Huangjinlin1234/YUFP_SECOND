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
            { key: '01', value: '01-未完成' },
            { key: '02', value: '02-已完成' }
          ],
          tableTitle: [
            { label: '任务编号', prop: '' },
            { label: '客户编号', prop: '' },
            { label: '客户名称', prop: '' },
            { label: '任务来源', prop: '' },
            { label: '正常本金', prop: '' },
            { label: '逾期本金', prop: '' },
            { label: '拖欠利息总额', prop: '' },
            { label: '任务生成日期', prop: '' },
            { label: '任务完成截止日期', prop: '' },
            { label: '任务执行人', prop: '' },
            { label: '所属机构', prop: '' },
            { label: '催收状态', prop: '' }
          ]
        };
      },
      methods: {
        registration() {
          console.log('123121313');
        },
        view() {
          console.log('123121313');
        },
        back() {
          console.log('123121313');
        },
        exportFn() {
          console.log('123121313');
        }
      }
    });
  };
});