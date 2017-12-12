/*
   @function  API相关的基本函数
   @authors   潘裕
   @date      2017-03-23
 */

//解析WebAPI反馈的数据格式
function AnalysisResult(message) {
    if (!message.Result) {
        sessionStorage.setItem('message', JSON.stringify(message));
        ShowMessage(message);
    }
    else {
        var result = new Object();
        result.Info = message.Info.Title;
        result.Data = JSON.parse(message.DataJson);
        return result;
    }
}

function GetBirthday(idNum) {
    var year = idNum.substr(6, 4);
    var month = idNum.substr(10, 2);
    var day = idNum.substr(12, 2);
    var birthday = year + "/" + month + "/" + day;
    return birthday;
}

//显示消息
function ShowMessage(message) {
    if ($('#MessageArea').length > 0) {
        $('#MessageArea').modal('show');
        $('.modal-content', '#MessageArea').load(GetSiteUri() + 'Admin/Shared/_MessageHelp.shtml?IsIntegrate=true');
    }
    else {
        alert(message.Info.Title);
    }
}

//监听元素resize事件
(function ($, h, c) { var a = $([]), e = $.resize = $.extend($.resize, {}), i, k = "setTimeout", j = "resize", d = j + "-special-event", b = "delay", f = "throttleWindow"; e[b] = 250; e[f] = true; $.event.special[j] = { setup: function () { if (!e[f] && this[k]) { return false } var l = $(this); a = a.add(l); $.data(this, d, { w: l.width(), h: l.height() }); if (a.length === 1) { g() } }, teardown: function () { if (!e[f] && this[k]) { return false } var l = $(this); a = a.not(l); l.removeData(d); if (!a.length) { clearTimeout(i) } }, add: function (l) { if (!e[f] && this[k]) { return false } var n; function m(s, o, p) { var q = $(this), r = $.data(this, d); r.w = o !== c ? o : q.width(); r.h = p !== c ? p : q.height(); n.apply(this, arguments) } if ($.isFunction(l)) { n = l; return m } else { n = l.handler; l.handler = m } } }; function g() { i = h[k](function () { a.each(function () { var n = $(this), m = n.width(), l = n.height(), o = $.data(this, d); if (m !== o.w || l !== o.h) { n.trigger(j, [o.w = m, o.h = l]) } }); g() }, e[b]) } })(jQuery, this);

//重构load函数，构造promise
jQuery.fn.sdxkLoad = function (url, param) {
    var def = $.Deferred();
    $(this).load(url, function () {
        $($(this).children()[0]).attr('queryObj', JSON.stringify(param));
        def.resolve($($(this).children()[0]));
    })
    return def.promise();
}

//重构post函数,添加公共处理
$.sdxkPost = function ($http, url, data) {
    var dataJson = JSON.stringify(data);
    var user = JSON.parse(sessionStorage.getItem('user'));
    var userId = "";
    if (user) {
        userId = user.ID;
    }
    var post = $http.post(GetApiUri() + url, dataJson, {
      
        headers: { 'Authorization': userId }
          
    });
    post.then(function (response) {
        var result = AnalysisResult(response.data);
        for (var key in response) {
            delete response[key];
        }
        for (var key in result) {
            response[key] = result[key];
        }
    }).catch(function (response) {
        //处理响应失败
        alert(JSON.stringify(response.status));
        if(response.status==-1)
        {
            alert('系统异常，请联系管理员')
        }
    });
    return post;
}
