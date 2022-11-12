/*
 * @description: 借款合同合同预览（对公或个人）
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
          basetitle: '',
          isDisabled: data.viewType === 'VIEW',
          activeNames: ['1'],
          formdata: {},
          dataUrl: '',
          baseParams: {},
          tableData: [],
          dataUrl: '',
          baseParams: {},
          GuarTableFields: [
            { label: '担保合同编号', prop: 'ctrNo1', width: 120 },
            { label: '纸质担保合同编号', prop: 'ctrNo1', width: 120 }, // 授信合同
            { label: '担保人客户编号', prop: 'ctrNo', width: 120 }, // 借款合同
            { label: '客户名称', prop: 'ctrNo', width: 120 },
            { label: '担保人名称', prop: 'ctrNo', width: 120 },
            { label: '担保合同类型', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '主担保方式', prop: 'ctrNo', width: 120, dataCode: '' },
            // { label: '产品名称', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '担保合同金额(元)', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '担保合同状态', prop: 'ctrNo', width: 120, dataCode: '' },
            { label: '签约日期', prop: 'ctrNo', width: 120, dataCode: '' },
            // { label: '登记人', prop: 'ctrNo', width: 120, dataCode: '' },
            // { label: '登记机构', prop: 'ctrNo', width: 120, dataCode: '' },
          ],
          LoanTableFields: [
            { label: '借款合同编号', prop: 'ctrNo1', width: 120 },
            { label: '客户编号', prop: 'ctrNo', width: 120 },
            { label: '客户名称', prop: 'ctrNo', width: 120 },
            { label: '合同类型', prop: 'ctrNo', width: 120, dataCode: 'htlx' },
            { label: '主担保方式', prop: 'ctrNo', width: 120, dataCode: 'zdbfs' },
            { label: '币种', prop: 'ctrNo', width: 120, dataCode: 'bz' },
            { label: '合同金额(元)', prop: 'ctrNo', width: 120 },
            { label: '合同状态', prop: 'ctrNo', width: 120, dataCode: 'htzt' },
            { label: '签约日期', prop: 'ctrNo', width: 120, dataCode: '' },
            // { label: '登记人', prop: 'ctrNo', width: 120, dataCode: '' },
            // { label: '登记机构', prop: 'ctrNo', width: 120, dataCode: '' },
          ],
          rule: [{ required: true, message: '字段不能为空', triggle: 'blur' }],
        };
      },
      methods: {
        checkPermission: function (ctrlCode) {
          return !yufp.session.checkCtrl(ctrlCode, cite.menuId);
        },
        tempSave () { },
        selCust () {

        },
        selCtr () {

        }
      }
    });
  };

  // 消息处理
  exports.onmessage = function (type, message) { };
  // page销毁时触发destroy方法
  exports.destroy = function (id, cite) { };
});
