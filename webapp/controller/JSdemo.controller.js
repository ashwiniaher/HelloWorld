sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("TestGit.controller.JSdemo", {
		on:function(){
		//alert("Bulb on!!");	
		var image = sap.ui.getCore().byId(this.getView().sId+"--bulb");
		image.setProperty("src","./resources/images/pic_bulbon.gif");
		},
		off:function(){
		//alert("Bulb off!!");
		var image = sap.ui.getCore().byId(this.getView().sId+"--bulb");
		image.setProperty("src", "./resources/images/pic_bulboff.gif");
		}
		
	});
});