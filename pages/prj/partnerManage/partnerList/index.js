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
            // { label: '申请流水号', name: 'serNo' },
            { label: '合作方名称', name: 'partnerName', dataCode: '' },
            { label: '合作方编号', name: '', dataCode: '' },
            { label: '登记日期', name: 'inputDate', ctype: 'datepicker' },
            { label: '登记人', name: 'inputId' },
            { label: '登记机构', name: 'inputBrId' },
          ],
          dataUrl: '',
          baseParams: {},
          tableFields: [
            // { label: '申请流水号', prop: 'serNo', width: 120, dataCode: '' },
            { label: '合作方编号', prop: 'partnerCode', width: 120 },
            { label: '合作方名称', prop: 'partnerName', width: 120 },
            { label: '合作方类型', prop: 'partnerType', width: 120, dataCode: '' },
            { label: '证件类型', prop: 'certType', width: 120, dataCode: '' },
            { label: '证件号码', prop: 'certNo', width: 120 },
            { label: '登记日期', prop: 'inputDate', width: 120 },
            { label: '登记人', prop: 'inputId', width: 120 },
            { label: '登记机构', prop: 'inputBrId', width: 120 },
          ],
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
            yufp.router.to('partnerListAdd', data, 'yu-idxTabBox')
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
