/**
*	Load all the language files on specified type
*/
(function(){
	module.exports = Lang;

	/**
	*	@param type = language type(folder to be search)
	*/
	function Lang(fs, type, path, log, q){
		var directory = path.dir + type,
		data = {};
		var deferred = q.defer();
		//load all language in specified type
		fs.readdir(directory, function(err, fileNames){
			if(err){
				console.log('Failed reading directory on line 16 app/libraries/Lang.js');
				log.error(err);
				deferred.reject(err);
			}
			fileNames.forEach(function(file, fileKey){
				var ext = file.slice('-3'), // remove .js extension
				file = file.replace(ext, '');
				reqPath = path.req_dir + 'en/' + file;
				data[file] = require(reqPath);
			});
			deferred.resolve(data);
		});

		return deferred.promise;
	}
})();