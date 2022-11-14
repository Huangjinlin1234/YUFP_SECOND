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
          activeName: '1',
          pageType: hashCode,
          isHis: false,
          pageTypes: ['CredCtrManage', 'LoanCtrManage',],
          rule: [{ required: true, message: '字段不能为空', triggle: 'blur' }],
          tabFields: 'CredCtrManage' === hashCode ? [
            { label: '待签授信合同', name: '1' },
            { label: '历史授信合同', name: '2' },
          ] : [
            { label: '待签借款合同', name: '1' },
            { label: '历史借款合同', name: '2' },
          ],
          formdata: {},
          formFields: [
            // { label: '申请流水号', name: '' },
            { label: '合同编号', name: '' },
            { label: '合同类型', name: '', dataCode: '' },
            {
              label: '客户编号',
              name: '',
              readonly: true,
              icon: 'search',
              clickIconFn: this.selCust,
            },
            { label: '客户名称', name: '' },
            {
              label: '主担保方式',
              name: '',
              pageTypes: ['CredCtrManage'],
              dataCode: ''
            },
            {
              label: '产品名称',
              name: '',
              pageTypes: ['LoanCtrManage'],
              readonly: true,
              icon: 'search',
              clickIconFn: this.selProduct,
            },
            { label: '合同状态', name: '', options: [] },
            { label: '签约方式', name: '', dataCode: 'qyfs' },
          ],
          dataUrl: '',
          baseParams: {},
          tableFields: [
            { label: '合同编号', prop: '', width: 120 },
            { label: '合同类型', prop: '', width: 120, dataCode: '' },
            { label: '客户编号', prop: '', width: 120 },
            { label: '客户名称', prop: '', width: 120 },
            { label: '币种', prop: '', width: 120, dataCode: '' },
            { label: '合同金额(元)', prop: '', width: 120, dataCode: '' },
            { label: '合同期限(月)', prop: '', width: 120, dataCode: '' },
            { label: '合同状态', prop: '', width: 120, dataCode: '' },
            { label: '主担保方式', prop: '', width: 120, dataCode: '' },
            { label: '产品名称', prop: '', width: 120, dataCode: '' },
            { label: '签约方式', prop: '', width: 120, options: [] },
            { label: '登记日期', prop: 'inputDate', width: 120 },
            { label: '登记人', prop: 'inputId', width: 120 },
            { label: '登记机构', prop: 'inputBrId', width: 120 },
            // { label: '申请流水号', prop: '', width: 120, dataCode: '' },
          ],
        }
      },
      created () {
        this.$nextTick(() => {
        })
      },
      methods: {
        handleClick (tab) {
          console.log(tab.name, "=== tab.name");
          if (tab.name === '2') {
            this.isHis = true
          } else {
            this.isHis = false;
          }
        },
        selCust (item) {
          console.log(item, '111::: ')
        },
        selProduct (item) {
          console.log(item, '111::: ')
        },
        checkPermission: function (ctrlCode) {
          return !yufp.session.checkCtrl(ctrlCode, cite.menuId)
        },
        btnFn (type) {
          let selection = this.$refs.refTable.selections;
          // if (!selection.length) {
          //   this.$message.warning('请先选择一条数据！');
          //   return;
          // }
          // 【打印】：只有待签订状态才能打印合同！
          // 【签订】：选中合同状态为待签订且签约方式为线下签约的记录。
          // 【注销】：选中合同状态为待签订的记录，合同注销需提交审核流程进行审批，提交后系统生成待办任务，下一环节审核人员通过我的待办进行处理。
          if (type === 'VIEW') {
            yufp.router.to('CredContDetail', {}, 'yu-idxTabBox');
          } else if (type === 'SIGN') {
            yufp.router.to('ContratSign', {}, 'yu-idxTabBox');
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
