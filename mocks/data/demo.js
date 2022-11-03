/**
 * @create by xxx on 2018-xx-xx
 * @description xx
 */
define([
  './mocks/data/stencisets.js'
],
function (require, exports) {
  var List = [];
  var count = 55;

  Mock.Random.increment(100);
  for (var i = 0; i < count; i++) {
    List.push(Mock.mock({
      id: '@increment(2)',
      name: '@cname',
      orgId: '100',
      'gender|1': ['01', '02'],
      'education|1': ['0', '1', '2', '3', '4'],
      'cardType|1': ['1', '2', '3', '4'],
      barthday: '@date',
      cardNo: '@id(18)',
      company: '@cname',
      company: '@ctitle(5, 18)',
      email: '@email',
      mount: '10000000.00',
      obligate1: '@ctitle(5, 18)',
      obligate2: '@ctitle(5, 18)',
      obligate3: '@ctitle(5, 18)',
      obligate4: '@ctitle(5, 18)',
      obligate5: '@ctitle(5, 18)',
      obligate6: '@ctitle(5, 18)',
      obligate7: '@ctitle(5, 18)',
      obligate8: '@ctitle(5, 18)',
      obligate21: '@ctitle(5, 18)',
      obligate22: '@ctitle(5, 18)',
      obligate23: '@ctitle(5, 18)',
      obligate24: '@ctitle(5, 18)',
      obligate25: '@ctitle(5, 18)',
      obligate26: '@ctitle(5, 18)',
      obligate27: '@ctitle(5, 18)',
      obligate28: '@ctitle(5, 18)'
    }));
  }

  function paramUrl2Obj (url) {
    var search = url.split('?')[1];
    if (!search) {
      return {};
    }
    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"').replace(/\n/g, '\\n') + '"}');
  }

  function paramBody2Obj (body) {
    if (!body) {
      return {};
    }
    return JSON.parse(body);
  }

  // page加载完成后调用ready方法
  exports.getList = function (config) {
    var reqData = paramBody2Obj(config.body);
    // var reqData = paramUrl2Obj(config.url);
    var page = reqData.page;
    var size = reqData.size;
    var condition = reqData.condition ? JSON.parse(reqData.condition) : {};
    var create_at = condition.create_at;
    var type = condition.type;
    var title = condition.title;
    var name = condition.name;
    var gender = condition.gender;
    var sort = condition.sort;
    // var { condition, page = 1, size = 20 } = param2Obj(config.url)
    // var { create_at, type, title, sort } = JSON.parse(condition)

    if (!sort) {
        	sort = 'id';
    }

    var mockList = List.filter(function (item) {
      if (name && item.name.indexOf(name) < 0) {
        return false;
      }
      if (gender && item.gender !== gender) {
        return false;
      }
      if (title && item.title.indexOf(title) < 0) {
        return false;
      }
      return true;
    });
    if (sort === '-id') {
      mockList = mockList.reverse();
    }
    var pageList = [];
    if (page && size) {
      pageList = mockList.filter(function (item, index) {
        return index < size * page && index >= size * (page - 1);
      });
    } else {
      pageList = mockList;
    }
    return {
      total: mockList.length,
      data: pageList
    };
  };

  exports.info = function (config) {
    	var temp = paramUrl2Obj(config.url);
    	var info = {};
    	for (var i = List.length - 1; i >= 0; i--) {
      var v = List[i];
      if (v.id === Number(temp.id)) {
        info = v;
        break;
      }
    }
    return info;
  };

  exports.save = function (config) {
    var temp = paramBody2Obj(config.body);
    console.log(temp);
    temp.id = !temp.id ? Math.floor(Math.random() * 1000 + 10000) : temp.id;
    var updateFlag = false;
    for (var i = List.length - 1; i >= 0; i--) {
      var v = List[i];
      if (v.id === temp.id) {
        var index = List.indexOf(v);
        List.splice(index, 1, temp);
        updateFlag = true;
        break;
      }
    }
    if (!updateFlag) {
      List.unshift(temp);
    }
    return {
      code: 0
    };
  };

  exports.delete = function (config) {
    var temp = paramBody2Obj(config.body);
    var ids = temp.ids.split(',');
    for (var i = List.length - 1; i >= 0; i--) {
      var v = List[i];
      for (var j = ids.length - 1; j >= 0; j--) {
        var id = ids[j];
        if (v.id === Number(id)) {
          var index = List.indexOf(v);
          List.splice(index, 1);
          ids.splice(j, 1);
          break;
        }
      }
    }
    return {
      code: '0'
    };
  };

  exports.getStencilSets = function (config) {
    	var temp = paramBody2Obj(config.body);

    return stencisets;
  };
  exports.getallFn = function () {
    var stencisets = {
      'code': '0',
      'total': 0,
      'message': null,
      'level': 'info',
      'data': [ {
        'crelId': '1',
        'sysId': 'dscms',
        'crelKey': 'LOGIN_PASSWORD_COMPEL_CHANGE',
        'crelName': '密码过期策略',
        'enableFlag': '1',
        'crelDetail': '100',
        'crelDescribe': '密码过期需要修改密码',
        'actionType': '4',
        'lastChgUsr': 'admin',
        'lastChgDt': '2022-11-03 11:47:42',
        'sysDefault': 0
      }, {
        'crelId': '107de7a9a62f4665ab1d34ec9f33e814',
        'sysId': 'dscms',
        'crelKey': 'LOGIN_SINGLE_AGENT_A',
        'crelName': '渠道互斥策略',
        'enableFlag': '1',
        'crelDetail': '',
        'crelDescribe': '同一用户只能在一个终端登录',
        'actionType': '4',
        'lastChgUsr': 'admin',
        'lastChgDt': '2022-11-03 11:47:57',
        'sysDefault': 0
      }, {
        'crelId': '1505d47c2f93404cb6832eb6d640f929',
        'sysId': 'dscms',
        'crelKey': 'LOGIN_PASSWORD_WRONG',
        'crelName': '口令错误策略',
        'enableFlag': '1',
        'crelDetail': '5',
        'crelDescribe': '密码连续输入错误5次，需等1个小时后再重新登录',
        'actionType': '1',
        'lastChgUsr': 'admin',
        'lastChgDt': '2022-11-03 11:08:56',
        'sysDefault': 0
      }, {
        'crelId': '2',
        'sysId': 'dscms',
        'crelKey': 'LOGIN_IP_CHECK_A',
        'crelName': '登录ip保存策略',
        'enableFlag': '1',
        'crelDetail': '',
        'crelDescribe': '登录ip保存',
        'actionType': '2',
        'lastChgUsr': 'admin',
        'lastChgDt': '2021-12-11 23:14:50',
        'sysDefault': 0
      }, {
        'crelId': '34404cd4c4a94d059f831b253770df2f',
        'sysId': 'dscms',
        'crelKey': 'PASSWD_LENGTH_RULE',
        'crelName': '口令长度策略',
        'enableFlag': '2',
        'crelDetail': '8',
        'crelDescribe': '密码长度必须不小于8位，不大于24位',
        'actionType': '2',
        'lastChgUsr': 'admin',
        'lastChgDt': '2021-12-27 16:56:11',
        'sysDefault': 0
      }, {
        'crelId': '5a8f2c44a9c94b26adb6b9bbabcb1a9e',
        'sysId': 'dscms',
        'crelKey': 'PASSWD_COMPLEX_RULE',
        'crelName': '口令复杂度策略',
        'enableFlag': '2',
        'crelDetail': 'number,uppercase,lowercase',
        'crelDescribe': '密码中至少有指定的一个字符',
        'actionType': '2',
        'lastChgUsr': 'admin',
        'lastChgDt': '2021-12-27 16:56:12',
        'sysDefault': 0
      }, {
        'crelId': 'b90c1dcd624949cca78e7cae12707468',
        'sysId': 'dscms',
        'crelKey': 'LOGIN_TIMES_B',
        'crelName': '登录时间段策略',
        'enableFlag': '2',
        'crelDetail': '08:00,09:00',
        'crelDescribe': '在规定的时间内登录',
        'actionType': '2',
        'lastChgUsr': '40',
        'lastChgDt': '2021-05-21 15:16:17',
        'sysDefault': 0
      }, {
        'crelId': 'f84e9f8869c04d5390e8233dbe43bde6',
        'sysId': 'dscms',
        'crelKey': 'LOGIN_FIRST_TIME_A',
        'crelName': '首次登录',
        'enableFlag': '2',
        'crelDetail': '',
        'crelDescribe': '首次登录需要修改密码',
        'actionType': '2',
        'lastChgUsr': 'admin',
        'lastChgDt': '2021-12-27 16:56:09',
        'sysDefault': 0
      } ],
      'i18nData': null,
      'extData': null
    };

    return stencisets;
  };
});