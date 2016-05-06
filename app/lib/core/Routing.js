(function(){
	'use strict'
	var app,
	middleware = require('../middlewares');
	module.exports = Routing;

	var routing = function(app){
		//if app already used outside we can use it
		app = app || require('express')();
	}
	
	Routing.prototype.before = function (middleware){

	}
	Routing.prototype.after = function (middleware){

	}

	Routing.prototype.resource = function(){
		
	}
	// Routing.prototype.get = function(path, ctrl_action){
	// 	app.get(path, );

	// 	return this;
	// }

	// Routing.prototype.post = function(path, ctrl_action){

	// }

	// Routing.prototype.put = function(path, ctrl_action){

	// }

	// Routing.prototype.delete = function(path, ctrl_action){

	// }

})();