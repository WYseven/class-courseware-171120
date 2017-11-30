key值
使用v-for的时候，要加上key值，来表明这个循环的元素是唯一的。

生命周期：
	是一个组件在挂载，更新，销毁这么一个过程


生命周期函数：
	在每一个阶段，会提供不同的函数，内部会自动的调用函数

	mounted 就是组件挂载完成之后触发的函数 也就是说组件的元素已经存在文档中了，能足够做什么事情呢？可以获取页面中的元素了。

动态路径
	每一次不同的路径访问的时候，都会渲染不同的组件，组件都会重新挂载一次。但是使用了动态路径，这些路径都用的是同一个组件，路径发生变化，组件不会重新渲染了。

	当使用了动态路径，这个路径渲染的同一个组件内部，怎么知道路径发生变了呢？

	可以通过监控路由信息对象，来感知路径的变化。

导航钩子函数
	导航发生变化（进入和离开）做一些控制

	写的位置：
		1. 写在vueRouter的实例上
			// 任何一个访问的路径，都会执行这个钩子函数
			vueRouter.beforeEach((to,from,next) => {
				to:  即将要进入的目标 路由对象
				from: 当前导航正要离开的路由
			})

		2. 写在配置路由信息上
			{
				...
				beforeEnter (to,from,next){
					next()
				}
			}
		3. 写在组件中
			{
				beforeRouteEnter (to, from, next) {
				   // 在渲染该组件的对应路由被 confirm 前调用
				   // 不！能！获取组件实例 `this`
				   // 因为当守卫执行前，组件实例还没被创建
				 },
				 beforeRouteUpdate (to, from, next) {
				   // 在当前路由改变，但是该组件被复用时调用
				   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
				   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
				   // 可以访问组件实例 `this`
				 },
				 beforeRouteLeave (to, from, next) {
				   // 导航离开该组件的对应路由时调用
				   // 可以访问组件实例 `this`
				 }
			}


鉴权  
	放在beforeEach中做，配合meta字段

页面之间传递数据
	queryString的方式 ?

	http://localhost:8080/login?r=abc

懒（按需）加载
	结合 Vue 的异步组件和 Webpack 的代码分割功能，轻松实现路由组件的懒加载。

	按组分割没成功？？？？？？


上线，配置apache

	服务器的根路径是：/www
	上线的项目mock : /www/mock/
		mock文件件下有项目文件
			/static
				/css
				/js
			index.html

	在使用npm run build打包的时候，修改两个地方
		1. index.html引用css和js的路径
			修改过程：
				/config/index.js文件中
					build
						assetsPublicPath: "/mock/"
		2. 修改路由访问的根路径
				/router
					index.js文件中
						配置项中写上：
							 base:'/mock'

	在访问项目，刷新之后出现404
		1. 打开apache的配置 httpd.conf
			打开模块
				LoadModule rewrite_module modules/mod_rewrite.so
		2. 根路径/www目录下创建文件
			.htaccess文件
				<IfModule mod_rewrite.c>
				  RewriteEngine On
				  RewriteBase /
				  RewriteRule ^index\.html$ - [L]
				  RewriteCond %{REQUEST_FILENAME} !-f
				  RewriteCond %{REQUEST_FILENAME} !-d
				  RewriteRule . /mock/index.html [L]
				</IfModule>
