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
        personalCheck: {
            html: 'pages/postLoanCheck/regularCheck/personalCheck.html',
            js: 'pages/postLoanCheck/regularCheck/personalCheck.js'
        },
        checkPage1: {
            html: 'pages/postLoanCheck/regularCheck/checkPage.html',
            js: 'pages/postLoanCheck/regularCheck/checkPage.js'
        },

    };
    //注册路由表
    yufp.router.addRouteTable(routeTable);
});