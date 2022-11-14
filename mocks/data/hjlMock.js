/**
 * @create by xxx on 2018-xx-xx
 * @description xx
 */
define([
  './mocks/data/stencisets.js'
],
function (require, exports) {
  var TableList = [];
  var count = 5;

  Mock.Random.increment(100);
  for (var i = 0; i < count; i++) {
    TableList.push(Mock.mock({
      id: '@increment(2)',
      managerIdName: '@cname',
      managerBrIdName: '@cname',
      totalCusCount: '@id(5)',
      'operType|1': ['01', '02'],
      'education|1': ['0', '1', '2', '3', '4'],
      'cardType|1': ['1', '2', '3', '4'],
      smCusCount: '@id(18)',
      loanCount: '@date',
      cusComCount: '@id(2)',
      cusManagerName: '@cname',
      orgIdName: '@cname',
      cusId: '@id(6) ',
      cusName: '@cname',
      dkyerj: '@date',
      email: '@email',
      srzhckjehj: '10000000.00',
      dqzhckye: '999999.00',
      managerId: '@cname',
      yearAddBadaccCount: '@ctitle(5, 18)',
      badTotalBalance: '@ctitle(5, 18)',
      messageLevel: '@ctitle(5, 18)',
      zip: '@ctitle(5, 6)',
      flawTotalBalance: '@ctitle(5, 18)',
      obligate21: '@ctitle(5, 18)',
      badCusCount: '@ctitle(5, 18)',
      obligate23: '@ctitle(5, 18)',
      monthAddBadtotalBalance: '@ctitle(5, 18)',
      yearAddBadcusCount: '@ctitle(5, 18)',
      obligate26: '@ctitle(5, 18)',
      userOrgCode: '999999999',
      userId: '@ctitle(5, 18)'
    }));
  }
  var riskData = [];
  Mock.Random.increment(100);
  for (var j = 0; j < count; j++) {
    riskData.push(Mock.mock({
      id: '@increment(2)',
      cusName: '@cname',
      'messageType|1': ['1', '2'],
      'status|1': ['1', '2', '3' ],
      pubTime: '@date',
      cusId: '@id(6) ',
      endDate: '@date',
      content: '@ctitle(10, 20)'
    }));
  }
  var auditlogdata = [];
  Mock.Random.increment(100);
  for (var z = 0; z < count; z++) {
    auditlogdata.push(Mock.mock({
      id: '@increment(2)',
      updIdName: '@cname',
      'messageType|1': ['1', '2'],
      'status|1': ['1', '2', '3' ],
      managerBrIdName: '@cname',
      pubTime: '@date',
      cusId: '@id(6) ',
      endDate: '@date',
      content: '@ctitle(10, 20)'
    }));
  }
  exports.getAuditlogdata = function (config) {
    var lookupList = {
      'code': '0',
      'total': auditlogdata.length,
      'message': null,
      'data': auditlogdata
    };
    return lookupList;
  };
  // page加载完成后调用ready方法
  exports.getList = function (config) {
    var lookupList = {
      'code': '0',
      'total': TableList.length,
      'message': null,
      'data': TableList
    };
    return lookupList;
  };
  exports.getPrbcommDataFn = function (config) {
    var lookupList = {
      'code': '0',
      'total': riskData.length,
      'message': null,
      'data': riskData
    };
    console.log(lookupList, 'lookupListlookupList');
    return lookupList;
  };
  exports.queryCountFn = function () {
    var lookupList = {
      'code': '0',
      'total': 0,
      'message': null,
      'level': null,
      'data': {
        'todo': 24,
        'his': 358,
        'ticket': 7,
        'poolsize': 0,
        'back': 4,
        'copy': 0,
        'done': 56
      },
      'i18nData': null,
      'extData': null
    };
    return lookupList;
  };
  exports.queryMydata = function () {
    var lookupList = {
      'code': '0',
      'total': 0,
      'message': null,
      'level': null,
      'data': [{title: '三人会商投票', icon: 'el-icon-yx-menu'},
        {title: '个人客户查询', icon: 'yu-icon-boxs'},
        {title: '人行企业征信查询', icon: 'el-icon-yx-menu'},
        {title: '人行个人征信查询', icon: 'el-icon-yx-menu'},
        {title: '单一客户授信申报', icon: 'yu-icon-boxs'},
        {title: '贷款台账', icon: 'yu-icon-boxs'},
        {title: '合同管理', icon: 'yu-icon-boxs'},
        {title: '三人会商投票', icon: 'yu-icon-boxs'},
        {title: '个人客户查询', icon: 'yu-icon-boxs'},
        {title: '人行企业征信查询'},
        {title: '人行个人征信查询'},
        {title: '单一客户授信申报'},
        {title: '贷款台账', icon: 'el-icon-yx-menu'},
        {title: '合同管理', icon: 'el-icon-yx-menu'}],
      'i18nData': null,
      'extData': null
    };
    return lookupList;
  };
  exports.getTresDta = function () {
    var lookupList = {
      'code': '0',
      'total': 0,
      'message': null,
      'level': null,
      'rows': [
        { id: '0', label: '根节点', pid: '-1' },
        { id: '1', label: '1-1', pid: '0' },
        { id: '2', label: '1-2', pid: '0' },
        { id: '3', label: '1-3', pid: '0' },
        { id: '4', label: '1-1-1', pid: '1' },
        { id: '5', label: '1-1-2', pid: '1' },
        { id: '6', label: '1-2-1', pid: '2' },
        { id: '7', label: '1-2-2', pid: '2' },
        { id: '8', label: '1-3-1', pid: '3' },
        { id: '9', label: '三级-1-1-1', pid: '4' }
      ]
    };
    return lookupList;
  };
  var zskTableList = [];
  Mock.Random.increment(100);
  for (var a = 0; a < 5; a++) {
    zskTableList.push(Mock.mock({
      id: '@increment(2)',
      title: '@ctitle',
      content: '@ctitle(5, 18)',
      totalCusCount: '@id(5)',
      'status|1': ['01', '02'],
      'education|1': ['0', '1', '2', '3', '4'],
      'cardType|1': ['1', '2', '3', '4'],
      smCusCount: '@id(18)',
      inputDate: '@date',
      cusComCount: '@id(2)',
      inputIdName: '@cname',
      orgIdName: '@cname',
      cusId: '@id(6) ',
      inputBrIdName: '@cname',
      dkyerj: '@date',
      email: '@email',
      srzhckjehj: '10000000.00',
      dqzhckye: '999999.00',
      managerId: '@cname',
      yearAddBadaccCount: '@ctitle(5, 18)',
      badTotalBalance: '@ctitle(5, 18)',
      messageLevel: '@ctitle(5, 18)',
      zip: '@ctitle(5, 6)',
      flawTotalBalance: '@ctitle(5, 18)',
      obligate21: '@ctitle(5, 18)',
      badCusCount: '@ctitle(5, 18)',
      obligate23: '@ctitle(5, 18)',
      monthAddBadtotalBalance: '@ctitle(5, 18)',
      yearAddBadcusCount: '@ctitle(5, 18)',
      obligate26: '@ctitle(5, 18)',
      userOrgCode: '999999999',
      userId: '@ctitle(5, 18)'
    }));
  }
  exports.selectAllOrg = function (config) {
    // let params = JSON.parse(config.body);
    // console.log(params, 'pppp');
    // if (params.condition) {
    //   var noCondition = JSON.parse(params.condition);
    // }
    // var fiterList = [];
    // if (params.title) {
    //   fiterList = zskTableList.filter(item=>{
    //     // if (item.title.includes(params.condion.title)) {
    //     //   return true;
    //     // }
    //   });
    // }

    var lookupList = {
      'code': '0',
      'total': zskTableList.length,
      'message': null,
      'level': null,
      'rows': zskTableList
    };
    return lookupList;
  };
});
