/*
* author: wengyifeng
* email: wengyifeng.HL@gmail.com 
*/


function ControlReturnKey() {
	
	/*
	* 0 - 默认事件
	* 1 - 自定义事件
	*/
	this.status = 0;

	// 回调包装
	this.callbackPack = null;
}

ControlReturnKey.prototype = {

	constructor: ControlReturnKey,

	// 事件处理
	_event: function () {
		window.addEventListener('popstate', this.callbackPack);
	},


	// 还原默认事件（即原生的默认行为）
	defaultEvent: function () {

		if (this.status === 1) {
			this.status = 0;
			window.removeEventListener('popstate', this.callbackPack);
			window.history.back();
		}
	},

	// 自定义事件
	customEvent: function (callback) {

		// 先解绑
		window.removeEventListener('popstate', this.callbackPack);

		this.status = 1;
		var that = this;
		this.callbackPack = function () {
			callback();
			that.status = 0;
		};
		window.history.pushState('currentPage', null, location.href);
		this._event();
	}

}

