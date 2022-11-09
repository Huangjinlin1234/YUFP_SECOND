/**
 * @create by xxx on 2018-xx-xx
 * @description xx
 */
define([
  './mocks/data/stencisets.js'
],
function (require, exports) {
  var List = [];
  var count = 5;

  Mock.Random.increment(100);
  for (var i = 0; i < count; i++) {
    List.push(Mock.mock({
      id: '@increment(2)',
      propName: '@cname',
      userName: '@cname',
      propValue: '@id(5)',
      'operType|1': ['01', '02'],
      'education|1': ['0', '1', '2', '3', '4'],
      'cardType|1': ['1', '2', '3', '4'],
      createTime: '@date',
      cardNo: '@id(18)',
      date: '@date',
      company: '@cname',
      message: '@ctitle(5, 18)',
      email: '@email',
      mount: '10000000.00',
      messageId: '@ctitle(5, 18)',
      obligate2: '@ctitle(5, 18)',
      obligate3: '@ctitle(5, 18)',
      address: '@ctitle(5, 18)',
      obligate5: '@ctitle(5, 18)',
      messageLevel: '@ctitle(5, 18)',
      zip: '@ctitle(5, 6)',
      obligate8: '@ctitle(5, 18)',
      obligate21: '@ctitle(5, 18)',
      obligate22: '@ctitle(5, 18)',
      obligate23: '@ctitle(5, 18)',
      obligate24: '@ctitle(5, 18)',
      obligate25: '@ctitle(5, 18)',
      obligate26: '@ctitle(5, 18)',
      userOrgCode: '999999999',
      userId: '@ctitle(5, 18)'
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
      'rows': [ {
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
  exports.lookupListFn = function () {
    var lookupList = {
      'code': '0',
      'total': 0,
      'message': null,
      'level': 'info',
      'rows': [{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }],
      'i18nData': null,
      'extData': null
    };

    return lookupList;
  };
  exports.queryAllFn = function () {
    var lookupList = {
      'code': '0',
      'total': List.length,
      'message': null,
      'level': 'info',
      'rows': List,
      'i18nData': null,
      'extData': null
    };

    return lookupList;
  };
  exports.queryLogFn = function () {
    var lookupList = {
      'code': '0',
      'total': List.length,
      'message': null,
      'level': 'info',
      'rows': List,
      'i18nData': null,
      'extData': null
    };
    console.log(List, 'llll');
    return lookupList;
  };
  exports.queryPrpFn = function () {
    var prpList = [{prpNo: '999', custName: '基金水电费12'}, {prpNo: '888', custName: '基金水电费'}];
    var lookupList = {
      'code': '0',
      'total': prpList.length,
      'message': null,
      'level': 'info',
      'rows': prpList,
      'i18nData': null,
      'extData': null
    };
    return lookupList;
  };
});