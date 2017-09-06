# 小功能组件：用 JS 控制 Android 或 IOS 的物理返回键

## 作用

+ 触击返回键时，不返回，而仅执行自定义事件。
+ 从自定义状态切换为默认行为状态（默认原始行为）。

## 场景

在做移动端Web开发（俗称 H5 ）时，有时候需要控制手机的物理返回键，举个例子，做微信H5开发的网页，用户有时候会误触返回键而退出网页到微信中，而这个页面的入口却是隐藏得很深的，不仅用户体验不好还造成了用户的流失。

使用举例：点击菜单按钮，弹出一个菜单栏，此时想关闭菜单，用户点击的不是菜单的关闭按钮，而是按了手机的物理返回键。本组件的 customEvent 方法可屏蔽默认的返回行为，并在回调里面实现对菜单栏做关闭处理。此时，用户看到的不是离开这个页面，而是关闭了菜单栏。执行完 customEvent 方法后，我们可以执行 defaultEvent 方法来还原默认行为。这时若用户点了返回键，将以默认行为的方式返回上一层页面（或退出页面）。

## 使用方法

### ES5

如果你的项目代码仅支持 ES5，那么请使用 dist/controlreturnkey.js 这个 js 文件。

#### 用法

第一步：引入 controlreturnkey.js 文件

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
  	<!-- 引入 controlreturnkey.js 文件，需先引入 -->
  	<script type="text/javascript" src="dist/controlreturnkey.js"></script>
  	<!-- 你自己的 js 代码 -->
  	<script type="text/javascript" src="demo.js"></script>
</body>
</html>
```

第二步：在自己的 js 代码中使用

```javascript
// 创建实例
var control_return_key = new ControlReturnKey();

// 自定义事件，点击返回键时触发
control_return_key.customEvent(function () {
    // do something
});

// 还原默认行为，需还原时调用
control_return_key.defaultEvent();
```

如需查看完整 Demo 代码，已提供 demo 文件，请自行下载调试。

### ES6

（待补充）













