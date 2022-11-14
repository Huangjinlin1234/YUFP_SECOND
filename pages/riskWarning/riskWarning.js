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
            { label: '预警信号编号', prop: '' },
            { label: '模型名称', prop: '' },
            { label: '二级主题名称', prop: '' },
            { label: '信号名称', prop: '' },
            { label: '预警等级', prop: '' },
            { label: '预警信号状态', prop: '' },
            { label: '预警对象类型', prop: '' },
            { label: '客户编号', prop: '' },
            { label: '客户名称', prop: '' },
            { label: '证件类型', prop: '' },
            { label: '证件号码', prop: '' },
            { label: '所属机构', prop: '' },
            { label: '预警方式', prop: '' },
            { label: '预警类型', prop: '' },
            { label: '模型分值', prop: '' },
            { label: '预警日期', prop: '' },
            { label: '状态更新日期', prop: '' }
          ]
        };
      },
      methods: {

      }
    });
  };
});