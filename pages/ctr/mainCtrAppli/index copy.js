/*
 * @description: 授信合同申请和授信合同申请历史
 * @author: ljl
 * @date: 2022-11-07
 */
define(['pages/ctr/mainCtrAppli/credit/index.js', 'pages/ctr/mainCtrAppli/loan/index.js', 'pages/common/busi/ProcessAprv.js'], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
          activeName: '1',
          pageType: hashCode,
          isHis: false,
          pageTypes: ['CredContAppl', 'LoanContAppl',],
          rule: [{ required: true, message: '字段不能为空', triggle: 'blur' }],
          tabFields: 'CredContAppl' === hashCode ? [
            { label: '授信合同申请', name: '1' },
            { label: '授信合同申请历史', name: '2' },
          ] : [
            { label: '借款合同申请', name: '1' },
            { label: '借款合同申请历史', name: '2' },
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
              clickIconFn: this.ttt,
            },
            { label: '客户名称', name: '' },
            {
              label: '主担保方式',
              name: '',
              pageTypes: ['CredContAppl'],
              dataCode: ''
            },
            {
              label: '产品名称',
              name: '',
              pageTypes: ['LoanContAppl'],
              readonly: true,
              icon: 'search',
              clickIconFn: this.ttt,
            },
            { label: '审批状态', name: 'approveStatus', options: [] },
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
            { label: '主担保方式', prop: '', width: 120, dataCode: '' },
            { label: '产品名称', prop: '', width: 120, dataCode: '' },
            { label: '审批状态', prop: 'approveStatus', width: 120, options: [] },
            { label: '登记日期', prop: 'inputDate', width: 120 },
            { label: '登记人', prop: 'inputId', width: 120 },
            { label: '登记机构', prop: 'inputBrId', width: 120 },
            // { label: '申请流水号', prop: '', width: 120, dataCode: '' },
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
      mounted () {
        this.$nextTick(() => {
          console.log(this.$refs, "=== this2332");
        })
      },
      methods: {
        ttt (item) {
          console.log(item, '111::: ')
        },
        handleClick (tab) {
          console.log(tab.name, "=== tab.name");
          if (tab.name === '2') {
            this.isHis = true
          } else {
            this.isHis = false;
          }
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
