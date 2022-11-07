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
          options1: [
            { key: '01', value: '01-待检查' },
            { key: '02', value: '02-已提交' },
            { key: '03', value: '03-已检查' },
            { key: '04', value: '04-已超时' }
          ],
          options2: [
            { key: '01', value: '待发起' },
            { key: '02', value: '审批中' },
            { key: '03', value: '通过' },
            { key: '04', value: '否决' },
            { key: '05', value: '退回' },
            { key: '06', value: '在途补件' },
            { key: '07', value: '终止' }
          ],
          tableTitle: [
            { label: '任务编号', prop: '' },
            { label: '客户编号', prop: '' },
            { label: '客户名称', prop: '' },
            { label: '统一信用代码', prop: '' },
            { label: '任务执行人', prop: '' },
            { label: '所属机构', prop: '' },
            { label: '任务生成日期', prop: '' },
            { label: '定期检查周期', prop: '' },
            { label: '任务完成截止日期', prop: '' },
            { label: '检查状态', prop: '' },
            { label: '审批状态', prop: '' }
          ]
        };
      },
      methods: {
        add () {
          console.log('123121313');
        },
        check () {
          yufp.router.to('checkPage1', {}, 'yu-idxTabBox');
        },
        view () {
          console.log('123121313');
        },
        deleteFn () {
          console.log('123121313');
        }
      }
    });
  };
});