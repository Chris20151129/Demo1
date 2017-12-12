/*
   @function  Baidu地图API相关的基本函数
   @authors   潘裕
   @date      2017-03-23
 */

/*********************************************************   核心类   ******************************************************/
//创建地图实例
function CreateMap(container, mapOptions) {
    return new BMap.Map(container, mapOptions);
}

//设置地图样式
function SetMapStyle(map, mapOptions) {
    map.setMapStyle(mapOptions);
}

//获取地图的容器元素
function GetContainer(map) {
    return map.getContainer();
}

//设置地图城市
function SetCurrentCity(map, city) {
    map.setCurrentCity(city);
}

//设定地图中心点
function CenterAndZoom(map, center, zoom) {
    map.centerAndZoom(center, zoom);
}

//重新设置地图
function Reset(map) {
    map.reset();
}

//将地图的中心点更改为给定的点
function PanTo(map, center, enableAnimation) {
    map.panTo(center, { noAnimation: enableAnimation });
}

//将地图在水平位置上移动x像素，垂直位置上移动y像素
function PanBy(map, x, y, enableAnimation) {
    map.panBy(x, y, { noAnimation: enableAnimation });
}

//获取地图可视区域,注意必须是以坐标点设定地图中心才可以获取
function GetMapBounds(map) {
    return map.getBounds();
}

//获取两点间的距离
function GetDistance(startPoint, endPoint) {
    return map.getDistance(startPoint, endPoint);
}

//获取地图视图的大小
function GetMapSize(map) {
    return map.getSize();
}

//启用使用高分辨率地图
function EnableHighResolution(map) {
    map.setMapStyle({ enableHighResolution: true });
}

//禁用使用高分辨率地图
function DisableHighResolution(map) {
    map.setMapStyle({ enableHighResolution: false });
}

//是否使用高分辨率地图
function HighResolutionEnabled(map) {
    return map.highResolutionEnabled();
}

//启用底图可点
function EnableMapClick(map) {
    map.setMapStyle({ enableMapClick: true });
}

//禁用底图可点
function DisableMapClick(map) {
    map.setMapStyle({ enableMapClick: false });
}

//启动地图拖拽
function EnableDragging(map) {
    map.enableDragging();
}

//禁用地图拖拽
function DisableDragging(map) {
    map.disableDragging();
}

//启用滚轮缩放
function EnableScrollWheelZoom(map) {
    map.enableScrollWheelZoom();
}

//禁用滚轮缩放
function DisableScrollWheelZoom(map) {
    map.disableScrollWheelZoom();
}

//启用双击放大
function EnableDoubleClickZoom(map) {
    map.enableDoubleClickZoom();
}

//禁用双击放大
function DisableDoubleClickZoom(map) {
    map.disableDoubleClickZoom();
}

//启用键盘操作
//键盘的上、下、左、右键可连续移动地图。同时按下其中两个键可使地图进行对角移动。PgUp、PgDn、Home和End键会使地图平移其1/2的大小。+、-键会使地图放大或缩小一级
function EnableKeyboard(map) {
    map.enableKeyboard();
}

//禁用键盘操作
function DisableKeyboard(map) {
    map.disableKeyboard();
}

//启用地图惯性拖拽
function EnableInertialDragging(map) {
    map.enableInertialDragging();
}

//禁用地图惯性拖拽
function DisableInertialDragging(map) {
    map.disableInertialDragging();
}

//启用连续缩放效果
function EnableContinuousZoom(map) {
    map.enableContinuousZoom();
}

//禁用连续缩放效果
function DisableContinuousZoom(map) {
    map.disableContinuousZoom();
}

//启用双指操作缩放
function EnablePinchToZoom(map) {
    map.enablePinchToZoom();
}

//禁用双指操作缩放
function DisablePinchToZoom(map) {
    map.disablePinchToZoom();
}

//启用自动适应容器尺寸变化
function EnableAutoResize(map) {
    map.enableAutoResize();
}

//禁用自动适应容器尺寸变化
function DisableAutoResize(map) {
    map.disableAutoResize();
}

//设置地图默认的鼠标指针样式
function SetDefaultCursor(map, cursor) {
    map.setDefaultCursor(cursor);
}

