(function(){
	'use strict'

	angular.module('app')
	.config(configure);

	configure.$inject = [
		'$routeProvider'
	];

	function configure($routeProvider){
		$routeProvider
		.when('/');
	}
})();