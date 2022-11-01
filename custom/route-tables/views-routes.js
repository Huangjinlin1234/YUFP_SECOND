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

    };
    //注册路由表
    yufp.router.addRouteTable(routeTable);
});