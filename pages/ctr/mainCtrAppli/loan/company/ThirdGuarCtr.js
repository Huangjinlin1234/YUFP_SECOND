/*
 * @description: 借款合同第三方合同信息（对公）
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
          isDisabled: data.viewType === 'VIEW',
          activeNames: ['1'],
          formdata: {},
          tableData: [],
          rule: [{ required: true, message: '字段不能为空', triggle: 'blur' }],
        };
      },
      mounted () {
        data.page = this;
        console.log(this, "=== this");
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
