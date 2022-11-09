/*
 * @description: 授信合同申请和授信合同申请历史
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
          pageType: hashCode,
          pageTypes: ['UnsignCredCtr', 'HisCredCtr', 'UnsignLoanCtr', 'HisLoanCtr'],
          formdata: {},
          formFields: [
            // { label: '申请流水号', name: 'ctrNo' },
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
              label: '主担保方式',
              name: 'ctrNo',
              pageTypes: ['UnsignCredCtr', 'HisCredCtr'],
              dataCode: ''
            },
            {
              label: '产品名称',
              name: 'ctrNo',
              pageTypes: ['UnsignLoanCtr', 'HisLoanCtr'],
              readonly: true,
              icon: 'search',
              clickIconFn: this.ttt,
            },
            { label: '合同状态', name: 'ctrNo', options: [] },
            { label: '签约方式', name: 'ctrNo', dataCode: 'qyfs' },
          ],
          dataUrl: '',
          baseParams: {},
          tableFields: [
            { label: '合同编号', prop: 'ctrNo1', width: 120 },
            { label: '合同类型', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '客户编号', prop: 'ctrNo', width: 120 },
            { label: '客户名称', prop: 'ctrNo', width: 120 },
            { label: '币种', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '合同金额(元)', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '合同期限(月)', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '合同状态', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '主担保方式', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '产品名称', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '签约方式', prop: 'ctrNo', width: 120, options: [] },
            { label: '登记日期', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '登记人', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '登记机构', prop: 'ctrNo', width: 120, dataCode: '' },
            // { label: '申请流水号', prop: 'ctrNo', width: 120, dataCode: '' },
          ],
        }
      },
      created () {
        this.$nextTick(() => {
        })
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
          let data = {}
          let index = this.pageTypes.indexOf(this.pageType);
          let detailPages = ['CredContDetail', 'LoanContDetail'];
          // switch (this.pageTypes.indexOf(this.pageType)) {
          //   case 0:
          //     index = 0;
          //     break;
          //   case 1:
          //     index = 0;
          //     break;
          //   case 2:
          //     index = 1;
          //     break;
          //   case 3:
          //     index = 1;
          //     break;
          //   default:
          //     return;
          //     break;
          // }
          console.log(detailPages[Math.floor(index / 2)], "=== detailPages[Math.floor(index / 2)");
          yufp.router.to(detailPages[Math.floor(index / 2)] + 'C', data, 'yu-idxTabBox')
          // yufp.router.to(detailPages[index], data, 'yu-idxTabBox')
        },
      },
    })
  }

  // 消息处理
  exports.onmessage = function (type, message) { }
  // page销毁时触发destroy方法
  exports.destroy = function (id, cite) { }
})