//获取地图默认的鼠标指针样式
function GetDefaultCursor(map) {
    map.getDefaultCursor();
}

//设置拖拽地图时的鼠标指针样式
function SetDraggingCursor(map, cursor) {
    map.setDraggingCursor(cursor);
}

//获取拖拽地图时的鼠标指针样式
function GetDraggingCursor(map) {
    map.getDraggingCursor();
}

//设置地图允许的最小级别
function SetMinZoom(map, zoom) {
    map.setMinZoom(zoom);
}

//设置地图允许的最大级别
function SetMaxZoom(map, zoom) {
    map.setMaxZoom(zoom);
}

//设置地图当前缩放级别
function SetZoom(map, zoom) {
    return map.setZoom(zoom);
}

//获取地图当前缩放级别
function GetZoom(map) {
    return map.getZoom();
}

//放大一级视图
function ZoomIn(map) {
    map.zoomIn();
}

//缩小一级视图
function ZoomOut(map) {
    map.zoomOut();
}

//设置地图类型
function SetMapType(map, mapType) {
    map.setMapType(mapType);
}

//获取地图类型
function GetMapType(map) {
    return map.getMapType();
}

//设置地图中心点
function SetMapCenter(map, center) {
    map.setCenter(center);
}

//获取地图当前中心点
function GetMapCenter(map) {
    return map.getCenter();
}

//根据提供的地理区域或坐标设置地图视野
function SetViewport(map, view, viewportOptions) {
    map.setViewport(view, viewportOptions);
}

//根据提供的地理区域或坐标获得最佳的地图视野
function GetViewport(map, view, viewportOptions) {
    return map.getViewport(view, viewportOptions);
}

//将全景实例与Map类进行绑定
function SetPanorama(map, panorama) {
    map.setPanorama(panorama);
}

//获取与Map类绑定的全景实例
function GetPanorama(map) {
    return map.getPanorama();
}

//为地图添加热区
function AddHotspot(map, hotspot) {
    map.addhotspot(hotspot);
}

//移除某个地图热区
function RemoveHotspot(map, hotspot) {
    map.removeHotspot(hotspot);
}

//清空地图所有热区
function ClearHotspots(map) {
    map.clearHotspots();
}

//将控件添加到地图
function AddControl(map, control) {
    map.addControl(control);
}

//从地图中移除控件
function RemoveControl(map, control) {
    map.removeControl(control);
}

//为地图添加右键菜单
function AddMapContextMenu(map, menu) {
    map.addContextMenu(menu);
}

//从地图移除右键菜单
function RemoveMapContextMenu(map, menu) {
    map.removeContextMenu(menu);
}

//将覆盖物添加到地图中
function AddOverlay(map, overlay) {
    map.addOverlay(overlay);
}

//从地图中移除覆盖物
function RemoveOverlay(map, overlay) {
    map.removeOverlay(overlay);
}

//清除地图上所有覆盖物
function ClearOverlays(map) {
    map.clearOverlays();
}

//获取地图上的所有覆盖物
function GetOverlays(map) {
    return map.getOverlays();
}

//返回地图覆盖物容器列表
function GetPanes(map) {
    return map.getPanes();
}

//在地图上打开信息窗口
function OpenInfoOnMap(map, info, point) {
    map.openInfoWindow(info, point);
}

//关闭在地图上打开的信息窗口
function CloseInfoOnMap(map) {
    map.closeInfoWindow();
}

//获取地图上处于打开状态的信息窗的实例
function GetInfoOnMap(map) {
    return map.getInfoWindow();
}

//添加一个自定义地图图层
function AddTileLayer(map, tileLayer) {
    map.addTileLayer(tileLayer);
}

//移除一个自定义地图图层
function RemoveTileLayer(map, tileLayer) {
    map.removeTileLayer(tileLayer);
}

//通过地图类型得到一个地图图层对象
function GetTileLayer(map, mapType) {
    return map.getTileLayer(mapType);
}

//根据地理坐标获取对应的覆盖物容器的坐标
function PointToOverlayPixel(map, point) {
    map.pointToOverlayPixel(point);
}

//根据覆盖物容器的坐标获取对应的地理坐标
function OverlayPixelToPoint(map, pixel) {
    map.overlayPixelToPoint(pixel);
}

