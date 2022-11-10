/**
 * Created by yumeng on 2017/11/26.
 */
define([
  './custom/widgets/js/OrgCtrlSelector.js',
  './custom/widgets/js/panel.js',
  './custom/api/common.js'

], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    yufp.lookup.reg('CRUD_TYPE,NATIONALITY,PUBLISH_STATUS');
    var vm = yufp.custom.vue({
      el: '#exampleEdit',
      data: function () {
        var me = this;
        return {
          viewTitle: [
            {key: 'ADD', value: '新增'},
            {key: 'EDIT', value: '修改'},
            {key: 'DETAIL', value: '详情'}
          ],
          viewType: 'ADD',
          saveBtnShow: true,
          formdataX: {},
          dialogVisible: false,
          formDisabled: false,
          rules: {
            address: [
              { required: true, message: '请输入地址', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ]
          },
          options: [
            {key: '01', value: '草稿'},
            {key: '02', value: '已发布'},
            {key: '03', value: '已删除'}
          ],
          tableData1: [{
            id: '1',
            date: '2016-05-03',
            name: '01',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            id: '2',
            date: '2016-05-02',
            name: '02',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            id: '3',
            date: '2016-05-04',
            name: '03',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            id: '4',
            date: '2016-05-04',
            name: '02',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
          tableData2: [{
            id: '1',
            date: '2016-05-03',
            name: '01',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            id: '2',
            date: '2016-05-02',
            name: '02',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            id: '3',
            date: '2016-05-04',
            name: '03',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            id: '4',
            date: '2016-05-04',
            name: '02',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
          queryFields: [
            {placeholder: '标题', field: 'title', type: 'input'},
            {placeholder: '时间', field: 'create_at', type: 'date'},
            {placeholder: '类型', field: 'type', type: 'select', dataCode: 'NATIONALITY' }
          ]
        };
      },
      mounted: function () {
        var _this = this;
        if (localStorage.getItem('data') && localStorage.getItem('data').length > 0) {
          var codedata = JSON.parse(localStorage.getItem('data'));
          _this.tableData1 = codedata;
        }

        if (localStorage.getItem('data2') && localStorage.getItem('data2').length > 0) {
          var codedata2 = JSON.parse(localStorage.getItem('data2'));
          _this.tableData2 = codedata2;
        }
        pubkey(function (data) {
          console.log(JSON.stringify(data));
        });
      },
      methods: {
        change: function () {
          yufp.logger.info(1);
        },
        clickFn: function () {
          this.$refs.yutable.validate();
        },
        cellClick: function (row, column, cell, event) {
        },
        switchStatus: function (viewType, editable) {
          var _this = this;
          _this.viewType = viewType;
          _this.saveBtnShow = editable;
          _this.dialogVisible = true;
          _this.formDisabled = !editable;
        },
        addFn: function () {
          var _this = this;
          _this.switchStatus('ADD', true);

          this.refreshFn();
          _this.$refs.refForm.resetFields();
        },
        refreshFn: function () {
          if (localStorage.getItem('data') && localStorage.getItem('data').length > 0) {
            var codedata = JSON.parse(localStorage.getItem('data'));
            this.tableData1 = codedata;
          }
        },
        saveFn: function () {
          var _this = this, newobject = [], editId;
          if (_this.viewType === 'ADD') { // 新增
            /** 生成新的ID**/
            _this.formdataX.id = 'UID_CUST' + Math.floor(Math.random() * 100) + 1;
            /** 追加数据**/
            _this.formdataX.date = _this.dateConversion(_this.formdataX.date);
            _this.tableData1.push(_this.formdataX);
            localStorage.setItem('data', JSON.stringify(_this.tableData1));
          } else { // 修改
            editId = _this.formdataX.id;
            _this.formdataX.date = _this.dateConversion(_this.formdataX.date);
            _this.tableData1.forEach((x, i) => {
              if (x.id === editId) {
                x = _this.formdataX;
              }
              newobject.push(x);
            });
            _this.$nextTick(function () {
              yufp.clone(newobject, _this.tableData1);
            });
            localStorage.setItem('data', JSON.stringify(newobject));
          }
          // 接口上送区域
          _this.dialogVisible = false;
        },
        dateConversion: function (stamp) {
          if (stamp && stamp.length < 11) {
            return stamp;
          }
          var y, m, d;
          y = stamp.getFullYear();
          m = stamp.getMonth() + 1;
          d = stamp.getDate();
          return y + '-' + m + '-' + d;
        },
        modifyFn: function () {
          if (this.$refs.yutable2.selections.length < 1) {
            this.$message({message: '请先选择一条记录', type: 'warning'});
            return;
          }
          this.refreshFn();
          this.switchStatus('EDIT', true);
          setTimeout(() => {
            yufp.clone(this.$refs.yutable2.selections[0], this.formdataX);
          }, 100);
        },
        delFn: function () {
          this.formdataX = {};
          if (this.$refs.yutable2.selections.length < 1) {
            this.$message({message: '请先选择一条记录', type: 'warning'});
            return;
          }
          var _this = this;
          var newobject = [];
          _this.tableData1.forEach((x, i) => {
            if (x.id !== _this.$refs.yutable2.selections[0].id) {
              newobject.push(x);
            }
          });
          _this.tableData1 = newobject;
          var newdata = JSON.stringify(_this.tableData1);
          localStorage.setItem('data', newdata);
        },
        cancelFn: function () {
          this.dialogVisible = false;
        },
        infoFn: function () {
          if (this.$refs.yutable2.selections.length < 1) {
            this.$message({message: '请先选择一条记录', type: 'warning'});
            return;
          }
          this.switchStatus('DETAIL', false);
          this.$nextTick(function () {
            yufp.clone(this.$refs.yutable2.selections[0], this.formdataX);
          });
        },
        rowClickFn: function (row) {
          this.infoFn();
        },
        // 模板1方法
        addFn1: function () {
          var thisID, address;
          if (this.tableData2 && this.tableData2.length > 0) {
            thisID = this.tableData2[this.tableData2.length - 1].id;
            address = this.tableData2[this.tableData2.length - 1].address;

            if (!address) {
              this.$message({
                message: '请填写地址信息！',
                type: 'warning'
              });

              return false;
            }
          }
          var nullObject = {
            id: this.queryID(thisID, this.tableData2) ? thisID * 1 + 1 : thisID || 1,
            date: '',
            name: '',
            address: ''
          };
          this.tableData2.push(nullObject);
          this.$refs.yutable3.setCurrentRow(this.tableData2[0]);
        },
        queryID: function (id, all) {
          var start = false;
          all.forEach((x) => {
            if (x.id === id) {
              start = true;
            }
          });
          return start;
        },

        saveFn1: function () {
          localStorage.setItem('data2', JSON.stringify(this.tableData2));
          this.$message({
            message: '保存成功！',
            type: 'success'
          });
        },

        delFn1: function () {
          if (this.$refs.yutable3.selections.length < 1) {
            this.$message({message: '请先选择一条记录', type: 'warning'});
            return;
          }
          var _this = this;
          var newobject = [];
          _this.tableData2.forEach((x, i) => {
            if (x.id !== _this.$refs.yutable3.selections[0].id) {
              newobject.push(x);
            }
          });
          _this.tableData2 = newobject;
          var newdata = JSON.stringify(_this.tableData2);
          localStorage.setItem('data2', newdata);
        }
      }
    });
  };
});