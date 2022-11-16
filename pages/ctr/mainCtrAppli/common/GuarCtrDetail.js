/*
 * @description: 借款合同合同预览（对公或个人）
 * @author: ljl
 * @date: 2022-11-07
 */
define([''], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
          isMaxMount: data.isMaxMount, // false为一般担保合同，true为最高额担保合同
          isDisabled: data.viewType && data.viewType === 'VIEW',
          activeName: '1',
          activeNames: ['1'],
          formdata: {},
          dataUrl: '',
          baseParams: {},
          tableData: [],
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
