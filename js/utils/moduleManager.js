/*
模块管理器，负责模块的加载，初始化，模块切换
 */
define(["./packageLoader", "./jqueryHistory"], function(Loader, history) {

	//初始化各个模块，默认模块直接加载，非默认模块延迟加载
	//不同模块的管理，只做显隐不做销毁
	//不同模块间的启用停用
	var loader = new Loader();
	loader.load({
		allLoadedCallback: function() {
			var args = Array.prototype.slice.call(arguments, 0);
			console.dir(args)
		},
		scope: {},
		extraData: {
			extra1: 1,
			extra2: 2,
			extra3: 3
		},
		resources: [{
			urls: ["../modules/bianpo/testfile1", "../modules/bianpo/testfile2"], //符合requirejs的参数，TODO:此处的依赖路径要填写packageLoader即utils文件夹的位置，应该支持成当前调用文件所在的文件夹的相对路径
			callback: function() {

				var a = arguments;
			}, //当前资源组加载完成后的回调函数
			scope: null || window, //回调函数的作用域
			extraData: '"../modules/bianpo/testfile1", "../modules/bianpo/testfile2"' //任意回调函数需要的额外的参数
		}, {
			urls: ["../modules/bianpo/testfile1"],
			callback: function() {

				var c = arguments;
			},
			scope: null || window,
			extraData: null
		}]
	});
});