/**
 * @create
 * @description
 */
define([
  './custom/widgets/js/OrgCtrlSelector.js',
  './custom/widgets/js/panel.js'
], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    yufp.lookup.reg('CRUD_TYPE,ORG_LEVEL,STD_ORG_STATUS,STD_YES_NO');
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        return {
          dataUrl: {
            first: backend.consoleService + '/api/user/oper/logs'
          },
          current: '1',
          currentKey: '1',
          tableItem: {},
          fields: [
            {label: '日期', name: 'date', ctype: 'input', width: '120', valueFormat: 'yyyy-MM-dd'},
            {label: '姓名', name: 'userName', ctype: 'input', width: '120' },
            {label: '省份', name: 'province', ctype: 'input', width: '120' },
            {label: '市区', name: 'city', ctype: 'input', width: '120' },
            {label: '地址', name: 'address', ctype: 'input', width: '120' },
            {label: '邮编', name: 'zip', ctype: 'input', width: '120' }
          ],
          activeNames: ['1', '2', '3', '4'],
          dialogVisible: false,
          tableIndex: 0
        };
      },
      methods: {
        nodeClick (node) {
          this.current = node.id;
        },
        addFn (num) {
          this.tableIndex = num;
          this.dialogVisible = true;
        },
        deleteFn (index) {
          this.$confirm('确定删除该数据吗？', '提示', {
            type: 'warning'
          }).then(()=>{
            let selection = this.$refs[`refTable${index}`].selections[0];
            let selectionIndex = this.$refs[`refTable${index}`].tabledata.findIndex(item=>item.id === selection.id);
            this.$refs[`refTable${index}`].tabledata.splice(selectionIndex, 1);
          });
        },
        handleClose () {
          this.$refs.refFormDemo.resetFields();
          this.dialogVisible = false;
        },
        submitFn () {
          let model = yufp.util.clone(this.tableItem);
          this.$refs[`refTable${this.tableIndex}`].tabledata.push(model);
          this.dialogVisible = false;
        },
        saveFn (index) {
          this.$message.success('保存成功');
        }
      }
    });
  };
  // 消息处理
  exports.onmessage = function (type, message) {

  };
  // page销毁时触发destroy方法
  exports.destroy = function (id, cite) {

  };
});
