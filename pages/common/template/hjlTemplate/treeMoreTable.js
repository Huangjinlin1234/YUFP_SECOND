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
          dataUrl: {
            first: backend.consoleService + '/api/user/oper/logs'
          },
          current: '1',
          currentKey: '1',
          treeData: [
            { id: '0', label: '同业机构准入申报', pid: '-1' },
            { id: '1', label: '示例1', pid: '0' },
            { id: '2', label: '示例2', pid: '0' },
            { id: '3', label: '示例3', pid: '0' }
          ],
          activeNames: ['1', '2', '3', '4']
        };
      },
      methods: {
        nodeClick (node) {
          this.current = node.id;
        },
        addFn () {

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