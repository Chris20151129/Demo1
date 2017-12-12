/**
 * 陈松 --练手小Demo
 * Version 0.0.1
 *
 * 主要控制器文件
 * 定义数据如何使用
 *
 */

//Login页面
function LoginCtrl($scope, $http, $state) {
    $scope.Init = function () {
    }
    $scope.Login = function () {
        sessionStorage.setItem('USER', $scope.obj.userName);
        $state.go('index');
        //$scope.obj.userPwd = $.md5($scope.userPwd);

        //if (($scope.obj.userName == "admin") && ($scope.obj.userPwd == "c4ca4238a0b923820dcc509a6f75849b")) {
        //    sessionStorage.setItem('USER', $scope.obj.userName);
        //    $state.go('index');
        //}
        //else {
        //    alert("账号或者密码错误，请重试");
        //}
    }
}

//header
function HeaderCtrl($scope, $http, $state, $interval) {
    $scope.Init = function () {
        $scope.USER = sessionStorage.getItem('USER');
    }

    var Clients = [];
    var chat = $.connection.getHub;
  
    //注册提示信息方法
    chat.client.showMessage = function (Message) {
        alert(Message);
    }
    //注册显示信息的方法
    chat.client.addMessage = function (Message, contextID) {
        if ($.inArray(contextID, Clients) == -1) {
            Clients.push(contextID)
            $scope.ID = contextID
            $scope.$apply();
            $("#Chart").modal('show');
        }
        $("#" + contextID).find("ul").each(function () {
            $(this).append('<li>' + Message + '</li>')
        })
    }

    //查询好友列表的方法
    chat.client.getUserlist = function (data) {
        if (data) {
            $scope.jsondata = $.parseJSON(data);
            $("#roomList").html(" ");
            for (var i = 0; i < $scope.jsondata.length; i++) {
                var html = ' <li style="font-size:15px;line-height:35px;float:left">用户名:<span id="name">' + $scope.jsondata[i].Name + '</span><button class="btn btn-primary btn-sm pull-right" id="chart" roomname="' + $scope.jsondata[i].ContextID + '" data-toggle="modal" data-target="#Chart">聊天</button></li>';
                $("#roomList").append(html);
            }
        }
    }
    $(document).on('click', '#chart', function () {
        $scope.NAME = $(this).parent().find('#name').html();
        $scope.ID = $(this).attr('roomname')
        $scope.$apply();
        $("#Chart").modal('show');
    })
    //关闭模态框
    $scope.Cannal = function () {
        $scope.message = "";
        $("#Chart").modal('hide');
    }
    //连接成功后获取自己的信息
    $.connection.hub.start().done(function () {
        chat.server.getName($scope.USER);
    });
    //发送消息
    $scope.SendMessage=function() {
        var message = $scope.USER + ":" + $scope.message;
        chat.server.sendMessage($scope.ID, message);
    }

    //$scope.timer = $interval(function () {
    //    if (($('#' + $scope.ID).html() != "")&&($('#' + $scope.ID).html() != "undefined")) {
            
    //    }
    //},5000);
}

//Menu
function MenuCtrl($scope, $http, $state) {
    $scope.win = function () {
        $('#window').addClass('in');
    }
   
}

//Window2
function Window2Ctrl($scope, $http, $state, $interval) {
    $scope.timer = $interval(function () {
        $('.swiper-button-next').trigger("click");
    }, 10000);

    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
    
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // 如果需要滚动条
    //    scrollbar: {
    //    el: '.swiper-scrollbar',
    //},
})  

    $scope.change = function (e) {
        //alert($(this).className)
        alert($(this).attr("id"));
    }
}

//LoadButton
function LoadButtonCtrl($scope, $http, $state) {
    Ladda.bind('.ladda-button', { timeout: 2000 });

    Ladda.bind('.progress-demo button', {
        callback: function (instance) {
            var progress = 0;
            var interval = setInterval(function () {
                progress = Math.min(progress + Math.random() * 0.1, 1);
                instance.setProgress(progress);

                if (progress === 1) {
                    instance.stop();
                    clearInterval(interval);
                }
            }, 200);
        }
    });

    $scope.runLoading = function () {
       
    }
}

