/**
 * div-cont-temp-g-selector
 * 合同模版组选择器
 * 注：自定义组件规范：
 * 1、对外默认提供v-model配置,raw-value
 * 2、对外提供readonly、disabled、size属性
 * 3、对外接口事件：select-fn,具体参数请自定义
 * Created by xxx on 2018/05/07.
 */
(function (vue, $, name) {
  vue.component(name, {
    template: '<div >\
        <div class="panel-class" >\
            <b  class="left">{{title}}</b> \
            <slot name="right"></slot>\
        </div>\
         <slot></slot>\
        </div>',
    props: {
      // 下述字段为el-input组件中部分属性，配置文档参见element-ui
      title: {
        type: String,
        default: '机构'
      }

    },

    data: function () {
      return {

      };
    },
    methods: {}

  });
}(Vue, yufp.$, 'panel'));