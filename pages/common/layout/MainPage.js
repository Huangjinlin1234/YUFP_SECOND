/*
   * @description: 主页（列表页）
   * @author: ljl
   * @date: 2022-11-18
  */
(function (vue, $, name) {
  vue.component(name, {
    template: '<div v-if="haveTab">\
      <yu-tabs v-model="tabParams.activeName" @tab-click="tabClick">\
        <yu-tab-pane v-for="(item, index) in tabParams.tabFields" :key="index" :label="item.label" :name="item.name">\
        </yu-tab-pane>\
      </yu-tabs>\
      <yu-xform ref="refForm" v-model="formParams.formData" :label-width="formParams.labelWidth" form-type="search"\
        related-table-name="refTable">\
        <yu-xform-group :column="formParams.column || 3">\
          <yu-xform-item v-for="(item, index) in formParams.formFields" :key="index" :label="item.label"\
            :name="item.name" :ctype="item.ctype" :options="item.options" :data-code="item.dataCode"\
            :readonly="item.readonly" :hidden="item.hidden" :icon="item.icon" :on-icon-click="item.clickIconFn">\
          </yu-xform-item>\
        </yu-xform-group>\
      </yu-xform>\
      <yu-button-group>\
        <slot name="btn"></slot>\
      </yu-button-group>\
      <yu-xtable ref="refTable" :data-url="tableParams.dataUrl" :base-params="tableParams.baseParams"\
        :request-type="tableParams.requestType" :max-height="tableParams.maxHeight" :width="tableParams.width"\
        :min-width="tableParams.minWidth" row-number json-data="rows" @row-click="rowClick">\
        <yu-xtable-column v-for="(item, index) in tableParams.tableFields" :key="index" :label="item.label"\
          :prop="item.prop" :data-code="item.dataCode">\
        </yu-xtable-column>\
      </yu-xtable>\
    </div>',
    props: {
      haveTab: {
        type: Boolean,
        default: false
      },
      tabParams: {
        type: Object,
        default: () => { }
      },
      formParams: {
        type: Object,
        default: () => { }
      },
      tableParams: {
        type: Object,
        default: () => { }
      },
    },
    created () {
      console.log(this.haveTab, "=== haveTab");
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
      tabClick (tab) {
        this.$emit('tab-click', tab);
      },
      rowClick (row, event, column, index) {

      }
    }
  });
}(Vue, yufp.$, 'main-page'));
