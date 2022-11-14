/**
 * Created by wangyin on 2017/11/16.
 */
define([
  'echarts',
  './custom/widgets/js/panel.js'

], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    var _self = yufp.custom.vue({
      el: cite.el,
      data: function () {
        var _self = this;
        return {
          activeName: 'first',
          detailForm1: {},
          debxFormData: {},
          calcTypeOpt: [
            {value: '面积、单价', key: '1'},
            {value: '贷款总价', key: '2'}
          ]
        };
      },
      created () {
        // 页面创建,字典初始化
        let oldLoanTerm = [];
        for (let i = 2; i <= 30; i++) {
          let count = i * 12;
          let item = {
            key: count.toString(),
            value: `${i}年(${count}期)`
          };
          oldLoanTerm.push(item);
        }
        this.options.oldLoanTerm = oldLoanTerm;

        let percent = [];
        for (let i = 2; i <= 9; i++) {
          let item = {
            key: i.toString(),
            value: `${i}成`
          };
          percent.push(item);
        }
        this.options.percent = percent;
      },
      mounted () {

      },
      methods: {}
    });
  };

  // 消息处理
  exports.onmessage = function (type, message) {

  };

  // page销毁时触发destroy方法
  exports.destroy = function (id, cite) {

  };
});