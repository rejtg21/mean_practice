(function(){
	'use strict'
	angular.module('app')
	.config(routes);

	routes.$inject = ['$routeProvider', '$locationProvider'];

	function routes($routeProvider, $locationProvider){
		$routeProvider.when('/mess', {templateUrl : 'js/messenger/messenger.html'});
		$routeProvider.otherwise('/', {templateUrl : 'js/login/login.html'});
		$routeProvider.when('/', {
			templateUrl : 'js/login/login.html',
			resolve : {
				// ocLazyLoad:['$ocLazyLoad', ]
			}
		});
		// $locationProvider.html5Mode()
	}
})();