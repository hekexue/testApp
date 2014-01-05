define(["../../utils/pubsub"], function(evt) {
	/*
	事件
	1、MainViewReady 
	 */
	var rendered = false,
		Event = evt.getInstance();

	function initView() {
		rendered = true;
		Ext.QuickTips.init();
		var viewport = Ext.create('Ext.Viewport', {
			id: 'border-example',
			layout: 'border',
			items: [
				Ext.create('Ext.Component', {
					region: 'north',
					height: 75, // give north and south regions a height
					autoEl: {
						tag: 'div',
						html: '<p>north - generally for menus, toolbars and/or advertisements</p>'
					}
				}), {
					// lazily created panel (xtype:'panel' is default)
					region: 'south',
					split: false,
					height: 45,
					collapsible: false,
					border: false,
					margins: '0 0 0 0'
				}, {
					xtype: 'panel',
					region: 'east',
					title: '查询结果',
					animCollapse: true,
					collapsible: true,
					split: true,
					width: 225, // give east and west regions a width
					minSize: 175,
					maxSize: 400,
					margins: '0 5 0 0',
					layout: "fit",
					items: [{
						xtype: 'locking-grid',
						autoScroll: true,
						//store: 'Companies',
						columnLines: true,
						viewConfig: {
							stripeRows: true
						},
						columns: [{
							width: 40,
							text: "序号",
							xtype: 'rownumberer'
						}, {
							text: '边坡编号',
							locked: true,
							width: 120,
							sortable: false,
							dataIndex: 'bpCode'
						}, {
							text: '起讫桩号',
							lockable: true,
							width: 80,
							sortable: true,
							dataIndex: 'qqzh'
						}, {
							text: '边坡位置',
							hidden: false,
							width: 70,
							sortable: false,
							dataIndex: 'bpLocation'
						}, {
							text: '行政区划',
							width: 90,
							sortable: true,
							dataIndex: 'region'
						}]
					}]
				}, {
					xtype: 'tabpanel',
					region: 'west',
					stateId: 'navigation-panel',
					id: 'west-panel', // see Ext.getCmp() below              
					align: "left",
					split: true,
					width: 200,
					minWidth: 175,
					maxWidth: 400,
					collapsible: true,
					animCollapse: true,
					margins: '0 0 0 5',
					layout: 'fit',
					items: [{
						title: '边坡查询',
						layout: {
							type: 'vbox',
							align: 'stretch'
						},
						items: [{
							xtype: "panel",
							title: '查询输入',
							flex: 1,
							html: '<p>各种查询条件</p>',
							height: 50
						}, {
							xtype: "panel",
							title: '查询子项',
							flex: 3,
							layout: 'accordion',
							items: [{
								title: '边坡高度',
								html: "<div>边坡高度边坡高度边坡高度</div>"
							}, {
								title: '边坡类型',
								html: "<div>边坡类型边坡类型边坡类型</div>"
							}, {
								title: '稳定程度',
								html: "<div>稳定程度稳定程度稳定程度</div>"
							}, {
								title: '风险等级',
								html: "<div>风险等级风险等级风险等级</div>"
							}, {
								title: '病害类型',
								html: "<div>病害类型病害类型病害类型</div>"
							}]
						}],
						iconCls: 'nav' // see the HEAD section for style used

					}, {
						title: '统计分析',
						html: '<p>Some settings in here.</p>',
						iconCls: 'settings'
					}]
				}, {
					region: 'center', // a center region is ALWAYS required for border layout
					deferredRender: false,
					html: '<div id="map_canvas" style="width: 100%; height: 100%"></div>',
					closable: false,
					autoScroll: true
				}
			]
		});
		Event.notify("MainViewReady", "daf", "asdfwr");
	}
	return {
		init: function() {
			!rendered && initView();
		}
	}
})