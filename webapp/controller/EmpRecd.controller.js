sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	// Model Data (local) 
	 var tableData = [{Sr: "1", fname: "",   lname: "", empid: "", city:""}];
	 
	return Controller.extend("TestGit.controller.EmpRecd", {
		 
		updateData : function(){
			tableData.push({Sr: "1", fname: "",   lname: "", empid: "", city:""});
		},
		addRow : function(){
			//Create a model and bind the table rows to this model  
            var oModel = new sap.ui.model.json.JSONModel(); // created a JSON model        
            oModel.setData({ // Set the data to the model using the JSON object defined already  
                modelData: tableData  
            });  
            this.getView().setModel(oModel);
            var table = sap.ui.getCore().byId(this.createId("EmpRcdTable"));     
            
            var listItems = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text:this.getRowCount(table)+1
					}),
					new sap.m.Input({
						value: "{Fname}"
					}), new sap.m.Input({
						value: "{Lname}"
					}), new sap.m.Input({
						value: "{EmpId}"
					}), new sap.m.Input({
						value: "{City}"
					})
				]
			});
            table.bindItems("/modelData",listItems);
            this.updateData();
		},
		getRowCount: function(table){
			//get binding path of table items
			var bindingPath = table.getBinding("items").sPath;
			//get data model of table
			var model = table.getModel();
			//get bind data
			var data = model.getProperty(bindingPath);
			//get total rows number
			return data.length;
		},
		onSave : function(oEvent){
			/////////////////
			
			var oTable = sap.ui.getCore().byId(this.createId("EmpRcdTable"));
			
			var oModel = sap.ui.getCore().getModel().getProperty("/EmpRcdData");
			oModel.push({Product: "New Product", Weight: "45"});
	        sap.ui.getCore().getModel().setProperty("/EmpRcdData", oModel);
			/////////////////
			
		}
		
	});
});