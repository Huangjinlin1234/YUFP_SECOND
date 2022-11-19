/*
   * @description: 选取页或引入页
   * @author: ljl
   * @date: 2022-11-18
  */
(function (vue, $, name) {
  vue.component(name, {
    template: '<yu-xdialog :visible.sync="dialogShow" :title="dialogTitle" @close="handleClose">\
      <yu-xform ref="refForm" v-model="formParams.formData" :label-width="formParams.labelWidth">\
        <yu-xform-group :column="formParams.column">\
          <yu-xform-item v-for="(item,index) in formParams.formFields" :key="index" :label="item.label" :ctype="item.ctype" :name="item.name" :disabled="item.disabled" :rules="item.rules" :hidden="item.hidden" :icon="item.icon" :on-icon-click="item.iconClickFn" :value-format="item.valueFormat" form-search="edit" related-table-name="refTable" hidden-del-val></yu-xform-item>\
        </yu-xform-group>\
      </yu-xform>\
      <yu-xtable ref="refTable" :data-url="tableParams.dataUrl" :base-params="tableParams.baseParams" :request-type="tableParams.requestType" :default-load="tableParams.defaultLoad" :max-height="tableParams.maxHeight" :width="tableParams.width" :min-width="tableParams.minWidth" row-number json-data="rows" @row-click="rowClick">\
        <yu-xtable-column v-for="(item, index) in tableParams.tableFields" :key="index" :label="item.label"\
          :prop="item.prop" :data-code="item.dataCode">\
        </yu-xtable-column>\
      </yu-xtable>\
      <span slot="footer" class="dialog-footer">\
        <yu-button type="primary" @click="selectFn">{{ btnName }}</yu-button>\
        <yu-button @click="handleClose">返回</yu-button>\
      </span>\
    </yu-xdialog>',
    props: {
      dialogShow: {
        type: Boolean,
        default: false,
      },
      dialogTitle: {
        type: String,
        default: '',
      },
      formParams: {
        type: Object,
        default: () => { }
      },
      tableParams: {
        type: Object,
        default: () => { }
      },
      btnName: {
        type: String,
        default: '选取返回',
      },
    },
    data () {
      return {

      }
    },
    methods: {
      // 关闭弹框
      handleClose () {
        this.$emit('update:dialogShow', false);
      },
      rowClick (row, event, column, index) {

      },
      selectFn () {
        const selection = this.$refs.refTable.selections;
        // if (!selection.length) {
        //   this.$message.warning('请先选择一条数据！');
        //   return;
        // }
        this.handleClose();
        // 选取或引入
        this.$emit('select-fn', selection)
      }
    }
  });
}(Vue, yufp.$, 'select-page'));
