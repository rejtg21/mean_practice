/**
*	Model Library
*/
var path = require('path'),
base_path = path.dirname(require.main.filename),
app_path = require(base_path.concat('/paths')),
db_config = require(app_path.auto_load.config.concat('database')),
driver = require(app_path.db_driver.concat('DriverLocator'));
(function(){
	'use strict'
	module.exports = Models;

	function Models(instance, conn){

		if(!conn)
			conn = db_config.default;

		var connection = driver(conn, db_config);

		
		// inherit the functions in instance
		instance = new instance; 
		instance.insert = function(){

		}

		instance.get = function(){

		}

		instance.lists = function(){

		}
		return instance;
	}
})();