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
          options: [
            { key: '1', value: '现场检查' },
            { key: '2', value: '非现场检查' }
          ],
          tableTitle: [
            { label: '借据编号', prop: '' },
            { label: '借据起始日', prop: '' },
            { label: '借据到期日', prop: '' },
            { label: '放款金额', prop: '' },
            { label: '贷款余额', prop: '' },
            { label: '是否逾期', prop: '' },
            { label: '贷款首次逾期时间', prop: '' },
            { label: '逾期天数', prop: '' }
          ],
          tableTitle1: [
            { label: '预警信号编号', prop: '' },
            { label: '预警信息', prop: '' },
            { label: '处理情况', prop: '' },
            { label: '备注', prop: '' }
          ],
          tableTitle2: [
            { label: '项目', prop: '' },
            { label: '是否存在以上情况', prop: '' },
            { label: '具体内容', prop: '' }
          ],
          tableTitle3: [
            { label: '是否存在其他担保情况', prop: '' },
            { label: '其他担保情况', prop: '' },
            { label: '是否存在异常', prop: '' },
            { label: '异常情况说明', prop: '' }
          ],
          options1: [
            { key: '1', value: '是' },
            { key: '2', value: '否' }
          ],
          options2: [
            { key: '1', value: '正常维护' },
            { key: '2', value: '密切监管' },
            { key: '3', value: '条件收紧' },
            { key: '4', value: '逐步压缩' },
            { key: '5', value: '收贷退出' },
            { key: '6', value: '重点清收' },
            { key: '7', value: '债务重组' },
            { key: '8', value: '诉讼保全' },
            { key: '9', value: '核呆核损' },
            { key: '10', value: '其他' }
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