//像素坐标转换为经纬度坐标
function PixelToPoint(map, pixel) {
    return map.pixelToPoint(pixel);
}

//经纬度坐标转换为像素坐标
function pointToPixel(map, point) {
    return map.pointToPixel(point);
}

/*********************************************************   基础类   ******************************************************/
//创建地理坐标点
function CreatePoint(lng, lat) {
    return new BMap.Point(lng, lat);
}

//判断坐标点是否相等
function EqualsPoint(pointA, pointB) {
    return pointA.equals(pointB);
}

//创建地图像素点
function CreatePixel(x, y) {
    return new BMap.Pixel(x, y);
}

//判断像素点是否相等
function EqualsPixel(pixelA, pixelB) {
    return pixelA.equals(pixelB);
}

//创建矩形区域
function CreateBounds(pointSW, pointNE) {
    return new BMap.Bounds(pointSW, pointNE);
}

//判断矩形区域是否相等
function EqualsBounds(boundsA, boundsB) {
    return boundsA.equals(boundsB);
}

//判断坐标点在此矩形区域内
function ContainsPoint(bounds, point) {
    return bounds.containsPoint(point);
}

//判断矩形区域在此矩形区域内
function ContainsBounds(boundsA, boundsB) {
    return boundsA.containsBounds(boundsB);
}

//计算与另一矩形的交集区域
function Intersects(boundsA, boundsB) {
    return boundsA.intersects(boundsB);
}

//放大此矩形，使其包含给定的点
function ExtendBounds(bounds, point) {
    bounds.extend(point);
}

//获取矩形的中心点
function GetBoundsCenter(bounds) {
    return bounds.getCenter();
}

//判断矩形是否为空
function IsBoundsEmpty(bounds) {
    return bounds.isEmpty();
}

//获取矩形区域的西南角
function GetBoundsSouthWest(bounds) {
    return bounds.getSouthWest();
}

//获取矩形区域的东北角
function GetBoundsNorthEast(bounds) {
    return bounds.getNorthEast()
}

//矩形区域的跨度
function BoundsToSpan(bounds) {
    return bounds.toSpan();
}

//创建矩形区域的尺寸
function CreateSize(width, height) {
    return new BMap.Size(width, height);
}

//判断矩形区域尺寸是否相等
function EqualsSize(sizeA, sizeB) {
    return sizeA.equals(sizeB);
}

/*********************************************************   控件类   ******************************************************/
//创建自定义控件
function CreateControl() {
    return new BMap.Control();
}

//设置控件停靠的位置
//BMAP_ANCHOR_TOP_LEFT:控件将定位到地图的左上角
//BMAP_ANCHOR_TOP_RIGHT:控件将定位到地图的右上角
//BMAP_ANCHOR_BOTTOM_LEFT:控件将定位到地图的左下角
//BMAP_ANCHOR_BOTTOM_RIGHT:控件将定位到地图的右下角
function SetControlAnchor(control, anchor) {
    control.setAnchor(anchor);
}

//获取控件停靠的位置
function GetControlAnchor(control) {
    control.getAnchor();
}

//设置控件停靠的偏移量
function SetControlOffset(control, offset) {
    control.setOffset(offset);
}

//获取控件停靠的偏移量
function GetControlOffset(control) {
    return control.getOffset();
}

//显示控件
function ShowControl(control) {
    control.show();
}

//隐藏控件
function HideControl(control) {
    control.hide();
}

//判断控件可见性
function IsControlVisible(control) {
    return control.isVisible();
}

//创建地图平移缩放控件
function CreateNavigationControl() {
    return new BMap.NavigationControl({ enableGeolocation: true });
}

//设置平移缩放控件的类型
//BMAP_NAVIGATION_CONTROL_LARGE:标准的平移缩放控件（包括平移、缩放按钮和滑块）
//BMAP_NAVIGATION_CONTROL_SMALL:仅包含平移和缩放按钮
//BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮
//BMAP_NAVIGATION_CONTROL_ZOOM:仅包含缩放按钮
function SetNavigationType(control, type) {
    return control.setType(type);
}

//获取平移缩放控件的类型
function GetNavigationType(control) {
    return control.getType();
}

