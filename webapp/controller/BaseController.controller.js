sap.ui.define([
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel"
], function (Controller, History, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.demo.nav.controller.BaseController", {
		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		getModel : function(){
			var oModel = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("TestGit.mockdata", "/Items.json"));
			this.getView().setModel(oModel);
		},
		onNavBack: function (oEvent) {
			var oHistory, sPreviousHash;
 
			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();
 
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("appHome", {}, true /*no history*/);
			}
		}
	});
});