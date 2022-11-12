/**
 * Created by wangyin on 2017/11/16.
 */
define([
  'echarts',
  './custom/widgets/js/panel.js'

], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    yufp.lookup.reg('STD_WB_RISK_MESSAGE_TYPE,STD_WB_RISK_MESSAGE_TYPE ,STD_WB_NOTICE_TYPE,STD_WB_PRB_MESSAGE_TYPE,STD_WB_PRB_STATUS');
    var _self = yufp.custom.vue({
      el: cite.el,
      data: function () {
        var _self = this;
        return {
          dataUrl: '/api/monitor/auditlogdata',
          searchForm: {},
          options: [],
          dialogResizeVisible: false,
          detailForm: {content: '111111111'},
          reciveForm: {},
          selection: {}
        };
      },
      created: function () {

      },
      methods: {
        viewQuestion () {
          let selections = this.$refs.yutable.selections;
          this.selection = selections[0];
          if (selections.length > 0) {
            this.dialogResizeVisible = true;
          } else {
            this.$message.warning('请选择一条数据');
          }
        },
        initData () {
          // this.detailForm = yufp.util.clone(this.selection);
          this.$nextTick(()=>{
            this.$refs.refdetailForm.formdata = this.selection;
          });
        },
        answerQst () {
          this.$message.warning('仅已提交、重新打开状态可回复');
        }
      }
    });
  };

  // 消息处理
  exports.onmessage = function (type, message) {

  };

  // page销毁时触发destroy方法
  exports.destroy = function (id, cite) {

  };
});