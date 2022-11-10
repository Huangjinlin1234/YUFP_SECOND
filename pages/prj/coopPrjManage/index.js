/*
 * @description: 授信合同申请和授信合同申请历史
 * @author: ljl
 * @date: 2022-11-07
 */
define(['pages/ctr/mainCtrAppli/credit/index.js', 'pages/ctr/mainCtrAppli/loan/index.js'], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
          pageType: hashCode,
          pageTypes: ['CredContAppl', 'CredContHis', 'LoanContAppl', 'LoanContHis'],
          formdata: {},
          formFields: [
            // { label: '申请流水号', name: 'ctrNo' },
            { label: '合作项目类型', name: 'ctrNo', dataCode: '' },
            { label: '合作项目名称', name: 'ctrNo', dataCode: '' },
            { label: '审批状态', name: 'ctrNo', options: [] },
            { label: '登记日期', name: 'ctrNo', ctype: 'datepicker' },
            { label: '登记人', name: 'ctrNo' },
            { label: '登记机构', name: 'ctrNo' },
          ],
          dataUrl: '',
          baseParams: {},
          tableFields: [
            // { label: '申请流水号', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '合作项目编号', prop: 'ctrNo1', width: 120 },
            { label: '合作项目类型', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '合作项目名称', prop: 'ctrNo', width: 120 },
            { label: '总合作额度(元)', prop: 'ctrNo', width: 120 },
            { label: '合作起始日', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '合作到期日', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '操作类型', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '审批状态', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '合作项目状态', prop: 'ctrNo', width: 120, options: [] },
            { label: '登记日期', prop: 'ctrNo', width: 120 },
            { label: '登记人', prop: 'ctrNo', width: 120 },
            { label: '登记机构', prop: 'ctrNo', width: 120 },
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
