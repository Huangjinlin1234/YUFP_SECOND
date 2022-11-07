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
            { key: '01', value: '01-待认定' },
            { key: '02', value: '02-已认定' }
          ],
          options2: [
            { key: '01', value: '01-待发起' },
            { key: '02', value: '02-审批中' },
            { key: '03', value: '03-退回' },
            { key: '04', value: '04-通过' }
          ],
          tableTitle: [
            { label: '任务编号', prop: '' },
            { label: '客户编号', prop: '' },
            { label: '客户名称', prop: '' },
            { label: '机评分类', prop: '' },
            { label: '手工分类', prop: '' },
            { label: '任务生成日期', prop: '' },
            { label: '任务完成截止日期', prop: '' },
            { label: '分类时间', prop: '' },
            { label: '任务执行人', prop: '' },
            { label: '所属机构', prop: '' },
            { label: '认定状态', prop: '' },
            { label: '审批状态', prop: '' }
          ]
        };
      },
      methods: {
        identified () {
          console.log('123121313');
          yufp.router.to('fiveType', {}, 'yu-idxTabBox');
        },
        view () {
          console.log('123121313');
        }
      }
    });
  };
});