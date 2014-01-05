/**
 * 负责
 * 1、初始化地图
 * 2、监听、调度地图事件
 * 3、地图各种功能的动态加载和移除
 * 4、地图各种状态的切换和管理
 * @return {[type]} [description]
 */
define(["../../utils/pubsub"], function(evt) {
	/*
	监听事件：MainViewReady
	 */
	//初始化地图
	var CONST = {
		MAPKEY: "AIzaSyDpZUiolfVhxvywoPgBcZO4nUSaff7JysM"
	},
		Event = evt.getInstance(),
		map = "";

	function init() {
		mapManager.initEvents();
		loadScript();
	}

	function loadScript() {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "http://maps.googleapis.com/maps/api/js?key=" + CONST.MAPKEY + "&sensor=true&callback=MapScriptReady";
		document.body.appendChild(script);
	}
	var dataSource = {

	},
		mapManager = {
			panelReady: false,
			mapScriptReady: false,
			initMap: function() {
				var mapOptions = {
					zoom: 8,
					center: new google.maps.LatLng(-34.397, 150.644),
					mapTypeId: google.maps.MapTypeId.ROADMAP
				}
				var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
			},
			initEvents: function() {
				Event.listen("MainViewReady", {
					fn: this.onMapPanelReady,
					scope: this
				});
				Event.listen("MapScriptReady", {
					fn: this.onMapScriptReady,
					scope: this
				});
			},
			onMapPanelReady: function() {
				this.panelReady = true;
				this.panelReady && this.mapScriptReady ? this.initMap() : "";
			},
			onMapScriptReady: function() {
				this.mapScriptReady = true;
				this.panelReady && this.mapScriptReady ? this.initMap() : "";
			}
		}

	return {
		init: init
	}
})