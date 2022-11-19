/*
 * @description: 授信合同申请和授信合同申请历史
 * @author: ljl
 * @date: 2022-11-07
 */
define(['pages/ctr/mainCtrAppli/credit/index.js', 'pages/ctr/mainCtrAppli/loan/index.js', 'pages/common/busi/ProcessAprv.js', 'pages/common/busi/AprvHis.js', 'pages/common/layout/MainPage.js', 'pages/common/layout/GuidePage.js', 'pages/common/layout/SelectPage.js'], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    let isHis = false;
    const isLoan = 'LoanContAppl' === hashCode;
    const rule = [];
    // const rule = [{ required: true, message: '字段不能为空', triggle: 'blur' }];
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
          activeName: '1',
          tabParams: {
            activeName: '1',
            tabFields: isLoan ? [
              { label: '授信合同申请', name: '1' },
              { label: '授信合同申请历史', name: '2' },
            ] : [
              { label: '借款合同申请', name: '1' },
              { label: '借款合同申请历史', name: '2' },
            ],
          },
          formParams: {
            formData: {},
            formFields: [
              // { label: '申请流水号', name: '' },
              { label: '合同编号', name: '' },
              { label: '合同类型', name: '', ctype: 'select', dataCode: 'htlx' },
              { label: '客户编号', name: '', readonly: true, icon: 'search', clickIconFn: this.openCust },
              { label: '客户名称', name: '' },
              { label: '主担保方式', name: '', ctype: 'select', hidden: isLoan, dataCode: 'zdbfs' },
              { label: '产品名称', name: '', ctype: 'select', hidden: !isLoan, readonly: true, icon: 'search', clickIconFn: this.openProduct },
              { label: '审批状态', name: 'approveStatus', ctype: 'select', options: [] },
            ],
          },
          tableParams: {
            dataUrl: '',
            baseParams: {},
            tableFields: [
              { label: '合同编号', prop: '', width: 120 },
              { label: '合同类型', prop: '', width: 120, dataCode: '' },
              { label: '客户编号', prop: '', width: 120 },
              { label: '客户名称', prop: '', width: 120 },
              { label: '币种', prop: '', width: 120, dataCode: '' },
              { label: '合同金额(元)', prop: '', width: 120, dataCode: '' },
              { label: '主担保方式', prop: '', width: 120, dataCode: 'zdbfs' },
              { label: '产品名称', prop: '', width: 120, dataCode: '' },
              { label: '审批状态', prop: 'approveStatus', width: 120, options: [] },
              { label: '登记日期', prop: 'inputDate', width: 120 },
              { label: '登记人', prop: 'inputId', width: 120 },
              { label: '登记机构', prop: 'inputBrId', width: 120 },
              // { label: '申请流水号', prop: '', width: 120, dataCode: '' },
            ],
          },
          // 新增向导页弹框属性
          isShowAddAppli: false,
          dialogTitle: isLoan ? '授信合同申请向导' : '借款合同申请向导',
          dFormParams: {
            column: 2,
            labelWidth: '140px',
            formData: {},
            formFields: [
              { label: '合同建立来源', name: 'date', ctype: 'select', rules: rule, disabled: true, icon: 'search', hidden: !isLoan },
              { label: '授信合同编号', name: 'date', icon: 'search', rules: rule, disabled: true, iconClickFn: this.openAprv }, // 授信申请
              { label: '单笔单批批复编号', name: 'date', rules: rule, disabled: true, icon: 'search', iconClickFn: this.openAprv }, // 单笔单批
              { label: '授信批复信息', name: 'date', rules: rule, disabled: true, icon: 'search', hidden: isLoan, iconClickFn: this.openAprv },
              { label: '客户编号', name: 'userName', rules: rule, disabled: true },
              { label: '客户名称', name: 'province', rules: rule, disabled: true },
              { label: '产品名称', name: 'city', rules: rule, disabled: true, ctype: 'select', dataCode: 'zdbfs' },
              { label: '主担保方式', name: 'city', rules: rule, disabled: true, ctype: 'select', dataCode: 'zdbfs' },
              { label: '其他担保方式1', name: 'city', rules: rule, disabled: true, ctype: 'select', dataCode: 'qtdbfs1' },
              { label: '其他担保方式2', name: 'address', rules: rule, disabled: true, ctype: 'select', dataCode: 'qtdbfs2' },
              { label: '合同类型', name: 'zip', rules: rule, disabled: true, ctype: 'select', dataCode: 'htlx' },
              { label: '合同种类', name: 'zip', ctype: 'select', rules: rule, disabled: true, dataCode: 'htzl' },
            ]
          },
        }
      },
      created () {
        isLoan ? this.tableParams.tableFields.splice(6, 1) : this.tableParams.tableFields.splice(7, 1)
      },
      methods: {
        // 点击tab
        tabClick (tab) {
          isHis = tab.name === '2';
        },
        // 打开客户选择页
        openCust () {
          console.log('openCust');
        },
        // 打开产品选择页
        openProduct () {
          console.log('openProduct');
        },
        // 打开授信批复选择页
        openAprv () {
          console.log('openAprv');
        },
        // 校验按钮权限
        checkPermission: function (ctrlCode) {
          return !yufp.session.checkCtrl(ctrlCode, cite.menuId)
        },
        // 点击按钮
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
        // 下一步
        nextFn () {
          let flag = true;
          // this.$refs.refDForm.validate(vali => {
          //   flag = vali;
          // })
          if (flag) {
            this.handleClose();
            this.openDetail('ADD');
          }
        },
        // 打开详情页
        openDetail () {
          if (isLoan) {
            yufp.router.to('LoanContDetail' + 'C', data, 'yu-idxTabBox');
          } else {
            yufp.router.to('CredContDetail', data, 'yu-idxTabBox');
          }
        },
        selectFn (row) {
          console.log(row, "=== row");
        }
      },
    })
  }

  // 消息处理
  exports.onmessage = function (type, message) { }
  // page销毁时触发destroy方法
  exports.destroy = function (id, cite) { }
})
