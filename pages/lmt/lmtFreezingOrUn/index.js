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
            { label: '客户编号', name: 'projectType' },
            { label: '客户名称', name: 'projectNameCn' },
            { label: '业务类型', name: 'inputDate', dataCode: 'ywlx' },
            { label: '审批状态', name: 'approveStatus', dataCode: '' },
            { label: '冻结方式', name: 'inputId', dataCode: 'djfs' },
          ],
          dataUrl: '',
          baseParams: {},
          tableFields: [
            { label: '业务流水号', prop: 'projectType' },
            { label: '客户编号', prop: 'projectType' },
            { label: '客户名称', prop: 'projectpropCn' },
            { label: '业务类型', prop: 'inputDate', dataCode: 'ywlx' },
            { label: '冻结方式', prop: 'inputId', dataCode: 'djfs' },
            { label: '自动冻结原因', prop: 'approveStatus' },
            { label: '授信合同编号', prop: 'approveStatus' },
            { label: '授信额度', prop: 'approveStatus' },
            { label: '所属机构', prop: 'approveStatus' },
            { label: '额度状态', prop: 'approveStatus', dataCode: '' },
            { label: '审批状态', prop: 'approveStatus', dataCode: '' },
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
        handleClose () {
          this.isShowAddAppli = false;
        },
        nextFn () {
          let flag = true;
          // this.$refs.refDForm.validate(vali => {
          //   flag = vali;
          // })
          if (flag) {
            this.handleClose();
            yufp.router.to('lmtAppliDetail', data, 'yu-idxTabBox');
          }
        },
      },
    })
  }

  // 消息处理
  exports.onmessage = function (type, message) { }
  // page销毁时触发destroy方法
  exports.destroy = function (id, cite) { }
})
