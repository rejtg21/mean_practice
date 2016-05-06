(function(){
	module.exports = {
		/**
		*	Log Configuration
		*/
		log : {
			/**
			* Log level - by default is set to one
			* 0 = Turn off all the logs
			* 1 = General logs from info to error will be log
			* 2 = Warning to error will be log
			* 3 = Error only will be log for production
			*/
			level : 1,
			/**
			*	Specifiy how it will be log.
			*	Available Settings: "single", "daily"
			*/
			type : 'single'
		},
		/**
		* Language folder to be use default is en
		* for us to easily to switch from languages
		*/
		language : 'en',
		/**
		* Specify the default timezone for your app.
		*/
		timezone : 'UTC',
		/**
		* Specify your secret key on your session
		*/
		sess_key : 'secret_key',
		
		
	};
})();