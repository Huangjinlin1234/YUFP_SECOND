/*
 * @description: 授信合同申请和授信合同申请历史
 * @author: ljl
 * @date: 2022-11-07
 */
define([], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
          activeNames: ['1'],
          tableData: [],
          dataUrl: '',
          baseParams: {},
          rule: [{ required: true, message: '字段不能为空', triggle: 'blur' }],
          isShowImport: false,
          importFormData: {},
          importFormFields: [
            { label: '担保合同编号', name: 'province' },
            { label: '担保合同类型', name: 'userName', ctype: 'select', dataCode: 'dbfs' },
            { label: '借款人客户编号', name: 'date', icon: 'search', iconClickFn: this.selectCust },
            { label: '借款人名称', name: 'city' },
            { label: '担保方式', name: 'city', ctype: 'select', dataCode: 'dbfs' },
          ],
          dataUrl: '',
          baseParams: {},
          tableFields: [
            { label: '借据编号', prop: '' },
            { label: '合同编号', prop: '', dataCode: '' },
            { label: '客户编号', prop: '' },
            { label: '客户名称', prop: '' },
            { label: '产品名称', prop: '', dataCode: '' },
            { label: '币种', prop: '', dataCode: 'bz' },
            { label: '贷款金额(元)', prop: '', dataCode: '' },
            { label: '贷款余额(元)', prop: '', dataCode: '' },
            { label: '贷款起始日', prop: '', dataCode: '' },
            { label: '贷款到期日', prop: '', },
            { label: '台账状态', prop: '', dataCode: '' },
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
        importFn () {
          // 只能引入担保合同状态为“生效”的记录，引入成功后在担保合同列表中增加一条记录；
        },
        btnFn (type) {
          if (type === 'IMPORT') {
            this.isShowImport = true;
            return;
          }
          if (type === 'ADD') {
            this.isShowAdd = true;
            return;
          }
          let selection = this.$refs.refTable.selections;
          if (!selection.length) {
            this.$message.warning('请先选择一条数据！');
            return;
          }
          // 审批状态为“待发起、退回”，才能进行修改或删除！
        },
        selectCust () {
          console.log('selectAprv', "=== 111");
        },
        closeImport () {
          this.isShowImport = false;
        },
      },
    })
  }

  // 消息处理
  exports.onmessage = function (type, message) { }
  // page销毁时触发destroy方法
  exports.destroy = function (id, cite) { }
})