//Canvas_base画布
function Canvas_base($scope, $http) {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext("2d")) {                  //context进行绘图
        var context = canvas.getContext("2d");
    }
    else {
        alert("当前浏览器不支持canvas")
    }

    context.beginPath();                //开始一个绘制，与下一个区分
    context.moveTo(100, 100);           //从100，100
    context.lineTo(500, 500);           //到700，700
    context.lineTo(100, 500);           //再到100，700
    context.lineTo(100, 100);           //再到100，100


    context.lineWidth = 5;              //宽度
    context.strokeStyle = "#005588"       //线条颜色


    context.fillStyle="rgb(2,100,30)"   //多边形着色
    context.fill();

    context.stroke();                   //绘制
    context.closePath();

    context.beginPath();                //开始一个绘制，与下一个区分
    context.moveTo(200, 100);           //从200，100
    context.lineTo(600, 500);           //到600，500

    context.lineWidth = 5;              //宽度
    context.strokeStyle = "#aaa"       //线条颜色

    context.stroke();                   //绘制
    context.closePath();

    context.beginPath();                //开始一个绘制，与下一个区分
    context.moveTo(200, 200);           //从200，100
    context.lineTo(200, 220);           //到600，500

    context.lineWidth = 5;              //宽度
    context.strokeStyle = "#005588"       //线条颜色
    context.stroke();                   //绘制
    context.closePath();
}

//Canvas_base画布 ----七巧板和弧
function Canvas_base1($scope, $http) {
    $scope.draw = function (Nod, context) {
        context.beginPath();
        context.moveTo(Nod.p[0].x, Nod.p[0].y);
        for (var i = 1; i < Nod.p.length; i++) {
            context.lineTo(Nod.p[i].x, Nod.p[i].y);
        }
        context.closePath();
        context.fillStyle = Nod.color;
        context.fill();

        context.lineWidth = 5;              //宽度
        context.strokeStyle = "black"       //线条颜色

        context.stroke();
    }

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");            //context进行绘图
    var Node = [
        { p: [{ x: 0, y: 0 }, { x: 400, y: 0 }, { x: 200, y: 200 }], color: "#caff67" },
        { p: [{ x: 0, y: 0 }, { x: 200, y: 400 }, { x: 0, y: 400 }], color: "#67becf" },
        { p: [{ x: 400, y: 0 }, { x: 400, y: 200 }, { x: 300, y: 300 }, { x: 300, y: 100 }], color: "#ef3d61" },
        { p: [{ x: 300, y: 100 }, { x: 300, y: 300 }, { x: 200, y: 200 }], color: "#f9f51a" },
        { p: [{ x: 200, y: 200 }, { x: 300, y: 300 }, { x: 200, y: 400 }, { x:100, y: 300 }], color: "#a594c0" },
        { p: [{ x: 100, y: 300 }, { x: 200, y: 400 }, { x: 0, y: 400 }], color: "#fa8ecc" },
        { p: [{ x: 400, y: 200 }, { x: 400, y: 400 }, { x: 200, y: 400 }], color: "#f6ca29" },
    ]

    for (var i = 0; i < Node.length; i++) {
        $scope.draw(Node[i], context);
    }

    //context.beginPath();
    //context.lineWidth = 5;              //宽度
    //context.strokeStyle = "black"       //线条颜色
    //context.arc(600, 200, 150, 0, 1.5 * Math.PI);
    ////context.closePath();                  //让圆不封闭
    //context.stroke();

    context.beginPath();
    context.lineWidth = 5;              //宽度
    context.strokeStyle = "black"       //线条颜色
    context.arc(900, 200, 100, 0, 2 * Math.PI);
    context.closePath();                  //让圆不封闭
    context.stroke();

    context.beginPath();
    context.moveTo(900, 90);
    context.lineTo(900, 60);
    context.moveTo(825, 115);
    context.lineTo(805, 95);
    context.moveTo(790, 200);
    context.lineTo(760, 200);
    context.moveTo(825, 285);
    context.lineTo(805, 305);
    context.moveTo(900, 310);
    context.lineTo(900, 340);
    context.moveTo(1010, 200);
    context.lineTo(1040, 200);
    context.moveTo(975, 115);
    context.lineTo(995, 95);
    context.moveTo(975, 285);
    context.lineTo(995, 305);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;              //宽度
    context.strokeStyle = "black"       //线条颜色
    context.arc(900, 200, 145, 0, 2 * Math.PI);
    context.closePath();                  //让圆不封闭
    context.stroke();

}

//Canvas3D效果
function Canvas_3D($scope, $http)   {
    var curIndex = 1;

    $scope.next = function () {
        if (curIndex == 5)
            return;

        var curPage = document.getElementById('page' + curIndex);
        curPage.style.webkitTransform = 'rotateX(-90deg)';
        curIndex++;
        var nextPage = document.getElementById('page' + curIndex);
        nextPage.style.webkitTransform = 'rotateX(0deg)';
    }
    $scope.pre = function () {
        if (curIndex == 1)
            return;

        var curPage = document.getElementById('page' + curIndex);
        curPage.style.webkitTransform = 'rotateX(90deg)';
        curIndex--;
        var nextPage = document.getElementById('page' + curIndex);
        nextPage.style.webkitTransform = 'rotateX(0deg)';
    }

}

