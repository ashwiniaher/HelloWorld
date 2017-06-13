sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	// Model Data (local) 
	 var tableData = [{sr: "1", fname: "",   lname: "", empid: "", city:""}];
	 
	return Controller.extend("TestGit.controller.EmpRecd", {
		onInit: function(){
			//Create a model and bind the table rows to this model  
            var oModel = new sap.ui.model.json.JSONModel(); // created a JSON model        
            oModel.setData({ // Set the data to the model using the JSON object defined already  
                modelData: tableData  
            });  
            this.getView().setModel(oModel);
		},
		addRow : function(){
            var table = sap.ui.getCore().byId(this.createId("EmpRcdTable"));     
			var data = this.getView().getModel().getProperty("/modelData");
			data.push({sr: this.getRowCount(table)+1, fname: "",   lname: "", empid: "", city:""});
			this.getView().getModel().setProperty("/modelData",data);
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
		}
		
	});
});