//创建地图定位控件
function CreateGeolocationControl() {
    return new BMap.GeolocationControl();
}

//开始进行定位
function Location(control) {
    control.location();
}

//获取当前定位信息
function GetAddress(control) {
    return control.getAddressComponent();
}

//创建缩略地图控件
function CreateOverviewMapControl() {
    return new BMap.OverviewMapControl({ isOpen: true });
}

//切换缩略地图控件的开合状态
function ChangeOverviewMapView(control) {
    control.changeView();
}

//设置缩略地图的大小
function SetOverviewMapSize(control, size) {
    control.setSize(size);
}

//获取缩略地图的大小
function GetOverviewMapSize(control) {
    return control.GetSize();
}

//创建比例尺控件
function CreateScaleControl() {
    return new BMap.ScaleControl();
}

//设置比例尺单位制
//BMAP_UNIT_METRIC:公制单位
//BMAP_UNIT_IMPERIAL:英制单位
function SetUnit(control, unit) {
    control.setUnit(unit);
}

//获取比例尺单位制
function GetUnit(control) {
    return control.getUnit();
}

//创建版权控件
function CreateCopyrightControl() {
    return new BMap.CopyrightControl();
}

//添加版权信息
function AddCopyright(control, id, content, bounds) {
    control.addCopyright({ id: id, content: content, bounds: bounds });
}

//移除版权信息
function RemoveCopyright(control, id) {
    control.RemoveCopyright(id);
}

//获取单个版权信息
function GetCopyright(control, id) {
    return control.getCopyright(id);
}

//获取版权信息列表
function GetAllCopyrigh(control) {
    return control.getCopyrightCollection();
}

//创建地图类型控件
function CreateMapTypeControl() {
    return new BMap.MapTypeControl();
}

//创建全景地图控件
function CreatePanoramaControl() {
    return new BMap.PanoramaControl();
}

//创建城市列表控件
function CreateCityListControl() {
    var size = new BMap.Size(70, 20);
    var cityListControl = new BMap.CityListControl({ offset: size });
    return cityListControl;
}

/*********************************************************   覆盖物类   ******************************************************/
//判断覆盖物是否可见
function IsOverlayVisible(overlay) {
    return overlay.isVisible();
}

//显示覆盖物
function ShowOverlay(overlay) {
    overlay.show();
}

//隐藏覆盖物
function HideOverlay(overlay) {
    overlay.hide();
}

//允许覆盖物在map.clearOverlays方法中被清除
function EnableMassClear(overlay) {
    overlay.enableMassClear();
}

//禁止覆盖物在map.clearOverlays方法中被清除
function DisableMassClear(overlay) {
    overlay.disableMassClear();
}

//获取覆盖物所在的map对象
function GetMapByOverlay(overlay) {
    return overlay.getMap();
}

//创建图像标注
function CreateMarker(point, markerOptions) {
    return new BMap.Marker(point, markerOptions);
}

//在图像标注上打开信息窗
function OpenInfoOnMarker(marker, info) {
    marker.openInfoWindow(info);
}

//关闭图像标注上的信息窗
function CloseInfoOnMarker(marker) {
    marker.closeInfoWindow();
}

//设置图像标注所用的图标对象
function SetMarkerIcon(marker, icon) {
    marker.setIcon(icon);
}

//获取图像标注所用的图标对象
function GetMarkerIcon(marker) {
    return marker.getIcon();
}

//设置图像标注的地理坐标
function SetMarkerPosition(marker, point) {
    marker.setPosition(point);
}

//获取图像标注的地理坐标
function GetMarkerPosition(marker) {
    marker.getPosition();
}

//设置图像标注的偏移值
function SetMarkerOffset(marker, offset) {
    marker.setOffset(offset);
}

//获取图像标注的偏移值
function GetOffset(marker) {
    return marker.getOffset();
}

//为图像标注添加文本标注
function SetMarkerLabel(marker, label) {
    marker.setLabel(label);
}

//获取图像标注的文本标注
function GetMarkerLabel(marker) {
    return marker.getLabel();
}

//设置图像标注的标题
function SetMarkerTitle(marker, title) {
    marker.setTitle(title);
}

