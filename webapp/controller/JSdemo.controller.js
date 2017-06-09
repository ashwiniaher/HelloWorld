sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("TestGit.controller.JSdemo", {
		bulbswithch:function(event){
			//alert("Bulb on!!");
			var image = sap.ui.getCore().byId(this.createId("bulb"));
			if(event.getSource().data("mydata") === "on"){
				image.setProperty("src","./resources/images/pic_bulbon.gif");
			}else{
				image.setProperty("src", "./resources/images/pic_bulboff.gif");
			}
		}
		});
});