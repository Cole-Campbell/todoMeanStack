var Todos = require('../models/todoModel');

module.exports = function(app){

	app.get('/api/setupTodos', function(req,res){
		//seeding database
		var starterTodos = [
			{
				username: 'admin',
				todo: 'Buy Milk',
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'admin',
				todo: 'Buy Chips',
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'admin',
				todo: 'Sleep',
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'admin',
				todo: 'Code Node',
				isDone: false,
				hasAttachment: false
			},
		];
		Todos.create(starterTodos, function(err, results){
			res.send(results);
		});
	});

}