//图表效果
function flot($scope, $http) {
    var d1 = [{ label: "Bar", data: [[1, 13], [2, 11], [3, 7], [4, 8]] }];
    var stack = 0, bars = true, lines = false, steps = false;
    $.plot($("#bar1"), d1, {
        series: {
            color: '#333',
            abel: 'morris',
            stack: 0,
            lines: {
                //show: true,
                fill: true,
                steps: false
            },
            point: {
                show: true,
            },
            bars: {
                show: true,
                barWidth: 0.6
            }
        }
    });
    
    var d2 = [{ label: "Bar1", data: [[0, 14], [1, 13], [2, 11], [3, 7]], color: '#abcdef' },
            { label: "Bar2", data: [[0, 8], [1, 22], [2, 33], [3, 11]], color: '#fedcba' } ];

    $.plot($("#bar2"), d2, {
        series: {
            bars: {
                show: true
            }
        },
        bars: {
            align: "center",
            barWidth: 0.5
        },
        xaxis: {
            show: true,
            ticks: [[0, 'a'], [1, 'b'], [2, 'c'], [3, 'd']],
            tickSize: 2,
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Verdana, Arial',
            axisLabelPadding: 10

        },
    });

    var d3 = [{ label: "Bar1", data: [[10, 0], [11, 1], [12, 2], [13, 3]], color: '#abcdef' },
            { label: "Bar2", data: [[13, 0], [12, 1], [11, 2], [10, 3]], color: '#fedcba' }];
    $.plot($("#bar3"), d3, {
        series: {
            bars: {
                show: true
            }
        },
        bars: {
            align: "center",
            barWidth: 0.5,
            horizontal: true,
        },
        xaxis: {
            show: true,
            tickSize: 2,
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Verdana, Arial',
            axisLabelPadding: 10

        },
        yaxis: {
            show: true,
            ticks: [[0, 'a'], [1, 'b'], [2, 'c'], [3, 'd']],
            tickSize: 2,
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Verdana, Arial',
            axisLabelPadding: 10

        },
    });
}

//下拉菜单
function Menu_button($scope, $http) {
    var htm = document.getElementById('Menu_dropdown').getElementsByTagName('li');
    for (var i = 0; i < htm.length; i++) {
        htm[i].onmouseover = function () {
            this.className += (this.className.length > 0 ? " " : "") + "show";
        }
        htm[i].onmouseout = function () {
            this.className = this.className.replace("show", "");
        }
    }

}

//弹窗
function layer($scope, $http) {
    $scope.btn1 = function () {
        layer.open({
            content: '浏览器滚动条已锁',
            scrollbar: false
        });
    }
    $scope.btn2 = function () {
        var index = layer.open({
            type: 2,
            content: 'http://layim.layui.com',
            area: ['320px', '195px'],
            maxmin: true
        });
    }
    $scope.btn3 = function () {
        layer.prompt(function (val, index) {
            layer.msg('得到了' + val);
            layer.close(index);
        });
    }
    $scope.btn4 = function () {
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            area: '516px',
            skin: 'layui-layer-nobg', //没有背景色
            shadeClose: true,
            content: $('#tong')
        });
    }
    $scope.btn5 = function () {
        layer.tips('上', '#btn5', {
            tips: [1, '#0FA6D8'] //还可配置颜色
        });
    }
    $scope.btn6 = function () {
        layer.tips('下', '#btn6', {
            tips: 3
        });
    }
    $scope.btn7 = function () {
        layer.tips('左边么么哒', '#btn7', {
            tips: [4, '#78BA32']
        });
    }
    $scope.btn8 = function () {
        layer.tips('默认就是向右的', '#btn8');
    }
    $scope.btn9 = function () {
        layer.msg('灵活运用offset', {
            offset: 't',
            anim: 6
        });
    }
    $scope.btn10 = function () {
        layer.open({
            type: 2,
            title: false,
            area: ['630px', '360px'],
            shade: 0.8,
            closeBtn: 0,
            shadeClose: true,
            content: '//player.youku.com/embed/XMjY3MzgzODg0'
        });
        layer.msg('点击任意处关闭');
    }
}

angular
    .module('CS')
    .controller('LoginCtrl', LoginCtrl)
    .controller('HeaderCtrl', HeaderCtrl)
    .controller('MenuCtrl', MenuCtrl)
    .controller('Window2Ctrl', Window2Ctrl)
    .controller('LoadButtonCtrl', LoadButtonCtrl)
    .controller('Canvas_base', Canvas_base)
    .controller('Canvas_base1', Canvas_base1)
    .controller('Canvas_3D', Canvas_3D)
    .controller('flot', flot)
    .controller('Menu_button', Menu_button)
    .controller('layer', layer)
