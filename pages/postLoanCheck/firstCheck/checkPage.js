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
            label: '首次检查',
            children: [{
              id: 2,
              label: '检查信息'
            },{
              id: 3,
              label: '首次检查报告'
            },{
              id: 4,
              label: '征信查询'
            },{
              id: 5,
              label: '影像资料'
            },{
              id: 6,
              label: '审批历史'
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
            case 2: yufp.router.to('checkInfo', {}, 'info'); break;
            default: yufp.router.to('checkInfo', {}, 'info');
          }
        },
        save() {
          console.log('12121211212');
        },
        submit() {
          console.log('12121211212');
        },
        back() {
          yufp.router.to('firstCheck', {}, 'yu-idxTabBox');
        }
      }
    });
  };
});