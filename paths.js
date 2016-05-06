var path = require('path'),
base_path = path.dirname(require.main.filename);
(function(){
	'use strict'
	console.log('base path ', base_path);
	module.exports = {
		/** 
		*	all specified in autoload will be bootstraped
		*	dig all directories in specified directories
		*	e.g. controllers/users/.. controller.js
		*/
		auto_load : {
			ctrl : base_path.concat('/app/controllers/'),
			model : base_path.concat('/app/models/'),
			filter : base_path.concat('/app/filters/'),
			config: base_path.concat('/app/config/'),
		},
		// require_directories : {
		// 	controller : '../controllers/'
		// },
		db : base_path.concat('/app/database/'),
		db_driver : base_path.concat('/app/database/drivers/'),
		lang : base_path.concat('/app/lang/'),
		log: base_path.concat('/app/storage/logs/'),
		library : base_path.concat('/app/lib/core/'),
		include : base_path.concat('/app/bootstrap/core/')
	};
})();