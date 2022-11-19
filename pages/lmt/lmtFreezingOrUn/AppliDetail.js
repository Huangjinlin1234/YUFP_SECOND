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
          // 授信合同编号 批复编号 产品名称 授信额度 担保方式 额度循环标志 额度起始日 额度到期日 额度生效日 原额度状态 修改后额度状态 修改原因
          formFields: [
            // { label: '申请流水号', name: 'serNo' },
            { label: '业务流水号', name: 'projectType' },
            { label: '业务联系', name: 'projectNameCn', dataCode: 'ywlx' },
            { label: '客户编号', name: 'inputDate' },
            { label: '客户名称', name: 'approveStatus' },
          ],
          dataUrl: '',
          baseParams: {},
          tableFields: [
            { label: '授信合同编号', prop: 'serNo', width: 120, dataCode: '' },
            { label: '批复编号', prop: 'serNo', width: 120, dataCode: '' },
            { label: '产品名称', prop: 'projectCode', width: 120 },
            { label: '授信额度', prop: 'projectType', width: 120, dataCode: '' },
            { label: '担保方式', prop: 'projectNameCn', width: 120 },
            { label: '额度循环标志', prop: '', width: 120, dataCode: '' },
            { label: '额度起始日', prop: 'startDate', width: 120, dataCode: '' },
            { label: '额度到期日', prop: 'endDate', width: 120, dataCode: '' },
            { label: '额度生效日', prop: 'oprType', width: 120, dataCode: '' },
            { label: '原额度状态', prop: 'approveStatus', width: 120, dataCode: '' },
            { label: '修改后额度状态', prop: 'projectStatus', width: 120, options: [] },
            { label: '修改原因', prop: 'inputDate', width: 120 },
          ],
          isShowAddAppli: false,
          dFormData: {},
          dFormFields: [
            { label: '操作类型', name: 'oprType', ctype: 'radio', dataCode: 'czlx' },
            { label: '合作项目类型', name: 'projectType', ctype: 'select', dataCode: 'czlx' },
            { label: '合作项目名称', name: 'projectNameCn', ctype: 'select', dataCode: 'czlx' },
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
            if (hashCode === 'CoopPrjAccess') {
              yufp.router.to('AccessDetail', data, 'yu-idxTabBox');
            } else if (hashCode === 'CoopPrjMaintain') {
              yufp.router.to('MaintainDetail', data, 'yu-idxTabBox');
            } else if (hashCode === 'CoopPrjAccount') {
              yufp.router.to('AccountDetail', data, 'yu-idxTabBox');
            }
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
