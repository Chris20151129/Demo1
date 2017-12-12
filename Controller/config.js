/// <reference path="D:\vs2015-storage\FirstDemo\Scripts/Example/Window2/unslider.js" />
/// <reference path="D:\vs2015-storage\FirstDemo\Scripts/Example/Window2/unslider.js" />
/**
 * 陈松 --练手小Demo
 * Version 0.0.1
 *
 * 使用 AngularUI Router 来管理路由和视图
 * 每个视图使用独立的状态定义
 * 初始化时给所有视图设置状态
 *
 */
function config($stateProvider, $urlRouterProvider, IdleProvider, $ocLazyLoadProvider) {

    // 配置 Idle 设置
    IdleProvider.idle(5); // 单位为秒
    IdleProvider.timeout(120); // 单位为秒

    //路由例外配置，即路由匹配不到时跳转的页面
    $urlRouterProvider.otherwise("/Login");

    $ocLazyLoadProvider.config({
        //如果你想查看什么时候动态加载，将该配置设置为true
        debug: false
    });

    /** 登陆模块 **/
    $stateProvider
    .state("Login", {
        url: '/Login',
        templateUrl: 'Views/Home/Login.html',
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                   'Content/login.css', 'Scripts/jquery.md5.js'
                ]);
            }],
        }
    })

    .state("index", {
        url: '/index',
        templateUrl: 'Views/Home/content.html',
    })

    .state('Home', {
        abstract: true, //表明此状态不能被显性激活，只能被子状态隐性激活
        url: "/Home",  //第一级url
        templateUrl: "Views/Home/content.html",   //填充ui-view的页面url
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                ]);
            }],
        }
    })
    //首页
    .state('Window', {
        abstract: true, 
        url: "/Window", 
        templateUrl: "Views/Home/content.html",  
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                ]);
            }],
        }
    })
    .state('Window.Window1', {
        url: "/Window1",
        templateUrl: "Views/Window/Window1.html", 
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                ]);
            }],
        }
    })
    .state('Window.Window2', {
        url: "/Window2",  
        templateUrl: "Views/Window/Window2.html",   
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'Scripts/Example/Window2/unslider.js', 'Scripts/Example/Window2/unslider.css', 'Scripts/Example/Window2/swiper.js', 'Scripts/Example/Window2/swiper.css'
                ]);
            }],
        }
    })
    //按钮
    .state('Button', {
        abstract: true, 
        url: "/Button", 
        templateUrl: "Views/Home/content.html",  
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    ]);
            }],
        }
    })
    .state('Button.LoadButton', {
        url: "/LoadButton", 
        templateUrl: "Views/Button/Load_Button.html",  
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                      'Scripts/Example/LoadButton/ladda-themeless.min.css', 'Scripts/Example/LoadButton/spin.min.js', 'Scripts/Example/LoadButton/ladda.min.js'
                ]);
            }],
        }
    })
    .state('Button.MenuButton', {
        url: "/MenuButton",
        templateUrl: "Views/Button/Menu_Button.html",
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                      
                ]);
            }],
        }
    })

    //画布
    .state('Canvas', {
        abstract: true,
        url: "/Canvas",
        templateUrl: "Views/Home/content.html",
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                ]);
            }],
        }
    })
    .state('Canvas.Canvas_base', {
        url: "/Canvas_base",
        templateUrl: "Views/Canvas/Canvas_base.html",
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                ]);
            }],
        }
    })
    .state('Canvas.Canvas_base1', {
        url: "/Canvas_base1",
        templateUrl: "Views/Canvas/Canvas_base1.html",
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                ]);
            }],
        }
    })
    .state('Canvas.Canvas_3D', {
        url: "/Canvas_3D",
        templateUrl: "Views/Canvas/Canvas_3D.html",
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                ]);
            }],
        }
    })
    .state('Canvas.flot', {
        url: "/flot",
        templateUrl: "Views/Canvas/flot.html",
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                     'Scripts/Example/flot/jquery.flot.js', 'Scripts/Example/flot/jquery.flot.pie.js', 'Scripts/Example/flot/jquery.flot.resize.js', 'Scripts/Example/flot/jquery.flot.spline.js', 'Scripts/Example/flot/jquery.flot.symbol.js', 'Scripts/Example/flot/jquery.flot.time.js', 'Scripts/Example/flot/jquery.flot.tooltip.min.js', 'Scripts/Example/flot/excanvas.min.js', 'Scripts/Example/flot/curvedLines.js'
                ]);
            }],
        }
    })

    //弹窗
    .state('layer', {
        abstract: true,
        url: "/layer",
        templateUrl: "Views/Home/content.html",
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                ]);
            }],
        }
    })
    .state('layer.layer1', {
        url: "/layer1",
        templateUrl: "Views/layer/layer.html",
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'Scripts/Example/layer/layer.css','Scripts/Example/layer/layer.js'
                ]);
            }],
        }
    })
}

angular
    .module('CS')
    .config(config)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });
