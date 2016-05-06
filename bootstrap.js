/**
*	Load all files specified in path
*/
var file = require('./app/lib/core/File');
(function(){
	'use strict'
	module.exports = bootstrap;
	function bootstrap(app_path){
		console.log('file');
		console.log(file);
		var data = {};
		for(var key in app_path){
			console.log('Initializing', key);
			data[key] = {};
			data[key] = file.fetchAll(app_path[key], data[key], true);
		};
		return data;
	}

})();