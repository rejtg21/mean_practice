(function(){
	angular.module('messenger.module')
	.service('Messenger', Messenger)
	.factory('MessengerRestAPI',MessengerRestAPI);

	Messenger.$inject = ['MessengerRestAPI'];
	MessengerRestAPI.$inject = ['$resource'];
	function Messenger(MessengerRestAPI){
		this.show = function(){
			return MessengerRestAPI.query().$promise.then(function(result){
				result = result[0];
				return result;
			});
		}

		this.save = function(data){
			return MessengerRestAPI.save(data).$promise.then(function(result){
				if(result.msg){
					alert(result.msg)
					return;
				}
				return result;
			});
		}
	}

	function MessengerRestAPI($resource) {
		var req = $resource('messenger/:id', {id : '@id'});
		return req;
	}

})();