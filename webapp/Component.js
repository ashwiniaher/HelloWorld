sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"TestGit/model/models",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, Device, models, JSONModel) {
	"use strict";

	return UIComponent.extend("TestGit.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			// create the views based on the url/hash
            this.getRouter().initialize();
            
            // set data model
			var oData = {
				recipient : {
					name : "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
			
		/*	var mConfig = this.getMetadata().getManifestEntry("sap.app");
			var sServiceUrl = mConfig.dataSources.Northwind.uri;//this.getMetadata().getManifestEntry("sap.app").dataSources.Northwind.uri
			
			//Create and set domain model to the component
			var oDataModel = new sap.ui.model.odata.ODataModel(sServiceUrl, {
				json : true,
				loadMatadataAsync : true
			});
			oDataModel.attachMetadataFailed(function() {
				this.getEventBus().publish("Component","MetadataFailed");
			},this);
			this.setModel(oDataModel);*/
		}
	});
});