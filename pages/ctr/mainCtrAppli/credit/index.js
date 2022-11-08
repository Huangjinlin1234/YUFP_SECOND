/*
 * @description: 授信合同申请详情
 * @author: ljl
 * @date: 2022-11-07
 */
define([''], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    console.log(hashCode, 'hashCode::: ');
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
          ctrDetail: 'ctrDetail' + new Date().getTime(),
          treeData: [
            {
              id: 1,
              label: '授信合同申请详情',
              children: [
                { id: 2, label: '基本信息' },
                { id: 3, label: '担保合同信息' },
                { id: 4, label: '第三方担保信息' },
                { id: 5, label: '关联借款合同' },
                { id: 6, label: '共同授信人信息' },
                { id: 7, label: '批复信息' },
                { id: 8, label: '合同预览' },
                { id: 9, label: '影像资料' },
                { id: 10, label: '审批历史' }
              ]
            }
          ],
          defaultProps: {
            children: 'children',
            label: 'label'
          }
        };
      },
      methods: {
        checkPermission: function (ctrlCode) {
          return !yufp.session.checkCtrl(ctrlCode, cite.menuId);
        },
        clickNode(data) {
          console.log(data, 'data::: ');
          switch (data.id) {
            case 2:
              yufp.router.to('CredBaseInfo', {}, this.ctrDetail);
              break;
            case 3:
              yufp.router.to('', {}, this.ctrDetail);
              break;
            case 4:
              yufp.router.to('', {}, this.ctrDetail);
              break;
            case 5:
              yufp.router.to('', {}, this.ctrDetail);
              break;
            case 6:
              yufp.router.to('', {}, this.ctrDetail);
              break;
            case 7:
              yufp.router.to('', {}, this.ctrDetail);
              break;
            case 8:
              yufp.router.to('', {}, this.ctrDetail);
              break;
            case 9:
              yufp.router.to('', {}, this.ctrDetail);
              break;

            default:
              break;
          }
        }
      }
    });
  };

  // 消息处理
  exports.onmessage = function (type, message) {};
  // page销毁时触发destroy方法
  exports.destroy = function (id, cite) {};
});
