sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, ResourceModel, Filter, FilterOperator) {
	"use strict";
	var i18nModel;
	return Controller.extend("TestGit.controller.Searchdemo", {
		onInit: function(){
			// set i18n model on view
			i18nModel = new ResourceModel({
			bundleName: "TestGit.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");
			
		},
		onSearchNo: function(oEvent){
			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("no", FilterOperator.Contains, sQuery));
			}
			// filter binding
			var oList = this.getView().byId("itemsList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
			
		}
	});
});