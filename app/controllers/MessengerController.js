(function(){
	module.exports = MessengerController;
	function MessengerController(){
		
	}

	function index(req, res){
		console.log('I received a get request');
		var data = {};

		db.messages.find(function(err, docs){
			data.messages = docs;
			res.json([data]);
		});
	}

	MessengerController.prototype = {
		index: index
	}
})();