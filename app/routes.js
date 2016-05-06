/**
*	Here you specify the list of routes use by the system
*/
(function(){
	var ctrl, filter;
	module.exports = routes;

	function init(paths){
		var paths = paths || require('config/paths')();
		ctrl = paths.controller;
		filter = paths.filter;	
	}

	function routes(app, paths){
		init(paths);
		// specify the route lists
		routeList(app);
	}

	function routeList(){
		app.get('/messenger', ctrl('MessengerController').index);

		app.post('/messenger', function(req,res){
			console.log('eyayt');
			console.log(req.body);
			db.messages.insert(req.body,function(err, doc){
				console.log(err);
				res.json(doc);
			});
		});
	}
})();