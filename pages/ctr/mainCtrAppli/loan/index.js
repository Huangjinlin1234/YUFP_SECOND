/*ltProps
 * @description: 借款合同申请详情
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
              id: 100,
              label: '借款合同申请详情',
              children: [
                { id: 0, label: '基本信息' },
                { id: 1, label: '担保合同信息' },
                { id: 2, label: '第三方担保信息' },
                { id: 3, label: '关联授信合同' },
                { id: 4, label: '共同借款人信息' },
                { id: 5, label: '批复信息' },
                { id: 6, label: '合同预览' },
                { id: 7, label: '影像资料' },
                { id: 8, label: '审批历史' }
              ]
            }
          ],
        };
      },
      methods: {
        checkPermission: function (ctrlCode) {
          return !yufp.session.checkCtrl(ctrlCode, cite.menuId);
        },
        clickNode (data) {
          let routerids = ['LoanBaseInfo', 'LoanGuaranteeCtr', 'LoanThirdGuarCtr', 'LoanRelCredCtr', 'LoanBorrowerCtr', '', 'LoanContractPreview', '', 'LoanApprovalHis'];
          if (routerids[data.id]) {
            if (hashCode === 'LoanContDetailC') {
              routerid = routerids[data.id] + 'C'
            } else {
              routerid = routerids[data.id] + 'P'
            }
            yufp.router.to(routerid, {}, this.ctrDetail)
          }
        }
      }
    });
  };

  // 消息处理
  exports.onmessage = function (type, message) { };
  // page销毁时触发destroy方法
  exports.destroy = function (id, cite) { };
});