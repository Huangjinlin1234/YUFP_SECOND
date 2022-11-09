
(function (vue, $, name) {
  vue.component(name, {
    template: '<div class="symple-add">\
                <div class="dialog-panel"><b>{{title}}</b></div>\
                <div class="form-content">\
                  <yu-xform ref="refSympleAdd" label-width="120px" v-model="formdata"  :rules="rules">\
                    <yu-xform-group :column="1">\
                      <yu-xform-item v-for="(item,index) in formFileds" :key="index" :label="item.label" :options="item.options" :ctype="item.ctype" :name="item.name" :disabled="item.disabled" :data-code="item.dataCode"   ></yu-xform-item>\
                    </yu-xform-group>\
                  </yu-xform>\
                </div>\
                <div class="symple-foot">\
                  <el-button type="primary" @click="nextStesp">下一步</el-button>\
                  <el-button @click="backTo">返回</el-button>\
                </div>\
          </div>',
    props: {
      title: {
        type: String,
        default: ''
      },
      rules: {
        type: Object,
        default: ()=>{
          return {};
        }
      },
      formFileds: {
        type: Array,
        default: ()=>{
          return [
            {label: '客户分类', ctype: 'select', name: 'custType', options: [{key: '1', value: '一类'}, {key: '12', value: '二类'}] },
            {label: '证件类型', ctype: 'select', name: 'cerType', options: [{key: '1', value: '一类'}, {key: '12', value: '二类'}] },
            {label: '证件号码', ctype: 'input', name: 'cerNo' },
            {label: '客户名称', ctype: 'input', name: 'custName' },
            {label: '业务类型', ctype: 'select', name: 'bizType', options: [{key: '1', value: '一类'}, {key: '12', value: '二类'}] }
          ];
        }
      }
    },

    data: function () {
      return {
        formdata: {}
      };
    },
    methods: {
      nextStesp () {
        this.$refs.refSympleAdd.validate(valid=>{
          if (valid) {
            this.$emit('next-step', this.formdata);
            this.$message.success(`数据为：${JSON.stringify(this.formdata)}`);
          }
        });
      },

      backTo () {
        this.$message.success('您要返回哪里？');
      }
    }
  });
}(Vue, yufp.$, 'div-symple-add'));