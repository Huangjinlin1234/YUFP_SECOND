/*
 * @description: 审批流程
 * @author: ljl
 * @date: 2022-11-07
 */
define(['pages/common/busi/AprvHis.js'], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
          activeNames: ['1'],
          formdata: {},
          formFields: [
            { label: '审批结果', name: '', ctype: 'select', dataCode: '', rules: [{ required: true, message: '字段不能为空', triggle: 'blur' }] },
            { label: '审批意见', name: '', ctype: 'textarea', rules: [{ required: true, message: '字段不能为空', triggle: 'blur' }] },
          ],
          dataUrl: '',
          baseParams: {},
        }
      },
      created () {
        this.$nextTick(() => {
        })
      },
      methods: {
        checkPermission: function (ctrlCode) {
          return !yufp.session.checkCtrl(ctrlCode, cite.menuId)
        },
        btnFn (type) {
          if (type === 'ADD') {
            this.isShowAddAppli = true;
            return;
          }
          let selection = this.$refs.refTable.selections;
          if (!selection.length) {
            this.$message.warning('请先选择一条数据！');
            return;
          }
          // 审批状态为“待发起、退回”，才能进行修改或删除！
        },
      },
    })
  }

  // 消息处理
  exports.onmessage = function (type, message) { }
  // page销毁时触发destroy方法
  exports.destroy = function (id, cite) { }
})
