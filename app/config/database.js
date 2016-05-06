(function(){
	module.exports = {
		/**
		*	Specify here the default connection name
		*	that will be used by the app.
		*/
		'default' : 'mongodb',
		/**
		*	List of connections
		*	Specify here the connection configuration
		*	of specified driver
		*/
		'connections' : {
			'mongodb' : {
				driver : 'mongodb',
				host : 'localhost',
				port : 27017,
				database : 'messenger',
				username : '',
			    password : '',
			    options : {
			        // 'db' : 'admin' // sets the authentication database required by mongo 3
			    }
			},
			// add here another connections e.g(mysql, sqlsrv, mongodb2)
		}
	}
})();