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
          data: [{
            id: 1,
            label: '五级分类认定',
            children: [{
              id: 2,
              label: '任务基本信息'
            },{
              id: 3,
              label: '五级分类认定'
            },{
              id: 4,
              label: '影像资料'
            }]
          }],
          defaultProps: {
            children: 'children',
            label: 'label'
          }
        };
      },
      created() {
        this.handleNodeClick(2);
      },
      methods: {
        handleNodeClick(data) {
          switch (data.id) {
            case 2: yufp.router.to('basicInfo', {}, 'info'); break;
            case 3: yufp.router.to('fiveTypeIdtf', {}, 'info'); break;
            default: yufp.router.to('basicInfo', {}, 'info');
          }
        },
        back() {
          yufp.router.to('companyLoan', {}, 'yu-idxTabBox');
        }
      }
    });
  };
});