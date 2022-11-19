/*
 * @description: 授信合同申请和授信合同申请历史
 * @author: ljl
 * @date: 2022-11-07
 */
define(['pages/ctr/mainCtrAppli/credit/index.js', 'pages/ctr/mainCtrAppli/loan/index.js'], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    console.log(hashCode, "=== hashCode");
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
          pageType: hashCode,
          rule: [{ required: true, message: '字段不能为空', triggle: 'blur' }],
          formdata: {},
          formFields: [
            { label: '客户编号', name: 'projectType', dataCode: '' },
            { label: '客户名称', name: 'projectNameCn', dataCode: '' },
            { label: '证件号码', name: 'inputDate' },
            { label: '额度状态', name: 'approveStatus', options: [] },
            { label: '经营实体名称', name: 'inputId' },
          ],
          dataUrl: '',
          baseParams: {},
          tableFields: [
            { label: '客户编号', name: 'projectType', dataCode: '' },
            { label: '客户名称', name: 'projectNameCn', dataCode: '' },
            { label: '证件类型', name: 'inputDate', dataCode: 'zjlx' },
            { label: '证件号码', name: 'inputDate' },
            { label: '经营实体名称', name: 'inputId' },
            { label: '授信合同编号', prop: 'serNo', width: 120 },
            { label: '批复编号', prop: 'serNo', width: 120 },
            { label: '产品名称', prop: 'projectCode', width: 120 },
            { label: '授信额度', prop: 'projectType', width: 120 },
            { label: '担保方式', prop: 'projectNameCn', width: 120 },
            { label: '额度循环标志', prop: '', width: 120, dataCode: '' },
            { label: '额度起始日', prop: 'startDate', width: 120 },
            { label: '额度到期日', prop: 'endDate', width: 120 },
            { label: '额度生效日', prop: 'oprType', width: 120 },
            { label: '额度状态', prop: 'approveStatus', dataCode: 'edzt' },
            { label: '管户人', prop: 'oprType', width: 120 },
            { label: '管户机构', prop: 'approveStatus' },
          ],
          isShowAddAppli: false,
          dFormData: {},
          dFormFields: [
            { label: '业务类型', name: 'oprType', ctype: 'select', dataCode: 'ywlx' },
            { label: '客户编号', name: 'projectType', readonly: true, icon: 'search' },
            { label: '客户名称', name: 'projectNameCn', disabled: true },
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
        btnFn () {
          // let selection = this.$refs.refTable.selections;
          // if (!selection.length) {
          //   this.$message.warning('请先选择一条数据！');
          //   return;
          // }
          yufp.router.to('lmtAcctDetail', data, 'yu-idxTabBox');
        },
      },
    })
  }

  // 消息处理
  exports.onmessage = function (type, message) { }
  // page销毁时触发destroy方法
  exports.destroy = function (id, cite) { }
})
