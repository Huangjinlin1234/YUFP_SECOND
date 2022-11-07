/**
 * @create by fuzm on 2018-05-04
 * @description 策略管理
 */
define([
  './custom/widgets/js/OrgCtrlSelector.js',
  './custom/widgets/js/panel.js'
], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    yufp.lookup.reg('CRUD_TYPE,ORG_LEVEL,STD_ORG_STATUS,STD_YES_NO');
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
          formdata: { },
          treeData: [
            { id: '0', label: '根节点', pid: '-1' },
            { id: '1', label: '1-1', pid: '0' },
            { id: '2', label: '1-2', pid: '0' },
            { id: '3', label: '1-3', pid: '0' },
            { id: '4', label: '1-1-1', pid: '1' },
            { id: '5', label: '1-1-2', pid: '1' },
            { id: '6', label: '1-2-1', pid: '2' },
            { id: '7', label: '1-2-2', pid: '2' },
            { id: '8', label: '1-3-1', pid: '3' },
            { id: '9', label: '三级-1-1-1', pid: '4' }
          ]
        };
      },
      mounted: function () {

      },
      methods: {
        view () {
          this.$refs.refForm.formdata = {title: '111'};
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
