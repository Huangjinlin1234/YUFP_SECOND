/**
 * Created by 江成 on 2017/03/05.
 */
define(function (require) {
    //定义路由表
    var routeTable = {

        demoOne: {
            html: 'pages/demo/demoOne.html',
            js: 'pages/demo/demoOne.js'
        },
        fiveType: {
            html: 'pages/riskType/companyLoan/fiveType.html',
            js: 'pages/riskType/companyLoan/fiveType.js'
        },
        basicInfo: {
            html: 'pages/riskType/companyLoan/basicInfo.html',
            js: 'pages/riskType/companyLoan/basicInfo.js'
        },
        fiveTypeIdtf: {
            html: 'pages/riskType/companyLoan/fiveTypeIdtf.html',
            js: 'pages/riskType/companyLoan/fiveTypeIdtf.js'
        },
        addPage: {
            html: 'pages/riskType/riskAdjust/addPage.html',
            js: 'pages/riskType/riskAdjust/addPage.js'
        },
        checkPage: {
            html: 'pages/postLoanCheck/firstCheck/checkPage.html',
            js: 'pages/postLoanCheck/firstCheck/checkPage.js'
        },
        checkInfo: {
            html: 'pages/postLoanCheck/firstCheck/checkInfo.html',
            js: 'pages/postLoanCheck/firstCheck/checkInfo.js'
        },

    };
    //注册路由表
    yufp.router.addRouteTable(routeTable);
});