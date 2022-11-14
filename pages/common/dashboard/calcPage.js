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
        return {};
      },
      mounted () {

      },
      methods: {

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