
var control_return_key = new ControlReturnKey();

document.getElementById('radio_container').addEventListener('click', function (e) {

	if (e.target.value === 'customEvent') {
		
		// 自定义事件
		control_return_key.customEvent(function () {
			alert("I am custom event. 我是自定义事件");
			e.target.checked = false;
		});

	} else if (e.target.value === 'defaultEvent') {
		
		// 还原默认行为
		control_return_key.defaultEvent();
	}

});

//打开微信应用
var appInfo = {
    "pname" : "com.tencent.mm",
    "action" : "weixin:/" + "/"
};
plus.runtime.launchApplication(appInfo, function(ex) {
    mui.alert("请检查本设备是否已安装微信应用！", "打开失败");
});