//获取图像标注的标题
function GetMarkerTitle(marker) {
    marker.getTitle();
}

//将该图像标注置于其他图像标注之上
function SetMarkerTop(marker) {
    marker.setTop(true);
}

//开启图像标注拖拽功能
function EnableMarkerDragging(marker) {
    marker.enableDragging();
}

//关闭图像标注拖拽功能
function DisableMarkerDragging(marker) {
    marker.disableDragging()
}

//设置图像标注的zIndex
function SetMarkerZIndex(marker, zIndex) {
    marker.setZIndex(zIndex);
}

//为图像标注添加右键菜单
function AddMarkerContextMenu(marker, menu) {
    marker.addContextMenu(menu);
}

//从图像标注移除右键菜单
function RemoveMarkerContextMenu(marker, menu) {
    marker.removeContextMenu(menu);
}

//设置图像标注动画效果
//BMAP_ANIMATION_DROP:坠落动画
//BMAP_ANIMATION_BOUNCE:跳动动画
function SetMarkerAnimation(marker, animation) {
    marker.setAnimation(animation);
}

//设置图像标注的旋转角度
function SetMarkerRotation(marker, rotation) {
    marker.setRotation(rotation);
}

//获取图像标注的旋转角度
function GetMarkerRotation(marker) {
    marker.getRotation();
}

//设置图像标注阴影图标
function SetMarkerShadow(marker, shadow) {
    marker.setShadow(shadow);
}

//获取图像标注阴影图标
function GetMarkerShadow(marker) {
    return marker.getShadow();
}

//添加图像标注的事件监听函数
//click | event{type, target} | 点击标注图标后会触发此事件
//dblclick | event{type, target, point,pixel} | 双击标注图标后会触发此事件
//mousedown | event{type, target, point,pixel} | 鼠标在标注图上按下触发此事件
//mouseup | event{type, target, point,pixel} | 鼠标在标注图上释放触发此事件
//mouseout | event{type, target, point,pixel} | 鼠标离开标注时触发此事件
//mouseover | event{type, target, point,pixel} | 当鼠标进入标注图标区域时会触发此事件
//remove | event{type, target} | 移除标注时触发
//infowindowclose | event{type, target} | 信息窗在此标注上关闭时触发此事件
//infowindowopen | event{type, target} | 信息窗在此标注上打开时触发此事件
//dragstart | event{type, target} | 开始拖拽标注时触发此事件
//dragging | event{type, target, pixel, point} | 拖拽标注过程中触发此事件
//dragend | event{type, target, pixel, point} | 拖拽结束时触发此事件
//rightclick | event{type, target} | 右键点击标注时触发此事件
function AddMarkerEventListener(marker, event, handler) {
    marker.addEventListener(event, handler);
}

//移除图像标注的事件监听函数
function RemoveMarkerEventListener(marker, event, handler) {
    marker.removeEventListener(event, handler);
}

//创建图标
function CreateIcon(url, size, iconOptions) {
    return new BMap.Icon(url, size, iconOptions);
}

//设置图片资源的地址
function SetIconUrl(icon, url) {
    icon.setImageUrl(url);
}

//设置图标可视区域的大小
function SetIconShowSize(icon, size) {
    icon.setSize(size);
}

//设置图标的大小
function SetIconSize(icon, size) {
    icon.setImageSize(size);
}

//设置图标定位点相对于其左上角的偏移值
function SetIconAnchor(icon, anchor) {
    icon.setAnchor(anchor);
}

//设置图片相对于可视区域的偏移值
function SetIconOffset(icon, offset) {
    icon.setImageOffset(offset);
}

//设置信息窗口开启位置相对于图标左上角的偏移值
function SetIconInfoAnchor(icon, anchor) {
    icon.setInfoWindowAnchor(anchor);
}

//设置icon的打印图片
function SetIconPrintImageUrl(icon, url) {
    icon.setPrintImageUrl(url);
}

//创建信息窗
function CreateInfo(content, infoOptions) {
    return new BMap.InfoWindow(content, infoWindosOptions);
}

//设置信息窗口的宽度，单位像素。取值范围：220 - 730
function SetInfoWidth(info, width) {
    info.setWidth(width);
}

