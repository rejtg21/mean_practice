var model = require('./Model');
(function(){
	'use strict'
	module.exports = model(Message);

	function Message() {
		// inherit
		this.test = function(){
			return 'trying';
		}
	}
})();