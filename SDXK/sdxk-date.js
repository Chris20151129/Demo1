/*
   @function  用于时间日期格式的基本函数
   @authors   潘裕
   @date      2017-03-23
 */

function indexFormatter(value, row, index) {
    return index + 1;
}

function yearFormatFromString(value) {
    if ($.trim(value) == '') {
        return "";
    }
    value = value.replace('T', ' ').replace(/-/g, "/").substr(0, 19);
    var datetime = new Date(value);
    var year = datetime.getFullYear();
    return year;
}

function monthFormatFromString(value) {
    if ($.trim(value) == '') {
        return "";
    }
    value = value.replace('T', ' ').replace(/-/g, "/").substr(0, 19);
    var datetime = new Date(value);
    var month = datetime.getMonth() + 1;
    if (month < 10) { month = "0" + month };
    return month;
}

function dayFormatFromString(value) {
    if ($.trim(value) == '') {
        return "";
    }
    value = value.replace('T', ' ').replace(/-/g, "/").substr(0, 19);
    var datetime = new Date(value);
    var day = datetime.getDate();
    if (day < 10) { day = "0" + day };
    return day;
}

function dateFormatFromString(value) {
    if ($.trim(value) == '') {
        return "";
    }
    value = value.replace('T',' ').replace(/-/g, "/").substr(0, 19);
    var datetime = new Date(value);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1;
    if (month < 10) { month = "0" + month };
    var day = datetime.getDate();
    if (day < 10) { day = "0" + day };
    return year + "-" + month + "-" + day;
}

function dateFormatFromDate(value) {
    var year = value.getFullYear();
    var month = value.getMonth() + 1;
    if (month < 10) { month = "0" + month };
    var day = value.getDate();
    if (day < 10) { day = "0" + day };
    return year + "-" + month + "-" + day;
}

function datetimeFormatFromString(value) {
    if ($.trim(value) == '') {
        return "";
    }
    value = value.replace('T', ' ').replace(/-/g, "/").substr(0, 19);
    var datetime = new Date(value);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1;
    if (month < 10) { month = "0" + month };
    var day = datetime.getDate();
    if (day < 10) { day = "0" + day };
    var hour = datetime.getHours();
    if (hour < 10) { hour = "0" + hour };
    var minute = datetime.getMinutes();
    if (minute < 10) { minute = "0" + minute };
    var second = datetime.getSeconds();
    if (second < 10) { second = "0" + second };
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}

function datetimeFormatFromDate(value) {
    var year = value.getFullYear();
    var month = value.getMonth() + 1;
    if (month < 10) { month = "0" + month };
    var day = value.getDate();
    if (day < 10) { day = "0" + day };
    var hour = value.getHours();
    if (hour < 10) { hour = "0" + hour };
    var minute = value.getMinutes();
    if (minute < 10) { minute = "0" + minute };
    var second = value.getSeconds();
    if (second < 10) { second = "0" + second };
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}

function dateFormatter(value, row, index) {
    return dateFormatFromString(value)
}

function datetimeFormatter(value, row, index) {
    return datetimeFormatFromString(value);
}
//入参YYYY-MM-DD hh:mm:ss -YYYY-MM-DD hh:mm:ss
//输出hh:mm-hh:mm
function timePeriodFormatFromString(value, row, index) {
    if ($.trim(value) == '-') {
        return "-";
    }
    value1 = value.substr(0, 17).replace('T', ' ').replace(/-/g, "/");
    value2 = value.substr(19, 19).replace('T', ' ').replace(/-/g, "/");
    var datetime1 = new Date(value1);
    var datetime2 = new Date(value2);
    var hour1 = datetime1.getHours();
    if (hour1 < 10) { hour1 = "0" + hour1 };
    var minute1 = datetime1.getMinutes();
    if (minute1 < 10) { minute1 = "0" + minute1 };
    var hour2 = datetime2.getHours();
    if (hour2 < 10) { hour2 = "0" + hour2 };
    var minute2 = datetime2.getMinutes();
    if (minute2 < 10) { minute2 = "0" + minute2 };
    return hour1 + ":" + minute1 + "-" + hour2 + ":" + minute2;
}
function timeFormatFromString(value, row, index) {
    if ($.trim(value) == '') {
        return "";
    }
    value1 = value.substr(0, 17).replace('T', ' ').replace(/-/g, "/");
    var datetime1 = new Date(value1);
    var hour1 = datetime1.getHours();
    if (hour1 < 10) { hour1 = "0" + hour1 };
    var minute1 = datetime1.getMinutes();
    if (minute1 < 10) { minute1 = "0" + minute1 };
    return hour1 + ":" + minute1;
}
function timeFormatFromDate(value) {
    if ($.trim(value) == '') {
        return "";
    }
    var hour1 = value.getHours();
    if (hour1 < 10) { hour1 = "0" + hour1 };
    var minute1 = value.getMinutes();
    if (minute1 < 10) { minute1 = "0" + minute1 };
    return hour1 + ":" + minute1;
}

