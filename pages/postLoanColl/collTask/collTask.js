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
            { label: '任务编号', prop: '' },
            { label: '任务生成日期', prop: '' },
            { label: '任务完成截止日期', prop: '' },
            { label: '派发人所属机构', prop: '' },
            { label: '任务派发人', prop: '' },
            { label: '是否已下发', prop: '' },
            { label: '任务下发日期', prop: '' }
          ]
        };
      },
      methods: {
        add() {
          yufp.router.to('addTask1', {}, 'yu-idxTabBox');
        },
        view() {
          console.log('123121313');
        }
      }
    });
  };
});