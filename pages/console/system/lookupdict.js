/**
 * @create by fuzm on 2018-05-04
 * @description 数据字典配置
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
        var _self = this;
        return {
          dataUrl: backend.ocaService + '/api/adminsmlookupdict/list',
          diaTitle: '',
          baseParams: {},
          queryFields: [
            { placeholder: '字典名称', field: 'orgCode', type: 'input' },
            { placeholder: '字典分类', field: 'orgName', type: 'input' }
          ],
          dialogVisible: false,
          queryButtons: [
            { label: '查询',
              op: 'submit',
              type: 'primary',
              icon: 'search',
              click: function (model, valid) {
                console.log(model, 'model');
                if (valid) {
                  _self.$refs.reftable.remoteData(model);
                }
              } },
            { label: '重置', op: 'reset', type: 'primary', icon: 'yx-loop2' }
          ],
          tableData: [ ],
          tableColumns: [
            { label: 'key', prop: 'crelName' },
            { label: 'value', prop: 'crelDescribe', sortable: true, resizable: true },
            { label: '操作',
              prop: 'crelDetail',
              resizable: true,
              template: function () {
                return '<template scope="scope">\
                <yu-button  type="text">操作</yu-button>\
              </template>';
              } }
          ],
          typetableUrl: backend.appOcaService + '/api/adminsmlookupdict/list', // 数据字典表格url
          isShowEditLookupDialog: false,
          editLookupFormData: { lookupItemsString: '' }, // 编辑(新增/修改)数据字典表单的数据
          editLookupFormRules: {
            lookupCode: [
              { required: true, message: '必填项'},
              { max: 50, message: '字数超50'}
            ],
            lookupName: [
              { required: true, message: '必填项' },
              { max: 100 }
            ],
            lookupTypeId: [
              { required: true, message: '必填项' }
            ]
          },
          lookupTypeOptions: [{key: 1, value: '是'}], // 字典分类的选项
          currentLookupItems: [ ], // 当前的字典项
          lookupItemRule: {
            lookupItemCode: [{ required: true, message: '必填项'}, { validator: this.codeKeyValid, trigger: 'blur'}],
            lookupItemName: [{ required: true, message: '必填项'}]
          },
          viewType: '',
          isShowEditLookupItemsDialog: false,
          editLookupItemsFormData: {} // 编辑数据字典项的表单数据
        };
      },
      watch: {
        currentLookupItems (value) {
          console.log(value, 'value');
          this.$nextTick(function () {
            console.log(this.$refs.editLookupItemTable, 'editLookupItemTable');
            console.log(this.$refs.editLookupItemTable.data, 'dd');
            this.$refs.editLookupItemTable.setCurrentRow(this.$refs.editLookupItemTable.data[0]);
          });
        }

      },
      methods: {
        codeKeyValid (rule, value, callbackFn) {
          var _this = this;
          var arr = _this.currentLookupItems.filter(function (item) {
            return item.lookupItemCode === value;
          });
          if (arr.length > 1) {
            callbackFn(new Error('数据字典得key不能重复'));
          } else {
            callbackFn();
          }
        },
        addFn () {
          this.isShowEditLookupItemsDialog = true;
          this.viewType = 'ADD';
        },
        saveFn () {
        },
        // 新增数据字典
        pushLookupItem () {
          var _this = this;
          this.currentLookupItems.push({a: '111'});
          this.$refs.editLookupItemTable.setCurrentRow(this.currentLookupItems[0]);
          this.$refs.editLookupItemTable.validate(()=>{}, true);
          // this.$refs.editLookupItemTable.validate(function (fields) {
          //   console.log(fields, 'fields');
          //   if (fields) { // 如果校验通过, fields为null
          //     var row = { lookupItemCode: '', lookupItemName: '' };
          //     _this.currentLookupItems.push(row);
          //     _this.$refs.editLookupItemTable.setCurrentRow(row);
          //   }
          // });
        },
        deleteFn () {},
        expandFn (row, expanded) {
        },

        deleteLookupItem (scope) {
          if (this.currentLookupItems.length > 1) {
            this.currentLookupItems.splice(scope.$index, 1);
          }
        },
        moveUp (index) {
          if (index > 0) {
            const update = this.currentLookupItems[index - 1];
            this.currentLookupItems.splice(index - 1, 1);
            this.currentLookupItems.splice(index, 0, update);
          } else {
            this.$message({ message: '111', type: 'error' });
          }
        },

        moveDown (index) {
          if (this.currentLookupItems.length > index + 1) {
            const downDate = this.currentLookupItems[index + 1];
            this.currentLookupItems.splice(index + 1, 1);
            this.currentLookupItems.splice(index, 0, downDate);
          } else {
            this.$message({ message: '222', type: 'error' });
          }
        },
        closeEditLookupItemsDialog () {
          this.isShowEditLookupItemsDialog = false;
        },
        checkLookupItems () {
          var array = [];
          this.currentLookupItems.map(item => {
            if (item.lookupItemCode) {
              array.push(item.lookupItemCode);
            }
          });
          const valuesAlreadySeen = [];
          for (var i = 0; i < array.length; i++) {
            if (valuesAlreadySeen.indexOf(array[i]) !== -1) {
              return true;
            }
            valuesAlreadySeen.push(array[i]);
          }
          return false;
        },
        addLookupItems () {
          var _this = this;
          var formValidate = true, isLookupItemValidateOk = false;
          this.$refs.editLookupForm.validate(function (valid) {
            formValidate = valid;
          });
          this.$refs.editLookupItemTable.validate(function (fields) {
            if (!fields) { // 如果校验通过, fields为null
              isLookupItemValidateOk = true;
            }
          });
          if (!formValidate || !isLookupItemValidateOk) {
            return;
          }
          if (this.checkLookupItems()) {
            this.$message({message: 'sss', type: 'warning'});
            return;
          }
          var params = {
            lookupItemId: this.editLookupFormData.lookupItemId,
            lookupItemBos: this.currentLookupItems,
            lookupCode: this.editLookupFormData.lookupCode,
            lookupName: this.editLookupFormData.lookupName,
            lookupTypeId: this.editLookupFormData.lookupTypeId,
            lookupTypeName: this.editLookupFormData.lookupTypeName
          };
          yufp.service.request({
            url: backend.appOcaService + '/api/adminsmlookupdict/insertdictitem',
            method: 'post',
            data: params,
            callback: (code, message, response)=>{
              if (code === '0') {
                _this.$message({ message: '保存成功', type: 'success' });
                _this.$refs.lookupTable.remoteData();
                _this.isShowEditLookupItemsDialog = false;
              } else {
                _this.$message({ message: message, type: 'error' });
              }
            }
            // 处理请求成功的情况

          });
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