//设置信息窗口的高度，单位像素。取值范围：60 - 650
function SetInfoHeight(info, height) {
    info.setHeight(height);
}

//重绘信息窗口，当信息窗口内容发生变化时进行调用
function RedrawInfo(info) {
    info.redraw();
}

//设置信息窗口标题
function SetInfoTitle(info, title) {
    info.setTitle(title);
}

//获取信息窗口标题
function GetInfoTitle(info) {
    return info.getTitle();
}

//设置信息窗口内容
function SetInfoContent(info, content) {
    info.setContent(content);
}

//获取信息窗口内容
function GetInfoContent(info) {
    return info.getContent();
}

//获取信息窗口的位置
function GetInfoPosition(info) {
    return info.GetPosition();
}

//启用信息窗口最大化功能
function EnableInfoMaximize(info) {
    info.enableInfoMaximize();
}

//禁用信息窗口最大化功能
function DisableInfoMaximize(info) {
    info.disableInfoMaximize();
}

//获取信息窗口的打开状态
function IsInfoOpen(info) {
    return info.isOpen();
}

//信息窗口最大化时所显示内容
function SetInfoMaxContent(info, content) {
    info.setMaxContent(content);
}

//最大化信息窗口
function MaximizeInfo(info) {
    info.maximize();
}

//还原信息窗口
function RestoreInfo(info) {
    info.restore();
}

//开启打开信息窗口时地图自动平移
function EnableInfoAutoPan(info) {
    info.enableAutoPan();
}

//关闭打开信息窗口时地图自动平移
function DisableInfoAutoPan(info) {
    info.disableAutoPan();
}

//开启点击地图时关闭信息窗口
function EnableInfoCloseOnClick(info) {
    info.enableCloseOnClick();
}

//关闭点击地图时关闭信息窗口
function DisableInfoCloseOnClick(info) {
    info.disableCloseOnClick();
}

//添加信息窗口的事件监听函数
//close | event{type, target, point } | 信息窗口被关闭时触发此事件
//open | event{type, target, point } | 信息窗口被打开时触发此事件
//maximize | event{type, target } | 信息窗口最大化后触发此事件
//restore | event{type, target } | 信息窗口还原时触发此事件
//clickclose | event{type, target } | 点击信息窗口的关闭按钮时触发此事件
function AddInfoEventListener(info, event, handler) {
    info.addEventListener(event, handler);
}

//移除信息窗口的事件监听函数
function RemoveInfoEventListener(info, event, handler) {
    info.removeEventListener(event, handler);
}

//创建文本标注
function CreateLabel(content, labelOptions) {
    return new BMap.Label(content, labelOptions);
}

//设置文本标注样式
function SetLabelStyle(label, style) {
    label.setStyle(style);
}

//设置文本标注的内容
function SetLabelContent(label, content) {
    label.setContent(content);
}

//设置文本标注坐标
function SetLabelPosition(label, position) {
    label.setPosition(position);
}

//获取文本标注的坐标
function GetLabelPosition(label) {
    return label.getPosition();
}

//设置文本标注的偏移值
function SetLabelOffset(label, offset) {
    label.setOffset(offset);
}

//获取文本标注的偏移值
function GetLabelOffset(label) {
    label.getOffset();
}

//设置文本标注的标题
function SetLabelTitle(label, title) {
    label.setTitle(title);
}

//获取文本标注的标题
function GetLabelTitle(label) {
    label.getTitle();
}

//设置文本标注的zIndex
function SetLabelZIndex(label, zIndex) {
    label.setZIndex(zIndex);
}
//添加文本标注的事件监听函数
//click | event{type, target } | 点击文本标注后会触发此事件
//dblclick | event{type, target } | 双击文本标注后会触发此事件
//mousedown | event{type, target } | 鼠标在文本标注上按下触发此事件
//mouseup | event{type, target } | 鼠标在文本标注释放触发此事件
//mouseout | event{type, target } | 鼠标离开文本标注时触发此事件
//mouseover | event{type, target } | 当鼠标进入文本标注区域时会触发此事件
//remove | event{type, target } | 移除文本标注时触发
//rightclick | event{type, target } | 右键点击标注时触发此事件
function AddLabelEventListener(label, event, handler) {
    label.addEventListener(event, handler);
}

