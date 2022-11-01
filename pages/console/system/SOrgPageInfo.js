/**
 * @create by chenqm1 on 2018-05-11
 * @description 出账申请信息表
 */
define(function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    yufp.lookup.reg('CRUD_TYPE,STD_ZB_APPR_STATUS,STD_ZB_CHAGEOFF');
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        var _self = this;
        return {
          dataUrl: '/api//console/api/s/users',
          showXform: false,
          baseParams: {
          },
          queryFields: [
            { placeholder: '业务流水号', field: 'bizSerno', type: 'input' },
            { placeholder: '合同编号', field: 'contNo', type: 'input' },
            { placeholder: '客户名称', field: 'cusName', type: 'input' },
            { placeholder: '客户号', field: 'cusId', type: 'input' },
            { placeholder: '客户经理', field: 'cusManager', type: 'input' },
            { placeholder: '审批状态', field: 'approveStatus', type: 'select', dataCode: 'STD_ZB_APPR_STATUS'}
          ],
          queryButtons: [
            { label: '查询',
              op: 'submit',
              type: 'primary',
              click: function (model, valid) {
                if (valid) {
                  _self.$refs.reftable.remoteData(model);
                }
              } },
            { label: '重置', op: 'reset' }
          ],
          tableColumns: [
            { label: '机构代码', prop: 'userCode', sortable: true, resizable: true },
            { label: '机构名称', prop: 'userName', sortable: true, resizable: true },
            { label: '机构层级', prop: 'orgName', sortable: true, resizable: true },
            { label: '上级机构代码', prop: 'telPhone', sortable: true, resizable: true },
            { label: '机构联系电话', prop: 'sex', sortable: true, resizable: true },
            { label: '机构地址', prop: 'prdCode', sortable: true, resizable: true }
          ],
          dialogVisible: false,
          formDisabled: false,
          pageType: 'DETAIL',
          viewTitle: yufp.lookup.find('CRUD_TYPE', false),
          formdata: {},
          orgInfo: {},
          input: ''
        };
      },
      computed: {
        dialogTitle () {
          let title;
          if (this.pageType == 'ADD') {
            title = '新增';
          } else if (this.pageType == 'EDIT') {
            title = '修改';
          } else if (this.pageType == 'DETAIL') {
            title = '详情';
          }
          return title;
        }
      },
      methods: {
        initData () {
          this.$nextTick(()=>{
            console.log(this.orgInfo);
            this.$refs.refForm.formdata = this.orgInfo;
          });
        },
        rowClick (row, event, column, index) {
          this.orgInfo = row;
        },
        handleClick (type) {
          this.pageType = type;
          this.dialogVisible = !this.dialogVisible;
        },
        closeFn () {
          this.dialogVisible = false;
        },
        comfirmFn () {
        }
      }
    });
  };
});
