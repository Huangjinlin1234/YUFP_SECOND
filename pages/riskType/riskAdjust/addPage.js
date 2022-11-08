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
          customForm: {},
          customTitle: '',
          options: [
            { key: '01', value: '正常' },
            { key: '02', value: '关注' },
            { key: '03', value: '次级' },
            { key: '04', value: '可疑' },
            { key: '05', value: '损失' }
          ],
        };
      },
      methods: {
        back() {
          yufp.router.to('riskAdjust', {}, 'yu-idxTabBox');
        }
      }
    });
  };
});