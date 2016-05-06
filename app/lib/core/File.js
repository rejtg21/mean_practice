/**
*	Library that handle all about files
*/
// overwrite fs and added fetch all property
var fs = require('fs');
(function(){
	'use strict'
	module.exports = File;

	function File() {
		// console.log(fs);
		/**
		*	@param {string} path - path to be read
		*	@param {object} data - retreive files will be stored here
		*	@param {bool} dig_dir - to dig all child directories
		*/
		fs.fetchAll = function(path, dig_dir, data){
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
				base_dir = base_dir.concat(path, file);
				data[file] = require(base_dir);
			});

			return data;
		}

		return fs;
	}

	function removeJsExt(file){
		var ext = file.slice('-3');
		file = file.replace(ext, '');
		return file;
	}
})();