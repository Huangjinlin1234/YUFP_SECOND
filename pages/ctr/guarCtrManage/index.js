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
            // { label: '申请流水号', name: 'serNo' },
            { label: '担保合同编号', name: '' },
            { label: '担保合同类型', name: '', dataCode: '' },
            {
              label: '担保人客户编号',
              name: '',
              readonly: true,
              icon: 'search',
              clickIconFn: this.ttt,
            },
            { label: '客户名称', name: '' },
            {
              label: '产品名称',
              name: '',
              pageTypes: ['UnsignLoanCtr', 'HisLoanCtr'],
              readonly: true,
              icon: 'search',
              clickIconFn: this.ttt,
            },
            { label: '合同状态', name: '', options: [] },
          ],
          dataUrl: '',
          baseParams: {},
          tableFields: [
            { label: '担保合同编号', prop: '', width: 120 },
            { label: '担保人客户编号', prop: '', width: 120 },
            { label: '客户名称', prop: '', width: 120 },
            { label: '担保人名称', prop: '', width: 120 },
            { label: '担保合同类型', prop: '', width: 120, dataCode: '' },
            { label: '担保方式', prop: '', width: 120, dataCode: '' },
            { label: '产品名称', prop: '', width: 120, dataCode: '' },
            { label: '担保合同金额(元)', prop: '', width: 120, dataCode: '' },
            { label: '担保合同状态', prop: '', width: 120, dataCode: '' },
            { label: '签约日期', prop: '', width: 120, dataCode: '' },
            { label: '登记人', prop: 'inputId', width: 120, dataCode: '' },
            { label: '登记机构', prop: 'inputBrId', width: 120, dataCode: '' },
            // { label: '申请流水号', prop: '', width: 120, dataCode: '' },
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
        // yufp.router.to('', data, 'yu-idxTabBox')
      },
    })
  }

  // 消息处理
  exports.onmessage = function (type, message) { }
  // page销毁时触发destroy方法
  exports.destroy = function (id, cite) { }
})
