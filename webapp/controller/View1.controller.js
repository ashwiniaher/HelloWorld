sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("TestGit.controller.View1", {
	Cssdemo:function(){
		sap.ui.getCore().getModel("controllers").getData().app.getRouter().navTo("Cssdemo");
	},
	JSdemo:function(){
		sap.ui.getCore().getModel("controllers").getData().app.getRouter().navTo("JSdemo");
	}
	});
});