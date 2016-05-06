/**
*	Library that handle all about files
*/
var fs = require('fs');
(function(){
	'use strict'
	module.exports = {
		/**
		*	@param {string} path - path to be read
		*	@param {object} data - retreive files will be stored here
		*	@param {bool} dig_dir - to dig all child directories
		*/
		fetchAll : function(path, data, dig_dir){
			var data = data || {}; // if not declared redeclare
			var fileNames = fs.readdirSync(path);
			var self = this;
			fileNames.forEach(function(file,key){
				// check if directory
				var dir_path = path.concat(file, '/');
				if(dig_dir && fs.statSync(dir_path).isDirectory())
				{
					// dig through directories to load
					data[file] = {};
					data[file] = self.fetchAll(dir_path, data[file], dig_dir) 
					return data;// continue
				}

				// if file
				file = removeJsExt(file);
				var base_dir = '';
				var logger = require('./Logger'),
				log = new logger(fs,'./app/storage/logs/');
				log.info('eyayt - - - - - - -- ');
				log.info(require.main.filename);
				base_dir = base_dir.concat(path, file);
				data[file] = require(base_dir);
			});

			return data;
		}
	}

	function removeJsExt(file){
		var ext = file.slice('-3');
		file = file.replace(ext, '');
		return file;
	}
})();