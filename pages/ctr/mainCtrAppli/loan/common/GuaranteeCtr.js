/*
 * @description: 借款合同担保合同信息（对公或个人）
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
          isShowAdd: false,
          addFormData: {},
          addFormFields: [
            { label: '借款人客户编号', name: 'province' },
            { label: '借款人名称', name: 'userName', ctype: 'select', dataCode: 'dbfs' },
            { label: '是否授信项下', name: 'date' },
            { label: '是否追加担保', name: 'city', ctype: 'select', dataCode: 'dbfs' },
            { label: '担保合同类型', name: 'city', ctype: 'select', dataCode: 'dbfs' },
            { label: '担保方式', name: 'city', ctype: 'select', dataCode: 'dbfs' },
            { label: '质押合同类型', name: 'city', ctype: 'select', dataCode: 'dbfs' },
          ],
          dataUrl: '',
          baseParams: {},
          tableFields: [
            { label: '担保合同编号', prop: 'ctrNo' },
            { label: '担保合同类型', prop: 'ctrNo', dataCode: '' },
            { label: '借款人客户编号', prop: 'ctrNo' },
            { label: '借款人名称', prop: 'ctrNo' },
            { label: '担保方式', prop: 'ctrNo', dataCode: '' },
            { label: '担保合同金额(元)', prop: 'ctrNo', dataCode: '' },
            { label: '合同起始日', prop: 'ctrNo', dataCode: '' },
            { label: '合同到期日', prop: 'ctrNo', },
            { label: '担保合同状态', prop: 'ctrNo', dataCode: '' },
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
        closeAdd () {
          this.isShowAdd = false;
        },
        nextFn () {
          let flag = true;
          // this.$refs.refAddForm.validate(vali => {
          //   flag = vali;
          // })
          if (flag) {
            this.closeAdd();
            yufp.router.to('GuarCtrDetail', data, 'yu-idxTabBox');
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
