sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel"
], function(Controller, Filter, FilterOperator, JSONModel) {
	"use strict";
	
	return Controller.extend("TestGit.controller.Searchdemo", {
		onInit: function(){
			// set Items model on this sample
			var oModel = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("TestGit.mockdata", "/Items.json"));
			this.getView().setModel(oModel);
			
		},
		onSearchNo: function(oEvent){
			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("no", FilterOperator.StartsWith, sQuery));
			}
			// filter binding
			var oList = this.getView().byId("itemsList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
			
		},
		onAdvancedSearch: function(oEvent){
			var itemname = sap.ui.getCore().byId(this.createId("itemname")).getValue();
			var parent = sap.ui.getCore().byId(this.createId("parent")).getValue();
			var createDate = sap.ui.getCore().byId(this.createId("createdate")).getValue();
			//var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({pattern : "YYYY/MM/DD" });   
			//var dateFormatted = dateFormat.format(createDate);
			// build filter array
			var aFilter = [];
			//var sQuery = oEvent.getParameter("query");
			if (itemname) {
				aFilter.push(new Filter("name", FilterOperator.Contains, itemname));
			}
			if (parent) {
				aFilter.push(new Filter("parent", FilterOperator.Contains, parent));
			}
			if (createDate) {
				aFilter.push(new Filter("created", FilterOperator.EQ, createDate));
			}
			// filter binding
			var oList = this.getView().byId("itemsList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}
	});
});