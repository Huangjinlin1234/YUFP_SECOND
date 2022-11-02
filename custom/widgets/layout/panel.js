/**
 * panel
 * 注：自定义组件规范：
 * 1、对外默认提供v-model配置,raw-value
 * 2、对外提供readonly、disabled、size属性
 * 3、对外接口事件：select-fn,具体参数请自定义
 * Created by helin3 on 2017/12/15.
 */
(function (vue, $, name) {
  vue.component(name, {
    template: '<div>\
      <div class="el-panel">\
        <el-row class="title-area" type="flex" justify="space-between">\
          <el-col :span="4">\
            <b class="title">{{ panelTitle }}</b>\
          </el-col>\
          <el-col :span="20">\
            <slot name="func" />\
            <yu-button v-if="isShowHeight" type="text" @click="openHight">高级查询<i class="el-icon-arrow-up" /></yu-button>\
          </el-col>\
        </el-row>\
        <el-row class="content-area">\
          <slot v-show="open" name="searchForm" />\
          <slot name="content" />\
        </el-row>\
      </div>\
    </div>',
    props: {
      panelTitle: {
        type: String,
        default: ''
      },
      isShowHeight: {
        type: Boolean,
        default: true
      }
    },

    data: function () {
      return {
        open: false
      };
    },
    methods: {
      openHight () {
        this.open = !this.open;
      }
    }
  });
}(Vue, yufp.$, 'panel'));


