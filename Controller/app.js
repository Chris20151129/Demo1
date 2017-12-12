/**
 * 陈松 --练手小Demo
 * Version 0.0.1
 */
(function () {
    angular.module('CS', [
        'ui.router',                    // 路由
        'oc.lazyLoad',                  // 懒加载
        'ui.bootstrap',                 // BootstrapUI
        'pascalprecht.translate',       // 国际化模块
        'ngIdle',                       // 空闲计时器
        'ngSanitize'                    // 净化Html
    ])
})();

// 其他的插件库在config.js中配置来懒加载