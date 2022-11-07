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
            html: 'pages/postLoanMgt/companyLoan/fiveType.html',
            js: 'pages/postLoanMgt/companyLoan/fiveType.js'
        },
        basicInfo: {
            html: 'pages/postLoanMgt/companyLoan/basicInfo.html',
            js: 'pages/postLoanMgt/companyLoan/basicInfo.js'
        },
        fiveTypeIdtf: {
            html: 'pages/postLoanMgt/companyLoan/fiveTypeIdtf.html',
            js: 'pages/postLoanMgt/companyLoan/fiveTypeIdtf.js'
        },
        addPage: {
            html: 'pages/postLoanMgt/riskAdjust/addPage.html',
            js: 'pages/postLoanMgt/riskAdjust/addPage.js'
        },

    };
    //注册路由表
    yufp.router.addRouteTable(routeTable);
});