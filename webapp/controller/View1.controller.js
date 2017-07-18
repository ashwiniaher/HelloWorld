sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	
	return Controller.extend("TestGit.controller.View1", {
	Cssdemo:function(){
		//sap.ui.getCore().getModel("controllers").getData().app.getRouter().navTo("Cssdemo");
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);	
		oRouter.navTo("Cssdemo");
	},
	JSdemo:function(){
		//sap.ui.getCore().getModel("controllers").getData().app.getRouter().navTo("JSdemo");
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);	
		oRouter.navTo("JSdemo");
	},
	Searchdemo:function(){
		//sap.ui.getCore().getModel("controllers").getData().app.getRouter().navTo("JSdemo");
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);	
		oRouter.navTo("Searchdemo");
	}
	});
});