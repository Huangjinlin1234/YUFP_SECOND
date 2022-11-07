/**
 * @create by xxx on 2018-xx-xx
 * @description xx
 */
define(function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    // yufp.lookup.reg('CRUD_TYPE,NATIONALITY,PUBLISH_STATUS');
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
          formdata1: {},
          options: [
            { key: '01', value: '01-待发起' },
            { key: '02', value: '02-审批中' },
            { key: '03', value: '03-退回' },
            { key: '04', value: '04-通过' }
          ],
          tableTitle: [
            { label: '申请流水号', prop: '' },
            { label: '借据编号', prop: '' },
            { label: '合同编号', prop: '' },
            { label: '客户编号', prop: '' },
            { label: '客户名称', prop: '' },
            { label: '调整前五级分类', prop: '' },
            { label: '调整后五级分类', prop: '' },
            { label: '所属机构', prop: '' },
            { label: '审批状态', prop: '' }
          ]
        };
      },
      methods: {
        add() {
          console.log('123121313');
          yufp.router.to('addPage', {}, 'yu-idxTabBox');
        },
        upadate() {
          console.log('123121313');
        },
        deleteFn() {
          console.log('123121313');
        },
        view() {
          console.log('123121313');
        }
      }
    });
  };
});