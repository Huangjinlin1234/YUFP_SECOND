/**
 * @create by fuzm on 2018-05-04
 * @description 模板二
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
          activeName: 'first',
          dataUrl: backend.ocaService + '/api/adminsmcrelstra/getall'
        };
      },
      mounted: function () {
        yufp.router.to('methodInfo', {}, 'tabContent');
      },
      methods: {
        tabClick (v) {
          switch (v.name) {
          case 'first':
            yufp.router.to('methodInfo', {}, 'tabContent');
            break;
          case 'second':
            yufp.router.to('qualiafyInfo', {}, 'qualifyInfo');
            break;
          default:
            yufp.router.to('methodInfo', {}, 'tabContent');
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
