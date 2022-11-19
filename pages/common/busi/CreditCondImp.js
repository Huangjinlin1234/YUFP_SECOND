/*
 * @description: 用信条件落实情况表格
 * @author: ljl
 * @date: 2022-11-18
*/
(function (vue, $, name) {
  vue.component(name, {
    template: '<yu-xtable ref="refTable" :data="tData" :data-url="dataUrl" :base-params="baseParams"  row-number>\
        <yu-xtable-column v-for="(item,index) in tFields" :key="index" :label="item.label" :prop="item.prop" :ctype="item.ctype" :dataCode="item.dataCode"></yu-xtable-column>\
      </yu-xtable>',
    props: {
      dataUrl: {
        type: String,
        default: ''
      },
      baseParams: {
        type: Object,
        default: () => { }
      },
      requestType: {
        type: String,
        default: 'get'
      },
      tableFields: {
        type: Array,
        default: () => []
      },
      tableData: {
        type: Array,
        default: () => []
      },
    },
    data () {
      return {
        tData: [],
        tFields: [
          { label: '用信条件', prop: '' },
          { label: '是否已落实', prop: '', ctype: 'select', dataCode: 'shifou' },
          { label: '描述', prop: '', ctype: 'input' },
        ]
      }
    },
    created () {
      if (this.tableFields.length) {
        this.tFields = this.tableFields;
      }
      if (this.dataUrl) {
        yufp.service.request({
          url: this.dataUrl,
          methods: '',
          data: this.baseParams,
          callback () {

          }
        })
      } else {
        this.tData = this.tableData;
      }
    },
  });
}(Vue, yufp.$, 'credit-cond-lmp'));
