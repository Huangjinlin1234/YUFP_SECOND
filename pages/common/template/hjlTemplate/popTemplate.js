/**
 * @create
 * @description
 */
define([
  './custom/widgets/js/UserSelecter.js'

], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    yufp.lookup.reg('CRUD_TYPE,ORG_LEVEL,STD_ORG_STATUS,STD_YES_NO');
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
          updateFields: [
            {
              columnCount: 3,
              fields: [
                { field: 'prpNo',
                  label: '授权统一流水号',
                  type: 'custom',
                  is: 'div-user-selector',
                  params: {orgLevel: ''},
                  selectFn: function (value, model, args) {
                    // this.$refs.reform.formdata.prpNo = args[1].prpNo;
                  }
                }

              ]
            }],
          formdata2: {}
        };
      },
      mounted: function () {

      },
      methods: {
        handleIconClick () {
          console.log(111);
          this.$refs.refDia.dialogVisable = true;
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
