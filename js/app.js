define(["./modules/mainview/mainView", "./modules/map/mapManager", "./utils/pubsub", "./utils/moduleManager"], function(mainView, mapManager, evt, moduleManager) {
	var Event = evt.getInstance();
	window.MapScriptReady = function() {
		Event.notify("MapScriptReady");
	}
	mapManager.init();
	mainView.init();
});