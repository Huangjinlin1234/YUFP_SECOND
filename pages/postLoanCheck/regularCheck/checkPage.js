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
          currentKey: '1',
          treeData: [
            { id: '0', label: '个人定期检查', pid: '-1' },
            { id: '1', label: '检查信息', pid: '0' },
            { id: '2', label: '定期检查报告', pid: '0' },
            { id: '3', label: '征信查询', pid: '0' },
            { id: '4', label: '影像资料', pid: '0' },
            { id: '5', label: '审批历史', pid: '0' }
          ]
        };
      },
      mounted: function () {
        yufp.router.to('personalCheck', {}, 'treeDetailPage');
      },
      methods: {
        nodeClick (node) {
          console.log(node.id);
          if (node.id === '0') {
            return;
          }
          switch (node.id) {
          case '1':
            yufp.router.to('personalCheck', {}, 'treeDetailPage');
            break;
          case '2':
            yufp.router.to('', {}, 'treeDetailPage');
            break;
          case '3':
            yufp.router.to('', {}, 'treeDetailPage');
            break;
          case '4':
            yufp.router.to('', {}, 'treeDetailPage');
            break;
          case '5':
            yufp.router.to('', {}, 'treeDetailPage');
            break;
          default:
            yufp.router.to('personalCheck', {}, 'treeDetailPage');
          }
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
