/*
 * @description: 授信合同申请和授信合同申请历史
 * @author: ljl
 * @date: 2022-11-07
 */
define(['pages/ctr/mainCtrAppli/credit/index.js'], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    console.log(hashCode, 'hashCode::: ')
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
          formdata: {},
          formFields: [
            { label: '合同编号', name: 'ctrNo' },
            { label: '合同类型', name: 'ctrNo', dataCode: '' },
            {
              label: '客户编号',
              name: 'ctrNo',
              readonly: true,
              icon: 'search',
              clickIconFn: this.ttt,
            },
            { label: '客户名称', name: 'ctrNo' },
            {
              label: '产品名称',
              name: 'ctrNo',
              icon: 'search',
              readonly: true,
              clickIconFn: this.ttt,
            },
            { label: '审批状态', name: 'ctrNo', options: [] },
          ],
          dataUrl: '',
          baseParams: {},
          tableFields: [
            { label: '合同编号', prop: 'ctrNo', width: 120 },
            { label: '合同类型', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '客户编号', prop: 'ctrNo', width: 120 },
            { label: '客户名称', prop: 'ctrNo', width: 120 },
            { label: '币种', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '合同金额（元）', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '主担保方式', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '合同起始日', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '合同到期日', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '登记日期', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '登记人', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '登记机构', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '审批状态', prop: 'ctrNo', width: 120, options: [] },
          ],
        }
      },
      methods: {
        ttt (item) {
          console.log(item, '111::: ')
        },
        checkPermission: function (ctrlCode) {
          return !yufp.session.checkCtrl(ctrlCode, cite.menuId)
        },
        addFn () { },
        modifySimFn () { },
        deleteFn () { },
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
