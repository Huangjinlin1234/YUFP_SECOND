/*
 * @description: 授信合同申请和授信合同申请历史
 * @author: ljl
 * @date: 2022-11-07
 */
define([''], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    console.log(hashCode, 'hashCode::: ')
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
          activeName: '1',
          activeNames: ['1'],
          formdata: {},
          tableData: [],
          dataUrl: '',
          baseParams: {},
          treeData: [{
            id: 100, label: '合作方信息', children: [
              { id: 0, label: '基本信息', },
              { id: 1, label: '影像信息', }
            ]
          }],
        }
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
        infoFn () {
          yufp.router.to('CredContDetail', {}, 'yu-idxTabBox')
        },
      },
    })
  }

  // 消息处理
  exports.onmessage = function (type, message) { }
  // page销毁时触发destroy方法
  exports.destroy = function (id, cite) { }
})
