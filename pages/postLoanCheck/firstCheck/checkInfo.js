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
          formdata: {},
          disabled: false,
          tableTitle: [
            { label: '预警信号编号', prop: '' },
            { label: '预警信息', prop: '' },
            { label: '处理情况', prop: '' },
            { label: '备注', prop: '' }
          ],
          tableTitle1: [
            { label: '借据编号', prop: '' },
            { label: '支付日期', prop: '' },
            { label: '支付金额', prop: '' },
            { label: '收款账号', prop: '' },
            { label: '收款人', prop: '' },
            { label: '用途', prop: '' }
          ],
          tableTitle2: [
            { label: '借据编号', prop: '' },
            { label: '支付日期', prop: '' },
            { label: '支付金额', prop: '' },
            { label: '用途', prop: '' },
            { label: '备注', prop: '' }
          ],
          options: [
            { key: '1', value: '是' },
            { key: '2', value: '否' }
          ],
          tableTitle3: [
            { label: '用途情况', prop: '' },
            { label: '是否存在以上情况', prop: '' },
            { label: '具体情况描述', prop: '' }
          ],
        };
      },
      methods: {
        addSign() {
          console.log('12121211212');
        }
      }
    });
  };
});