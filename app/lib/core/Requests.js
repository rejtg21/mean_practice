/**
* Here you specify the config of a Requests
*/
(function(){
	'use strict'
	var app = require('express')(),
	port = 3000,
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	session = require('express-session');

	module.exports = Requests;

	function Requests(){
		activate();

		function activate(){
			app.use(cookieParser());
			app.use(initSession());
			app.use(global_app_before);
			app.use(express.static(__dirname + "/public"));
			app.use(bodyParser.json());
			app.listen(port, function(){
				console.log('listening in port :', port);
			});

			require('../routes')(app, path);
		}

		function global_app_before(req, res, next)
		{
			console.log('before request');
			if(!req.session.user){
				console.log('no session yet');
			}
			next();
			console.log('after');
		}

		function initSession(){
			return session({
				secret : '$ecur1ty20160502', // subject to change must not be in js or different server
				resave : false,
			 	saveUninitialized:true
			});
		}
	}
})();