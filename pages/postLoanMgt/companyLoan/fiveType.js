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
            label: '五级分类认定',
            children: [{
              label: '任务基本信息'
            },{
              label: '五级分类认定'
            },{
              label: '影像资料'
            }]
          }],
          defaultProps: {
            children: 'children',
            label: 'label'
          }
        };
      },
      methods: {
        handleNodeClick(data) {
          switch (data.label) {
            case '任务基本信息': yufp.router.to('basicInfo', {}, 'info'); break;
            case '五级分类认定': yufp.router.to('fiveTypeIdtf', {}, 'info'); break;
            default: yufp.router.to('basicInfo', {}, 'info'); break;
          }
        },
        back() {
          yufp.router.to('fiveType', {}, 'yu-idxTabBox');
        }
      }
    });
  };
});