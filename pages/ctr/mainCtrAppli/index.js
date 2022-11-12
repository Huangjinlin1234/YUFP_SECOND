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
          rule: [{ required: true, message: '字段不能为空', triggle: 'blur' }],
          formdata: {},
          formFields: [
            // { label: '申请流水号', name: 'ctrNo' },
            { label: '合同编号', name: 'ctrNo' },
            { label: '合同类型', name: 'ctrNo', dataCode: '' },
            {
              label: '客户编号',
              name: 'ctrNo',
              readonly: true,
              icon: 'search',
              clickIconFn: this.ttt,
            },
            { label: '客户名称', name: 'ctrNo' },
            {
              label: '主担保方式',
              name: 'ctrNo',
              pageTypes: ['CredContAppl', 'CredContHis'],
              dataCode: ''
            },
            {
              label: '产品名称',
              name: 'ctrNo',
              pageTypes: ['LoanContAppl', 'LoanContHis'],
              readonly: true,
              icon: 'search',
              clickIconFn: this.ttt,
            },
            { label: '审批状态', name: 'ctrNo', options: [] },
          ],
          dataUrl: '',
          baseParams: {},
          tableFields: [
            { label: '合同编号', prop: 'ctrNo1', width: 120 },
            { label: '合同类型', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '客户编号', prop: 'ctrNo', width: 120 },
            { label: '客户名称', prop: 'ctrNo', width: 120 },
            { label: '币种', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '合同金额(元)', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '主担保方式', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '产品名称', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '审批状态', prop: 'ctrNo', width: 120, options: [] },
            { label: '登记日期', prop: 'ctrNo', width: 120 },
            { label: '登记人', prop: 'ctrNo', width: 120 },
            { label: '登记机构', prop: 'ctrNo', width: 120 },
            // { label: '申请流水号', prop: 'ctrNo', width: 120, dataCode: '' },
          ],
          dFormFields: [
            { label: '授信批复信息', name: 'date', disabled: true, icon: 'search', iconClickFn: this.selectAprv },
            { label: '客户编号', name: 'userName', disabled: true },
            { label: '客户名称', name: 'province', disabled: true },
            { label: '主担保方式', name: 'city', disabled: true, ctype: 'select', dataCode: 'zdbfs' },
            { label: '其他担保方式1', name: 'city', disabled: true, ctype: 'select', dataCode: 'qtdbfs1' },
            { label: '其他担保方式2', name: 'address', disabled: true, ctype: 'select', dataCode: 'qtdbfs2' },
            { label: '合同类型', name: 'zip', disabled: true, ctype: 'select', dataCode: 'htlx' },
            { label: '产品名称', name: 'zip', disabled: true },
            { label: '合同种类', name: 'zip', ctype: 'select', dataCode: 'htzl', disabled: true },
          ],
          isShowAddAppli: false,
          dFormData: {},
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
        // pageTypes: ['CredContAppl', 'CredContHis', 'LoanContAppl', 'LoanContHis'],
        viewDetail (viewType) {
          let data = { viewType };
          let index = this.pageTypes.indexOf(this.pageType);
          if (Math.floor(index / 2)) {
            yufp.router.to('LoanContDetail' + 'C', data, 'yu-idxTabBox');
          } else {
            yufp.router.to('CredContDetail', data, 'yu-idxTabBox');
          }
        },
        selectAprv () {
          console.log('selectAprv', "=== 111");
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
            this.viewDetail('ADD');
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
