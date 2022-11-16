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
            { label: '协议登记流水号', name: 'serNo', },
            { label: '合作方名称', name: 'partnerName', },
            { label: '合作项目名称', name: 'projectNameCn', dataCode: '' },
            { label: '协议状态', name: '', },
            { label: '审批状态', name: 'approveStatus', },
            { label: '登记人', name: 'inputId' },
          ],
          dataUrl: '',
          baseParams: {},
          tableFields: [
            // { label: '申请流水号', prop: 'serNo', width: 120, dataCode: '' },
            { label: '协议登记流水号', prop: 'serNo', width: 120 },
            { label: '合作方编号', prop: '', width: 120, dataCode: '' },
            { label: '合作方名称', prop: '', width: 120 },
            { label: '协议起始日', prop: '', width: 120, dataCode: '' },
            { label: '协议到期日', prop: '', width: 120, dataCode: '' },
            { label: '协议签订日', prop: '', width: 120, dataCode: '' },
            { label: '协议金额(元)', prop: '', width: 120, dataCode: '' },
            { label: '操作类型', prop: 'oprType', width: 120, dataCode: '' },
            { label: '审批状态', prop: 'approveStatus', width: 120, dataCode: '' },
            { label: '协议状态', prop: '', width: 120, dataCode: '' },
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
let a = ['ser_no', 'standing_book_code', 'project_type', 'project_name_cn', 'project_name', 'opr_type', 'project_code', 'is_all_org', 'management_dept', 'reg_distribution', 'project_status', 'approve_status', 'is_long_term_cooperatioin', 'cooperation_month', 'start_date', 'end_date', 'acct_max_amt', 'busi_max_amt', 'used_limit', 'usable_limit', 'risk_sharing_rate', 'max_compensation_amount', 'other_description', 'input_id', 'input_br_id', 'input_date', 'pk_id', 'ser_no', 'org_id', 'org_name', 'input_date', 'update_date', 'input_time', 'update_time', 'ser_no', 'partner_code', 'partner_name', 'partner_type', 'cert_type', 'cert_no', 'is_margin_deposit', 'ser_no', 'partner_code', 'partner_name', 'margin_rate', 'margin_enl_factor', 'margin_deposit_type', 'margin_acct_main', 'margin_acct_second', 'margin_acct_third', 'margin_balance', 'ser_no', 'project_type', 'project_name_cn', 'project_name', 'project_code', 'start_date', 'end_date', 'project_status', 'approve_status', 'opr_type', 'project_ser_no', 'aply_reason', 'partner_code', 'partner_name', 'partner_type', 'cert_type', 'cert_no', 'reg_date', 'reg_cap', 'legal_person_name', 'business_scope', 'business_address', 'reg_addr', 'cooperation_description', 'ser_no', 'ref_start_date', 'ref_end_date', 'ref_date', 'ref_protocol_amt', 'ref_protocol_code', 'ref_is_long_term_coo', 'ref_other_description']
for (let i = 0; i < a.length; i++) {
  let b = a[i].split('_')
  b[1] = b[1].slice(0, 1).toUpperCase() + b[1].slice(1).toLowerCase()
  let c = b[0]
  for (let i = 1; i < b.length; i++) {
    c += b[i].slice(0, 1).toUpperCase() + b[i].slice(1).toLowerCase()
  }
}
