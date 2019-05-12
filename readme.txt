项目讲解：
	html页面：
	xie.html首页
	deng.html登录页面
	zhu.html注册页面
	che.html购物车页面
	lie.html商品列表页
	xiang.html商品详情页

	style文件夹：
	public.css为所有公共样式表，去除标签默认属性，还有常见的清除浮动，图片垂直居中等
	xie.css为首页的样式
	deng.css为登录页面样式
	zhu.css为注册页面样式
	lie.css为商品列表页样式
	che.css为购物车的样式
	xiang.css为商品详情页样式
	gogong.css为首页，商品列表，商品详情页的公共样式
	gogong2.css为登录页面和注册页面的公共样式

	js文件夹
	lo.js，jquery.js和bo.js为自己封装首页轮播图的功能。
	zhu.js为表单验证功能
	zhu2.js，deng.js和xie.js为实现登陆注册和退出功能
	ajax.js 封装ajax函数，向后台（php）请求数据
	cookie.js封装cookie函数，包含存储cookie数据,删除cookie数据,和获取cookie数据
	goods.js渲染商品列表，并且点击加入购物车时，将商品数据存储在cookie里面
	che.js 从cookie里面读取数据，并渲染页面
	
	ctrl文件夹
	goods.php 写后台数据，接收到ajax请求以后发送数据到前端，通过JS渲染页面
	接口:localhost/

	images文件夹为本项目所以的图片
	
	sass文件夹:用sass写的css

	本项目中实现的功能：轮播图，表单验证，登录注册，商品列表，购物车 ，sass，