//移除文本标注的事件监听函数
function RemoveLabelEventListener(label, event, handler) {
    label.removeEventListener(event, handler);
}

//创建折线
function CreatePolyline(points, polylineOptions) {
    return new BMap.Polyline(points, polylineOptions);
}

//设置折线的点数组
function SetPolylinePath(polyline, path) {
    polyline.setPath(path);
}

//获取折线的点数组
function GetPolylinePath(polyline) {
    return polyline.getPath();
}

//设置折线的颜色
function SetPolylineColor(polyline, color) {
    polyline.setStrokeColor(color);
}

//获取折线的颜色
function GetPolylineColor(polyline) {
    return polyline.getStokeColor();
}

//设置折线的透明度，取值范围0 - 1
function SetPolylineOpacity(polyline, opacity) {
    polyline.setStrokeOpacity(opacity);
}

//获取折线的透明度
function GetPolylineOpacity(polyline) {
    return polyline.getStrokeOpacity();
}

//设置折线的宽度，范围为大于等于1的整数
function SetPolylineWeight(polyline, weight) {
    polyline.setStrokeWeight(weight);
}

//获取折线的宽度
function GetPolylineWeight(polyline) {
    return polyline.getStrokeWeight();
}

//设置折线样式为实线或虚线，solid或dashed
function SetPolylineStyle(polyline, style) {
    polyline.setStrokeStyle(style);
}

//获取当前折线样式，实线或者虚线
function GetPolylineStyle(polyline) {
    return polyline.getStrokeStyle();
}

//获取折线的地理区域范围
function GetPolylineBounds(polyline) {
    return polyline.getBounds();
}

//开启折线编辑功能
function EnablePolylineEditing(polyline) {
    polyline.enableEditing();
}

//关闭折线编辑功能
function DisablePolylineEditing(polyline) {
    polyline.disableEditing();
}

//修改指定位置的坐标。索引index从0开始计数。
function SetPolylinePositionAt(polyline, index, point) {
    polyline.setPositionAt(index, point);
}

//添加折线的事件监听函数
//click | event{type, target, point, pixel } | 点击折线后会触发此事件
//dblclick | event{type, target, point, pixel } | 双击折线后会触发此事件
//mousedown | event{type, target, point, pixel } | 鼠标在折线上按下触发此事件
//mouseup | event{type, target, point, pixel } | 鼠标在折线释放触发此事件
//mouseout | event{type, target, point, pixel } | 鼠标离开折线时触发此事件
//mouseover | event{type, target, point, pixel } | 当鼠标进入折线区域时会触发此事件
//remove | event{type, target } | 移除折线时触发
//lineupdate | event{type, target } | 覆盖物的属性发生变化时触发
function AddPolylineEventListener(polyline, event, handler) {
    polyline.addEventListener(event, handler);
}

//移除折线的事件监听函数
function RemovePolylineEventListener(polyline, event, handler) {
    polyline.removeEventListener(event, handler);
}

//创建多边形
function CreatePolygon(points, polygonOptions) {
    return new BMap.Polygon(points, polygonOptions);
}

//设置多边形的点数组
function SetPolygonPath(polygon, path) {
    polygon.setPath(path);
}

//获取多边形的点数组
function GetPolygonPath(polygon) {
    return polygon.getPath();
}

//设置多边形的边线颜色
function SetPolygonColor(polygon, color) {
    polygon.setStrokeColor(color);
}

//获取多边形的边线颜色
function GetPolygonColor(polygon) {
    return polygon.getStokeColor();
}

//设置多边形的填充颜色
function SetPolygonFillColor(polygon, color) {
    polygon.setFillColor(color);
}

//获取多边形的填充颜色
function GetPolygonFillColor(polygon) {
    return polygon.getFillColor();
}

//设置多边形的边线透明度，取值范围0 - 1
function SetPolygonOpacity(polygon, opacity) {
    polygon.setStrokeOpacity(opacity);
}

//获取多边形的边线透明度
function GetPolygonOpacity(polygon) {
    return polygon.getStrokeOpacity();
}

//设置多边形的填充透明度，取值范围0 - 1
function SetPolygonFillOpacity(polygon, opacity) {
    polygon.setFillOpacity(opacity);
}

