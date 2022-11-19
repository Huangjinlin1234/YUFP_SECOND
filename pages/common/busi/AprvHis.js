/*
 * @description: 审批历史表格
 * @author: ljl
 * @date: 2022-11-18
*/
(function (vue, $, name) {
  vue.component(name, {
    template: '<yu-xtable ref="refTable" :data="tData" :data-url="dataUrl" :base-params="baseParams"  row-number>\
        <yu-xtable-column v-for="(item,index) in tFields" :key="index" :label="item.label" :prop="item.prop"></yu-xtable-column>\
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
          { label: '审批节点名称', prop: '' },
          { label: '办理人员名称', prop: '' },
          { label: '审批时间', prop: '' },
          { label: '办理人员', prop: '' },
          { label: '审批节点编号', prop: '' },
          { label: '办理人员', prop: '' },
          { label: '审批结果', prop: '' },
          { label: '审批意见', prop: '' },
          // { label: '扩展意见', prop: '' },
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
}(Vue, yufp.$, 'aprv-his'));
