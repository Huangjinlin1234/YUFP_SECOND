/*
   * @description: 向导页
   * @author: ljl
   * @date: 2022-11-18
  */
(function (vue, $, name) {
  vue.component(name, {
    template: '<yu-xdialog :visible.sync="dialogShow"  :title="dialogTitle" @close="handleClose">\
      <yu-xform ref="refForm" v-model="formParams.formData" :label-width="formParams.labelWidth">\
        <yu-xform-group :column="formParams.column || 1">\
          <yu-xform-item v-for="(item,index) in formParams.formFields" :key="index" :label="item.label" :ctype="item.ctype"\
            :name="item.name" :disabled="item.disabled" :rules="item.rules" :icon="item.icon"\
            :on-icon-click="item.iconClickFn" :value-format="item.valueFormat"></yu-xform-item>\
        </yu-xform-group>\
      </yu-xform>\
      <span slot="footer" class="dialog-footer">\
        <yu-button type="primary" @click="nextFn">下一步</yu-button>\
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
      // 下一步
      nextFn () {
        let flag = true;
        this.$refs.refForm.validate(vali => {
          flag = vali;
        })
        if (flag) {
          this.$emit('next-fn');
        }
      },
      changeFn (callback) {
        // callback && callback()
      }
    }
  });
}(Vue, yufp.$, 'guide-page'));
