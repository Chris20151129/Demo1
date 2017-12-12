//获取站点根目录
function GetSiteUri() {
    return 'http://localhost:32232/';
    // return 'http://localhost/KSJRWL.Site.Master/'
    //return 'http://192.1.6.35:8013/'
}
function GetAlarmUri() {
    //return 'http://192.1.6.35:8080/KSJRSignalR/signalr/';
    return 'http://localhost:28801/signalr/'
}
//获取WebAPI根目录
function GetApiUri() {
    return 'http://localhost:18379/api/';
    // return 'http://192.1.6.35:8080/KSJRWL/KSJRWL.API/';
  //  return 'http://192.1.6.35:8080/KSJR/api/';
}



////获取站点根目录
//function GetSiteUri() {
//    return 'http://192.168.0.12:8091/';
//}
//function GetAlarmUri() {
//    return 'http://192.168.0.12:8090/KSJRWL.Signalr/signalr/';
//}
////获取WebAPI根目录
//function GetApiUri() {
//    return 'http://192.168.0.12:8090/KSJRWL.API/api/';
//}
