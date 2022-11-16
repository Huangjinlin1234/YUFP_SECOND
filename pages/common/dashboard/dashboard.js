/**
 * Created by wangyin on 2017/11/16.
 */
define([
  'echarts',
  './custom/widgets/js/YuSingleUpload.js'
], function (require, exports) {
  // page加载完成后调用ready方法
  exports.ready = function (hashCode, data, cite) {
    yufp.lookup.reg('STD_WB_RISK_MESSAGE_TYPE,STD_WB_RISK_MESSAGE_TYPE ,STD_WB_NOTICE_TYPE,STD_WB_PRB_MESSAGE_TYPE,STD_WB_PRB_STATUS');
    var _self = yufp.custom.vue({
      el: cite.el,
      data: function () {
        var _self = this;
        return {
          tipsData: { back: 0, done: 0, ticket: 0, poolsize: 0, his: 0, copy: 0},
          myData: [ ],
          risknum: 0,
          prbnum: 0,
          activeName: 'first',
          hiddenRisk: false,
          activeIndex: 1,
          riskData: [],
          coloryellow: [0, 4, 7, 10, 13],
          colordefault: [1, 6, 11, 15],
          colorpurple: [2, 5, 9, 12],
          colorgreen: [3, 8, 14],
          prbcommData: [],
          url: {
            bizCusCountUrl: '/api/batbizcuscount/',
            badassetsUrl: '/api/batbizbadassets/',
            assetsAnalyse: '/api/batbizassetsanalyse/',
            xdhxTotalUrl: '/api/accloan/dscms2sjzt/xdhxQueryTotalList/'
          },
          wbpDialogVisible: false,
          calcDialogVisible: false,
          questionFormdata: {},
          // 需要展示的文件数
          fileListInfo: []
        };
      },
      created: function () {
        // 获取常用功能
        this.getMydata();
        // 我的工作台
        this.queryWorkbench();
        this.getRiskDataFn();
        this.getPrbcommDataFn();
      },
      methods: {
        initData () {
          this.$nextTick(()=>{
            yufp.router.to('calcPage', {}, 'calcContent');
          });
        },
        queryWorkbench: function () {
          var _this = this;
          yufp.service.request({
            method: 'POST',
            url: '/api/custom/bench/count',
            callback: function (code, message, res) {
              if (code == '0') {
                _this.tipsData = res.data;
              }
            }
          });
        },
        getMydata: function () {
          var _this = this;
          yufp.service.request({
            method: 'POST',
            url: '/api/wbcommfunc/mydata',
            callback: function (code, message, res) {
              if (code == '0') {
                _this.myData = res.data;
              }
            }
          });
        },
        getPrbcommDataFn: function () {
          var _this = this;
          yufp.service.request({
            method: 'POST',
            url: '/api/wbcommfunc',
            callback: function (code, message, response) {
              if (response.code == '0') {
                _this.prbnum = response.total;
                _this.prbcommData = response.data;
              } else {
                _this.$message({ message: '数据查询失败！', type: 'error' });
              }
            }
          });
        },
        getRiskDataFn: function () {
          var _this = this;
          yufp.service.request({
            method: 'POST',
            url: '/api/wbcommRisk',
            callback: function (code, message, response) {
              if (response.code == '0') {
                _this.risknum = response.total;
                _this.riskData = response.data;
              } else {
                _this.$message({ message: '数据查询失败！', type: 'error' });
              }
            }
          });
        },
        getlookup (key, type) {
          return yufp.lookup.convertKey(type, key);
        },
        openGuar: function () {

        },
        enterNPSystem: function () {

        },

        doDel: function () {

        },
        sysApproval: function () {

        },
        sysPas: function () {

        },
        doHLWYP: function () {

        },
        doXWD: function () {

        },
        openCalcFn () {
          this.calcDialogVisible = true;
        },
        addwbprbCommFn: function () {
          this.wbpDialogVisible = true;
        },
        openRepobaseFn: function () {
          var options = {
            id: 'wbRepoBase',
            title: '知识库查询',
            key: 'custom_20180108174857'
          };
          // this.$router.push({path: route, query: parms});// name:'', params:{}
          yufp.frame.addTab(options);
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
        openPage (index) {
          let route = '';
          let parms = {};
          switch (index) {
          case 0:
            route = 'workflow/bench/todo/todo';
            break;
          case 1:
            route = '/meetingIndex';
            parms = { backPage: true };
            break;
          case 2:
            route = 'workflow/bench/taskpool/taskpool';
            break;
          case 3:
            route = 'workflow/bench/done/done';
            break;
          case 4:
            route = 'workflow/bench/his/his';
            break;
          case 5:
            route = 'workflow/bench/copy/nwfcopyuser';
            break;
          default:
          }
          var options = {
            id: 'moreQuestions',
            title: '问题交流',
            key: 'custom_20180108174856'
          };
          // this.$router.push({path: route, query: parms});// name:'', params:{}
          yufp.frame.addTab(options);
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