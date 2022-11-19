
([], function (vue, $, name) {
  // yufp.require.require('pages/common/busi/ProcessAprv.html', (template) => {
  //   console.log(template, "=== template");
  //   return template
  // })
  vue.component(name, {
    template: '<yu-collapse v-model="activeNames">\
      <yu-collapse-item title="审批操作" name="1">\
        <yu-xform ref="refForm" v-model="formdata" label-width="140px">\
          <yu-xform-group :span="1">\
            <yu-xform-item v-for="(item,index) in formFields" :key="index" :label="item.label" :name="item.name" :ctype="item.ctype"\
              :rules="item.rules" :data-code="item.dataCode">\
            </yu-xform-item>\
          </yu-xform-group>\
        </yu-xform>\
        <yu-button-group>\
          <slot name="btns"></slot>\
        </yu-button-group>\
      </yu-collapse-item>\
      <yu-collapse-item title="流程审批历史" name="1">\
        <aprv-his></aprv-his>\
      </yu-collapse-item>\
    </yu-collapse>',
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
        activeNames: ['1'],
        formdata: {},
        formFields: [
          { label: '审批结果', name: '', ctype: 'select', dataCode: '', rules: [{ required: true, message: '字段不能为空', triggle: 'blur' }] },
          { label: '审批意见', name: '', ctype: 'textarea', rules: [{ required: true, message: '字段不能为空', triggle: 'blur' }] },
        ],
      }
    },
    created () {

    },
  });
}(Vue, yufp.$, 'process-aprv'));
