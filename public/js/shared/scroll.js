(function(){
	'use strict'
	angular.module('scroll.module', [])
	.service('scroll', scroll);

	function scroll(){
		this.down = function(elem){
			var el = getElement(elem);
			el.scrollTop = el.scrollHeight - el.offsetHeight;
		}

		this.up = function(){
			var el = getElement(elem);
			el.scrollTop = 0;
		}

		function getElement(elemString)
		{
			return angular.element(document.querySelector(elemString))[0];
		}
	}
	
})();