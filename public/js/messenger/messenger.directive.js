(function(){
	angular.module('messenger.module')
	.directive('msgSend',msgSend);

	msgSend.$inject = [];
	
	function msgSend(){
		return {
			link: function(scope, element, attrs){
				element.bind("keyup", function(e){
					e.preventDefault();
					if(e.which == 13)

				});
			}
		}
	}
})();