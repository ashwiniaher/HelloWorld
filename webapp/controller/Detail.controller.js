sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
	], function (Controller, JSONModel) {
		"use strict";
		
	return Controller.extend("TestGit.controller.Detail", {
		
		onInit: function () {
			var oRouter =  sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachMatched(this._onObjectMatched, this);
		},
 
		_onObjectMatched: function (oEvent) {
			var oView = this.getView();
			var path = "/items" + "/" + oEvent.getParameter("arguments").id;
			oView.bindElement({
				path: path ,
				events : {
					/*change: this._onBindingChange.bind(this),
					dataRequested: function () {
						oView.setBusy(true);
					},
					dataReceived: function () {
						oView.setBusy(false);
					}*/
				}
			});
		},
		_onBindingChange: function(oEvent) {
			// No data for the binding
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("notFound");
			}
		}
	});
});