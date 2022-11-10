/**
 * @created by helin3 2017-11-30
 * @updated by helin3 2018-01-17 代码按规范调整
 * @description 系统相关功能请求模拟
 */
define([
  './mocks/data/menuandcontrl.js',
  './mocks/data/menu-loan.js',
  './mocks/data/menu-risk.js',
  './mocks/data/menu-limit.js',
  './mocks/data/menu-ctr.js',
  './mocks/data/menu-cus.js',
  './mocks/data/menu-console.js',
  './custom/route-tables/views-routes.js'
],
  function (require, exports) {
    /**
           * GET请求URL参数转换
           * @param url
           * @returns {{}}
           */
    var paramUrl2Obj = function (url) {
      var search = url.split('?')[1];
      if (!search) {
        return {};
      }
      return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"').replace(/\n/g, '\\n') + '"}');
    };
    var demoMenus = [
      {
        'menuId': 'lp-10000',
        'menuName': '首页',
        'upMenuId': null,
        'menuIcon': 'el-icon-yx-home',
        'funcId': 'dashboard',
        'funcUrl': 'pages/common/dashboard/dashboard',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-90000',
        'menuName': '系统管理',
        'upMenuId': '',
        'menuIcon': 'el-icon-yx-books',
        'funcId': null,
        'funcUrl': null,
        'legalOrgCode': null
      },
      // 二级菜单 组织管理
      {
        'menuId': 'lp-92000',
        'menuName': '组织管理',
        'upMenuId': 'lp-90000',
        'menuIcon': 'el-icon-yx-books',
        'funcId': null,
        'funcUrl': null,
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-92010',
        'menuName': '用户管理',
        'upMenuId': 'lp-92000',
        'menuIcon': '',
        'funcId': 'sUserPageInfo',
        'funcUrl': 'pages/console/system/SUserPageInfo',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-92020',
        'menuName': '机构管理',
        'upMenuId': 'lp-92000',
        'menuIcon': '',
        'funcId': 'sOrgPageInfo',
        'funcUrl': 'pages/console/system/SOrgPageInfo',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-92040',
        'menuName': '岗位管理',
        'upMenuId': 'lp-92000',
        'menuIcon': '',
        'funcId': 'sDutyPageInfo',
        'funcUrl': 'pages/console/system/sDutyPageInfo',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-92050',
        'menuName': '角色管理',
        'upMenuId': 'lp-92000',
        'menuIcon': 'el-icon-yx-command',
        'funcId': 'SRolePageInfo',
        'funcUrl': 'pages/console/system/SRolePageInfo',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-92060',
        'menuName': '资源定义',
        'upMenuId': 'lp-92000',
        'menuIcon': '',
        'funcId': 'SResourcePageInfo',
        'funcUrl': 'pages/console/system/SResourcePageInfo',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-92070',
        'menuName': '资源权限',
        'upMenuId': 'lp-92000',
        'menuIcon': '',
        'funcId': 'SRoleRescRulePageInfo',
        'funcUrl': 'pages/console/system/SRoleRescRulePageInfo',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-92080',
        'menuName': '报表权限管理',
        'upMenuId': 'lp-92000',
        'menuIcon': '',
        'funcId': 'SPrdOrgPageInfo',
        'funcUrl': 'pages/console/system/SPrdOrgPageInfo',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-92090',
        'menuName': '数据权限',
        'upMenuId': 'lp-92000',
        'menuIcon': '',
        'funcId': 'SRoleDataRulePageInfo',
        'funcUrl': 'pages/console/system/SRoleDataRulePageInfo',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-92100',
        'menuName': '策略管理',
        'upMenuId': 'lp-92000',
        'menuIcon': '',
        'funcId': 'logicSysManager',
        'funcUrl': 'pages/console/system/logicSysManager',
        'legalOrgCode': null
      },
      // 二级功能 参数管理
      {
        'menuId': 'lp-93000',
        'menuName': '参数管理',
        'upMenuId': 'lp-90000',
        'menuIcon': 'el-icon-yx-books',
        'funcId': null,
        'funcUrl': null,
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-93010',
        'menuName': '数据字典配置',
        'upMenuId': 'lp-93000',
        'menuIcon': 'el-icon-yx-books',
        'funcId': 'lookupdict',
        'funcUrl': 'pages/console/system/lookupdict',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-93020',
        'menuName': '系统参数',
        'upMenuId': 'lp-93000',
        'menuIcon': 'el-icon-yx-books',
        'funcId': 'sysprop',
        'funcUrl': 'pages/console/system/sysprop',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-93030',
        'menuName': '系统提示消息管理',
        'upMenuId': 'lp-93000',
        'menuIcon': 'el-icon-yx-books',
        'funcId': 'messageManager',
        'funcUrl': 'pages/console/system/messageManager',
        'legalOrgCode': null
      },
      // 二级菜单 系统监控
      {
        'menuId': 'lp-94000',
        'menuName': '系统监控',
        'upMenuId': 'lp-90000',
        'menuIcon': 'el-icon-yx-books',
        'funcId': null,
        'funcUrl': null,
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-94010',
        'menuName': '日志管理',
        'upMenuId': 'lp-94000',
        'menuIcon': 'el-icon-yx-books',
        'funcId': 'SUserOperLog',
        'funcUrl': 'pages/console/system/SUserOperLog',
        'legalOrgCode': null
      },
      // //一级菜单
      // {
      //   menuId: 'lp-30000',
      //   menuName: '合作项目与合作方管理',
      //   upMenuId: null,
      //   menuIcon: 'el-icon-yx-books'
      // },

      // //二级菜单
      // {
      //   menuId: 'lp-31000',
      //   menuName: '合作项目管理',
      //   upMenuId: 'lp-30000',
      //   menuIcon: 'el-icon-yx-books'
      // },
      // {
      //   menuId: 'lp-32000',
      //   menuName: '合作方管理',
      //   upMenuId: 'lp-30000',
      //   menuIcon: 'el-icon-yx-books'
      // },
      // {
      //   menuId: 'lp-33000',
      //   menuName: '合作项目营运视图',
      //   upMenuId: 'lp-30000',
      //   menuIcon: 'el-icon-yx-books',
      //   funcId: 'CoopPrjManage',
      //   funcUrl: 'pages/prj/coopPrjManage/index'
      // },
      // //三级菜单
      // {
      //   menuId: 'lp-31100',
      //   menuName: '合作项目准入',
      //   upMenuId: 'lp-31000',
      //   menuIcon: '',
      //   funcId: 'CoopPrjAccess',
      //   funcUrl: 'pages/prj/coopPrjManage/index'
      // },
      // {
      //   menuId: 'lp-31200',
      //   menuName: '合作项目维护',
      //   upMenuId: 'lp-31000',
      //   menuIcon: '',
      //   funcId: 'CoopPrjMaintain',
      //   funcUrl: 'pages/prj/coopPrjManage/index'
      // },
      // {
      //   menuId: 'lp-31300',
      //   menuName: '合作项目台账',
      //   upMenuId: 'lp-31000',
      //   menuIcon: '',
      //   funcId: 'CoopPrjAccount',
      //   funcUrl: 'pages/prj/coopPrjManage/index'
      // },
      // {
      //   menuId: 'lp-32100',
      //   menuName: '合作方名单管理',
      //   upMenuId: 'lp-32000',
      //   menuIcon: '',
      //   funcId: 'PartnerList',
      //   funcUrl: 'pages/prj/partnerManage/partnerList/index'
      // },
      // {
      //   menuId: 'lp-32200',
      //   menuName: '合作方协议管理',
      //   upMenuId: 'lp-32000',
      //   menuIcon: '',
      //   funcId: 'PartnerAgr',
      //   funcUrl: 'pages/prj/partnerManage/partnerAgr/index'
      // },
      // //一级菜单
      // {
      //   menuId: 'lp-60000',
      //   menuName: '合同管理',
      //   upMenuId: null,
      //   menuIcon: 'el-icon-yx-books'
      // },

      // //二级菜单
      // {
      //   menuId: 'lp-61000',
      //   menuName: '主合同申请',
      //   upMenuId: 'lp-60000',
      //   menuIcon: 'el-icon-yx-books'
      // },
      // {
      //   menuId: 'lp-62000',
      //   menuName: '主合同管理',
      //   upMenuId: 'lp-60000',
      //   menuIcon: 'el-icon-yx-books'
      // },
      // {
      //   menuId: 'lp-63000',
      //   menuName: '担保合同管理',
      //   upMenuId: 'lp-60000',
      //   menuIcon: 'el-icon-yx-books',
      //   funcId: 'GuarCtrManage',
      //   funcUrl: 'pages/ctr/guarCtrManage/index'
      // },
      // //三级菜单
      // {
      //   menuId: 'lp-61100',
      //   menuName: '授信合同申请',
      //   upMenuId: 'lp-61000',
      //   menuIcon: '',
      //   funcId: 'CredContAppl',
      //   funcUrl: 'pages/ctr/mainCtrAppli/index'
      // },
      // {
      //   menuId: 'lp-61200',
      //   menuName: '授信合同申请历史',
      //   upMenuId: 'lp-61000',
      //   menuIcon: '',
      //   funcId: 'CredContHis',
      //   funcUrl: 'pages/ctr/mainCtrAppli/index'
      // },
      // {
      //   menuId: 'lp-61300',
      //   menuName: '借款合同申请',
      //   upMenuId: 'lp-61000',
      //   menuIcon: '',
      //   funcId: 'LoanContAppl',
      //   funcUrl: 'pages/ctr/mainCtrAppli/index'
      // },
      // {
      //   menuId: 'lp-61400',
      //   menuName: '借款合同申请历史',
      //   upMenuId: 'lp-61000',
      //   menuIcon: '',
      //   funcId: 'LoanContHis',
      //   funcUrl: 'pages/ctr/mainCtrAppli/index'
      // },
      // {
      //   menuId: 'lp-62100',
      //   menuName: '待签授信合同',
      //   upMenuId: 'lp-62000',
      //   menuIcon: '',
      //   funcId: 'UnsignCredCtr',
      //   funcUrl: 'pages/ctr/mainCtrManage/index'
      // },
      // {
      //   menuId: 'lp-62200',
      //   menuName: '历史授信合同',
      //   upMenuId: 'lp-62000',
      //   menuIcon: '',
      //   funcId: 'HisCredCtr',
      //   funcUrl: 'pages/ctr/mainCtrManage/index'
      // },
      // {
      //   menuId: 'lp-62300',
      //   menuName: '待签借款合同',
      //   upMenuId: 'lp-62000',
      //   menuIcon: '',
      //   funcId: 'UnsignLoanCtr',
      //   funcUrl: 'pages/ctr/mainCtrManage/index'
      // },
      // {
      //   menuId: 'lp-62400',
      //   menuName: '历史借款合同',
      //   upMenuId: 'lp-62000',
      //   menuIcon: '',
      //   funcId: 'HisLoanCtr',
      //   funcUrl: 'pages/ctr/mainCtrManage/index'
      // },

      {
        'menuId': 'lp-80000',
        'menuName': '贷后管理',
        'upMenuId': '',
        'menuIcon': '',
        'funcId': null,
        'funcUrl': null,
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-81000',
        'menuName': '风险分类',
        'upMenuId': 'lp-80000',
        'menuIcon': '',
        'funcId': 'lookupdict',
        'funcUrl': 'pages/console/system/lookupdict',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-81010',
        'menuName': '个贷风险分类',
        'upMenuId': 'lp-81000',
        'menuIcon': '',
        'funcId': 'personalLoan',
        'funcUrl': 'pages/riskType/personalLoan/personalLoan',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-81020',
        'menuName': '对公风险分类',
        'upMenuId': 'lp-81000',
        'menuIcon': '',
        'funcId': 'companyLoan',
        'funcUrl': 'pages/riskType/companyLoan/companyLoan',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-81030',
        'menuName': '风险分类调整申请',
        'upMenuId': 'lp-81000',
        'menuIcon': '',
        'funcId': 'riskAdjust',
        'funcUrl': 'pages/riskType/riskAdjust/riskAdjust',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-81040',
        'menuName': '风险分类台账',
        'upMenuId': 'lp-81000',
        'menuIcon': '',
        'funcId': 'riskType',
        'funcUrl': 'pages/riskType/riskType/riskType',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-82000',
        'menuName': '贷后检查',
        'upMenuId': 'lp-80000',
        'menuIcon': '',
        'funcId': null,
        'funcUrl': null,
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-82010',
        'menuName': '首次检查',
        'upMenuId': 'lp-82000',
        'menuIcon': '',
        'funcId': 'firstCheck',
        'funcUrl': 'pages/postLoanCheck/firstCheck/firstCheck',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-82020',
        'menuName': '定期检查',
        'upMenuId': 'lp-82000',
        'menuIcon': '',
        'funcId': 'regularCheck',
        'funcUrl': 'pages/postLoanCheck/regularCheck/regularCheck',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-82030',
        'menuName': '不定期检查',
        'upMenuId': 'lp-82000',
        'menuIcon': '',
        'funcId': null,
        'funcUrl': null,
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-83000',
        'menuName': '风险预警',
        'upMenuId': 'lp-80000',
        'menuIcon': '',
        'funcId': null,
        'funcUrl': null,
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-84000',
        'menuName': '贷后催收',
        'upMenuId': 'lp-80000',
        'menuIcon': '',
        'funcId': null,
        'funcUrl': null,
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-85000',
        'menuName': '贷款核销',
        'upMenuId': 'lp-80000',
        'menuIcon': '',
        'funcId': null,
        'funcUrl': null,
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-85010',
        'menuName': '单户核销登记',
        'upMenuId': 'lp-85000',
        'menuIcon': '',
        'funcId': null,
        'funcUrl': null,
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-85020',
        'menuName': '批量核销登记',
        'upMenuId': 'lp-85000',
        'menuIcon': '',
        'funcId': null,
        'funcUrl': null,
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-85030',
        'menuName': '已核销资产台账',
        'upMenuId': 'lp-85000',
        'menuIcon': '',
        'funcId': null,
        'funcUrl': null,
        'legalOrgCode': null
      },
      // 一级菜单 模板
      {
        'menuId': 'lp-080000',
        'menuName': '模板',
        'upMenuId': '',
        'menuIcon': 'el-icon-yx-books',
        'funcId': null,
        'funcUrl': null,
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-080001',
        'menuName': '树形页面模板',
        'upMenuId': 'lp-080000',
        'menuIcon': 'el-icon-yx-books',
        'funcId': 'treeForm',
        'funcUrl': 'pages/common/template/hjlTemplate/treeForm',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-080002',
        'menuName': '标签页面模板',
        'upMenuId': 'lp-080000',
        'menuIcon': 'el-icon-yx-books',
        'funcId': 'tabTemplate',
        'funcUrl': 'pages/common/template/hjlTemplate/tabTemplate',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-080003',
        'menuName': 'POP页面模板',
        'upMenuId': 'lp-080000',
        'menuIcon': 'el-icon-yx-books',
        'funcId': 'popTemplate',
        'funcUrl': 'pages/common/template/hjlTemplate/popTemplate',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-080004',
        'menuName': '简洁新增模板',
        'upMenuId': 'lp-080000',
        'menuIcon': 'el-icon-yx-books',
        'funcId': 'sympleAdd',
        'funcUrl': 'pages/common/template/hjlTemplate/sympleAdd',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-080005',
        'menuName': '多列表页面模板',
        'upMenuId': 'lp-080000',
        'menuIcon': 'el-icon-yx-books',
        'funcId': 'treeMoreTable',
        'funcUrl': 'pages/common/template/hjlTemplate/treeMoreTable',
        'legalOrgCode': null
      },
      {
        'menuId': 'lp-080006',
        'menuName': '编辑列表页面模板',
        'upMenuId': 'lp-080000',
        'menuIcon': 'el-icon-yx-books',
        'funcId': 'editListTemplate',
        'funcUrl': 'pages/common/template/editListTemplate',
        'legalOrgCode': null
      }
    ];
    /**
     * POST请求BODY参数转换
     * @param body
     * @returns {{}}
     */
    var paramBody2Obj = function (body) {
      if (!body) {
        return {};
      }
      return JSON.parse('{"' + decodeURIComponent(body).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"').replace(/\n/g, '\\n') + '"}');
    };

    /**
       * oauth认证获取token
       * @param config
       * @returns {{code: string}}
       */
    exports.loginFn = function (config) {
      var returnObj = {};
      try {
        var data = JSON.parse(config.body);
        if (data.usercode != 'admin') {
          returnObj.code = '9001';
          returnObj.message = '用户名或密码错误，请重新输入!';
        } else {
          returnObj.code = '0';
          returnObj.rows = 'Basicd2ViX2FwcDo=';
        }
      } catch (e) {
        returnObj.code = '-1';
        returnObj.message = '系统错误，请联系系统管理员!';
      }
      console.log(returnObj, 'returnObj');
      return returnObj;
    };

    /**
           * 注销模拟
           * @param config
           */
    exports.logoutFn = function (config) {
      return {
        code: 0,
        message: 'logout success!'
      };
    };

    /**
           * 模拟会话信息
           * @param config
           * @returns
           */
    exports.sessionInfoFn = function (config) {
      var data = paramUrl2Obj(config.url);
      console.log('session info here');
      return {
        rows: {
          'userId': '40',
          'userName': 'YUFP',
          'userAvatar': null,
          'loginCode': 'admin',
          'loginTime': '',
          'roles': [
            { 'id': '7001', 'roleCode': 'ADMIN', 'roleName': '系统管理员' }
          ],
          'dpt': { 'id': '133', 'code': '1001', 'name': '首席运营官' },
          'orgInfo': { 'id': '500', 'code': '500', 'name': '宇信金融集团' },
          'logicSys': { 'id': '203', 'code': '', 'name': '客户关系管理系统' },
          'instu': null,
          'upOrg': null,
          'upDpt': null,
          'loginTime': null,
          'dataContr': [],
          'OPENDAY': '2018-05-14'
        }
      };
    };

    /**
           * 模拟菜单、控制点数据
           * @returns {{menus, ctrls}}
           */
    exports.menuAndContrFn = function () {
      // var menus = demoMenus.concat(loanMenu).concat(riskMenu).concat(ctrMenu).concat(limitMenu).concat(consoleMenu);
      var menus = demoMenus;
      // var menuCtrls = demoCtrls.concat(loanCtrls).concat(riskCtrls).concat(limitCtrls).concat(consoleCtrls).concat(ctrMenu);
      var menuCtrls = [];
      return {
        rows: {
          menus: menus,
          ctrls: menuCtrls
        }
      };
    };

    /**
           * 数据权限数据
           */
    exports.dataContrFn = function () {
      return demoDataContr;
    };

    /**
           * 密码加密
           */
    exports.passwordFn = function () {

    };

    /**
           * 查询全部控制点信息
           */
    exports.contrUrlFn = function () {
      return {};
    };

    /**
           * 模拟后台数据字典库
           * @type
           * @private
           */
    var _all_lookup = {
      USER_STATUS: [
        { key: '01', value: '正常' },
        { key: '02', value: '冻结' },
        { key: '03', value: '销户' }
      ],
      CUST_TYPE: [
        { key: '1', value: '零售' },
        { key: '2', value: '公司' }
      ],
      IDENT_TYPE: [
        { key: '1', value: '居民身份证' },
        { key: '2', value: '居民户口薄' },
        { key: '3', value: '组织机构代码' },
        { key: '4', value: '营业执照代码' }
      ],
      NATIONALITY: [
        { key: 'CN', value: '中国' },
        { key: 'US', value: '美国' },
        { key: 'JP', value: '日本' },
        { key: 'EU', value: '欧元区' }
      ],
      PUBLISH_STATUS: [
        { key: 'published', value: '草稿' },
        { key: 'draft', value: '已发布' },
        { key: 'deleted', value: '已删除' }
      ],
      BRANCH: [
        { key: 'c1001', value: '成都支行' }
      ],
      SUBRANCH: [
        { key: 'c100101', value: '高新支行' },
        { key: 'c100102', value: '天府三街支行' },
        { key: 'c100103', value: '天府五街支行' }
      ],
      EDUCATION_TYPE: [
        { key: '0', value: '博士' },
        { key: '1', value: '硕士' },
        { key: '2', value: '本科' },
        { key: '3', value: '大专' },
        { key: '4', value: '高中及以下' }
      ],
      biz_flow_type: [
        { key: '01', value: '测试' }
      ]

    };
    /**
     * 模拟后台数据字典
     * @param config
     * @returns {{data: {}}}
     */
    exports.lookupFn = function (config) {
      var param = paramUrl2Obj(config.url);
      var code = param.codeType;
      if (!code) {
        throw new Error('请求参数错误');
      }
      var codeArr = code.split(',');

      var returnObj = {};
      for (var i = 0, len = codeArr.length; i < len; i++) {
        var codeType = codeArr[i];
        returnObj[codeType] = _all_lookup[codeType] || [];
      }
      return {
        data: returnObj
      };
    };
  });
