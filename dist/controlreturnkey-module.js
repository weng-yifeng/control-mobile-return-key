/*
* author: wengyifeng（翁艺逢）
* email: wengyifeng.HL@gmail.com 
*/

// 回调封装
let callbackPack = null;

/*
* 0 - 默认事件
* 1 - 自定义事件
*/
let status = 0;


let controlReturnKey = {

	// 事件处理
	_event: function () {
		window.addEventListener('popstate', callbackPack);
	},

	// 还原默认事件（即原生的默认行为）
	defaultEvent: function () {

		if (status === 1) {
			status = 0;
			window.removeEventListener('popstate', callbackPack);
			window.history.back();
		}
	},

	// 自定义事件
	customEvent: function (callback) {

		// 先解绑
		window.removeEventListener('popstate', callbackPack);

		status = 1;
		callbackPack = function () {
			callback();
			status = 0;
		};
		window.history.pushState('currentPage', null, location.href);
		controlReturnKey._event();
	}
}

module.exports = controlReturnKey;


