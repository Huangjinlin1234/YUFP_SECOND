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
          tableTitle: [
            { label: '借据编号', prop: '' },
            { label: '合同编号', prop: '' },
            { label: '产品名称', prop: '' },
            { label: '贷款金额', prop: '' },
            { label: '贷款余额', prop: '' },
            { label: '贷款起始日', prop: '' },
            { label: '贷款到期日', prop: '' },
            { label: '逾期天数', prop: '' },
            { label: '担保方式', prop: '' },
            { label: '五级分类', prop: '' },
            { label: '上次五级分类', prop: '' },
            { label: '上次五级分类时间', prop: '' }
          ],
          formdata: {},
          disabled: false,
          options: [
            { key: '01', value: '正常' },
            { key: '02', value: '关注' },
            { key: '03', value: '次级' },
            { key: '04', value: '可疑' },
            { key: '05', value: '损失' }
          ],
        };
      },
      methods: {
        
      }
    });
  };
});