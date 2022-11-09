
(function (vue, $, name) {
  vue.component(name, {
    template: '<div>\
            <el-input v-model="selectedVal" readonly :placeholder="placeholder" :disabled="disabled"\
            :size="size" :name="name" :icon="icon" :on-icon-click="onIconClickFn" @click.native="clickFn">\
            </el-input>\
            <el-dialog title="交易界面" :visible.sync="dialogVisible" size="large">\
              <el-form-q :field-data="queryFields"  v-if="queryFlag"  :buttons="queryButtons"   search-table="mytable" :columns="2"   @search-click="queryClick" ></el-form-q>\
              <div class="dialog-panel"><b>征信授权统一流水号列表</b></div>\
              <el-table-x ref="mytable" :data-url="dataUrl" @row-click="rowClickFn"\
               :table-columns="tableColumns" :base-params="baseParams">\
              </el-table-x>\
              <div slot="footer" class="dialog-footer">\
                <el-button type="primary" @click="confirmFn">选择并返回</el-button>\
                <el-button @click="dialogVisible = false">取 消</el-button>\
              </div>\
            </el-dialog>\
          </div>',

    props: {
      // 下述字段为el-input组件中部分属性，配置文档参见element-ui
      name: {
        type: String
      },
      value: {
        required: true
      },
      rawValue: String,
      size: String,
      disabled: {
        type: Boolean,
        'default': false
      },
      placeholder: {
        type: String,
        'default': ''
      },
      icon: {
        type: String,
        'default': 'search'
      },
      params: Object
    },

    data: function () {
      var _self = this;
      return {
        tableData: [{prpNo: '999', custName: '基金水电费12'}, {custName: '基金水电费'}],
        selections: [],
        selectedVal: '',
        baseParams: {},
        queryFlag: true,
        dialogVisible: false,
        fixedParams: {},
        dataUrl: backend.consoleService + '/api/s/creditPrp',
        tableColumns: [
          {label: '授权统一流水号', prop: 'prpNo', resizable: true},
          {label: '授权书编号', prop: 'bookNo', resizable: true},
          {label: '客户名称', prop: 'custName', sortable: true, resizable: true},
          {label: '客户证件类型名称', prop: 'legalOrgCode', sortable: true, resizable: true}
        ],
        queryFields: [
          {placeholder: '授权统一流水号', field: 'prpNo', type: 'input'},
          {placeholder: '客户名称', field: 'custName', type: 'input'},
          {placeholder: '授权书编号', field: 'bookNo', type: 'input'},
          {placeholder: '证件号码', field: 'cerNo', type: 'input'}
        ],
        queryButtons: [
          {label: '搜索',
            op: 'submit',
            type: 'primary',
            icon: 'search',
            click: function (model, valid) {
              if (valid) {
                var param = {condition: JSON.stringify(model)};
                // 实际应用场景请按以下格式调用实际的table引用
                _self.$refs.mytable.remoteData(param);
              }
            }},
          {label: '重置', op: 'reset', icon: 'yx-loop2'}
        ]

      };
    },
    methods: {
      clickFn: function () {
        this.$emit('click-fn', this);
      },
      onIconClickFn: function (val) {
        if (this.disabled) {
          return;
        }
        if (this.params && typeof this.params.baseParams == 'function') {
                	this.fixedParams = this.params.baseParams();
          if (this.fixedParams === false) {
            return;
          }
        }
        this.queryFlag = false;
        this.dialogVisible = true;
        // 从父级组件中， 获取查询参数
        this.$nextTick(function () {
                	   this.queryFlag = true;
                	   this.$refs.mytable.remoteData(this.fixedParams);
        });
      },
      rowClickFn: function (row) {
        this.selections = this.$refs.mytable.selections;
      },
      confirmFn () {
        if (this.selections.length < 1) {
          this.$message('请先选择一条数据');
          return;
        }
        console.log(this.selections[0], 'sss');
        this.$emit('input', this.selections[0].bookNo);
        if (this.params && typeof this.params.valid == 'function') {
          if (this.params.valid() == false) {
            this.selectedVal = '';
            return;
          }
        }
        if (this.params && typeof this.params.show == 'string' && this.params.show != '') {
          this.selectedVal = this.selections[0][this.params.show];
        } else {
          this.selectedVal = this.selections[0].prpNo;
        }
        console.log(this.selections[0].prpNo, 'this.selections[0].prpNo');
        // 这个是你自定义返回的接口事件
        this.$emit('select-fn', this.selections[0].prpNo, this.selections[0]);
        // this.dialogVisible = false;
      },
      // 对外提供选择器显示值
      getRawValue: function () {
        return this.selectedVal;
      },
      convertKey: function (val) {
        // 将key转换为对应的value值
        return val;
      },
      // 查询
      queryClick: function (model, valid) {
        if (valid) {
          this.selections = [];
          var obj = {};
          yufp.extend(obj, model);
          if (this.fixedParams != null && typeof this.fixedParams == 'object') {
            yufp.extend(obj, this.fixedParams);
          }

          this.$refs.mytable.remoteData(obj);
        }
      }

    },
    mounted: function () {
      this.selectedVal = this.rawValue ? this.rawValue : this.value;
      if (typeof this.params != 'undefined' && this.params != null) {
        var dataUrl = this.params.dataUrl; // 父组件的请求路径
        if (typeof dataUrl != 'undefined' && dataUrl != null && dataUrl != '') {
          this.dataUrl = dataUrl;
        }
        var contions = this.params.condition;
        if (contions === true) {
          this.baseParams = null;
        }
      }
    },
    watch: {
      value: function (val) {
        // 将key转换为对应的value值
        if (typeof val == 'undefined' || val == null || val == '') {
          this.selectedVal = '';
        } else if (this.params && this.params.show === 'prpNo') {
          this.selectedVal = val;
        } else {
          this.selectedVal = this.selectedVal ? this.selectedVal : val;
        }
      },
      rawValue: function (val) {
        this.selectedVal = val;
      }
    }

  });
}(Vue, yufp.$, 'div-user-selector'));