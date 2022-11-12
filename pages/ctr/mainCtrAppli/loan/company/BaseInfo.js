/*
 * @description: 授信合同申请详情
 * @author: ljl
 * @date: 2022-11-07
 */
define([''], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    console.log(hashCode, 'hashCode::: ');
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
          isDisabled: data.viewType === 'VIEW',
          activeNames: ['1'],
          formdata: {},
          rule: [{ required: true, message: '字段不能为空', triggle: 'blur' }],
        };
      },
      methods: {
        checkPermission: function (ctrlCode) {
          return !yufp.session.checkCtrl(ctrlCode, cite.menuId);
        },
        tempSave () { }
      }
    });
  };

  // 消息处理
  exports.onmessage = function (type, message) { };
  // page销毁时触发destroy方法
  exports.destroy = function (id, cite) { };
});
