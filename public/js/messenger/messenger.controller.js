(function(){
	angular.module('messenger.module')
	.controller('MessengerCtrl', MessengerCtrl);

	MessengerCtrl.$inject = ['Messenger', 'scroll', '$timeout'];

	function MessengerCtrl(Messenger, scroll, $timeout){
		var vm = this;
		vm.messages = [];
		
		activate();

		vm.enter = function(e){
			e.preventDefault();
			if(e.keyCode == 13)
			{
				vm.send();
			}
		}

		vm.send = function(){
			var data ={
				message :vm.msg_box,
				sender_name : 'Rej'
			} 

			Messenger.save(data).then(function(result){
				if(!result)
					return;
				vm.msg_box = '';
				vm.messages.push(result);
				$timeout(function(){
					scroll.down('.chat-size');
				},50);
			});		
		}

		function activate(){
			console.log('showing message');
			show_message();
		}
		
		function show_message(){
			Messenger.show().then(function(result){
				vm.messages = vm.messages.concat(result.messages);
				$timeout(function(){
					scroll.down('.chat-size');
				},50);
			});
		}
	}

})();