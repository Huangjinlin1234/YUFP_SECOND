/*
 * @description: 台账查看
 * @author: ljl
 * @date: 2022-11-17
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
          creditDetailUrl: '',
          creditDetailParams: {},
          creditDetailFields: [
            { label: '授信合同编号', prop: 'serNo', width: 120 },
            { label: '批复编号', prop: 'serNo', width: 120 },
            { label: '产品名称', prop: 'projectCode', width: 120 },
            { label: '授信额度', prop: 'projectType', width: 120 },
            { label: '担保方式', prop: 'projectNameCn', width: 120 },
            { label: '额度循环标志', prop: '', width: 120, dataCode: '' },
            { label: '额度起始日', prop: 'startDate', width: 120 },
            { label: '额度到期日', prop: 'endDate', width: 120 },
            { label: '额度生效日', prop: 'oprType', width: 120 },
            { label: '授信额度', prop: 'oprType', width: 120 },
            { label: '已用额度', prop: 'oprType', width: 120 },
            { label: '可用额度', prop: 'oprType', width: 120 },
            { label: '额度状态', prop: 'approveStatus', dataCode: 'edzt' },
            { label: '管户人', prop: 'oprType', width: 120 },
            { label: '管户机构', prop: 'approveStatus' },
          ],
          busiCtrUrl: '',
          busiCtrParams: {},
          busiCtrFields: [
            { label: '合同编号', prop: 'serNo', width: 120 },
            { label: '合同金额', prop: 'serNo', width: 120 },
            { label: '币种', prop: 'projectCode', width: 120 },
            { label: '合同可用金额', prop: 'projectType', width: 120 },
            { label: '合同起始日', prop: 'projectNameCn', width: 120 },
            { label: '合同到期日', prop: '', width: 120, dataCode: '' },
            { label: '合同状态', prop: 'startDate', width: 120 },
          ],
          IOUUrl: '',
          IOUParams: {},
          IOUFields: [
            { label: '借据编号', prop: 'serNo', width: 120 },
            { label: '币种', prop: 'projectCode', width: 120 },
            { label: '贷款金额(元)', prop: 'projectType', width: 120 },
            { label: '贷款余额', prop: 'projectNameCn', width: 120 },
            { label: '贷款起始日', prop: 'startDate', width: 120 },
            { label: '贷款到期日', prop: 'endDate', width: 120 },
            { label: '台账状态', prop: 'approveStatus', dataCode: 'edzt' },
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
      },
    })
  }

  // 消息处理
  exports.onmessage = function (type, message) { }
  // page销毁时触发destroy方法
  exports.destroy = function (id, cite) { }
})
