/*
 * @description: 授信合同申请和授信合同申请历史
 * @author: ljl
 * @date: 2022-11-07
 */
define([], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
          activeNames: ['1'],
          isDisabled: false,
          formdata: {},
          dataUrl: '',
          baseParams: {},
          rule: [{ required: true, message: '字段不能为空', triggle: 'blur' }],
        }
      },
      created () {
        this.$nextTick(() => {
        })
      },
      methods: {
        checkPermission: function (ctrlCode) {
          return !yufp.session.checkCtrl(ctrlCode, cite.menuId)
        },
        importFn () {
          // 只能引入担保合同状态为“生效”的记录，引入成功后在担保合同列表中增加一条记录；
        },
        btnFn (type) {
          if (type === 'IMPORT') {
            this.isShowImport = true;
            return;
          }
          if (type === 'ADD') {
            this.isShowAdd = true;
            return;
          }
          let selection = this.$refs.refTable.selections;
          if (!selection.length) {
            this.$message.warning('请先选择一条数据！');
            return;
          }
          // 审批状态为“待发起、退回”，才能进行修改或删除！
        },
        selectCust () {
          console.log('selectAprv', "=== 111");
        },
        closeImport () {
          this.isShowImport = false;
        },
        closeAdd () {
          this.isShowAdd = false;
        },
        nextFn () {
          let flag = true;
          // this.$refs.refAddForm.validate(vali => {
          //   flag = vali;
          // })
          if (flag) {
            this.closeAdd();
            yufp.router.to('GuarCtrDetail', { ...data, isMaxMount: true }, 'yu-idxTabBox');
          }
        },
      },
    })
  }

  // 消息处理
  exports.onmessage = function (type, message) { }
  // page销毁时触发destroy方法
  exports.destroy = function (id, cite) { }
})
