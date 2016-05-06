/**
*	Load all the language files on specified type
*/
(function(){
	module.exports = Lang;

	/**
	*	@param type = language type(folder to be search)
	*/
	function Lang(app){

		var lang_path = app.path.lang,
		type = app.config.app.language,
		directory = lang_path.concat(type,'/');
		
		//load all language in specified type
		return app.fs.fetchAll(directory);
	}
})();