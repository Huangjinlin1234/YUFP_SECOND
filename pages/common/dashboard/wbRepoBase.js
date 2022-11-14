/**
 * Created by wangyin on 2017/11/16.
 */
define([
  'echarts',
  './custom/widgets/js/panel.js'

], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    yufp.lookup.reg('STD_WB_RISK_MESSAGE_TYPE,STD_WB_RISK_MESSAGE_TYPE ,STD_WB_NOTICE_TYPE,STD_WB_PRB_MESSAGE_TYPE,STD_WB_PRB_STATUS');
    var _self = yufp.custom.vue({
      el: cite.el,
      data: function () {
        var _self = this;
        return {
          data: [{ id: '0', label: '根节点', pid: '-1', children: [{ id: '1', label: '一级-1', pid: '0', children: [{ id: '4', label: '二级-1-1', pid: '1', children: [{ id: '9', label: '三级-1-1-1', pid: '4' }] }, { id: '5', label: '二级-1-2', pid: '1' }] }, { id: '2', label: '一级-2', pid: '0', children: [{ id: '6', label: '二级-2-1', pid: '2' }, { id: '7', label: '二级-2-2', pid: '2' }] }, { id: '3', label: '一级-3', pid: '0', children: [{ id: '8', label: '二级-3-1', pid: '3' }] }] }],
          dataUrl: '/api/wbrepobase',
          param: {},
          treeUrl: `${backend.cmisCfg}/api/adminsmtreedic/treeInput`,
          formdata: {
            serno: '222'
          },
          check: false,
          menuTreeData: [],
          menuformdata: {},
          dialogVisible: false,
          formDisabled: false,
          viewType: 'DETAIL',
          viewTitle: yufp.lookup.find('CRUD_TYPE', false),
          saveBtnShow: true,
          isManaging: false,
          upMenuId: '0',
          upLocate: '0',
          filterText: '',
          menudialogVisible: false,
          roleStr: '',
          fileListInfo: [],
          fileList: [],
          searchFormdata: {},

          roleParms: {
            title: '选择角色',
            method: 'get',
            checkbox: true,
            rowkey: 'roleCode',
            queryFields: [{ placeholder: '角色编号', field: 'roleCode', type: 'input', fuzzyQuery: 'both' }, { placeholder: '角色名称', field: 'roleName', type: 'input', fuzzyQuery: 'both' }],
            dataUrl: `${backend.appOcaService}/api/selectAllRole`,
            tableColumns: [{ label: '角色编号', prop: 'roleCode' }, { label: '角色名称 ', prop: 'roleName' }]
          },
          orgParms: {
            title: '选择机构',
            method: 'get',
            checkbox: true,
            rowkey: 'orgCode',
            queryFields: [{ placeholder: '机构编号', field: 'orgCode', type: 'input', fuzzyQuery: 'both' }, { placeholder: '机构名称', field: 'orgName', type: 'input', fuzzyQuery: 'both' }],
            dataUrl: '/api/selectAllOrg',
            tableColumns: [{ label: '机构编号', prop: 'orgCode' }, { label: '机构名称 ', prop: 'orgName' }, { label: '状态 ', prop: 'orgSts', dataCode: 'DATA_STS'}]
          }
        };
      },
      created: function () {
        this.getTreeData();
      },
      mounted () {

      },
      methods: {
        selectRole (rows) {
          let roles = [];
          for (let i = 0; i < rows.length; i++) {
            roles.push(rows[i].roleCode);
          }
          this.formdata.roleRange = roles.join(',');
        },
        selectOrg (rows) {
          let roles = [];
          for (let i = 0; i < rows.length; i++) {
            roles.push(rows[i].orgCode);
          }
          this.formdata.orgRange = roles.join(',');
        },
        /** 上传文件 */
        uploadedFn (fileItem, num) {
          fileItem.icon && delete fileItem.icon;
          this.fileList.push(fileItem);
        },
        /** 删除文件 */
        deleteFileFn (file) {
          this.fileList.forEach((item, index) => {
            if (item.filePath === file.filePath) {
              this.fileList.splice(index, 1);
            }
          });
        },
        /** 获取目录树树数据 */
        getTreeData () {
          var _this = this;
          yufp.service.request({
            method: 'POST',
            url: '/api/getTresDta',
            data: {},
            callback: function (code, message, res) {
              console.log('111111', code, message, res);
              if (code == '0') {
                _this.menuTreeData = res.rows;
                console.log(res, '---------------');
              }
            }
          });
        },
        /** 目录树过滤方法 */
        filterMenuTreeNode: function (value, data) {
          if (!value) {
            return true;
          }
          return data.label.indexOf(value) !== -1;
        },
        /** 目录树保存方法 */
        saveMenuFn () {
          let _this = this;
          let model = {};
          let validate = false;
          _this.$refs.refMenuForm.validate(function (valid) {
            validate = valid;
          });
          if (!validate) {
            return;
          }
          yufp.clone(_this.menuformdata, model);
          model.optType = 'STD_WB_REPO_BASE';
          model.comSts = 'A';
          model.memo = '知识库分类（树形字典）';
          let url = `${backend.cmisCfg}/api/adminsmtreedic/create`;
          if (model.pkId) {
            url = `${backend.cmisCfg}/api/adminsmtreedic/update`;
          } else {
            // 新增时设置目录上一级
            model.abvenName = this.upMenuId;
            model.locate = this.upLocate;
          }
          // 向后台发送保存请求
          yufp.service.request({
            url: url,
            method: 'POST',
            data: model,
            callback: function (code, message, response) {
              if (response.code == '0') {
                // _this.$refs.refMenuTree.remoteData();
                _this.getTreeData();
                _this.$message({ message: '操作成功！', type: 'info' });
                _this.menudialogVisible = false;
              } else {
                _this.$message({ message: message, type: 'error' });
              }
            }
          });
        },
        /** 删除菜单 */
        deleteMenu () {
          let _this = this;
          let node = _this.$refs.refMenuTree.getCurrentNode();
          if (!node) {
            _this.$message({ message: '请先选择一条记录', type: 'warning' });
            return;
          }
          if (this.$refs.refTable.tabledata.length > 0) {
            _this.$message({ message: '该目录下已存在内容，不允许删除', type: 'warning' });
            return;
          }
          let model = {};
          yufp.clone(node, model);
          model.optType = 'STD_WB_REPO_BASE';
          _this.$confirm('此操作将永久删除, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            callback: function (action) {
              if (action === 'confirm') {
                yufp.service.request({
                  method: 'POST',
                  url: `${backend.cmisCfg}/api/adminsmtreedic/deleteTree`,
                  data: model,
                  callback: function (code, message, response) {
                    if (response.code == '0') {
                      _this.$message({ message: '数据删除成功！', type: 'info' });
                      _this.getTreeData();
                    } else {
                      _this.$message({ message: '数据删除失败！', type: 'error' });
                    }
                  }
                });
              }
            }
          });
        },
        /** 目录节点树修改 */
        editMenu () {
          let _this = this;
          let node = _this.$refs.refMenuTree.getCurrentNode();
          if (node) {
            _this.menudialogVisible = true;
            _this.$nextTick(function () {
              _this.$refs.refMenuForm.resetFields();
              _this.menuformdata.pkId = node.pkId;
              _this.menuformdata.enName = node.id;
              _this.menuformdata.cnName = node.label;
              _this.menuformdata.inputIdName = node.inputIdName;
              _this.menuformdata.inputBrIdName = node.inputBrIdName;
            });
          } else {
            _this.$message({ message: '请先选择一条记录', type: 'warning' });
          }
        },
        /** 节点树新增 */
        confirmAddMenu () {
          let _this = this;
          _this.menudialogVisible = true;
          _this.$nextTick(function () {
            _this.$refs.refMenuForm.resetFields();
            _this.menuformdata.inputIdName = _this.userName;
            _this.menuformdata.inputBrIdName = _this.org.name;
          });
        },
        /** 树节点点击事件 */
        treeNodeClick (nodeData, node, self) {
          console.log(nodeData, node, self, '==');
          //   var _this = this;
          // 如果当前表单为编辑模式 且 已改动过部分字段数据
          this.upMenuId = nodeData.id;
          this.upLocate = nodeData.locate;
          this.param = { condition: { locate: nodeData.locate} };
        },
        /**
     * 取消
     */
        cancelFn: function () {
          this.dialogVisible = false;
        },
        /**
     * 保存按钮
     */
        saveFn: function (index) {
          if (this.viewType == 'ADD') {
            this.addSaveFn(index);
          } else {
            this.editSaveFn(index);
          }
        },

        /**
     * 新增-保存
     */
        addSaveFn: function (index) {
          let _this = this;
          let model = {};
          yufp.clone(_this.formdata, model);
          let validate = false;

          _this.$refs.refForm.validate(function (valid) {
            validate = valid;
          });

          if (!validate) {
            return;
          }
          model.status = index;
          model.accessory = JSON.stringify(this.fileList);
          // 向后台发送保存请求
          yufp.service.request({
            method: 'POST',
            url: `${backend.cmisCfg}/api/wbrepobase/create`,
            data: model,
            callback: function (code, message, response) {
              if (response.code == '0') {
                _this.$refs.refTable.remoteData();
                _this.$message({ message: '数据新增成功！', type: 'info' });
                _this.dialogVisible = false;
              } else {
                _this.$message({ message: '数据新增失败！', type: 'error' });
              }
            }
          });
        },

        /**
     * 更新-保存
     */
        editSaveFn: function (index) {
          let _this = this;
          let model = {};
          yufp.clone(_this.formdata, model);
          let validate = false;

          _this.$refs.refForm.validate(function (valid) {
            validate = valid;
          });
          if (!validate) {
            return;
          }
          model.accessory = JSON.stringify(this.fileList);
          model.status = index;
          // 向后台发送保存请求
          yufp.service.request({
            method: 'POST',
            url: `${backend.cmisCfg}/api/wbrepobase/update`,
            data: model,
            callback: function (code, message, response) {
              if (response.code == '0') {
                _this.$refs.refTable.remoteData();
                _this.$message({ message: '数据更新成功！', type: 'info' });
                _this.dialogVisible = false;
              } else {
                _this.$message({ message: '数据更新失败！', type: 'error' });
              }
            }
          });
        },

        /**
     * 控制保存按钮、xdialog、表单的状态
     * @param viewType 表单类型
     * @param editable 可编辑,默认false
     */
        switchStatus: function (viewType, editable) {
          this.viewType = viewType;
          this.saveBtnShow = editable;
          this.dialogVisible = true;
          this.formDisabled = !editable;
        },

        /**
     * 新增按钮
     */
        addFn: function () {
          let _this = this;
          let node = _this.$refs.refMenuTree.getCurrentNode();
          if (!node) {
            _this.$message({ message: '请先选择一个目录', type: 'warning' });
            return;
          }
          let params = {
            roles: this.roles,
            status: '新增'
          };
          if (!isLoginEdit(params)) {
            return;
          }
          _this.switchStatus('ADD', true);
          _this.$nextTick(function () {
            _this.$refs.refForm.resetFields();
            _this.formdata.catalogId = node.id;
            _this.formdata.catalogName = node.label;
            _this.formdata.inputIdName = _this.userName;
            _this.formdata.inputId = _this.loginCode;
            _this.formdata.inputBrIdName = _this.org.name;
            _this.formdata.roleRight = '1'; // 默认值
            _this.formdata.orgRight = '1'; // 默认值
          });
        },

        /**
     * 修改
     */
        modifyFn: function () {
          let _this = this;
          if (_this.$refs.refTable.selections.length !== 1) {
            _this.$message({
              message: '请先选择一条记录',
              type: 'warning'
            });
            return;
          }
          let params = {
            roles: this.roles,
            status: '修改'
          };
          if (!isLoginEdit(params)) {
            return;
          }
          _this.switchStatus('EDIT', true);
          _this.$nextTick(function () {
            _this.$refs.refForm.resetFields();
            let obj = _this.$refs.refTable.selections[0];
            yufp.clone(obj, _this.formdata);
            _this.fileListInfo = JSON.parse(obj.accessory);
          });
        },

        /**
     * 详情
     */
        infoFn: function () {
          let _this = this;
          let selectionsAry = _this.$refs.refTable.selections;
          if (selectionsAry.length !== 1) {
            _this.$message({
              message: '请先选择一条记录',
              type: 'warning'
            });
            return;
          }

          _this.switchStatus('DETAIL', false);
          _this.$nextTick(function () {
            _this.$refs.refForm.resetFields();
            yufp.clone(selectionsAry[0], _this.formdata);
            _this.fileListInfo = JSON.parse(selectionsAry[0].accessory);
          });
        },

        /**
     * 删除
     */
        deleteFn: function () {
          let _this = this;
          let selections = _this.$refs.refTable.selections;
          if (selections.length != 1) {
            _this.$message({
              message: '请先选择一条记录',
              type: 'warning'
            });
            return;
          }
          let params = {
            roles: this.roles,
            status: '删除'
          };

          if (selections[0].status == '3') {
            _this.$message({
              message: '该笔已作废,不允许删除',
              type: 'warning'
            });
            return;
          }
          let arr = [];
          for (let i = 0; i < selections.length; i++) {
            arr.push(selections[i].serno);
          }

          _this.$confirm('此操作将永久删除, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            callback: function (action) {
              if (action === 'confirm') {
                if (selections[0].status == '1') {
                  yufp.service.request({
                    method: 'POST',
                    url: `${backend.cmisCfg}/api/wbrepobase/batchdelete/` + arr.join(','),
                    callback: function (code, message, response) {
                      if (response.code == '0') {
                        _this.$message({ message: '数据删除成功！', type: 'info' });
                        _this.$refs.refTable.remoteData();
                      } else {
                        _this.$message({ message: '数据删除失败！', type: 'error' });
                      }
                    }
                  });
                } else {
                  let model = {};
                  model.status = '3';
                  model.serno = selections[0].serno;
                  yufp.service.request({
                    method: 'POST',
                    url: `${backend.cmisCfg}/api/wbrepobase/update`,
                    data: model,
                    callback: function (code, message, response) {
                      if (response.code == '0') {
                        _this.$refs.refTable.remoteData();
                        _this.$message({ message: '数据更新成功！', type: 'info' });
                        _this.dialogVisible = false;
                      } else {
                        _this.$message({ message: '数据更新失败！', type: 'error' });
                      }
                    }
                  });
                }
              }
            }
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