//获取多边形的填充透明度
function GetPolygonFillOpacity(polygon) {
    return polygon.getFillOpacity();
}

//设置多边形的宽度，范围为大于等于1的整数
function SetPolygonWeight(polygon, weight) {
    polygon.setStrokeWeight(weight);
}

//获取多边形的宽度
function GetPolygonWeight(polygon) {
    return polygon.getStrokeWeight();
}

//设置多边形边线样式为实线或虚线，solid或dashed
function SetPolygonStyle(polygon, style) {
    polygon.setStrokeStyle(style);
}

//获取当前多边形边线样式，实线或者虚线
function GetPolygonStyle(polygon) {
    return polygon.getStrokeStyle();
}

//获取多边形的地理区域范围
function GetPolygonBounds(polygon) {
    return polyline.getBounds();
}

//开启多边形编辑功能
function EnablePolygonEditing(polygon) {
    polygon.enableEditing();
}

//关闭折线编辑功能
function DisablePolygonEditing(polygon) {
    polygon.disableEditing();
}

//修改指定位置的坐标。索引index从0开始计数。
function SetPolygonPositionAt(polygon, index, point) {
    polygon.setPositionAt(index, point);
}

//添加多边形的事件监听函数
//click | event{type, target, point, pixel } | 点击多边形后会触发此事件
//dblclick | event{type, target, point, pixel } | 双击多边形后会触发此事件
//mousedown | event{type, target, point, pixel } | 鼠标在多边形上按下触发此事件
//mouseup | event{type, target, point, pixel } | 鼠标在多边形释放触发此事件
//mouseout | event{type, target, point, pixel } | 鼠标离开多边形时触发此事件
//mouseover | event{type, target, point, pixel } | 当鼠标进入多边形区域时会触发此事件
//remove | event{type, target } | 移除多边形时触发
//lineupdate | event{type, target } | 覆盖物的属性发生变化时触发
function AddPolygonEventListener(polygon, event, handler) {
    polygon.addEventListener(event, handler);
}

//移除多边形的事件监听函数
function RemovePolygonEventListener(polygon, event, handler) {
    polygon.removeEventListener(event, handler);
}

//创建圆
function CreateCircle(center, radius, circleOptions) {
    return new BMap.Circle(center, radius, circleOptions);
}

//设置圆的中心点
function SetCircleCenter(circle, center) {
    circle.setCenter(center);
}

//获取圆的中心点
function GetCircleCenter(circle) {
    return circle.getCenter();
}

//设置圆的半径，单位为米
function SetCircleRadius(circle, radius) {
    circle.setRadius(radius);
}

//获取圆的半径，单位为米
function GetCircleRadius(circle) {
    return circle.getRadius(radius);
}

//获取圆的地理区域范围
function GetCircleBounds(circle) {
    return circle.getBounds();
}

/*********************************************************   服务类   ******************************************************/
//创建驾车路线规划方案
function CreateDrivingRoute(map, drivingRouteOptions) {
    return new BMap.DrivingRoute(map, drivingRouteOptions);
}

//发起驾车路线规划方案检索
function SearchDrivingRoute(drivingRoute, startPoint, endPoint, searchOptions) {
    drivingRoute.search(startPoint, endPoint, searchOptions);
}

//获取最近一次驾车路线规划方案检索的结果
function GetDrivingRouteResults(drivingRoute) {
    return drivingRoute.getResults();
}
//获取驾车路线规划方案个数
function GetDrivingRouteResultPlanNumber(drivingRouteResult) {
    return drivingRouteResult.getNumPlans()
}

//获取索引指定的驾车路线规划方案。索引0表示第一条方案
function GetDrivingRouteResultPlan(drivingRouteResult, number) {
    return drivingRouteResult.getPlan(number);
}
//获取驾车路线规划方案中线路个数
function GetPlanRouteNumber(routePlan) {
    return routePlan.getNumRoutes()
}

//获取驾车路线规划方案中索引指定的线路。索引0表示第一条线路
function GetPlanRoute(routePlan, number) {
    return routePlan.getRoute(number);
}

//获取路线的地理坐标点数组
function GetRoutePath(route) {
    return route.getPath();
}